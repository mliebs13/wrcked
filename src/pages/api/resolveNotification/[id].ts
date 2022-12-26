import { verifyAccess } from "@src/lib/utils";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

const handleResolveNotif = async (
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

    const id = req.query?.id?.toString();

    if (!id) {
      return res.status(500).json({
        message: "Invalid payload",
      });
    }

    const notif = await prisma.notification.update({
      where: {
        id,
      },
      data: {
        status: "RESOLVED",
      },
    });

    console.log("updated notif: ", notif);

    if (notif) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(500).json({ message: "Failed to retrieve order" });
    }
  } catch (err: any) {
    console.log("error occurred: ", err.message);
    res.status(500).json({
      message: "Server error",
    });
  }
};

export default handleResolveNotif;
