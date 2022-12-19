import { FC } from "react";

import Logo from "@components/shared/Logo";

const Header: FC = () => {
  return (
    <header className="w-full items-center justify-center py-12 px-10 2xl:px-20 border-b-primary border-b-2 z-10">
      <div className="w-full flex justify-start items-center mx-auto">
        <Logo size="lg" />
      </div>
    </header>
  );
};

export default Header;
