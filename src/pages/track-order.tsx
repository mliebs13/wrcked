import { useEffect, useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { add, intlFormat } from "date-fns";
import { spaceMono } from "@src/config/fonts";
import { Order } from "@prisma/client";
import CheckoutHeader from "@components/checkout/CheckoutHeader";
import Button from "@src/components/ui/Button";
import Spinner from "@src/components/shared/Spinner";
import Toast from "@components/ui/Toast";
import axios from "@src/config/axios";
import useToast from "@src/hooks/useToast";

const schema = yup.object().shape({
  orderId: yup
    .string()
    .min(5, "Order ID must contain at least 5 characters")
    .required("Order ID required"),
  email: yup
    .string()
    .email("Your email is not valid")
    .required("Email is required"),
});

const TrackOrder: NextPage = () => {
  const {
    register,
    formState: { errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });
  const router = useRouter();
  const [orderDetails, setOrderDetails] = useState<Order | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState<string>("");
  const [orderId, setOrderId] = useState<string>("");
  const { openToast, toastContent, setOpen, open, toastType } = useToast();

  useEffect(() => {
    const { email, orderId } = router.query;
    email && setEmail(email.toString());
    orderId && setOrderId(orderId.toString());

    email && orderId && fetchOrderInfo(email.toString(), orderId.toString());
  }, [router.query]);

  const fetchOrderInfo = async (queryEmail?: string, queryOrderId?: string) => {
    console.log("errors: ", errors);

    const emailPayload = email === "" ? queryEmail : email;
    const orderIdPayload = orderId === "" ? queryOrderId : orderId;

    if (
      !!emailPayload &&
      !!orderIdPayload &&
      (!errors || (errors && (Object.keys(errors ?? {})?.length ?? 0) < 1))
    ) {
      try {
        error && setError(null);
        setLoading(true);

        const { data } = await axios.get(
          `/api/orders/${orderIdPayload}?email=${emailPayload}`
        );

        console.log("data: ", data);

        if (data.order) {
          setOrderDetails(data.order);
        } else {
          const message = data?.message ?? "Failed to fetch order details";

          openToast(message, "error");

          setError(message);
        }
      } catch (err: any) {
        const message =
          err?.response?.data?.message ?? err?.message ?? "An error occurred";

        console.log("error occurred: ", message);

        openToast(message, "error");

        setError(message);
      } finally {
        setLoading(false);
      }
    } else {
      openToast(
        emailPayload === "" || orderIdPayload === ""
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
        <meta name="description" content="Track Order - Wrcked" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="page-topic" content="Track Order" />
        <meta name="page-type" content="Track Order" />
        <meta name="audience" content="Everyone" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.wrcked.com/" />
        <meta name="publisher" content="Wrcked" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Wrcked" />
        <meta property="og:url" content="https://www.wrcked.com/" />
        <meta property="og:title" content="Track Order - Wrcked" />
        <meta property="og:description" content="Track Order - Wrcked" />
        {/* <meta property="og:image" content="https://wrcked/wrcked-banner.png/" /> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.wrcked.com/" />
        <meta property="twitter:title" content="Track Order - Wrcked" />
        <meta property="twitter:description" content="Track Order - Wrcked" />
        {/* <meta
          property="twitter:image"
          content="https://wrcked.com/wrcked-banner.png/"
        /> */}
      </Head>

      <Toast
        open={open}
        setOpen={setOpen}
        duration={10000}
        content={toastContent}
        position="bottom"
        type={toastType}
      />

      <CheckoutHeader text="TRACK ORDER" />

      <div className="bg-secondary w-full h-fit max-w-2xl rounded-lg shadow-sm px-4 py-8">
        <div className="w-full max-w-xl flex flex-col mx-auto mb-8">
          <h2 className="mb-4 text-base text-primary">ENTER DETAILS</h2>
          <form
            className="w-full flex flex-col"
            onSubmit={async (e) => {
              e.preventDefault();

              await fetchOrderInfo();
            }}
          >
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
                className="w-full text-base text-primary bg-transparent font-normal border border-primary outline-none p-3 mb-1"
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
                className="w-full text-base text-primary bg-transparent font-normal border border-primary outline-none p-3 mb-1"
              />
              <span className="text-sm text-danger">
                {String(errors?.orderId?.message ?? "")}
              </span>
            </div>
            <Button
              type="submit"
              className="min-h-[56px] font-bold text-base text-primary tracking-wide px-6 py-4"
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
                <p className="text-sm font-bold text-danger text-center">
                  {error}
                </p>
              )}
            </div>
          ))}

        {orderDetails && !loading && !error && (
          <div className="w-full max-w-xl flex flex-col mx-auto">
            <h2 className="text-base text-primary mb-6">
              ORDER STATUS -{" "}
              <span className="font-bold text-sm tracking-wide">
                {orderDetails.id}
              </span>
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
              <p className="text-base text-primary">{`${orderDetails.country}, ${orderDetails.state}, ${orderDetails.city}, ${orderDetails.postalCode}, ${orderDetails.line1}`}</p>
            </div>

            <div className="mb-6">
              <h2 className="text-base text-primary mb-2">
                ESTIMATED DELIVERY DATE
              </h2>
              <span className="text-base text-primary">
                {intlFormat(
                  new Date(orderDetails.deliveryDate),
                  {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    timeZoneName: "short",
                    timeZone: "America/New_York",
                  },
                  {
                    locale: "en-US",
                  }
                )}
              </span>
              <span> - </span>
              <span className="text-base text-primary">
                {intlFormat(
                  add(new Date(orderDetails.deliveryDate), {
                    days: 3,
                  }),
                  {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    timeZone: "America/New_York",
                    timeZoneName: "short",
                  },
                  {
                    locale: "en-US",
                  }
                )}
              </span>
            </div>

            <div>
              <h2 className="text-base text-primary mb-2">ORDER ITEMS</h2>
              <ul>
                <li className="text-base text-primary">
                  <p className="mb-1">{orderDetails.productName}</p>
                  <p>
                    {orderDetails.quantity}{" "}
                    {+orderDetails.quantity <= 1 ? "unit" : "units"}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default TrackOrder;
