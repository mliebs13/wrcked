import { FC } from "react";

import Logo from "@components/shared/Logo";

const Header: FC = () => {
  return (
    <header className="w-full h-[var(--header-height)] items-center justify-center py-6 lg:py-8 px-3 sm:px-[var(--base-padding)] border-b-primary border-b-2 z-10">
      <div className="w-full flex justify-center lg:justify-start items-center mx-auto">
        <Logo size="lg" />
      </div>
    </header>
  );
};

export default Header;
