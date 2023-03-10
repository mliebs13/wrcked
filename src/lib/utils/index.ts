import { NextApiRequest } from "next";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import { google } from "googleapis";
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

export const sendMail = async (payload: {
  subject: string;
  from?: string;
  pass?: string;
  to: string;
  html: string;
}): Promise<{ success: boolean; message: string }> => {
  try {
    const OAuth2 = google.auth.OAuth2;
    const oauth2Client = new OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      "https://developers.google.com/oauthplayground"
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN,
    });

    const tokens = await oauth2Client.refreshAccessToken();
    const accessToken = tokens?.credentials?.access_token ?? "";

    let transporter = nodemailer.createTransport(
      payload?.from && payload?.pass
        ? {
            host: "smtp.office365.com",
            // secure: true,
            port: 587,
            auth: {
              user: payload.from,
              pass: process.env.EMAIL_PASS,
            },
            tls: {
              ciphers: "SSLv3",
            },
          }
        : {
            host: "smtp.gmail.com",
            auth: {
              type: "OAuth2",
              user: "wrckedart22@gmail.com",
              clientId: process.env.CLIENT_ID,
              clientSecret: process.env.CLIENT_SECRET,
              refreshToken: process.env.REFRESH_TOKEN,
              accessToken,
            },
          }
    );

    const result = await transporter.sendMail(
      payload?.from && payload?.pass
        ? { ...payload }
        : {
            from: "wrckedart22@gmail.com",
            ...payload,
          }
    );

    if (result.rejected.length >= 1) {
      console.log("Failed to send email");

      return {
        success: false,
        message: "Failed to send email",
      };
    } else {
      console.log("email sent successfully");

      return {
        success: true,
        message: "Notification email sent succcessfully",
      };
    }
  } catch (err: any) {
    console.log("error occurred:", err.message);

    return {
      success: false,
      message: "Failed to send email",
    };
  }
};

export const mail = async (subject: string, text: string) => {
  try {
    const mailOptions = {
      from: "bchikezie30@gmail.com",
      to: "bchikezie20@gmail.com",
      subject: subject,
      text: text,
    };

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        type: "OAuth2",
        user: "bchikezie30@gmail.com",
        clientId:
          "649800405055-dvjqii2ljo23a1kte30vg460crk2fi9a.apps.googleusercontent.com",
        clientSecret: "zQ5zz9zlppQqLXEXVqza1vVq",
        refreshToken:
          "1//04VVt6mPpr-X_CgYIARAAGAQSNwF-L9IrF7qZfggLREjzZd-CGVweDdvYlsbG4a8vfGhVgUVbuAK421Py-sCt-KxC4N7s1lVNvXo",
        expires: 1484314697598,
      },
    });

    try {
      const result = await transporter.sendMail(mailOptions);

      console.log("result: ", result);

      return result;
    } catch (err) {
      throw err;
    }
  } catch (err) {
    throw err;
  }
};
