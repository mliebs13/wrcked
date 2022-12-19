import { FC } from "react";
import Image from "next/image";

import meterRuleImage from "@public/images/meterRule.svg";

type ProductImagesProps = {
  gif: any;
  image: any;
};

const ProductImages: FC<ProductImagesProps> = ({ gif, image }) => {
  return (
    <div className="relative flex justify-between py-16 px-20 mx-auto">
      <div className="w-fit flex items-end self-start justify-center px-8 mx-auto">
        <Image
          src={gif}
          alt="product gif"
          height={350}
          className="w-[45%] mr-14"
        />
        <Image
          src={image}
          alt="product image"
          height={550}
          className="w-[54%] pb-24"
        />
      </div>

      <p className="min-w-fit text-sm font-bold -mt-24 mr-4">12IN / 30cm</p>

      <div className="-mt-32 z-[8] overflow-hidden">
        <Image
          src={meterRuleImage}
          alt="metre rule"
          width={23.75}
          height={975}
          className="bg-white"
        />
      </div>
    </div>
  );
};

export default ProductImages;
