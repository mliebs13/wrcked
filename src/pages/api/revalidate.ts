import { NextApiRequest, NextApiResponse } from "next";
import groq from "groq";
import sanityClient from "@src/config/sanity";

const secret = process.env.SECRET_TOKEN ?? "SECRET_TOKEN";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    console.log("Must be a POST request");
    return res.status(400).json({ message: "Invalid request type" });
  }

  const signature = String(req.headers?.["sanity-webhook-signature"]).split(
    ","
  )[0];

  if (signature !== secret) {
    return res.status(401).json({
      message: `Invalid signature ${signature} ${secret}`,
    });
  }

  if (!req.body?._id) {
    return res.status(400).json("Invalid payload");
  }

  try {
    const {
      body: { _id },
    } = req;

    console.log("_id: ", _id);

    let products: { _id: string }[] = await sanityClient.fetch(
      groq`*[_type == "product"] | order(_createdAt asc){_id}`
    );

    console.log("products revalidate: ", products);

    try {
      await res.revalidate(`/shop/${_id}`);
    } catch (err: any) {
      console.log("error occurred: ", err.message);
    }

    try {
      await res.revalidate(`/checkout/${_id}`);
    } catch (err: any) {
      console.log("error occurred: ", err.message);
    }

    try {
      await res.revalidate(`/checkout-success/${_id}`);
    } catch (err: any) {
      console.log("error occurred: ", err.message);
    }

    for (let i = 0; i < products.length; i++) {
      try {
        await res.revalidate(`/shop/${products[i]._id}`);
      } catch (err: any) {
        console.log("error occurred: ", err.message);
      }
    }

    await res.revalidate("/shop/all");

    return res.json({ message: `Revalidated product with id "${_id}"` });
  } catch (err: any) {
    console.log("error occurred: ", err.message);
    return res.status(500).send("Error revalidating");
  }
};

export default handler;
