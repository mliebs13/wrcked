import { NextApiRequest, NextApiResponse } from "next";
import stripe from "@src/config/stripe";
import Stripe from "stripe";
import uuid from "short-uuid";
import { add, intlFormat } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";
import { prisma } from "@src/lib/prisma";
import { sendMail } from "@src/lib/utils";
import orderNotification from "@src/templates/orderNotification";
import { formatPrice } from "@src/utils";
import orderSummary2 from "@src/templates/orderSummary2";

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

    const customer = await stripe.customers.search({
      query: `email:"${receipt_email}"`,
    });

    receipt_email &&
      customer.data.length < 1 &&
      (await stripe.customers.create({
        email: receipt_email,
        description: "Wrcked Customer",
        name: shipping?.name ?? "-",
      }));

    const now = Date.now();
    const formattedNow = formatInTimeZone(
      now,
      "America/New_York",
      "yyyy-MM-dd HH:mm:ss zzz"
    );
    const deliveryDate = add(now, {
      days: 7,
    });

    const orderId = uuid.generate();
    const order = await prisma.order.create({
      data: {
        id: orderId,
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

    order &&
      (await prisma.notification.create({
        data: {
          orderId: orderId,
          text: `An order was placed for '${metadata.name}' (${
            metadata.quantity
          } ${metadata.quantity <= 1 ? "unit" : "units"}) on ${formattedNow}`,
          status: "PENDING",
        },
      }));

    // order notification
    const notifPayload = {
      to: "art@wrcked.com",
      subject: "New Order - Wrcked",
      html: orderNotification(
        orderId,
        `${intlFormat(
          new Date(),
          {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            timeZone: "America/New_York",
            timeZoneName: "short",
          },
          {
            locale: "en-US",
          }
        )}`,
        metadata.name,
        metadata.image,
        metadata.quantity,
        formatPrice(+metadata.price),
        formatPrice(+amount / 100)
      ),
    };
    await sendMail(notifPayload);

    // order summary
    const summaryPayload = {
      from: "art@wrcked.com",
      to: receipt_email,
      pass: process.env.EMAIL_PASS,
      subject: "Order Summary - Wrcked",
      html: /*
      orderSummary(
        shipping.name,
        receipt_email,
        orderId,
        `${intlFormat(
          new Date(),
          {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            timeZone: "America/New_York",
            timeZoneName: "short",
          },
          {
            locale: "en-US",
          }
        )}`,
      */ orderSummary2(
        receipt_email,
        orderId,
        formatPrice(+amount / 100),
        metadata.name,
        formatPrice(+metadata.price),
        metadata.quantity,
        shipping?.address?.line1 ?? "",
        shipping?.address?.city ?? "",
        shipping?.address?.state ?? "",
        shipping?.address?.country ?? "",
        shipping?.address?.postal_code ?? "",
        metadata.image
      ),
    };
    await sendMail(summaryPayload);
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
