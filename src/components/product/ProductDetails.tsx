import { Dispatch, FC, SetStateAction } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import classNames from "classnames";
import AltButton from "@components/ui/AltButton";
import IconButton from "@components/ui/IconButton";
import { spaceMono } from "@src/config/fonts";

import timesImage from "@public/images/times.png";
import arrowRightImage from "@public/images/arrow-right.png";
import arrowLeftImage from "@public/images/arrow-left.png";

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
        "absolute top-0 w-full items-center justify-center text-primary px-10"
      )}
      data-scroll
      data-scroll-speed="5"
      data-scroll-sticky
      data-scroll-target="#stick"
    >
      <div className="lg:w-fit absolute -top-[calc(30px+var(--box-height)/2)] lg:-top-[(calc(var(--box-height)/2)+var(--name-box-height))] left-1/2 lg:left-[calc(var(--side-width)-(var(--box-width)/2))] -translate-x-1/2 lg:translate-x-0 flex flex-col items-start z-10">
        {/* angle brackets pattern */}
        {/* <span className="w-fit absolute -top-[33px] left-[calc(var(--box-width)/2-25px)] hidden lg:block bg-secondary -translate-x-1/4 rotate-90 pointer-events-none">
          <svg
            viewBox="0 0 30 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 sm:w-5 h-4 sm:h-5"
          >
            <line
              x1="30"
              y1="1"
              y2="1"
              className="stroke-primary"
              strokeWidth="2"
            />
            <line
              x1="29"
              y1="31"
              x2="29"
              className="stroke-primary"
              strokeWidth="2"
            />
          </svg>
        </span>
        <span className="absolute -top-[33px] right-[calc(var(--box-width)/2-25px)] hidden lg:block bg-secondary translate-x-1/4 rotate-180 pointer-events-none">
          <svg
            viewBox="0 0 30 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 sm:w-5 h-4 sm:h-5"
          >
            <line
              x1="30"
              y1="1"
              y2="1"
              className="stroke-primary"
              strokeWidth="2"
            />
            <line
              x1="29"
              y1="31"
              x2="29"
              className="stroke-primary"
              strokeWidth="2"
            />
          </svg>
        </span> */}

        <span className="w-fit absolute -bottom-[33px] left-[calc(var(--box-width)/2-25px)] hidden lg:block bg-secondary -translate-x-1/4 pointer-events-none">
          <svg
            viewBox="0 0 30 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 sm:w-5 h-4 sm:h-5"
          >
            <line
              x1="30"
              y1="1"
              y2="1"
              className="stroke-primary"
              strokeWidth="2"
            />
            <line
              x1="29"
              y1="31"
              x2="29"
              className="stroke-primary"
              strokeWidth="2"
            />
          </svg>
        </span>
        <span className="absolute -bottom-[33px] right-[calc(var(--box-width)/2-25px)] hidden lg:block bg-secondary translate-x-1/4 -rotate-90 pointer-events-none">
          <svg
            viewBox="0 0 30 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 sm:w-5 h-4 sm:h-5"
          >
            <line
              x1="30"
              y1="1"
              y2="1"
              className="stroke-primary"
              strokeWidth="2"
            />
            <line
              x1="29"
              y1="31"
              x2="29"
              className="stroke-primary"
              strokeWidth="2"
            />
          </svg>
        </span>

        <div className="w-full h-5 lg:max-w-[var(--box-width)] flex items-center justify-start bg-primary mb-1.5 shadow-block border-2 border-primary overflow-hidden">
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
        <div className="w-[var(--box-width)] bg-secondary p-0.5 -mt-[1.5px] z-1" />

        {/* 'buy now' button & navigation - 25% 60% 25% */}
        <div className="relative flex items-center w-[var(--box-width)] h-[var(--box-height)]">
          <div className="absolute left-[-50vw] bottom-1/2 w-[calc(500vw)] h-0.5 bg-primary border-none outline-none translate-y-1/4" />

          <IconButton
            className="h-full w-[var(--box-height)] p-3 disabled:cursor-not-allowed"
            disabled={index === 0}
            onClick={() => {
              index > 0 && setIndex((prev) => prev - 1);
            }}
          >
            <Image
              src={index > 0 ? arrowLeftImage : timesImage}
              alt="end"
              width={22}
              height={22}
            />
          </IconButton>
          <AltButton
            className="relative flex-1 h-full w-auto text-lg font-bold mx-[0.275rem] disabled:cursor-not-allowed"
            onClick={() =>
              typeof handleBuy === "string"
                ? router.push(handleBuy)
                : handleBuy(true)
            }
          >
            {/* line through */}
            {!isAvailable && (
              <span className="absolute w-[90%] bg-primary h-[1px] top-1/2 -translate-y-1/4" />
            )}
            {isAvailable ? "BUY NOW" : "SOLD"}
          </AltButton>
          <IconButton
            className="h-full w-[var(--box-height)] p-3 disabled:cursor-not-allowed"
            disabled={index === totalProducts - 1}
            onClick={() => {
              index < totalProducts - 1 && setIndex((prev) => prev + 1);
            }}
          >
            <Image
              src={index < totalProducts - 1 ? arrowRightImage : timesImage}
              alt="end"
              width={22}
              height={22}
            />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
