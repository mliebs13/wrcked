import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { handleLogin } from "@src/lib/utils";

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const secretKey = process.env.KEY ?? "secret";
    const { username, password } = req.body;

    const result = await handleLogin({ username, password });

    if (result.admin) {
      const { id, createdAt } = result.admin;
      const token = jwt.sign({ id, username, createdAt }, secretKey, {
        expiresIn: 31556926,
      });

      return res.status(200).json({
        success: true,
        token: `Bearer ${token}`,
      });
    } else {
      return res.status(result.status).json({
        success: false,
        message: result?.message ?? "An error occurred",
      });
    }
  } catch (err: any) {
    console.log("login error occurred: ", err.message);

    return res.status(500).json({ success: false, message: "Server error" });
  }
};

export default login;
