import { FC } from "react";

import Logo from "@components/shared/Logo";
import classNames from "classnames";

type HeaderProps = {
  productName?: string;
};

const Header: FC<HeaderProps> = ({ productName }) => {
  return (
    <header
      className={classNames(
        "relative w-full items-center justify-center h-[var(--header-height)] py-6 lg:py-8 px-3 sm:px-[var(--base-padding)] z-[8]"
        // "after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:content-[''] after:bg-primary after:block"
      )}
    >
      <div className="w-full flex justify-center lg:justify-start items-center mx-auto">
        <Logo size="lg" />

        {productName && (
          <p className="absolute bottom-8 left-1/2 text-sm text-primary capitalize -translate-y-1/4">
            {productName}
          </p>
        )}
      </div>
    </header>
  );
};

export default Header;
