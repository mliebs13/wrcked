import { verifyAccess } from "@src/lib/utils";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const email = req.query?.email?.toString();

    const authResult = await verifyAccess(req);

    if (!authResult.admin && !email) {
      return res.status(401).json({
        message: "Incorrect details",
      });
    }

    const id = req.query?.id?.toString();

    console.log("id: ", id);

    if (!id) {
      return res.status(400).json({
        message: "Invalid payload",
      });
    }

    if (req.method === "GET") {
      const order = await prisma.order.findUnique({
        where: {
          id,
        },
      });

      if (email && order?.email !== email) {
        return res.status(401).json({
          message: "Incorrect details",
        });
      }

      console.log("order: ", order);

      if (order) {
        return res.status(200).json({ order });
      } else {
        return res.status(404).json({ message: "Order not found" });
      }
    } else {
      const payload = req.body;

      const updatedOrder = await prisma.order.update({
        where: {
          id,
        },
        data: payload,
      });

      console.log("updated order: ", updatedOrder);

      if (updatedOrder) {
        return res.status(200).json({ success: true, ...payload });
      } else {
        return res
          .status(404)
          .json({ message: "Order not found", success: false });
      }
    }
  } catch (err: any) {
    console.log("error occurred: ", err.message);
    res.status(500).json({
      message: "Server error",
    });
  }
};

export default handler;
