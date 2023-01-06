import { useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import Script from "next/script";
import { useRouter } from "next/router";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import groq from "groq";
import classNames from "classnames";
import AltButton from "@components/ui/AltButton";
import Logo from "@components/shared/Logo";
import { Product as ProductType } from "@src/types";
import { getSanityImageUrl } from "@src/utils";
import sanityClient from "@src/config/sanity";
import RuleVertical from "@src/components/shared/svgs/RuleVertical";
import RuleHorizontal from "@src/components/shared/svgs/RuleHorizontal";
import ProductDetails from "@src/components/product/Product";
import { spaceMono } from "@src/config/fonts";

const Product = ({
  products,
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const [index, setIndex] = useState(
    product ? products?.findIndex((p) => p._id === product._id) : 0
  );
  const [detailsOpen, setDetailsOpen] = useState(false);

  const currentProduct = products[index];
  const isAvailable = currentProduct.quantity >= 1;

  useEffect(() => {
    !detailsOpen && product && setDetailsOpen(true);
  }, [product]);

  return (
    <main
      className="relative w-full bg-secondary bg-dots-primary text-primary overflow-x-hidden"
      onClick={() => detailsOpen && setDetailsOpen(false)}
      style={{
        backgroundSize: "42px",
      }}
    >
      <Head>
        <title>Shop - Wrcked</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="description" content="Shop - Wrcked" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="page-topic" content="Shop" />
        <meta name="page-type" content="Shop" />
        <meta name="audience" content="Everyone" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.wrcked.com/" />
        <meta name="publisher" content="Wrcked" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Wrcked" />
        <meta property="og:url" content="https://www.wrcked.com/" />
        <meta property="og:title" content="Shop - Wrcked" />
        <meta property="og:description" content="Shop - Wrcked" />
        <meta property="og:image" content="https://wrcked/wrcked-banner.png/" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.wrcked.com/" />
        <meta property="twitter:title" content="Shop - Wrcked" />
        <meta property="twitter:description" content="Shop - Wrcked" />
        <meta
          property="twitter:image"
          content="https://wrcked.com/wrcked-banner.png/"
        />
      </Head>

      <Script src="../../scripts/script.js" strategy="beforeInteractive" />

      <ProductDetails
        name={currentProduct.name}
        price={currentProduct.price}
        quantity={currentProduct.quantity}
        image={currentProduct.image}
        gif={currentProduct.gif}
        verticalDimension={currentProduct.verticalDimension}
        total={products.length}
        index={index}
        setIndex={setIndex}
        handleBuy={
          currentProduct._id === product?._id
            ? setDetailsOpen
            : `/shop/${currentProduct._id}`
        }
      />

      {product && (
        <>
          <AnimatePresence>
            {detailsOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="top-0 absolute w-screen h-screen z-20 bg-[#0000004d]"
              />
            )}
          </AnimatePresence>

          {/* details */}
          <AnimatePresence initial={true}>
            {detailsOpen && (
              <motion.div
                transition={{
                  type: "spring",
                  damping: 20,
                  stiffness: 70,
                }}
                initial={{ y: "100vh" }}
                animate={{ y: "0" }}
                exit={{ y: "100vh" }}
                className={classNames(
                  "fixed bottom-0 left-0 w-full h-[90vh] max-h-[90vh] bg-skyBlue bg-dots-secondary py-8 px-3 sm:px-10 2xl:px-20 overflow-y-auto z-30",
                  spaceMono.className
                )}
                style={{
                  backgroundSize: "42px",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="w-full h-full min-h-[360px] sm:min-h-[400px] max-w-8xl grid place-content-start grid-cols-[1fr] lg:grid-cols-[0.55fr_0.45fr] gap-16 mx-auto">
                  {/* left */}
                  <div className="w-full h-fit max-w-3xl flex flex-col items-start justify-start lg:mr-[8%] mx-auto pb-8">
                    <AltButton
                      className="text-base uppercase px-10 py-4 mb-4"
                      onClick={() => setDetailsOpen(false)}
                    >
                      Close
                    </AltButton>

                    {/* product details */}
                    <div className="w-full min-h-[250px] flex flex-col bg-lightGray border-2 border-primary shadow-block p-6 mb-2">
                      <div className="mb-7">
                        <Logo size="lg" color="gray" />
                        <p className="text-4xl font-bold uppercase tracking-wide -mt-6 lg:-mt-7 ml-6">
                          {product.name}
                        </p>
                        <p className="text-sm font-bold uppercase ml-8">
                          LITHOGRAPH
                        </p>
                        <p className="text-xs text-darkGray font-bold uppercase ml-8 -mb-1">
                          CAPSULE A. COLLECTION A.
                        </p>
                      </div>

                      {/* price */}
                      <p className="font-bold text-xl mb-7">${product.price}</p>

                      {/* description */}
                      <p className="font-bold text-sm">{product.description}</p>
                    </div>

                    {/* 'buy now' button */}
                    <div className="bg-secondary w-full p-4 shadow-block">
                      <AltButton
                        className="w-full py-2.5 text-3xl font-bold mb-2"
                        onClick={() => {
                          isAvailable &&
                            router.push(`/checkout/${currentProduct._id}`);
                          isAvailable && setDetailsOpen(false);
                        }}
                        disabled={!isAvailable}
                      >
                        {!isAvailable && (
                          <span className="absolute w-[90%] bg-primary h-[1px] top-1/2 -translate-y-1/4" />
                        )}

                        {isAvailable ? "BUY NOW" : "SOLD OUT"}
                      </AltButton>
                      <p className="text-sm font-bold text-danger text-center">
                        FINAL SALE. NO RETURNS OR EXCHANGES ACCEPTED.
                      </p>
                    </div>
                  </div>

                  {/* right */}
                  <div className="relative w-full h-full hidden lg:flex flex-col justify-center self-center items-center pr-14 2xl:pr-16 pb-8">
                    <div className="w-auto h-[65%] max-h-[560px]">
                      <Image
                        src={getSanityImageUrl(product.image)}
                        alt="product image"
                        width={519}
                        height={550}
                        className="w-auto h-full"
                      />
                    </div>

                    {/* vertical */}
                    <div className="absolute top-0 right-0 h-full flex items-start">
                      <p className="min-w-fit text-sm text-secondary font-bold tracking-wide mr-6">
                        {product.verticalDimension}
                      </p>
                      <div className="h-[84%]">
                        <RuleVertical className="h-full" />
                      </div>
                    </div>

                    {/* horizontal */}
                    <div className="absolute bottom-5 left-0 w-full flex flex-col">
                      <p className="min-w-fit text-sm text-secondary font-bold tracking-wide mb-6">
                        {product.horizontalDimension}
                      </p>
                      <div className="w-[90%]">
                        <RuleHorizontal className="w-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </main>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: string[] = await sanityClient.fetch(
    groq`*[_type == "product"][]._id | order(_createdAt asc)`
  );

  return {
    paths: [
      { params: { pid: "all" } },
      ...paths.map((pid: string) => ({ params: { pid } })),
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  products: ProductType[];
  product: ProductType;
}> = async (context) => {
  try {
    const { pid = "" } = context.params as any;

    const products: any[] = await sanityClient.fetch(
      groq`*[_type == "product"] | order(_createdAt asc)`
    );

    if (pid === "all") {
      return {
        props: {
          products,
          product: null,
        },
      };
    }

    const product = pid
      ? await sanityClient.fetch(
          groq`*[_type == "product" && _id == $pid][0]`,
          { pid }
        )
      : null;

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

export default Product;
