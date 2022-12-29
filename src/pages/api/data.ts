import { NextApiRequest, NextApiResponse } from "next";
import { mail } from "@src/lib/utils";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await mail("Wrcked Visit", "Some visited wrcked.vercel.app");
  console.log("mail result: ", result);

  res.status(200).end();
};
