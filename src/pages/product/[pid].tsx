import { NextPage } from "next";
import Image from "next/image";
import { Space_Mono } from "@next/font/google";
import classNames from "classnames";
import AltButton from "@components/ui/AltButton";
import Logo from "@components/shared/Logo";

import productImage from "@public/images/productImage.png";
import meterRuleHorizontal from "@public/images/meterRuleHorizontal.svg";
import meterRuleVertical from "@public/images/meterRuleVertical.svg";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  fallback: ["system-ui", "arial"],
});

const Product: NextPage = () => {
  return (
    <main
      style={{
        backgroundSize: "14px 26px",
      }}
      className={classNames(
        "Product relative w-full min-h-screen flex justify-center bg-skyBlue bg-dots-secondary py-16 px-10 2xl:px-20",
        spaceMono.className
      )}
    >
      <div className="w-full h-fit max-w-6xl grid grid-cols-[1fr_1fr] gap-16 mx-auto">
        {/* left */}
        <div className="w-full h-fit max-w-2xl flex flex-col items-start justify-start mr-[8%]">
          <AltButton className="text-base uppercase px-10 py-4 mb-12">
            Close
          </AltButton>

          {/* product details */}
          <div className="w-full min-h-[250px] flex flex-col bg-lightGray border-2 border-primary shadow-block p-6 mb-2">
            <div className="mb-12">
              <Logo size="lg" color="gray" />
              <p className="text-4xl font-bold uppercase tracking-wide -mt-8 ml-6">
                PRODUCT 2
              </p>
              <p className="text-sm font-bold uppercase ml-6">LITHOGRAPH</p>
              <p className="text-xs text-darkGray font-bold uppercase ml-6 -mb-1">
                CAPSULE A. COLLECTION A.
              </p>
            </div>

            {/* price */}
            <p className="font-bold text-xl mb-12">$450</p>

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
          <div className="bg-white w-full p-6">
            <AltButton className="w-full py-4 text-3xl font-bold mb-2">
              BUY NOW
            </AltButton>
            <p className="text-sm font-bold text-danger text-center">
              FINAL SALE. NO RETURNS OR EXCHANGES ACCEPTED.
            </p>
          </div>
        </div>

        {/* right */}
        <div className="relative w-full h-full flex flex-col justify-center self-center items-end pr-14 2xl:pr-16">
          <Image
            src={productImage}
            alt="product image"
            height={550}
            className="w-[85%]"
          />

          {/* vertical */}
          <div className="absolute top-0 right-0 flex items-start">
            <p className="min-w-fit text-sm text-secondary font-bold tracking-wide mr-6">
              36IN / 90CM
            </p>
            <Image
              src={meterRuleVertical}
              alt="metre rule"
              height={710}
              // className="h-[40%]"
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

export default Product;
