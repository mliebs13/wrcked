import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import orderNotification from "@src/templates/orderNotification";

const sendMailHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, products: orderedProducts, total } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      service: "gmail",
      auth: {
        user: "bchikezie20@gmail.com",
        pass: "meister231",
      },
    });

    const dateNow = new Date(Date.now());

    const result = await transporter.sendMail({
      from: "bchikezie20@gmail.com",
      to: "wrcked22@gmail.com",
      subject: "New Order",
      html: orderNotification(
        id,
        `${dateNow.toString().split(" ").splice(0, 3).join(" ")}`,
        orderedProducts,
        total
      ),
    });

    if (result.rejected.length >= 1) {
      console.log("Failed to send email");

      return res.status(500).json({
        success: false,
        message: "Failed to send email",
      });
    } else {
      console.log("email sent successfully");

      return res.status(200).json({
        success: true,
        message: "Notification email sent succcessfully",
      });
    }
  } catch (err: any) {
    console.log("error occurred:", err.message);

    res.status(500).json({
      message: err.message.includes("network")
        ? "Server error"
        : "Server error",
    });
  }
};

export default sendMailHandler;
