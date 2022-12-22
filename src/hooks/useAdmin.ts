import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "../config/axios";

const useAdmin = (redirect: boolean = true) => {
  const [result, setResult] = useState<{
    message?: string;
    admin?: any;
  } | null>(null);
  const router = useRouter();

  useEffect(() => {
    axios
      .get("/api/verifyAdminAccess")
      .then(({ data: { message, admin } }: any) => {
        admin
          ? redirect
            ? router.push("/22/admin")
            : ""
          : redirect
          ? router.push("/22/admin/login")
          : "";

        setResult({ message, admin });
      })
      .catch((err) => {
        console.log("error occurred: ", err);
        redirect
          ? router.push("/22/admin/login")
          : setResult({
              message: err.message || err?.response?.data,
            });
      });
  }, []);

  return result;
};

export default useAdmin;
