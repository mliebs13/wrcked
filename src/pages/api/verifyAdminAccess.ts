import { NextApiRequest, NextApiResponse } from "next";
import { verifyAccess } from "@src/lib/utils";

const verifyAdminAccess = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const result = await verifyAccess(req);

    if (result.admin) {
      return res.status(200).json(result);
    } else {
      return res.status(result.status).json({
        message: result.message ?? "An error occurred",
      });
    }
  } catch (err: any) {
    console.log("error occurred: ", err.message);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export default verifyAdminAccess;
