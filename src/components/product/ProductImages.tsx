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
    <div className="relative flex justify-between py-5 lg:py-16 px-10 lg:px-20 mx-auto">
      <div className="w-fit flex items-end self-center lg:self-start justify-center pt-6 lg:pt-0 mx-auto -mr-16 lg:ml-4 lg:mr-12">
        <Image
          src={gif}
          alt="product gif"
          width={350}
          height={350}
          className="hidden lg:block h-[45vh] max-h-[350px] lg:min-h-[250px] mr-14"
        />
        <Image
          src={image}
          alt="product image"
          width={519}
          height={550}
          className="w-auto h-[250px] lg:h-[70vh] max-h-[550px] lg:min-h-[400px] lg:pb-24"
        />
      </div>

      <p className="min-w-fit text-sm font-bold lg:-mt-[120px] mr-4">
        12IN / 30cm
      </p>

      <div className="lg:-mt-[8.5rem] z-[8]">
        <Image
          src={width < breakpoints.lg ? meterRuleMobileImage : meterRuleImage}
          alt="metre rule"
          className="h-[54vh] lg:h-[82vh] max-h-[760px] lg:min-h-[420px]"
        />
      </div>
    </div>
  );
};

export default ProductImages;
