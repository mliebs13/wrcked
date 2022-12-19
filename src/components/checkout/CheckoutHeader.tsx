import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/router";
import { FC } from "react";

const CheckoutHeader: FC = () => {
  const router = useRouter();

  return (
    <header className="w-full h-fit max-w-7xl flex justify-center items-center mx-auto mb-12">
      {/* back button */}
      <button
        className="absolute top-12 left-10 2xl:left-20 flex items-center"
        onClick={() => router.push("/products")}
      >
        <ChevronLeftIcon width={24} height={24} />
        <span className="text-base font-bold ml-1">BACK</span>
      </button>
      <h1 className="text-base tracking-wide underline">WRCKED CHECKOUT</h1>
    </header>
  );
};

export default CheckoutHeader;
