import { NextApiRequest, NextApiResponse } from "next";
import stripe from "@src/config/stripe";
import Stripe from "stripe";
import { prisma } from "@src/lib/prisma";
import { orderShippingDelimeter, orderItemDelimeter } from "@src/utils";
import { sendNotificationEmail } from "@src/lib/utils";

const fulfillOrder = async (data: Stripe.Event.Data) => {
  try {
    const payData = data.object as any;
    console.log("data.object: ", data.object);
    const {
      id,
      amount,
      billing_details,
      payment_method_details,
      status,
      shipping,
      metadata,
      receipt_email,
    } = payData;

    console.log("processing order->", {
      id,
      amount,
      billing_details,
      shipping,
      payment_method_details,
      status,
      receipt_email,
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

    receipt_email &&
      (await stripe.customers.create({
        email: receipt_email,
        description: "Wrcked Customer",
        name: shipping?.name ?? "",
      }));

    const order = await prisma.order.create({
      data: {
        username: shipping.name,
        phone: shipping.phone,
        email: receipt_email ?? "",
        item: `${metadata.id}${orderItemDelimeter}${metadata.name}${orderItemDelimeter}${metadata.quantity}${orderItemDelimeter}${metadata.price}`,
        total: amount / 100,
        shipping: `${
          shipping?.address?.country ?? "-"
        }${orderShippingDelimeter}${
          shipping?.address?.state ?? "-"
        }${orderShippingDelimeter}${
          shipping?.address?.city ?? "-"
        }${orderShippingDelimeter}${
          shipping?.address?.postal_code ?? "-"
        }${orderShippingDelimeter}${
          shipping?.address?.line1 ?? "-"
        }${orderShippingDelimeter}${shipping?.address?.line2 ?? "-"}`,
      },
    });

    console.log("created order: ", order);

    const now = new Date();
    const notification =
      order &&
      (await prisma.notification.create({
        data: {
          orderId: order.id,
          text: `An order was placed for '${metadata.name}' x${
            metadata.quantity
          } on ${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`,
          status: "PENDING",
        },
      }));

    console.log("new notification crated: ", notification);

    const sendMailResult = await sendNotificationEmail({
      id: order.id,
      products: [
        {
          name: metadata.name,
          price: metadata.price,
          quantity: metadata.quantity,
          image: metadata.image,
        },
      ],
      total: String(amount / 100),
    });
    console.log("sendMailResult: ", sendMailResult);
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
