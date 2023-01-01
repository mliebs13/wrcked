import { verifyAccess } from "@src/lib/utils";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

const handleGetOrders = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const authResult = await verifyAccess(req);

    if (!authResult.admin) {
      return res.status(401).json({
        message: "Unauthorized request",
      });
    }

    const { status, page } = req.body;

    if (!["", "PENDING", "DISPATCHED", "DELIVERED"].includes(status) || !page) {
      return res.status(400).json({
        message: "Invalid payload",
      });
    }

    const where: any =
      status === ""
        ? { where: {} }
        : {
            where: {
              status: status,
            },
          };

    const orders = await prisma.order.findMany({
      skip: (page - 1) * 10,
      take: 10,
      orderBy: {
        createdAt: "desc",
      },
      ...where,
    });

    console.log("orders: ", orders);

    const total = await prisma.order.count({
      ...where,
    });

    if (orders) {
      return res.status(200).json({ orders, total });
    } else {
      return res.status(500).json({ message: "Failed to retrieve orders" });
    }
  } catch (err: any) {
    console.log("error occurred: ", err.message);
    res.status(500).json({
      message: "Server error",
    });
  }
};

export default handleGetOrders;
