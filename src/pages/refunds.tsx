import { NextPage } from "next";
import { useRouter } from "next/router";
import { Space_Mono } from "@next/font/google";
import classNames from "classnames";
import Nav from "@src/components/shared/Nav";
import AltButton from "@src/components/ui/AltButton";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  fallback: ["system-ui", "arial"],
});

const Refunds: NextPage = () => {
  const router = useRouter();

  return (
    <div
      className={classNames(
        spaceMono.className,
        "min-h-screen w-full flex flex-col items-center justify-center py-8 sm:py-12 px-3 sm:py-10 2xl:px-20"
      )}
    >
      <div className="w-full flex flex-col items-center mb-12">
        <h1 className="font-bold text-[120px] text-primary text-center leading-snug tracking-wide mb-4">
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
      <div className="w-full bg-primary h-[2px] my-6" />

      <Nav />
    </div>
  );
};

export default Refunds;
