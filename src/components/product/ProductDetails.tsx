import { FC } from "react";
import Image from "next/image";
import { Space_Mono } from "@next/font/google";
import classNames from "classnames";
import AltButton from "@components/ui/AltButton";
import IconButton from "@components/ui/IconButton";

import timesImage from "@public/images/times.png";
import arrowRightImage from "@public/images/arrow-right.png";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  fallback: ["system-ui", "arial"],
});

const ProductDetails: FC = () => {
  return (
    <div
      className={classNames(
        spaceMono.className,
        "absolute top-0 w-full items-center justify-center px-10"
      )}
    >
      <div className="w-fit lg:w-full absolute top-[calc(-1*(30px+22.5px))] lg:top-[calc(-1*(30px+27px))] left-1/2 lg:left-[calc(2.5rem+15px)] 2xl:left-[calc(5rem+15px)] -translate-x-1/2 lg:translate-x-0 flex flex-col items-start z-10">
        <div className="w-full h-5 max-w-[300px] lg:max-w-[320px] flex items-center justify-start bg-white mb-[5px] shadow-block border-2 border-primary overflow-hidden">
          {/* name */}
          <div className="w-full bg-secondary text-sm text-primary uppercase px-2">
            Product 1
          </div>

          {/* price */}
          <div className="w-fit bg-primary text-sm text-white text-center px-6">
            $450
          </div>
        </div>

        {/* spacing */}
        <div className="w-[300px] lg:w-[320px] bg-white p-0.5 -mt-[1px] z-1" />

        {/* 'buy now' button & navigation - 25% 60% 25% */}
        <div className="flex items-center w-[300px] lg:w-[320px] h-[45px] lg:h-[54px]">
          <IconButton className="h-full w-1/4 p-3">
            <Image src={timesImage} alt="end" width={20} height={20} />
          </IconButton>
          <AltButton className="h-full w-1/2 text-lg font-bold mx-1">
            Buy Now
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
          <IconButton className="h-full w-1/4 p-3">
            <Image src={arrowRightImage} alt="next" width={20} height={20} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;