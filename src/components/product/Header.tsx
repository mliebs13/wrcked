import { FC } from "react";

import Logo from "@components/shared/Logo";
import classNames from "classnames";

const Header: FC = () => {
  return (
    <header
      className={classNames(
        "relative w-full h-[var(--header-height)] items-center justify-center py-6 lg:py-8 px-3 sm:px-[var(--base-padding)] z-[8]",
        "after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:content-[''] after:bg-primary after:block"
        // "before:absolute before:left-0 before:bottom-[0.5px] before:w-full before:h-0.5 before:content-[''] before:bg-primary before:block before:z-[2]"
      )}
    >
      <div className="w-full flex justify-center lg:justify-start items-center mx-auto">
        <Logo size="lg" />
      </div>
    </header>
  );
};

export default Header;
