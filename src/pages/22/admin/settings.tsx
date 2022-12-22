import { FormEvent, ReactElement, useState } from "react";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { NextPageWithLayout } from "../../_app";
import AdminLayout from "@src/layouts/AdminLayout";
import Button from "@src/components/ui/Button";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import Spinner from "@src/components/shared/Spinner";
import Toast from "@src/components/ui/Toast";
import { ToastType } from "@src/types";

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

const Settings: NextPageWithLayout = () => {
  const {
    register,
    formState: { errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastContent, setToastContent] = useState(
    "Fix errors before submitting"
  );
  const [toastType, setToastType] = useState<ToastType>("neutral");

  const openToast = (text: string, type: ToastType = "neutral") => {
    setToastOpen(false);
    setTimeout(() => {
      setToastContent(text);
      setToastType(type);
      setToastOpen(true);
    }, 150);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (
      (!errors || (errors && (Object.keys(errors ?? {})?.length ?? 0) < 1)) &&
      (newPassword.trim()?.length ?? 0) >= 1 &&
      (username.trim()?.length >= 1 ?? 0)
    ) {
      try {
        setLoading(true);

        const editResult = (
          await axios.put("/api/editAdmin", {
            username,
            password,
            newPassword,
          })
        ).data;

        if (editResult.success && editResult.data) {
          openToast("Profile successfully updated", "success");
        } else {
          openToast(editResult?.message ?? "Failed to update profile", "error");
        }
      } catch (err: any) {
        console.log("error occurred: ", err.message);
        openToast(err?.response?.data?.message || err.message, "error");
      } finally {
        setLoading(false);
      }
    } else {
      openToast("Fill out all fields before submitting", "error");
    }
  };

  return (
    <main className="w-full min-h-[calc(100vh-95px)] bg-lightGray flex items-start">
      <Toast
        content={toastContent}
        open={toastOpen}
        setOpen={setToastOpen}
        duration={5000}
        position="bottom"
        type={toastType}
      />

      <div className="w-full flex flex-col items-center px-10 py-12 2xl:px-20">
        <h2 className="font-bold text-lg text-center mb-8">
          Edit Login Details
        </h2>
        <div className="w-full">
          <form className="w-full max-w-2xl mx-auto">
            <div className="w-full mb-5">
              <input
                placeholder="Username"
                className="w-full bg-transparent text-base text-primary border border-primary outline-none p-3"
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
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
                placeholder="Current password"
                type={passwordVisible ? "text" : "password"}
                value={password}
                className="w-full bg-transparent text-base text-primary border border-primary outline-none px-4 py-3"
                onChange={(e) => setPassword(e.target.value)}
              />

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
            <div className="relative w-full mb-4">
              <input
                placeholder="New password"
                type={newPasswordVisible ? "text" : "password"}
                value={newPassword}
                className="w-full bg-transparent text-base text-primary border border-primary outline-none p-3"
                {...(register("password", {
                  required: true,
                  onChange: (e) => {
                    setNewPassword(e.target.value);
                  },
                }) as any)}
              />

              <span className="text-sm text-danger">
                {String(errors?.password?.message ?? "")}
              </span>

              <button
                type="button"
                onClick={() => setNewPasswordVisible(!newPasswordVisible)}
                className="absolute right-4 top-[calc((100%-16px)/2)]"
              >
                {newPasswordVisible ? (
                  <EyeClosedIcon height={16} width={16} />
                ) : (
                  <EyeOpenIcon height={16} width={16} />
                )}
              </button>
            </div>
            <Button
              type="submit"
              className="w-1/2 min-w-[240px] max-w-[320px] h-14 font-bold text-base mx-auto py-4 px-3"
              onClick={handleSubmit}
            >
              {loading ? <Spinner size="sm" /> : "Edit"}
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
};

Settings.getLayout = (page: ReactElement) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Settings;
