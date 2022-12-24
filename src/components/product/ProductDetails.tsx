import { Dispatch, FC, SetStateAction } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Space_Mono } from "@next/font/google";
import classNames from "classnames";
import AltButton from "@components/ui/AltButton";
import IconButton from "@components/ui/IconButton";

import timesImage from "@public/images/times.png";
import arrowRightImage from "@public/images/arrow-right.png";
import arrowLeftImage from "@public/images/arrow-left.png";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  fallback: ["system-ui", "arial"],
});

type ProductDetailsProps = {
  name: string;
  price: number;
  quantity: number;
  totalProducts: number;
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  handleBuy: string | Dispatch<SetStateAction<boolean>>;
};

const ProductDetails: FC<ProductDetailsProps> = ({
  name,
  price,
  quantity,
  totalProducts,
  index,
  setIndex,
  handleBuy,
}) => {
  const router = useRouter();

  const isAvailable = quantity >= 1;

  return (
    <div
      className={classNames(
        spaceMono.className,
        "absolute top-0 w-full items-center justify-center px-10"
      )}
    >
      <div className="w-fit lg:w-full absolute top-[calc(-1*(30px+22.5px))] lg:top-[calc(-1*(30px+27px))] left-1/2 lg:left-[calc(2.5rem+15px)] 2xl:left-[calc(5rem+15px)] -translate-x-1/2 lg:translate-x-0 flex flex-col items-start z-10">
        <div className="w-full h-5 max-w-[300px] lg:max-w-[320px] flex items-center justify-start bg-secondary mb-[5px] shadow-block border-2 border-primary overflow-hidden">
          {/* name */}
          <div className="w-full bg-secondary text-sm text-primary uppercase px-2">
            {name}
          </div>

          {/* price */}
          <div className="w-fit bg-primary text-sm text-secondary text-center px-6">
            ${price}
          </div>
        </div>

        {/* spacing */}
        <div className="w-[300px] lg:w-[320px] bg-secondary p-0.5 -mt-[1px] z-1" />

        {/* 'buy now' button & navigation - 25% 60% 25% */}
        <div className="flex items-center w-[300px] lg:w-[320px] h-[45px] lg:h-[54px]">
          <IconButton
            className="h-full w-1/4 p-3 disabled:cursor-not-allowed"
            disabled={index === 0}
            onClick={() => {
              index > 0 && setIndex((prev) => prev - 1);
            }}
          >
            <Image
              src={index > 0 ? arrowLeftImage : timesImage}
              alt="end"
              width={20}
              height={20}
            />
          </IconButton>
          <AltButton
            className="relative h-full w-1/2 text-lg font-bold mx-1 disabled:cursor-not-allowed"
            onClick={() =>
              isAvailable &&
              (typeof handleBuy === "string"
                ? router.push(handleBuy)
                : handleBuy(true))
            }
            disabled={!isAvailable}
          >
            {/* line through */}
            {!isAvailable && (
              <span className="absolute w-[90%] bg-primary h-[1px] top-1/2 -translate-y-1/4" />
            )}

            {isAvailable ? "Buy Now" : "Sold"}
            {/* angle brackets pattern */}
            <span className="absolute -bottom-7 left-[38%] hidden lg:block -translate-x-1/4">
              <svg
                viewBox="0 0 30 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <line x1="30" y1="1" y2="1" stroke="#000000" strokeWidth="2" />
                <line
                  x1="29"
                  y1="31"
                  x2="29"
                  stroke="#000000"
                  strokeWidth="2"
                />
              </svg>
            </span>
            <span className="absolute -bottom-7 right-[38%] hidden lg:block translate-x-1/4 -rotate-90">
              <svg
                viewBox="0 0 30 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <line x1="30" y1="1" y2="1" stroke="#000000" strokeWidth="2" />
                <line
                  x1="29"
                  y1="31"
                  x2="29"
                  stroke="#000000"
                  strokeWidth="2"
                />
              </svg>
            </span>
          </AltButton>
          <IconButton
            className="h-full w-1/4 p-3 disabled:cursor-not-allowed"
            disabled={index === totalProducts - 1}
            onClick={() => {
              index < totalProducts - 1 && setIndex((prev) => prev + 1);
            }}
          >
            <Image
              src={index < totalProducts - 1 ? arrowRightImage : timesImage}
              alt="end"
              width={20}
              height={20}
            />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
