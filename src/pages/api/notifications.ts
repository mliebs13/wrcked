import { verifyAccess } from "@src/lib/utils";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

const handleGetNotifications = async (
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

    const { status = "" } = req.body;

    console.log("status: ", status);

    if (status !== "" && status !== "PENDING" && status !== "RESOLVED") {
      console.log(400);
      return res.status(400).json({ message: "Invalid payload" });
    }

    const select =
      status === ""
        ? {}
        : {
            status: status,
          };

    const total = await prisma.notification.count({
      where: select,
    });

    const notifications = await prisma.notification.findMany({
      // take: 10,
      where: select,
    });

    console.log("notifs: ", notifications, notifications !== null);

    if (notifications !== null) {
      return res.status(200).json({ notifications, total });
    } else {
      return res
        .status(500)
        .json({ message: "Failed to retrieve notifications" });
    }
  } catch (err: any) {
    console.log("error occurred: ", err.message);
    res.status(500).json({
      message: "Server error",
    });
  }
};

export default handleGetNotifications;
