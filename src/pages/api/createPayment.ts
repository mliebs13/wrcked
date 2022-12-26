import { NextApiRequest, NextApiResponse } from "next";
import groq from "groq";
import sanityClient from "@src/config/sanity";
import stripe from "@src/config/stripe";
import { getSanityImageUrl } from "@src/utils";

const createPaymentHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === "POST") {
    try {
      const { id, quantity, shipping } = req?.body ?? {};

      if (!id || !quantity || !shipping) {
        return res.status(400).json({ message: "Invalid payload" });
      }

      const productFromServer = await sanityClient.fetch(
        groq`*[_type == "product" && _id == $id][0]`,
        {
          id,
        }
      );

      if (!productFromServer) {
        return res.status(404).json({ message: "Product not found" });
      }

      const total = productFromServer.price * quantity * 100;

      const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "USD",
        payment_method_types: ["card"],
        metadata: {
          id,
          name: productFromServer.name,
          price: productFromServer.price,
          quantity,
          image: getSanityImageUrl(productFromServer.image as any),
        },
      });

      console.log(
        "payment intent: ",
        paymentIntent.client_secret,
        paymentIntent.shipping
      );

      return res.status(200).json({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (err: any) {
      console.log("error occurred creating payment: ", err.message);
      return res.status(500).json({ message: "Server error" });
    }
  } else {
    return res.status(405).end("Method Not Allowed");
  }
};

export default createPaymentHandler;
