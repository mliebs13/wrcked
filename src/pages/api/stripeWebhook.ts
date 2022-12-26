import { NextApiRequest, NextApiResponse } from "next";
import stripe from "@src/config/stripe";
import Stripe from "stripe";
import { prisma } from "@src/lib/prisma";
import axios from "@src/config/axios";
import { getBaseUrl } from "@src/utils";

const fulfillOrder = async (data: Stripe.Event.Data) => {
  try {
    const payData = data.object as any;

    const {
      id,
      amount,
      billing_details,
      payment_method_details,
      status,
      shipping,
      metadata,
    } = payData;

    console.log("processing order->", {
      id,
      amount,
      billing_details,
      shipping,
      payment_method_details,
      status,
    });

    /*const product = await stripe.products.create({
    name: metadata.name,
    description: metadata.id,
  });

  const stripePrice = await stripe.prices.create({
    unit_amount: metadata.price,
    currency,
    product: product.id,
  });

  const orderPayload = {
    currency,
    line_items: [
      {
        description: metadata.name,
        quantity: 1,
        price: stripePrice.id,
      },
    ],
    expand: ["line_items"],
    shipping_details: shipping,
    billing_details: billing_details ?? {},
    metadata: {
      total: amount / 100,
      status: status,
      city: shipping.address.city,
      country: shipping.address.country,
      state: shipping.address.state,
      receiptUrl: receipt_url,
    },
  };*/

    const order = await prisma.order.create({
      data: {
        item: `${metadata.id}, ${metadata.name}, ${metadata.price / 100}`,
        total: amount,
        shipping: `${shipping?.address?.country ?? "-"} ${
          shipping?.address?.state ?? "-"
        } ${shipping?.address?.city ?? "-"} ${
          shipping?.address?.postal_code ?? "-"
        }} ${shipping?.address?.line1 ?? "-"} ${
          shipping?.address?.line2 ?? "-"
        }`,
      },
    });

    console.log("created order: ", order);

    const notification = await prisma.notification.create({
      data: {
        text: `An order was placed for product '${
          metadata.name
        }' on ${Date.now()}`,
        status: "PENDING",
      },
    });

    console.log("new notification crated: ", notification);

    axios
      .post(`${getBaseUrl()}/api/sendNotificationMail`, {
        id: order.id,
        product: [
          {
            name: metadata?.name ?? "-",
            quantity: 1,
            price: +metadata.price,
          },
        ],
        total: amount / 100,
      })
      .then((data) => {
        const mailSendResult = data.data;

        if (mailSendResult.success) {
          console.log("success: ", mailSendResult.message);
        } else {
          console.log("email not sent: ", mailSendResult.message);
          throw new Error(mailSendResult.message);
        }
      })
      .catch((err: any) => {
        console.log("error occurred sending notification mail: ", err.message);
        throw err;
      });
  } catch (err: any) {
    console.log("error occurred fulfulling order: ", err.message);
  }
};

const webhookHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const payload = req.body;
    const payloadString = JSON.stringify(payload, null, 2);

    const sig = stripe.webhooks.generateTestHeaderString({
      payload: payloadString,
      secret: process.env.STRIPE_SECRET_KEY ?? "",
    });

    let event;

    event = stripe.webhooks.constructEvent(
      payloadString,
      sig,
      process.env.STRIPE_SECRET_KEY ?? ""
    );

    if (event.type === "payment_intent.succeeded") {
      await fulfillOrder(event.data);

      return res.status(200).end();
    }

    return res.status(200).end();
  } catch (err: any) {
    console.log("Stripe webhook error: ", err.message);

    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
};

export default webhookHandler;
