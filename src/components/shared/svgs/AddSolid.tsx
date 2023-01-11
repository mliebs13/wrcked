import { FC, SVGProps } from "react";

const AddSolid: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-1.5 h-1.5"
      {...props}
    >
      <path
        d="M8.35714 3.53571H5.46429V0.642857C5.46429 0.287879 5.17641 0 4.82143 0H4.17857C3.82359 0 3.53571 0.287879 3.53571 0.642857V3.53571H0.642857C0.287879 3.53571 0 3.82359 0 4.17857V4.82143C0 5.17641 0.287879 5.46429 0.642857 5.46429H3.53571V8.35714C3.53571 8.71212 3.82359 9 4.17857 9H4.82143C5.17641 9 5.46429 8.71212 5.46429 8.35714V5.46429H8.35714C8.71212 5.46429 9 5.17641 9 4.82143V4.17857C9 3.82359 8.71212 3.53571 8.35714 3.53571Z"
        className="fill-primary"
      />
    </svg>
  );
};

export default AddSolid;
