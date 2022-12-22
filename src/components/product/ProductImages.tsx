import { FC } from "react";
import Image from "next/image";
import useWindowSize from "@src/hooks/useWindowSize";
import { breakpoints } from "@src/utils";

import meterRuleImage from "@public/images/meter-rule.svg";
import meterRuleMobileImage from "@public/images/meter-rule-mobile.svg";

type ProductImagesProps = {
  gif: any;
  image: any;
};

const ProductImages: FC<ProductImagesProps> = ({ gif, image }) => {
  const { width } = useWindowSize();

  return (
    <div className="relative flex justify-between py-4 lg:py-16 px-10 lg:px-20 mx-auto">
      <div className="w-fit flex items-end self-center 3xl:self-start justify-center pr-4 lg:pr-0 lg:px-8 mx-auto -mr-16 lg:mr-0">
        <Image
          src={gif}
          alt="product gif"
          height={350}
          className="hidden lg:block w-[52%] xl:w-[36%] mr-14"
        />
        <Image
          src={image}
          alt="product image"
          height={550}
          className="w-[250px] lg:w-[56%] xl:w-[38%] lg:pb-24"
        />
      </div>

      <p className="min-w-fit text-sm font-bold lg:-mt-[120px] mr-4">
        12IN / 30cm
      </p>

      <div className="lg:-mt-[8.5rem] z-[8]">
        <Image
          src={width < breakpoints.lg ? meterRuleMobileImage : meterRuleImage}
          alt="metre rule"
          className="h-[52vh] lg:h-[80vh] max-h-[760px]"
        />
      </div>
    </div>
  );
};

export default ProductImages;
