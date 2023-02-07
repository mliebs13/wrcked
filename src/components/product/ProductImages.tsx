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
  verticalDimension: string;
  handleClick: string | Dispatch<SetStateAction<boolean>>;
};

const ProductImages: FC<ProductImagesProps> = ({
  gif,
  image,
  verticalDimension,
  handleClick,
}) => {
  const router = useRouter();
  const { width } = useWindowSize();

  return (
    <div
      className="ProductImages relative w-[92vw] sm:w-[80vw] lg:w-[76vw] lg:max-w-[1640px] h-full flex justify-center lg:justify-between pb-5 pt-5 lg:pt-10 px-10 lg:px-12 ml-auto mx-auto"
      data-scroll
      data-scroll-speed="5"
      data-scroll-sticky
      data-scroll-target="#stick"
    >
      <div className="flex flex-[0.8] sm:flex-[0.65] lg:flex-[0.825] h-full lg:max-h-[650px] max-w-[256px] lg:max-w-full items-end self-center lg:self-start justify-center pt-6 lg:pt-0 -mr-16 lg:ml-0 lg:mr-0">
        {width >= breakpoints.lg && (
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
              className="hidden lg:block w-auto h-[46vh] max-h-[395px] lg:min-h-[250px] -mb-10"
            />
          </motion.div>
        )}
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
          className="h-full"
        >
          <Image
            src={image}
            alt="product image"
            width={519}
            height={550}
            className="w-auto h-auto lg:h-[70vh] max-h-[290px] lg:max-h-[96%] min-h-[135px] lg:min-h-[400px] lg:pb-4"
          />
        </motion.div>
      </div>

      <div className="bar flex flex-[0.3] h-[390px] lg:h-[calc(100%+2.5rem+var(--box-height)+var(--name-box-height))] lg:h-[calc(100%+2.5rem+var(--box-height)+var(--name-box-height))]- lg:max-h-[760px] min-h-[150px] lg:min-h-auto justify-self-end lg:-mt-[calc(2.5rem+var(--box-height)+var(--name-box-height))] -ml-6 sm:-ml-3 lg:ml-0 z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="min-w-[140px] lg:min-w-[145px] lg:max-w-[135px] w-max h-fit bg-secondary text-sm text-right font-bold mt-2 lg:mt-[calc(var(--name-box-height)+var(--box-height)/2+1rem)] mr-3.5"
        >
          <p className="w-max">{verticalDimension}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="h-full min-w-fit"
        >
          <Rule className="rule-desktop w-auto h-full bg-secondary px-0.5 rotate-180" />
          <RuleMobile className="rule-mobile w-auto h-full bg-secondary" />
        </motion.div>
      </div>
    </div>
  );
};

export default ProductImages;
