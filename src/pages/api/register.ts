import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@src/lib/prisma";
import bcrypt from "bcrypt";

const register = async (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(401).json({
    message: "Unauthorized request",
  });

  const { username, password } = req.body;

  if (!password || !username) {
    return res.status(400).json({
      success: false,
      message: "Invalid payload",
    });
  }

  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const admin = await prisma.admin.create({
      data: {
        username,
        password: hashedPassword,
      },
    });

    if (admin) {
      const resAdmin: any = { ...admin };
      delete resAdmin?.password;

      return res.status(200).json({
        data: resAdmin,
      });
    }
  } catch (err: any) {
    console.log("error occurred: ", err.message);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

export default register;
