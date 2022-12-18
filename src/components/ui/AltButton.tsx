import { AddSolid } from "@components/shared/svgs";
import classNames from "classnames";
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import Button from "./Button";

const AltButton: FC<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ children, className, ...props }) => {
  return (
    <Button {...props} className={classNames("AltButton", className)}>
      {children}
      <span className="absolute left-1 top-1">
        <AddSolid />
      </span>
      <span className="absolute right-1 top-1">
        <AddSolid />
      </span>
      <span className="absolute left-1 bottom-1">
        <AddSolid />
      </span>
      <span className="absolute right-1 bottom-1">
        <AddSolid />
      </span>
    </Button>
  );
};

export default AltButton;
