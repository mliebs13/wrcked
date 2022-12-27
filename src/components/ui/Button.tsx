import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import classNames from "classnames";
import { spaceMono } from "@src/config/fonts";

const Button: FC<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ children, className, ...props }) => {
  return (
    <button
      className={classNames(
        "Button relative flex items-center justify-center bg-secondary shadow-block border border-primary cursor-pointer transition-all",
        spaceMono.className,
        "disabled:cursor-not-allowed",
        "hover:!shadow-blockHover hover:translate-x-[1px] hover:translate-y-[1px] will-change-transform",
        className
      )}
      {...(props as any)}
    >
      {children}
    </button>
  );
};

export default Button;
