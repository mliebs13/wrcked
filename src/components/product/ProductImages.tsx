import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import useWindowSize from "@src/hooks/useWindowDimensions";
// import { breakpoints } from "@src/utils";
import Rule from "@src/components/shared/svgs/Rule";
import RuleMobile from "@src/components/shared/svgs/RuleMobile";
import { breakpoints } from "@src/utils";

type ProductImagesProps = {
  gif: any;
  image: any;
};

const ProductImages: FC<ProductImagesProps> = ({ gif, image }) => {
  const { width } = useWindowSize();

  return (
    <div className="relative w-[92vw] sm:w-[80vw] lg:w-[76vw] lg:max-w-[2000px] flex justify-center lg:justify-between pb-5 pt-5 lg:pt-10 px-10 lg:px-20 mx-auto">
      <div className="flex flex-[0.75] sm:flex-[0.45] lg:flex-[0.8] items-end self-center lg:self-start justify-center pt-6 lg:pt-0 -mr-16 lg:ml-4 lg:mr-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Image
            src={gif}
            alt="product gif"
            width={350}
            height={350}
            className="hidden lg:block w-auto h-[45vh] max-h-[375px] lg:min-h-[200px] mr-14"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Image
            src={image}
            alt="product image"
            width={519}
            height={550}
            className="w-auto h-[250px] lg:h-[60vh] max-h-[42vh] lg:max-h-[560px] min-h-[135px] lg:min-h-[300px] lg:pb-24"
          />
        </motion.div>
      </div>

      {/* 67px -> (padding) 27px + (padding) 2.5rem; 1rem -> variable */}

      {/* 67px -> (padding) 27px + (padding) 2.5rem; (full header height) 82px - (half button height) 27px */}
      <div className="flex flex-[0.25] lg:flex-[0.2] justify-self-end lg:-mt-[(calc(27px+2.5rem+82px-27px))] h-[54vh] lg:h-[calc(100%+8rem)] lg:max-h-[760px] min-h-[150px] lg:min-h-auto z-[8]">
        <p className="min-w-fit w-max text-sm font-bold lg:mt-[calc(82px-27px+1rem)] mr-4">
          12IN / 30cm
        </p>
        {/* <Image
          src={width < breakpoints.lg ? meterRuleMobileImage : meterRuleImage}
          alt="metre rule"
          className="h-full"
        /> */}
        <div className="h-full">
          {width < breakpoints.lg ? (
            <RuleMobile className="h-full" />
          ) : (
            <Rule className="h-full" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
