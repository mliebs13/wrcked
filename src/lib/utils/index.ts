import { NextApiRequest } from "next";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../../lib/prisma";
import { Admin } from "@prisma/client";

export type LoginResult = {
  admin?: Partial<Admin>;
  message?: string;
  status: number;
};

export type VerifyAccessResult = {
  admin?: Partial<Admin>;
  message?: string;
  status: number;
};

export const handleLogin = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}): Promise<LoginResult> => {
  const admin = await prisma.admin.findFirst({
    where: {
      username,
    },
  });

  if (!admin) {
    console.log("no admin");

    return {
      message: "Incorrect login details",
      status: 401,
    };
  }

  const passwordMatch = await bcrypt.compare(password, admin.password);
  if (!passwordMatch) {
    return {
      message: "Incorrect login details",
      status: 401,
    };
  }

  return {
    admin,
    status: 200,
  };
};

export const verifyAccess = async (
  req: NextApiRequest
): Promise<VerifyAccessResult> => {
  const secretKey = process.env.JWT_KEY || "secret";

  try {
    const token =
      req.cookies["wrcked-a-t"] && req.cookies["wrcked-a-t"].split(" ")[1];

    if (!token) {
      return {
        message: "No authorization token was found",
        status: 400,
      };
    }

    const jwtPayload = jwt.verify(token, secretKey);
    const admin = await prisma.admin.findFirst();

    if (typeof jwtPayload !== "string" && jwtPayload?.id === admin?.id) {
      const resAdmin = { ...admin };
      // delete resAdmin?.password;

      return {
        admin: resAdmin,
        status: 200,
      };
    }

    return {
      message: "Unauthorized request",
      status: 401,
    };
  } catch (err: any) {
    console.log("error occurred:", err.message);
    throw err;
  }
};
