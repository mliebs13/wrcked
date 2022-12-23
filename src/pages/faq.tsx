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

const FAQ: NextPage = () => {
  const router = useRouter();

  return (
    <div
      className={classNames(
        spaceMono.className,
        "min-h-screen w-full flex flex-col items-center justify-center py-8 sm:py-12 px-3 sm:py-10 2xl:px-20"
      )}
    >
      <div className="w-full max-w-4xl flex flex-col mx-auto mb-12">
        <div className="mb-6">
          <h2 className="mb-5 font-bold text-sm">WHAT IS WRCKED ART?</h2>

          <p className="font-bold text-sm">
            WRCKED IS AN AMERICAN ART COLLECTIVE DROPPING LITHOGRAPHS. WE LIKE
            WORKING WITH PIECES AS A MEDIUM BUT MARC JACOBS SUED US LAST TIME WE
            USED THEIRS, SO WE'RE MAKING OUR OWN FROM SCRATCH.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="mb-5 font-bold text-sm">HOW DO I BUY A LITHOGRAPH?</h2>
          <p className="font-bold text-sm">
            ALL LITHOGRAPHS WILL BE AVAILABLE THROUGH DIRECT SALE. OTHER TIMES
            THEY WILL BE AVAILABLE VIA DRAW. AFTER A SUCCESSFUL TRANSACTION, THE
            CHARGES ON YOUR CREDIT CARD WILL APPEAR AS "WRCKEDINC," WRCKED’S
            BUSINESS ENTITY.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="mb-5 font-bold text-sm">HOW DOES THE DRAW WORK?</h2>

          <p className="font-bold text-sm">
            EACH LITHOGRAPH IS MADE AVAILABLE ON OUR WEBSITE USING A DRAW SYSTEM
            TO GIVE EVERYONE AN EQUAL CHANCE TO GET A PAIR. ENTERING THE DRAW
            DOES NOT REQUIRE PURCHASE; WINNING THE DRAW AUTOMATICALLY CHARGES
            YOUR CARD. MAKE SURE YOUR SHIPPING AND BILLING INFORMATION IS
            ACCURATE.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="mb-5 font-bold text-sm">WHY ARE THERE NO REFUNDS?</h2>
          <p className="font-bold text-sm">
            WE MAKE EXTREMELY LIMITED RUNS OF EACH COLLECTION THAT SELL OUT
            QUICKLY. AS SUCH, WE DON'T OFFER REFUNDS OR ALLOW RETURNS OR
            EXCHANGES. ONCE THEY'RE GONE, THEY'RE GONE.
          </p>
        </div>

        <div>
          <h2 className="mb-5 font-bold text-sm">
            HOW OFTEN DO YOU MAKE COLLECTIONS?
          </h2>
          <p className="font-bold text-sm">
            WHEN WE FEEL LIKE IT. FOLLOW OUR INSTAGRAM TO BE NOTIFIED.
          </p>
        </div>
      </div>

      <AltButton
        className="w-full self-center max-w-[150px] font-bold text-xl p-4"
        onClick={() => router.back()}
      >
        BACK
      </AltButton>

      {/* line */}
      <div className="w-full bg-primary h-[2px] my-8" />

      <Nav />
    </div>
  );
};

export default FAQ;
