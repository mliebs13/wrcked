import { FC } from "react";

import Logo from "@components/shared/Logo";

const Header: FC = () => {
  return (
    <header className="w-full h-[110px] lg:h-[132px] items-center justify-center py-6 lg:py-8 px-10 2xl:px-20 border-b-primary border-b-2 z-10">
      <div className="w-full flex justify-center lg:justify-start items-center mx-auto">
        <Logo size="lg" />
      </div>
    </header>
  );
};

export default Header;
