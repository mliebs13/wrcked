import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import Image from "next/image";

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
        width={size === "sm" ? 100 : 350}
        // height={size === "sm" ? 14.99 : 52.275}
      />
    </div>
  );
};

export default Logo;
