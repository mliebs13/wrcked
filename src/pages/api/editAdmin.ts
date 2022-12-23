import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import { prisma } from "@src/lib/prisma";
import { verifyAccess } from "@src/lib/utils";

const editAdmin = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const authResult = await verifyAccess(req);

    if (!authResult.admin) {
      return res.status(401).json({
        message: "Unauthorized request",
      });
    }

    const { username, password, newPassword } = req.body;

    if (!username || !password || !newPassword) {
      return res.status(400).json("Invalid payload");
    }

    const passwordIsCorrect = await bcrypt.compare(
      password,
      authResult?.admin?.password ?? ""
    );
    if (!passwordIsCorrect) {
      return res.status(401).json({
        message: "Incorrect login details",
      });
    }

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    const admin = await prisma.admin.update({
      where: {
        id: authResult?.admin?.id,
      },
      data: {
        username,
        password: hashedPassword,
      },
    });

    console.log("new admin: ", admin);

    if (admin) {
      return res.status(200).json({
        success: true,
        data: { admin },
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Failed to edit profile",
      });
    }
  } catch (err: any) {
    console.log("error occurred: ", err.message);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

export default editAdmin;
