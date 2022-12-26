import { useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import groq from "groq";
import CheckoutHeader from "@components/checkout/CheckoutHeader";
import sanityClient from "@src/config/sanity";
import { Product } from "@src/types";
import { getSanityImageUrl } from "@src/utils";
import { spaceMono } from "@src/config/fonts";

const Checkout = ({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const [total, setTotal] = useState("-");
  const [quantity, setQuantity] = useState("-");

  useEffect(() => {
    setTotal(router.query?.t?.toString() ?? "-");
    setQuantity(router.query?.q?.toString() ?? "-");
  }, [router.query]);

  return (
    <main
      style={{
        backgroundSize: "14px 26px",
      }}
      className={classNames(
        "Product relative w-full min-h-screen flex flex-col items-center bg-gray py-12 px-3 sm:px-10 2xl:px-20",
        spaceMono.className
      )}
    >
      <CheckoutHeader />

      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-start md:justify-between mx-auto">
        {/* left - product summary */}
        <div className="max-w-xl w-full flex flex-col items-center justify-center mx-auto">
          <div className="w-full border border-primary px-5 py-8 mb-6">
            <h1 className="text-lg text-primary text-center mb-4 sm:mb-6">
              ORDER SUCCESSFUL
            </h1>
            <p className="text-base text-primary text-center">
              THANK YOU FOR ORDERING ON WRCKED.COM
            </p>
          </div>

          <div className="relative min-h-[200px] h-fit w-full max-w-xl flex items-center justify-center mx-auto px-5 py-8 mb-8">
            <div className="absolute left-0 top-0 w-5 h-5 border-l border-l-primary border-t border-t-primary" />
            <div className="absolute right-0 top-0 w-5 h-5 border-r border-r-primary border-t border-t-primary" />
            <div className="absolute left-0 bottom-0 w-5 h-5 border-l border-l-primary border-b border-b-primary" />
            <div className="absolute right-0 bottom-0 w-5 h-5 border-r border-r-primary border-b border-b-primary" />

            <Image
              src={getSanityImageUrl(product.image)}
              alt="product image"
              width={519}
              height={550}
              className="max-h-[250px] lg:max-h-[300px] w-auto h-full"
            />
          </div>

          <div className="w-full mb-6">
            <h2 className="text-base text-primary tracking-wide mb-2">
              SUMMARY <span className="text-darkGray">{product.name}</span>
            </h2>
            <div className="flex w-full border border-primary">
              {/* image */}
              <div className="w-full flex items-center justify-center p-4 border-r-primary border-r">
                <Image
                  src={getSanityImageUrl(product.image)}
                  alt="product image"
                  width={250}
                  height={250}
                  className="w-auto h-full max-h-[200px]"
                />
              </div>

              {/* summary */}
              <div className="w-full">
                <div className="px-4 py-2 border-b border-b-primary">
                  <p className="text-base font-bold mb-1">{product.name}</p>
                  <p className="text-base">QUANTITY: {quantity}</p>
                </div>
                <div className="px-4 py-2 border-b border-b-primary">
                  <p className="flex justify-between text-base mb-1">
                    <span>SUBTOTAL</span>
                    <span>${total}.00</span>
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
                <div className="px-4 py-2">
                  <p className="flex justify-between text-base font-bold">
                    <span>TOTAL</span>
                    <span>${total}.00</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-base text-primary mb-6">
            <span>VISIT: </span>
            <Link href="/" className="text-underline">
              WRCKED.COM
            </Link>
          </p>
          <div className="flex justify-center items-center">
            <Link href="/" className="text-sm text-darkGray mr-6">
              TERMS
            </Link>
            <Link href="/privacy" className="text-sm text-darkGray">
              PRIVACY
            </Link>
          </div>
        </div>
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