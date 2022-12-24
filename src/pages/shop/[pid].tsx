import { useState } from "react";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import { Space_Mono } from "@next/font/google";
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

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  fallback: ["system-ui", "arial"],
});

const Product = ({
  products,
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [index, setIndex] = useState(
    products.findIndex((p) => p._id === product._id)
  );
  console.log("index: ", index);
  console.log("products: ", products);
  const [detailsOpen, setDetailsOpen] = useState(true);

  const currentProduct = products[index];

  return (
    <main
      className="relative w-full"
      onClick={() => detailsOpen && setDetailsOpen(false)}
    >
      <AnimatePresence initial={true}>
        {detailsOpen && (
          <motion.div
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 70,
            }}
            initial={{ opacity: "0" }}
            animate={{ opacity: "1" }}
            exit={{ opacity: "0" }}
            className="top-0 absolute w-screen h-screen z-20 bg-[#0000004d]"
          />
        )}
      </AnimatePresence>

      <ProductDetails
        id={currentProduct._id}
        name={currentProduct.name}
        price={currentProduct.price}
        quantity={currentProduct.quantity}
        image={currentProduct.image}
        gif={currentProduct.gif}
        total={products.length}
        index={index}
        setIndex={setIndex}
        handleBuy={setDetailsOpen}
      />
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
              "absolute top-[20vh] left-0 w-full max-h-[80vh] bg-skyBlue bg-dots-secondary py-6 px-3 sm:px-10 2xl:px-20 overflow-y-auto z-30",
              spaceMono.className
            )}
            style={{
              backgroundSize: "14px 26px",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full h-full min-h-[400px] max-w-8xl grid grid-cols-[1fr] lg:grid-cols-[0.55fr_0.45fr] gap-16 mx-auto">
              {/* left */}
              <div className="w-full h-fit max-w-3xl flex flex-col items-start justify-start lg:mr-[8%] mx-auto">
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
                <div className="bg-secondary w-full p-4">
                  <AltButton className="w-full py-2.5 text-3xl font-bold mb-2">
                    BUY NOW
                  </AltButton>
                  <p className="text-sm font-bold text-danger text-center">
                    FINAL SALE. NO RETURNS OR EXCHANGES ACCEPTED.
                  </p>
                </div>
              </div>

              {/* right */}
              <div className="relative w-full h-full hidden lg:flex flex-col justify-center self-center items-center pr-14 2xl:pr-16">
                <div className=" h-[50%] max-h-[540px]">
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
                    36IN / 90CM
                  </p>
                  {/* <Image
              src={meterRuleVertical}
              alt="metre rule"
              className="h-[90%]"
            /> */}
                  <div className="h-[90%]">
                    <RuleVertical className="h-full" />
                  </div>
                </div>

                {/* horizontal */}
                <div className="w-full absolute bottom-0 left-0">
                  <p className="min-w-fit text-sm text-secondary font-bold tracking-wide mb-6">
                    24IN / 60CM
                  </p>
                  {/* <Image
              src={meterRuleHorizontal}
              alt="metre rule"
              className="w-[90%]"
            /> */}
                  <div className="w-[90%]">
                    <RuleHorizontal className="w-full" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
  products: ProductType[];
  product: ProductType;
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

export default Product;
