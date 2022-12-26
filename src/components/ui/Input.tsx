import { InputHTMLAttributes, DetailedHTMLProps, FC } from "react";
import classNames from "classnames";
import { spaceMono } from "@src/config/fonts";

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
