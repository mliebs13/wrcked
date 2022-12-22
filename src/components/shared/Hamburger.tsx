import classNames from "classnames";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

const Hamburger: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ className, ...props }) => {
  return (
    <button
      className={classNames(
        "w-6 h-fit flex flex-col justify-center cursor-pointer",
        className
      )}
      {...props}
    >
      <span className="h-[3px] w-full bg-primary rounded-[4rem] mb-[7px]" />
      <span className="h-[3px] w-full bg-primary rounded-[4rem] mb-[7px]" />
      <span className="h-[3px] w-full bg-primary rounded-[4rem]" />
    </button>
  );
};

export default Hamburger;
