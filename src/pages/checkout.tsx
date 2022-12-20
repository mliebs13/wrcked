import { useState } from "react";
import { NextPage } from "next";
import Image from "next/image";
import { Space_Mono } from "@next/font/google";
import Link from "next/link";
import classNames from "classnames";
import AltButton from "@components/ui/AltButton";
import CheckoutHeader from "@components/checkout/CheckoutHeader";
import Checkbox from "@components/ui/Checkbox";
import Input from "@components/ui/Input";
import Select from "@components/ui/Select";

import productImage from "@public/images/productImage.png";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  fallback: ["system-ui", "arial"],
});

const countries = [
  "United States",
  "Netherlands",
  "Jamaica",
  "France",
  "Portugal",
  "Brazil",
  "Belgium",
];

const states = [
  "Connecticut",
  "Alaska",
  "Atalanta",
  "Massachusetts",
  "Texas",
  "New York",
  "Washington",
];

const Checkout: NextPage = () => {
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [rememberData, setRememberData] = useState(false);
  const [country, setCountry] = useState(countries[0].toUpperCase());
  const [cardCountry, setCardCountry] = useState(countries[0].toUpperCase());
  const [state, setState] = useState(states[0].toUpperCase());
  const [paymentMethod, setPaymentMethod] = useState<"card" | "other">("card");

  return (
    <main
      style={{
        backgroundSize: "14px 26px",
      }}
      className={classNames(
        "Product relative w-full min-h-screen flex flex-col items-center bg-gray py-12 px-10 2xl:px-20",
        spaceMono.className
      )}
    >
      <CheckoutHeader />

      {/* content */}
      <div className="w-full max-w-6xl flex justify-between mx-auto">
        {/* left - product summary */}
        <div className="w-[48%] flex flex-col justify-between mr-[4%]">
          <div>
            <h2 className="text-base tracking-wide mb-4">PRODUCT SUMMARY</h2>

            <div className="flex w-full border border-primary mb-4">
              {/* image */}
              <div className="w-fit p-4 border-r-primary border-r">
                <Image src={productImage} alt="product image" width={275} />
              </div>

              {/* summary */}
              <div className="w-full">
                <div className="px-4 py-2 border-b border-b-primary">
                  <p className="text-base font-bold mb-1">Product 1</p>
                  <p className="text-base">QUANTITY: 1</p>
                </div>
                <div className="px-4 py-2 border-b border-b-primary">
                  <p className="flex justify-between text-base mb-1">
                    <span>SUBTOTAL</span>
                    <span>$450.00</span>
                  </p>
                  <p className="flex justify-between text-base mb-1">
                    <span>SHIPPING</span>
                    <span>FREE</span>
                  </p>
                  <p className="flex justify-between text-base">
                    <span>TAXES</span>
                    <span>FREE</span>
                  </p>
                </div>
                <div className="px-4 py-2">
                  <p className="flex justify-between text-base font-bold">
                    <span>TOTAL</span>
                    <span>$450.00</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <Checkbox
                checked={agreeToTerms}
                handleClick={() => setAgreeToTerms(!agreeToTerms)}
              />
              <p className="text-darkGray text-sm ml-2">
                I AGREE WITH THE TERMS
              </p>
            </div>
          </div>

          <div>
            <Link
              href="/terms-of-service"
              className="text-darkGray text-base mr-4"
            >
              TERMS
            </Link>
            <Link href="/privacy-policy" className="text-darkGray text-base">
              PRIVACY
            </Link>
          </div>
        </div>

        {/* right - shipping & payment details */}
        <div className="w-[48%] flex flex-col">
          <div className="mb-6">
            <h2 className="text-base tracking-wide mb-4">
              CONTACT INFORMATION
            </h2>

            <div>
              <Input
                placeholder="PHONE NUMBER"
                className="w-full text-base px-4 py-3"
              />
              <Input placeholder="EMAIL" className="w-full px-4 py-3" />
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-base tracking-wide mb-4">SHIPPING ADDRESS</h2>

            <div>
              <Input
                placeholder="NAME"
                className="w-full text-base px-4 py-3"
              />
              <Select
                placeholder="EMAIL"
                options={countries.map((c) => c.toUpperCase())}
                label="SELECT COUNTRY"
                selected={country}
                setSelected={setCountry}
                className="text-base px-4 py-3"
              />
              <Input
                placeholder="ADDRESS LINE 1"
                className="text-base w-full px-4 py-3"
              />
              <Input
                placeholder="ADDRESS LINE 2"
                className="text-base w-full px-4 py-3"
              />
              <Input
                placeholder="CITY"
                className="w-full text-base px-4 py-3"
              />
              <div className="w-full flex mb-4">
                <Input
                  placeholder="ZIP"
                  className="w-[calc(50%-2px)] text-base px-4 py-3 mr-1"
                />
                <Select
                  placeholder="STATE"
                  options={states.map((c) => c.toUpperCase())}
                  label="SELECT STATE"
                  selected={state}
                  setSelected={setState}
                  className="w-[calc(50%-2px)] text-base px-4 py-3"
                />
              </div>
              <div className="flex items-center">
                <Checkbox
                  checked={rememberData}
                  handleClick={() => setRememberData(!rememberData)}
                />
                <p className="text-darkGray text-sm ml-2">REMEMBER MY DATA</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-base tracking-wide mb-4">PAYMENT DETAILS</h2>

            <div className="w-full">
              <div className="border border-primary flex justify-between">
                {/* card */}
                <div
                  className={classNames(
                    "group w-1/2 flex items-center py-3 px-4 cursor-pointer",
                    {
                      "bg-primary text-lightGray": paymentMethod === "card",
                      "bg-transparent text-primary": paymentMethod !== "card",
                    }
                  )}
                  onClick={() => setPaymentMethod("card")}
                >
                  <svg
                    viewBox="0 0 39 30"
                    width="32"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 4.875C0 3.58207 0.513615 2.34209 1.42785 1.42785C2.34209 0.513614 3.58207 0 4.875 0H34.125C35.4179 0 36.6579 0.513614 37.5721 1.42785C38.4864 2.34209 39 3.58207 39 4.875V24.375C39 25.6679 38.4864 26.9079 37.5721 27.8221C36.6579 28.7364 35.4179 29.25 34.125 29.25H4.875C3.58207 29.25 2.34209 28.7364 1.42785 27.8221C0.513615 26.9079 0 25.6679 0 24.375V4.875ZM4.875 2.4375C4.22853 2.4375 3.60855 2.69431 3.15143 3.15143C2.69431 3.60855 2.4375 4.22853 2.4375 4.875V7.3125H36.5625V4.875C36.5625 4.22853 36.3057 3.60855 35.8486 3.15143C35.3915 2.69431 34.7715 2.4375 34.125 2.4375H4.875ZM36.5625 12.1875H2.4375V24.375C2.4375 25.0215 2.69431 25.6415 3.15143 26.0986C3.60855 26.5557 4.22853 26.8125 4.875 26.8125H34.125C34.7715 26.8125 35.3915 26.5557 35.8486 26.0986C36.3057 25.6415 36.5625 25.0215 36.5625 24.375V12.1875Z"
                      className={classNames({
                        "fill-lightGray": paymentMethod === "card",
                        "fill-primary": paymentMethod !== "card",
                      })}
                    />
                    <path
                      d="M4.87497 19.5C4.87497 18.8535 5.13178 18.2335 5.5889 17.7764C6.04602 17.3193 6.66601 17.0625 7.31247 17.0625H9.74997C10.3964 17.0625 11.0164 17.3193 11.4735 17.7764C11.9307 18.2335 12.1875 18.8535 12.1875 19.5V21.9375C12.1875 22.584 11.9307 23.204 11.4735 23.6611C11.0164 24.1182 10.3964 24.375 9.74997 24.375H7.31247C6.66601 24.375 6.04602 24.1182 5.5889 23.6611C5.13178 23.204 4.87497 22.584 4.87497 21.9375V19.5Z"
                      className={classNames({
                        "fill-lightGray": paymentMethod === "card",
                        "fill-primary": paymentMethod !== "card",
                      })}
                    />
                  </svg>

                  <span className="text-base ml-2">CARD</span>
                </div>

                {/* apply pay */}
                <div
                  className={classNames(
                    "w-1/2 flex items-center py-3 px-4 transition-colors cursor-pointer",
                    {
                      "bg-primary text-white": paymentMethod === "other",
                      "bg-transparent text-primary": paymentMethod !== "other",
                    }
                  )}
                  onClick={() => setPaymentMethod("other")}
                >
                  <svg
                    width="42px"
                    height="29.99px"
                    viewBox="0 0 55 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.85 0C2.64225 0 0 2.64225 0 5.85V33.15C0 36.3577 2.64225 39 5.85 39H48.75C51.9577 39 54.6 36.3577 54.6 33.15V5.85C54.6 2.64225 51.9577 0 48.75 0H5.85ZM5.85 3.9H48.75C49.8537 3.9 50.7 4.7463 50.7 5.85V33.15C50.7 34.2537 49.8537 35.1 48.75 35.1H5.85C4.7463 35.1 3.9 34.2537 3.9 33.15V5.85C3.9 4.7463 4.7463 3.9 5.85 3.9ZM17.5462 9.75C16.6394 9.75 15.6043 10.2674 14.9335 11.0221C14.4148 11.648 13.8511 12.6422 14.0461 13.6348C14.9762 13.744 15.9919 13.1612 16.575 12.4046C17.2224 11.7143 17.5891 10.7425 17.5462 9.75ZM21.45 13.65V25.35H23.2667V21.3434H25.7956C28.0869 21.3434 29.707 19.7665 29.707 17.4967C29.707 15.2054 28.1073 13.65 25.8375 13.65H21.45ZM11.3839 14.6707C9.35784 14.6707 7.8 16.4449 7.8 18.9896C7.8 22.3046 10.1292 25.35 11.5819 25.35C12.4594 25.35 12.781 24.7597 13.9471 24.7597C15.0215 24.7597 15.3596 25.35 16.2741 25.35C18.0116 25.35 19.4454 21.8207 19.5 21.6062C19.2133 21.4619 17.5442 20.6757 17.5462 18.7764C17.5462 16.9317 19.0698 16.1036 19.142 16.0685C18.2996 14.8146 16.9733 14.6707 16.4722 14.6707C15.308 14.6707 14.2895 15.2991 13.7338 15.2991C13.1605 15.2991 12.316 14.6707 11.3839 14.6707ZM23.2667 15.1849H25.3614C26.939 15.1849 27.8484 16.0264 27.8484 17.4967C27.8484 18.967 26.939 19.8313 25.3614 19.8313H23.2667V15.1849ZM33.9879 16.6359C32.0652 16.6359 30.6373 17.7392 30.5944 19.2524H32.2359C32.3666 18.5387 33.0335 18.0642 33.9422 18.0642C35.0654 18.0642 35.6751 18.5827 35.6751 19.5343V20.1817L33.4052 20.3341C31.3089 20.4647 30.1603 21.3293 30.1603 22.8211C30.1603 24.3343 31.3281 25.35 33.0129 25.35C34.1575 25.35 35.2203 24.7657 35.6941 23.857H35.736V25.2624H37.4232V19.4276C37.4232 17.7409 36.0627 16.6359 33.9879 16.6359ZM38.1697 16.7464L41.2395 25.2853L41.0871 25.8032C40.8063 26.669 40.3517 27.0144 39.5522 27.0144C39.4021 27.0144 39.1225 26.9915 39.0152 26.9915V28.3969C39.1244 28.4183 39.5739 28.4388 39.7046 28.4388C41.4771 28.4388 42.321 27.7475 43.0562 25.7156L46.2325 16.7464H44.393L42.2563 23.6628H42.2106L40.074 16.7464H38.1697ZM35.6751 21.4119V22.0632H35.6713C35.6713 23.1649 34.7423 23.9408 33.5118 23.9408C32.5388 23.9408 31.9351 23.4891 31.9351 22.7754C31.9351 22.0402 32.5176 21.6058 33.6642 21.5414L35.6751 21.4119Z"
                      className={classNames({
                        "fill-lightGray": paymentMethod === "other",
                        "fill-primary": paymentMethod !== "other",
                      })}
                    />
                  </svg>

                  <span className="text-base ml-2">APPLE PAY</span>
                </div>
              </div>
              <Input
                placeholder="1234 1234 1234 1234"
                className="w-full text-base px-4 py-3 mr-1"
              />
              <div className="w-full flex mb-4">
                <Input
                  placeholder="MM / YY"
                  className="w-[calc(50%-2px)] text-base px-4 py-3 mr-1"
                />
                <Input
                  placeholder="MM / YY"
                  className="w-[calc(50%-2px)] text-base px-4 py-3 mr-1"
                />
              </div>
              <div className="w-full flex mb-4">
                <Select
                  placeholder="COUNTRY"
                  options={countries.map((c) => c.toUpperCase())}
                  label="SELECT COUNTRY"
                  selected={cardCountry}
                  setSelected={setCardCountry}
                  className="w-[calc(50%-2px)] text-base px-4 py-3"
                />
                <Input
                  placeholder="90210"
                  className="w-[calc(50%-2px)] text-base px-4 py-3 mr-1"
                />
              </div>
            </div>
          </div>

          <AltButton className="w-full py-2 text-2xl font-bold">PAY</AltButton>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
