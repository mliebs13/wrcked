import { NextApiRequest, NextApiResponse } from "next";
import stripe from "@src/config/stripe";
import Stripe from "stripe";
import uuid from "short-uuid";
import { add } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";
import { prisma } from "@src/lib/prisma";
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
        name: shipping?.name ?? "-",
      }));

    const now = Date.now();
    const formattedNow = formatInTimeZone(
      now,
      "America/Chicago",
      "yyyy-MM-dd HH:mm:ss zzz"
    );
    const deliveryDate = add(now, {
      days: 7,
    });

    const order = await prisma.order.create({
      data: {
        id: uuid.generate(),
        username: shipping.name,
        phone: shipping.phone,
        email: receipt_email ?? "",
        productId: metadata.id,
        productName: metadata.name,
        quantity: metadata.quantity,
        productPrice: metadata.price,
        total: amount / 100,
        country: shipping?.address?.country ?? "",
        state: shipping?.address?.state ?? "",
        city: shipping?.address?.city ?? "",
        postalCode: shipping?.address?.postal_code ?? "",
        line1: shipping?.address?.line1 ?? "",
        line2: shipping?.address?.line2 ?? "",
        deliveryDate,
      },
    });

    console.log("created order: ", order);

    const notification =
      order &&
      (await prisma.notification.create({
        data: {
          orderId: order.id,
          text: `An order was placed for '${metadata.name}' (${
            metadata.quantity
          } ${metadata.quantity <= 1 ? "unit" : "units"}) on ${formattedNow}`,
          status: "PENDING",
        },
      }));

    console.log("new notification crated: ", notification);

    /*const sendMailResult = await sendNotificationEmail({
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
    console.log("sendMailResult: ", sendMailResult);*/
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
