import { useLayoutEffect, useRef } from "react";
import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import { Space_Mono } from "@next/font/google";
import classNames from "classnames";
import AltButton from "@components/ui/AltButton";
import Logo from "@components/shared/Logo";
import useWindowSize from "@src/hooks/useWindowSize";
import sanityClient from "@src/config/sanity";

import productImage from "@public/images/product-image.png";
import meterRuleHorizontal from "@public/images/meter-rule-horizontal.svg";
import meterRuleVertical from "@public/images/meter-rule-vertical.svg";
import { Product } from "@src/types";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  fallback: ["system-ui", "arial"],
});

const Product: NextPage = () => {
  const router = useRouter();

  return (
    <main
      style={{
        backgroundSize: "14px 26px",
      }}
      className={classNames(
        "Product relative w-full min-h-screen flex justify-center bg-skyBlue bg-dots-secondary py-8 px-3 sm:px-10 2xl:px-20",
        spaceMono.className
      )}
    >
      <div className="w-full h-fit max-w-7xl grid grid-cols-[1fr] lg:grid-cols-[0.55fr_0.45fr] gap-16 mx-auto">
        {/* left */}
        <div className="w-full h-fit max-w-3xl flex flex-col items-start justify-start lg:mr-[8%] mx-auto">
          <AltButton
            className="text-base uppercase px-10 py-4 mb-4"
            onClick={() => router.push("/products")}
          >
            Close
          </AltButton>

          {/* product details */}
          <div className="w-full min-h-[250px] flex flex-col bg-lightGray border-2 border-primary shadow-block p-6 mb-2">
            <div className="mb-7">
              <Logo size="lg" color="gray" />
              <p className="text-4xl font-bold uppercase tracking-wide -mt-6 lg:-mt-7 ml-6">
                PRODUCT 2
              </p>
              <p className="text-sm font-bold uppercase ml-8">LITHOGRAPH</p>
              <p className="text-xs text-darkGray font-bold uppercase ml-8 -mb-1">
                CAPSULE A. COLLECTION A.
              </p>
            </div>

            {/* price */}
            <p className="font-bold text-xl mb-7">$450</p>

            {/* description */}
            <p className="font-bold text-sm">
              HELP! MY RIPPED LITHOGRAPH... BUT IT LOOKS SO GOOD. DON&apos;T
              LIE, THE FIRST TIME YOU EVER SAW SOMEONE VANDALIZING A WALL YOU
              THOUGHT IT LOOKED INCREDIBLE. INDUSTRIES WITH LITTLE TO NO REGARD
              FOR AESTHETICS DESIGNING PEICES OF ART FOR UTILITARIAN PURPOSES
              CHURN OUT BANGERS LIKE NO ONE ELSE. WE&apos;VE COLLECTIVELY
              AESTHETICIZED GLASSES, BUT THE TREND OF STREET ART MAKING THE LEAP
              TO THE DIVINE SEEMS SO EASY. NO LONGER. LET&apos;S PUSH THE
              ENVELOPE ON WHAT ART IS; ART SHOULD BE ANYTHING THAT YOUR EYE
              GAZES UPON. MATERIALS/DETAILS: FLEXIBLE MOLDED CONSTRUCTION
              CYANOACRYLATE THIN SHEET MATERIAL THIN SHEET MATERIAL THIN SHEET
              MATERIAL
            </p>
          </div>

          {/* 'buy now' button */}
          <div className="bg-white w-full p-4">
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
          <Image
            src={productImage}
            alt="product image"
            height={550}
            className="w-[70%]"
          />

          {/* vertical */}
          <div className="absolute top-0 right-0 h-full flex items-start">
            <p className="min-w-fit text-sm text-secondary font-bold tracking-wide mr-6">
              36IN / 90CM
            </p>
            <Image
              src={meterRuleVertical}
              alt="metre rule"
              className="h-[92%]"
            />
          </div>

          {/* horizontal */}
          <div className="w-full absolute bottom-0 left-0">
            <p className="min-w-fit text-sm text-secondary font-bold tracking-wide mb-6">
              24IN / 60CM
            </p>
            <Image
              src={meterRuleHorizontal}
              alt="metre rule"
              className="w-[90%]"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

/*export const getStaticPaths = async () => {
  const paths: any[] = await sanityClient.fetch(
    `*[_type == "product" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<{ product: Product[] }> = async (
  context
) => {
  // It's important to default the slug so that it doesn't return "undefined"
  const { pid } = context.params as any;
  console.log("slug: ", 1);
  const product = await sanityClient.fetch(
    `
    *[_type == "product" && slug.current == $slug][0]
  `,
    { pid }
  );
  return {
    props: {
      product,
    },
  };
};*/

export default Product;
