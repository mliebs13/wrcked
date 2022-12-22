import { FC } from "react";
import { TailSpin } from "react-loader-spinner";

type SpinnerProps = {
  size: "sm" | "md" | "lg";
  color?: string;
};

const Spinner: FC<SpinnerProps> = ({ size, color = "#5c5c5e" }) => {
  return (
    <TailSpin
      width={size === "sm" ? "16" : size === "md" ? "24" : "32"}
      height={size === "sm" ? "16" : size === "md" ? "24" : "32"}
      color={color}
      ariaLabel="tail-spin-loading"
      radius="1"
      visible={true}
    />
  );
};

export default Spinner;
