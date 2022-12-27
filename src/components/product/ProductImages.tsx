import { FC, Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import useWindowSize from "@src/hooks/useWindowDimensions";
import Rule from "@src/components/shared/svgs/Rule";
import RuleMobile from "@src/components/shared/svgs/RuleMobile";
import { breakpoints } from "@src/utils";

type ProductImagesProps = {
  gif: any;
  image: any;
  handleClick: string | Dispatch<SetStateAction<boolean>>;
};

const ProductImages: FC<ProductImagesProps> = ({ gif, image, handleClick }) => {
  const router = useRouter();
  const { width } = useWindowSize();

  return (
    <div className="ProductImages relative w-[92vw] sm:w-[80vw] lg:w-[76vw] max-w-[500px] lg:max-w-[2000px] flex justify-center lg:justify-between pb-5 pt-5 lg:pt-10 px-10 lg:px-12 mx-auto">
      <div className="flex flex-[0.8] sm:flex-[0.6] lg:flex-[0.825] items-end self-center lg:self-start justify-center pt-6 lg:pt-0 -mr-16 lg:ml-4 lg:mr-10">
        <motion.div
          key={gif}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() =>
            typeof handleClick === "string"
              ? router.push(handleClick)
              : handleClick(true)
          }
          className="lg:mr-16"
        >
          <Image
            src={gif}
            alt="product gif"
            width={350}
            height={350}
            priority={true}
            className="hidden lg:block w-auto h-[48vh] max-h-[375px] lg:min-h-[200px]"
          />
        </motion.div>
        <motion.div
          key={image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() =>
            typeof handleClick === "string"
              ? router.push(handleClick)
              : handleClick(true)
          }
        >
          <Image
            src={image}
            priority={true}
            alt="product image"
            width={519}
            height={550}
            className="w-auto h-auto lg:h-[68vh] max-h-[230px] lg:max-h-[575px] min-h-[135px] lg:min-h-[300px] lg:pb-20"
          />
        </motion.div>
      </div>

      <div className="flex flex-[0.2] lg:flex-[0.175] h-[335px] lg:h-[calc(100%+8rem)] lg:max-h-[760px] min-h-[150px] lg:min-h-auto justify-self-end lg:-mt-[calc((2.5rem+var(--box-height)+28px))] z-[8]">
        <p className="min-w-fit w-max h-fit bg-white text-sm font-bold lg:mt-[calc(28px+var(--box-height)/2+1rem)] mr-3">
          12IN / 30cm
        </p>
        <div className="h-full bg-white">
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
