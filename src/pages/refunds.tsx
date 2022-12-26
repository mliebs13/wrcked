import { NextPage } from "next";
import { useRouter } from "next/router";
import classNames from "classnames";
import Nav from "@src/components/shared/Nav";
import AltButton from "@src/components/ui/AltButton";
import { spaceMono } from "@src/config/fonts";

const Refunds: NextPage = () => {
  const router = useRouter();

  return (
    <div
      className={classNames(
        spaceMono.className,
        "min-h-screen w-full flex flex-col items-center justify-center py-8 sm:py-12 px-3 sm:px-10 2xl:px-20"
      )}
    >
      <div className="w-full flex flex-col items-center justify-center mb-12">
        <h1 className="w-fit font-bold text-[72px] sm:text-[96px] lg:text-[120px] text-primary text-left leading-snug tracking-wide mb-4">
          NO <br />
          REFUNDS
        </h1>
      </div>

      <AltButton
        className="w-full max-w-[150px] font-bold text-xl p-4"
        onClick={() => router.back()}
      >
        BACK
      </AltButton>

      {/* line */}
      <div className="w-screen bg-primary h-[2px] my-8" />

      <Nav />
    </div>
  );
};

export default Refunds;
