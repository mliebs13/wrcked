import { FC, SVGProps } from "react";

const DotSolid: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 4 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-1 h-1"
    >
      <circle cx="1.52734" cy="2.07849" r="1.5" className="fill-primary" />
    </svg>
  );
};

export default DotSolid;
