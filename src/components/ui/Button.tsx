import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import classNames from "classnames";
import { spaceMono } from "@src/config/fonts";

const Button: FC<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={classNames(
        "Button relative flex items-center justify-center bg-secondary shadow-block border border-primary cursor-pointer",
        spaceMono.className,
        "disabled:cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
