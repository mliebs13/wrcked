import { FormEvent, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie";
import classNames from "classnames";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { NextPageWithLayout } from "../../_app";
import Button from "@src/components/ui/Button";
import Spinner from "@src/components/shared/Spinner";
import Toast from "@src/components/ui/Toast";
import { ToastType } from "@src/types";
import { spaceMono } from "@src/config/fonts";

const schema = yup.object().shape({
  name: yup
    .string()
    .min(4, "Username must contain at least 4 characters")
    .required("Username is required"),
  password: yup
    .string()
    .min(8, "Password must contain at least 8 characters")
    .required("Password is required"),
});

const Login: NextPageWithLayout = () => {
  const router = useRouter();
  const {
    register,
    formState: { errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastContent, setToastContent] = useState("");
  const [toastType, setToastType] = useState<ToastType>("neutral");

  const openToast = (text: string, type: ToastType) => {
    setToastOpen(false);
    setTimeout(() => {
      setToastType(type);
      setToastContent(text);
      setToastOpen(true);
    }, 150);
  };

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    if (
      Object.keys(errors).length < 1 &&
      password.trim().length >= 1 &&
      username.trim().length >= 1
    ) {
      try {
        setLoading(true);
        const loginResult = (
          await axios.post("/api/login", {
            username,
            password,
          })
        ).data;
        setLoading(false);

        if (loginResult.success && loginResult.token) {
          Cookies.set("wrcked-a-t", loginResult.token);
          router.push("/22/admin");
        } else {
          openToast(loginResult.message, "success");
        }
      } catch (err: any) {
        setLoading(false);
        openToast(err?.response?.data?.message || err.message, "error");
        console.log("an error occurred: ", err.message);
      }
    } else {
      openToast("Fill out all fields before submitting", "error");
    }
  };

  return (
    <main
      className={classNames(
        "relative w-full min-h-screen bg-lightGray text-primary flex items-start",
        spaceMono.className
      )}
    >
      <Head>
        <title>Admin - Login</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="description" content="Admin - Login" />
      </Head>

      <div className="relative w-full flex flex-col items-center px-3 sm:px-10 py-12 sm:py-16 2xl:px-20">
        <Toast
          open={toastOpen}
          setOpen={setToastOpen}
          duration={5000}
          content={toastContent}
          position="bottom"
          type={toastType}
        />

        <h2 className="font-bold text-lg text-center mb-6">Login</h2>
        <div className="w-full">
          <form className="w-full max-w-xl mx-auto">
            <div className="w-full mb-5">
              <input
                placeholder="Username"
                className="w-full bg-transparent text-base text-primary border border-primary outline-none p-3"
                type="text"
                value={username}
                onChange={() => {
                  setUsername(username);
                }}
                {...(register("name", {
                  required: true,
                  onChange: (e) => {
                    setUsername(e.target.value);
                  },
                }) as any)}
              />
              {
                <span className="text-sm text-danger">
                  {String(errors?.name?.message ?? "")}
                </span>
              }
            </div>
            <div className="relative w-full mb-5">
              <input
                placeholder="Password"
                type={passwordVisible ? "text" : "password"}
                value={password}
                className="w-full bg-transparent text-base text-primary border border-primary outline-none px-4 py-3"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="text-sm text-danger">
                {String(errors?.password?.message ?? "")}
              </span>

              <button
                type="button"
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="absolute right-4 top-[calc((100%-16px)/2)]"
              >
                {passwordVisible ? (
                  <EyeClosedIcon height={16} width={16} />
                ) : (
                  <EyeOpenIcon height={16} width={16} />
                )}
              </button>
            </div>
            <Button
              type="submit"
              className="w-1/2 min-w-[240px] max-w-[320px] h-14 font-bold text-base mx-auto py-4 px-3"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? <Spinner size="md" /> : "Login"}
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
