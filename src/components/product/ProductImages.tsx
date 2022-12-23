import { FC } from "react";
import Image from "next/image";
import useWindowSize from "@src/hooks/useWindowSize";
import { breakpoints } from "@src/utils";
import Rule from "@src/components/shared/svgs/Rule";

import meterRuleImage from "@public/images/meter-rule.svg";
import meterRuleMobileImage from "@public/images/meter-rule-mobile.svg";

type ProductImagesProps = {
  gif: any;
  image: any;
};

const ProductImages: FC<ProductImagesProps> = ({ gif, image }) => {
  const { width } = useWindowSize();

  return (
    <div className="relative flex justify-between pb-5 pt-5 lg:pt-10 px-10 lg:px-20 mx-auto">
      <div className="w-fit flex items-end self-center lg:self-start justify-center pt-6 lg:pt-0 mx-auto -mr-16 lg:ml-4 lg:mr-12">
        <Image
          src={gif}
          alt="product gif"
          width={350}
          height={350}
          className="hidden lg:block w-auto h-[45vh] max-h-[375px] lg:min-h-[250px] mr-14"
        />
        <Image
          src={image}
          alt="product image"
          width={519}
          height={550}
          className="w-auto h-[250px] lg:h-[60vh] max-h-[42vh] lg:max-h-[560px] min-h-[135px] lg:min-h-[400px] lg:pb-24"
        />
      </div>

      {/* 67px -> (padding) 27px + (padding) 2.5rem; 1rem -> variable */}
      <p className="min-w-fit text-sm font-bold lg:-mt-[(calc(27px+2.5rem-1rem))] mr-4">
        12IN / 30cm
      </p>

      {/* 67px -> (padding) 27px + (padding) 2.5rem; (full header height) 82px - (half button height) 27px */}
      <div className="lg:-mt-[(calc(27px+2.5rem+82px-27px))] z-[8] h-[54vh] lg:h-[calc(100%+8rem)] lg:max-h-[760px] min-h-[150px] lg:min-h-auto">
        {/* <Image
          src={width < breakpoints.lg ? meterRuleMobileImage : meterRuleImage}
          alt="metre rule"
          className="h-full"
        /> */}
        <Rule className="h-full" />
      </div>
    </div>
  );
};

export default ProductImages;
