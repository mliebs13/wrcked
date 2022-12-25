import { NextApiRequest, NextApiResponse } from "next";
import groq from "groq";
import sanityClient from "@src/config/sanity";
import stripe from "@src/config/stripe";

const createPaymentHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === "POST") {
    try {
      const { id, quantity } = req?.body ?? {};

      if (!id || !quantity) {
        res.status(400).json({ message: "Invalid payload" });
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

      const total = productFromServer.price * quantity;

      const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "USD",
        payment_method_types: ["card"],
      });

      return res.status(200).json({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (err: any) {
      console.log("error occurred creating payment: ", err.message);
      return res.status(500).json({ message: "Server error" });
    }
  } else {
    res.setHeader("Allow", "POST");
    return res.status(405).end("Method Not Allowed");
  }
};

export default createPaymentHandler;
