import { Space_Mono } from "@next/font/google";
import classNames from "classnames";
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  fallback: ["system-ui", "arial"],
});

const Button: FC<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={classNames(
        spaceMono.className,
        "Button relative flex items-center justify-center bg-secondary shadow-button border border-primary cursor-pointer",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
