import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import Image from "next/image";
import useWindowSize from "@src/hooks/useWindowSize";

import whiteLogoImage from "@public/images/wrcked.png";
import grayLogoImage from "@public/images/wrcked-gray.png";
import { breakpoints } from "@src/utils";

type LogoProps = {
  size?: "sm" | "lg";
  color?: "white" | "gray";
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Logo: FC<LogoProps> = ({ size = "sm", color = "white", ...props }) => {
  const { width } = useWindowSize();

  return (
    <div className="Logo" {...props}>
      <Image
        src={color === "white" ? whiteLogoImage : grayLogoImage}
        alt="Wrcked logo"
        width={
          size === "sm"
            ? width >= breakpoints.sm
              ? 100
              : 85
            : width >= breakpoints.lg
            ? 350
            : 300
        }
        // height={size === "sm" ? 14.99 : 52.275}
      />
    </div>
  );
};

export default Logo;
