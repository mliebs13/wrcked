import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import Image from "next/image";
import classNames from "classnames";

import whiteLogoImage from "@public/images/wrcked.png";
import grayLogoImage from "@public/images/wrcked-gray.png";

type LogoProps = {
  size?: "sm" | "lg";
  color?: "white" | "gray";
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Logo: FC<LogoProps> = ({ size = "sm", color = "white", ...props }) => {
  return (
    <div className="Logo" {...props}>
      <Image
        src={color === "white" ? whiteLogoImage : grayLogoImage}
        alt="Wrcked logo"
        width={350}
        className={classNames("h-auto", {
          "w-[85px] lg:w-[100px]": size === "sm",
          "w-[300px] lg:w-[350px]": size === "lg",
        })}
      />
    </div>
  );
};

export default Logo;
