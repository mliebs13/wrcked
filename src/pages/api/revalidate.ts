import { NextApiRequest, NextApiResponse } from "next";
import { isValidRequest } from "@sanity/webhook";

const secret = process.env.SECRET_TOKEN ?? "SECRET_TOKEN";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    console.log("Must be a POST request");
    return res.status(401).json({ message: "Invalid request type" });
  }

  if (!isValidRequest(req, secret)) {
    res.status(401).json({ message: "Invalid signature" });
    return;
  }

  try {
    const {
      body: { _id },
    } = req;

    await res.revalidate(`/shop/${_id}`);

    await res.revalidate("/shop");

    return res.json({ message: `Revalidated product with id "${_id}"` });
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
}
