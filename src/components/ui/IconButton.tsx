import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import Button from "./Button";
import classNames from "classnames";
import AltButton from "./AltButton";

type IconButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  alt?: boolean;
};

const IconButton: FC<IconButtonProps> = ({
  children,
  className,
  alt = false,
}) => {
  return alt ? (
    <AltButton className={classNames("IconButton", "p-4", className)}>
      {children}
    </AltButton>
  ) : (
    <Button className={classNames("IconButton", "p-4", className)}>
      {children}
    </Button>
  );
};

export default IconButton;
