import { verifyAccess } from "@src/lib/utils";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

const handleGetNotificationsCount = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const authResult = await verifyAccess(req);

    if (!authResult.admin) {
      return res.status(401).json({
        message: "Unauthorized request",
      });
    }

    const { status = "all" } = req.body;

    if (status !== "" && status !== "PENDING" && status !== "RESOLVED") {
      return res.status(400).json({ message: "Invalid payload" });
    }

    const total = await prisma.notification.count({
      where:
        status === ""
          ? {}
          : {
              status,
            },
    });

    return res.status(200).json({ count: total });
  } catch (err: any) {
    console.log("error occurred: ", err.message);
    res.status(500).json({
      message: "Server error",
    });
  }
};

export default handleGetNotificationsCount;
