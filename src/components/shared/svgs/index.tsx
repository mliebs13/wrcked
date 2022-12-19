import { FC } from "react";

// solid, regular, light

export const AddSolid: FC = () => {
  return (
    <svg
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-1.5 h-1.5"
    >
      <path
        d="M8.35714 3.53571H5.46429V0.642857C5.46429 0.287879 5.17641 0 4.82143 0H4.17857C3.82359 0 3.53571 0.287879 3.53571 0.642857V3.53571H0.642857C0.287879 3.53571 0 3.82359 0 4.17857V4.82143C0 5.17641 0.287879 5.46429 0.642857 5.46429H3.53571V8.35714C3.53571 8.71212 3.82359 9 4.17857 9H4.82143C5.17641 9 5.46429 8.71212 5.46429 8.35714V5.46429H8.35714C8.71212 5.46429 9 5.17641 9 4.82143V4.17857C9 3.82359 8.71212 3.53571 8.35714 3.53571Z"
        fill="#000000"
      />
    </svg>
  );
};

export const TimesRegular: FC = () => {
  return (
    <svg
      width="39"
      height="39"
      viewBox="0 0 39 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="39" height="39" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_338_8" transform="scale(0.0128205)" />
        </pattern>
        <image
          width="78"
          height="78"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export const DotSolid: FC = () => {
  return (
    <svg
      viewBox="0 0 4 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-1 h-1"
    >
      <circle cx="1.52734" cy="2.07849" r="1.5" fill="#000000" />
    </svg>
  );
};
