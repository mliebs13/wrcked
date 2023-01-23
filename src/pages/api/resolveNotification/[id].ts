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
      return res.status(400).json({
        message: "Invalid payload",
      });
    }

    const updatedNotif = await prisma.notification.update({
      where: {
        id,
      },
      data: {
        status: "RESOLVED",
      },
    });

    console.log("updated notif: ", updatedNotif);

    if (updatedNotif) {
      return res.status(200).json(updatedNotif);
    } else {
      return res
        .status(500)
        .json({ message: "Failed to update noification", success: false });
    }
  } catch (err: any) {
    console.log("error occurred: ", err.message);
    res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};

export default handleResolveNotif;
