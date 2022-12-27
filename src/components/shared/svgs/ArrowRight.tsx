import { FC, SVGProps } from "react";

const ArrowRight: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <rect width="256" height="256" className="fill-none" />
      <line
        x1="40"
        x2="216"
        y1="128"
        y2="128"
        className="fill-none stroke-secondary"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
      <polyline
        className="fill-none stroke-secondary"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
        points="144 56 216 128 144 200"
      />
    </svg>
  );
};

export default ArrowRight;
