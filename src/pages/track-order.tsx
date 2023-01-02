import { NextPage } from "next";
import Head from "next/head";
import { spaceMono } from "@src/config/fonts";
import { FormEvent, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { add } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";
import { Order } from "@prisma/client";
import CheckoutHeader from "@components/checkout/CheckoutHeader";
import Button from "@src/components/ui/Button";
import Spinner from "@src/components/shared/Spinner";
import Toast from "@components/ui/Toast";
import { ToastType } from "@src/types";
import axios from "@src/config/axios";

const schema = yup.object().shape({
  orderId: yup
    .string()
    .min(5, "Order ID must contain at least 5 characters")
    .required("Order ID required"),
  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      "Your email is not valid"
    )
    .required("Email is required"),
});

const TrackOrder: NextPage = () => {
  const {
    register,
    formState: { errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });
  const [orderDetails, setOrderDetails] = useState<Order | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState<string>("");
  const [orderId, setOrderId] = useState<string>("");
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

  const fetchOrderInfo = async (e: FormEvent) => {
    e.preventDefault();

    console.log("errors: ", errors);

    if (
      email !== "" &&
      orderId !== "" &&
      (!errors || (errors && (Object.keys(errors ?? {})?.length ?? 0) < 1))
    ) {
      try {
        error && setError(null);
        setLoading(true);

        const { data } = await axios.get(
          `/api/orders/${orderId}?email=${email}`
        );

        console.log("data: ", data);

        if (data.order) {
          setOrderDetails(data.order);
        } else {
          const error = data?.message ?? "Failed to fetch order details";
          openToast(error, "error");
        }
      } catch (err: any) {
        const error = err.message ?? "An error occurred";
        openToast(error, "error");
      } finally {
        setLoading(false);
      }
    } else {
      openToast(
        email === "" || orderId === ""
          ? "Fill out all fields before submitting"
          : Object.values(errors)[0]?.message ??
              "Fix all errors before submitting",
        "error"
      );
    }
  };

  const dispatchedBg = orderDetails?.status !== "PENDING" ? "primary" : "gray";
  const deliveredBg = orderDetails?.status === "DELIVERED" ? "primary" : "gray";

  return (
    <main
      className={classNames(
        spaceMono.className,
        "w-full h-fit min-h-screen flex flex-col items-center bg-gray text-primary py-12 px-3 sm:px-10 2xl:px-20"
      )}
    >
      <Head>
        <title>Track Order - Wrcked</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="description" content="Checkout" />
      </Head>

      <Toast
        open={toastOpen}
        setOpen={setToastOpen}
        duration={10000}
        content={toastContent}
        position="bottom"
        type={toastType}
      />

      <CheckoutHeader text="TRACK ORDER" />

      <div className="bg-secondary w-full h-fit max-w-2xl rounded-lg shadow-sm">
        <div className="w-full max-w-xl mb-6 flex flex-col mx-auto px-4 py-6">
          <h2 className="mb-4 text-base text-primary">ENTER ORDER DETAILS</h2>
          <form className="w-full flex flex-col" onSubmit={fetchOrderInfo}>
            <div className="w-full mb-4">
              <input
                type="text"
                placeholder="Your email"
                value={email}
                {...(register("email", {
                  required: true,
                  onChange: (e) => {
                    setEmail(e.target.value.trim());
                  },
                }) as any)}
                className="w-full text-sm text-primary bg-transparent font-normal border border-primary outline-none p-3 mb-1"
              />
              <span className="text-sm text-danger">
                {String(errors?.email?.message ?? "")}
              </span>
            </div>
            <div className="w-full mb-4">
              <input
                type="text"
                placeholder="Your order ID"
                value={orderId}
                {...(register("orderId", {
                  required: true,
                  onChange: (e) => {
                    setOrderId(e.target.value.trim());
                  },
                }) as any)}
                className="w-full text-sm text-primary bg-transparent font-normal border border-primary outline-none p-3 mb-1"
              />
              <span className="text-sm text-danger">
                {String(errors?.orderId?.message ?? "")}
              </span>
            </div>
            <Button
              type="submit"
              className="min-h-[56px] font-bold text-sm text-primary tracking-wide px-6 py-4"
              disabled={loading}
            >
              {loading ? <Spinner size="md" /> : "GET ORDER DETAILS"}
            </Button>
          </form>
        </div>

        {loading ||
          (error && (
            <div className="py-4">
              {loading ? (
                <Spinner size="md" />
              ) : (
                <p className="text-sm font-bold text-danger">{error}</p>
              )}
            </div>
          ))}

        {orderDetails && !loading && !error && (
          <div className="w-full max-w-xl mb-6 flex flex-col mx-auto px-4 py-6">
            <h2 className="text-base text-primary mb-6">
              ORDER INFO - {orderDetails.id}
            </h2>
            <div className="w-full flex items-start mb-6">
              <div
                className={classNames(
                  "relative w-1/2 text-primary text-sm tracking-wide pt-4",
                  `after:absolute after:top-0 after:left-0 after:w-3 after:h-3 after:bg-primary after:rounded-full`,
                  `before:absolute before:top-[4px] before:left-3 before:h-1 before:w-full before:bg-${dispatchedBg}`,
                  {
                    "font-bold": orderDetails.status === "PENDING",
                  }
                )}
              >
                PENDING
              </div>
              <div
                className={classNames(
                  "relative w-1/2 text-primary text-sm tracking-wide pt-4",
                  `after:absolute after:top-0 after:left-0 after:w-3 after:h-3 after:bg-${dispatchedBg} after:rounded-full`,
                  `before:absolute before:top-[4px] before:left-3 before:h-1 before:w-full before:bg-${deliveredBg}`,
                  {
                    "font-bold": orderDetails.status === "DISPATCHED",
                  }
                )}
              >
                DISPATCHED
              </div>
              <div
                className={classNames(
                  "relative text-primary text-sm tracking-wide pt-4",
                  `after:absolute after:top-0 after:left-0 after:w-3 after:h-3 after:bg-${deliveredBg} after:rounded-full`,
                  {
                    "font-bold": orderDetails.status === "DELIVERED",
                  }
                )}
              >
                DELIVERED
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-base text-primary mb-2">DELIVERY ADDRESS</h2>
              <p className="text-sm text-primary">{`${orderDetails.country}, ${
                orderDetails.state
              }, ${orderDetails.city}, ${orderDetails.postalCode}, ${
                orderDetails.line1
              }${orderDetails?.line2 ? " ," + orderDetails.line2 : ""}`}</p>
            </div>

            <div className="mb-6">
              <h2 className="text-base text-primary mb-2">
                ESTIMATED DELIVERY DATE
              </h2>
              <span className="text-sm text-primary">
                {formatInTimeZone(
                  orderDetails.deliveryDate,
                  "America/Chicago",
                  "yyyy-MM-dd zzz"
                )}
              </span>
              <span> - </span>
              <span className="text-sm text-primary">
                {formatInTimeZone(
                  add(new Date(orderDetails.deliveryDate), {
                    days: 3,
                  }),
                  "America/Chicago",
                  "yyyy-MM-dd zzz"
                )}
              </span>
            </div>

            <div className="mb-6">
              <h2 className="text-base text-primary mb-2">ORDER ITEMS</h2>
              <ul>
                <li className="text-sm text-primary">
                  <p className="mb-1">{orderDetails.productName}</p>
                  <p>
                    {orderDetails.quantity}{" "}
                    {+orderDetails.quantity <= 1 ? "unit" : "units"}
                  </p>
                </li>
              </ul>
              <div></div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default TrackOrder;
