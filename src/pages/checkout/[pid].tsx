import { Fragment, useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import groq from "groq";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { getSanityImageUrl } from "@src/utils";
import CheckoutHeader from "@components/checkout/CheckoutHeader";
import Checkbox from "@components/ui/Checkbox";
import Spinner from "@src/components/shared/Spinner";
import CheckoutForm from "@src/components/checkout/CheckoutForm";
import useWindowDimensions from "@src/hooks/useWindowDimensions";
import { Product } from "@src/types";
import sanityClient from "@src/config/sanity";
import axios from "@src/config/axios";
import { spaceMono } from "@src/config/fonts";
import { breakpoints } from "@src/utils";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ""
);

const Checkout = ({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [clientSecret, setClientSecret] = useState<string | undefined>();
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    phone: "",
    address: {
      city: "",
      line1: "",
      line2: "",
      postal_code: "",
      state: "",
      country: "",
    },
  });
  const { width } = useWindowDimensions();

  useEffect(() => {
    const createPayment = async () => {
      try {
        setLoading(true);

        const { data } = await axios.post("/api/createPayment", {
          id: product._id,
          quantity: 1,
          shipping: shippingInfo,
        });

        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        } else {
          console.log("error occurred");
          setError("Error");
        }
      } catch (err: any) {
        console.log("error occurred: ", err.message);
        setError("Error");
      } finally {
        setLoading(false);
      }
    };

    createPayment();
  }, []);

  return (
    <main
      style={{
        backgroundSize: "42px",
      }}
      className={classNames(
        "Checkout relative w-full min-h-screen flex flex-col items-center bg-gray py-12 px-3 sm:px-10 2xl:px-20",
        spaceMono.className
      )}
    >
      <Head>
        <title>Checkout - Wrcked</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Checkout" />
      </Head>

      <CheckoutHeader />

      {/* content */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-start md:justify-between mx-auto">
        {/* left - product summary */}
        <div
          className={classNames(
            spaceMono.className,
            "relative w-full md:w-[48%] flex flex-col justify-between md:mr-[4%] mb-8 md:mb-0"
          )}
        >
          <div className="summary md:sticky top-6 left-0 w-full">
            <h2 className="text-base tracking-wide mb-4">PRODUCT SUMMARY</h2>

            <div className="grid grid-cols-2 w-full border border-primary mb-4">
              {/* image */}
              <div className="min-w-[150px] h-full w-full grid place-content-center p-4 border-r-primary border-r">
                <Image
                  src={getSanityImageUrl(product.image)}
                  alt="product image"
                  width={275}
                  height={200}
                  className="max-h-[200px] h-full w-auto"
                />
              </div>

              {/* summary */}
              <div className={classNames("w-full", spaceMono.className)}>
                <div className="px-4 py-2 border-b border-b-primary">
                  <p className="text-base font-bold mb-1">{product.name}</p>
                  <p className="text-base">QUANTITY: 1</p>
                </div>
                <div
                  className={classNames(
                    "px-4 py-2 border-b border-b-primary",
                    spaceMono.className
                  )}
                >
                  <p className="flex justify-between text-base mb-1">
                    <span>SUBTOTAL</span>
                    <span>${product.price}.00</span>
                  </p>
                  <p className="flex justify-between text-base mb-1">
                    <span>SHIPPING</span>
                    <span>FREE</span>
                  </p>
                  <p className="flex justify-between text-base">
                    <span>TAXES</span>
                    <span>FREE</span>
                  </p>
                </div>
                <div className={classNames(spaceMono.className, "px-4 py-2")}>
                  <p className="flex justify-between text-base font-bold">
                    <span>TOTAL</span>
                    <span>${product.price}.00</span>
                  </p>
                </div>
              </div>
            </div>

            <div
              className={classNames(
                "agree-to-terms flex items-center",
                spaceMono.className
              )}
            >
              <Checkbox
                checked={agreedToTerms}
                handleClick={() => setAgreedToTerms(!agreedToTerms)}
              />
              <p className="text-darkGray text-sm ml-2">
                I AGREE WITH THE <Link href="/terms">TERMS</Link>
              </p>
            </div>
          </div>

          <div
            className={classNames("hidden md:block mt-4", spaceMono.className)}
          >
            <Link
              href="/terms-of-service"
              className="text-darkGray text-base mr-4"
            >
              TERMS
            </Link>
            <Link
              href="/privacy-policy.html"
              className="text-darkGray text-base"
            >
              PRIVACY
            </Link>
          </div>
        </div>

        {/* right - shipping & payment details */}
        {clientSecret && stripePromise ? (
          <Elements
            stripe={stripePromise}
            options={{
              clientSecret,
              appearance: {
                theme: "flat",
                variables: {
                  colorPrimary: "#000000",
                  colorBackground: "#ecebf0",
                  colorText: "#000000",
                  colorDanger: "#ff0000",
                  fontFamily: "Space Mono, system-ui, sans-serif",
                  spacingUnit: "4px",
                  borderRadius: "0px",
                  fontSizeSm: width > breakpoints.sm ? "13px" : "12px",
                  fontSizeLg: width > breakpoints.sm ? "15px" : "13px",
                },
                rules: {
                  ".Input": {
                    border: "1px solid #000000",
                    color: "#000000",
                    boxShadow: "none",
                    fontSize: width > breakpoints.sm ? "15px" : "13px",
                  },

                  ".Label": {
                    fontSizeSm: width > breakpoints.sm ? "13px" : "12px",
                  },

                  ".CheckboxInput": {
                    border: "1px solid #000000",
                    boxShadow: "none",
                  },

                  ".Tab": {
                    border: "1px solid #000000",
                    color: "#000000",
                  },
                },
              },
              fonts: [
                {
                  family: "Space Mono",
                  cssSrc:
                    "https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap",
                },
              ],
            }}
          >
            <div className="w-full md:w-[48%] flex flex-col">
              <CheckoutForm
                id={product._id}
                total={product.price}
                setShippingInfo={setShippingInfo}
                shippingInfo={shippingInfo}
                agreedToTerms={agreedToTerms}
              />
            </div>
          </Elements>
        ) : loading ? (
          <div className="min-h-[75px] w-full md:w-[48%] flex items-center justify-center">
            <Spinner size="lg" />
          </div>
        ) : (
          <div className="min-h-[75px] w-full md:w-[48%] flex items-center justify-center">
            <span className="-bold text-base text-danger text-center">
              {error ?? "Something went wrong"}
            </span>
          </div>
        )}
      </div>
    </main>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: string[] = await sanityClient.fetch(
    groq`*[_type == "product"][]._id | order(_createdAt asc)`
  );

  return {
    paths: paths.map((pid: string) => ({ params: { pid } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  product: Product;
}> = async (context) => {
  try {
    const { pid = "" } = context.params as any;

    const product = pid
      ? await sanityClient.fetch(
          groq`*[_type == "product" && _id == $pid][0]`,
          { pid }
        )
      : null;

    const products: any[] = await sanityClient.fetch(
      groq`*[_type == "product"] | order(_createdAt asc)`
    );

    if (!product || !products) {
      throw new Error("Failed to fetch products");
    }

    return {
      props: {
        products,
        product,
      },
    };
  } catch (err: any) {
    console.log("error occurred: ", err.message);

    throw new Error("Failed to fetch posts");
  }
};

export default Checkout;
