import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/router";
import { FC } from "react";

const CheckoutHeader: FC = () => {
  const router = useRouter();

  return (
    <header className="CheckoutHeader relative w-full h-fit max-w-6xl flex justify-center items-center mx-auto mb-12">
      {/* back button */}
      <button
        className="absolute left-0 top-0 flex items-center text-primary"
        onClick={() => router.back()}
      >
        <ChevronLeftIcon width={24} height={24} />
        <span className="text-base font-bold ml-1">BACK</span>
      </button>
      <h1 className="text-base tracking-wide underline">WRCKED CHECKOUT</h1>
    </header>
  );
};

export default CheckoutHeader;
