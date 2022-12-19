import { Space_Mono } from "@next/font/google";
import classNames from "classnames";
import { InputHTMLAttributes, DetailedHTMLProps, FC } from "react";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  fallback: ["system-ui", "arial"],
});

const Input: FC<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = ({ children, className, ...props }) => {
  return (
    <input
      {...props}
      className={classNames(
        "Input bg-transparent font-normal border border-primary outline-none",
        spaceMono.className,
        className
      )}
    />
  );
};

export default Input;
