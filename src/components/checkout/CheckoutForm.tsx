import { FC, SetStateAction, Dispatch, useState } from "react";
import {
  AddressElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import AltButton from "../ui/AltButton";
import Spinner from "../shared/Spinner";
import Toast from "../ui/Toast";
import { ToastType, Shipping } from "@src/types";
import { getBaseUrl } from "@src/utils";
import classNames from "classnames";

type CheckoutFormType = {
  id: string;
  total: number;
  setShippingInfo: Dispatch<SetStateAction<Shipping>>;
  shippingInfo: Shipping;
  agreedToTerms: boolean;
};

const CheckoutForm: FC<CheckoutFormType> = ({
  id,
  total,
  setShippingInfo,
  shippingInfo,
  agreedToTerms,
}) => {
  const [toastOpen, setToastOpen] = useState(false);
  const [toastContent, setToastContent] = useState("");
  const [toastType, setToastType] = useState<ToastType>("neutral");
  const [isProcessing, setIsProcessing] = useState(false);
  const [addressLoading, setAddressLoading] = useState(true);
  const [paymentLoading, setPaymentLoading] = useState(true);
  const [addressLoadError, setAddressLoadError] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  /*useEffect(() => {
    if (stripe && elements) {
      setApplePayLoading(true);

      const pr = stripe.paymentRequest({
        currency: "usd",
        country: "US",
        requestPayerEmail: true,
        requestPayerName: true,
        total: {
          amount: total,
          label: "Wrcked",
        },
        disableWallets: ["googlePay"],
      });

      pr.canMakePayment().then((result) => {
        if (result) {
          setPaymentRequest(pr);
        } else {
          setApplePayError("Apple pay is not available for payment");
        }

        setApplePayLoading(false);
      });
    } else {
      return;
    }
  }, [stripe || elements]);*/

  const openToast = (text: string, type: ToastType) => {
    setToastOpen(false);
    setTimeout(() => {
      setToastType(type);
      setToastContent(text);
      setToastOpen(true);
    }, 150);
  };

  const handleCardPayment = async () => {
    if (stripe && elements) {
      if (email.trim() === "") {
        setEmailError("Your email is incomplete.");
        return openToast("Your email is incomplete.", "error");
      }

      if (
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          email.trim()
        )
      ) {
        setEmailError("Your email is invalid.");
        return openToast("Your email is invalid.", "error");
      }

      if (emailError) {
        return openToast(emailError, "error");
      }

      if (!agreedToTerms) {
        openToast(
          "You must agree to our terms before proceeding with payment",
          "error"
        );

        return document.querySelector(".summary")?.scrollIntoView({
          behavior: "smooth",
        });
      }

      try {
        setIsProcessing(true);

        const { error } = await stripe.confirmPayment({
          elements: elements,
          confirmParams: {
            shipping: {
              address: shippingInfo.address,
              name: shippingInfo.name,
              phone: shippingInfo.phone,
            },
            payment_method_data: {
              billing_details: {
                email,
              },
            },
            receipt_email: email,
            return_url: `${getBaseUrl()}/checkout-success/${id}?t=${total}&q=${1}`,
          },
        });

        if (error) {
          console.log("payment error occurred: ", error);

          error.code === "incomplete"
            ? openToast("Payment cancelled", "error")
            : openToast(
                error?.message ??
                  "An error occurred while processing your payment",
                "error"
              );
        } else {
          openToast("Payment successful", "success");
        }
      } catch (err: any) {
        console.log("payment error occurred: ", err);

        openToast("An error occurred while processing your payment", "error");
      } finally {
        setIsProcessing(false);
      }
    } else {
      openToast("An error occurred while processing your payment", "error");
    }
  };

  return (
    <>
      <Toast
        open={toastOpen}
        setOpen={setToastOpen}
        duration={10000}
        content={toastContent}
        position="bottom"
        type={toastType}
      />

      {/* shipping details */}
      <div className="w-full flex flex-col mb-4">
        <h2 className="text-base tracking-wide mb-2">SHIPPING DETAILS</h2>
        <AddressElement
          className="w-full mb-3"
          options={{
            allowedCountries: ["America"],
            mode: "shipping",
            display: {
              name: "full",
            },
            fields: {
              phone: "always",
            },
            defaultValues: {
              name: "",
              address: {
                line1: "",
                line2: "",
                city: "",
                state: "CA",
                postal_code: "",
                country: "US",
              },
              phone: "",
            },
            validation: {
              phone: {
                required: "always",
              },
            },
          }}
          onChange={({ value }) => {
            setShippingInfo({
              name: value.name,
              phone: value?.phone ?? "",
              address: {
                city: value.address.city,
                line1: value.address.line1,
                line2: value.address.line2 ?? "",
                postal_code: value.address.postal_code,
                state: value.address.state,
                country: value.address.country,
              },
            });
          }}
          onLoaderStart={() => setAddressLoading(true)}
          onReady={() => setAddressLoading(false)}
          onLoadError={() => setAddressLoadError(true)}
        />
        {!addressLoading && !addressLoadError && (
          <div className="w-full flex flex-col items-start">
            {/* email */}
            <label className="text-[12px] sm:text-[13px] mb-1 leading-[1.15]">
              Email
            </label>
            <input
              type="email"
              value={email}
              placeholder="Your email"
              className={classNames(
                "pay-input w-full bg-transparent text-[13px] sm:text-[15px] border border-primary p-4 focus:outline-none",
                {
                  error: !!emailError,
                }
              )}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              onBlur={() => {
                emailError && setEmailError(null);

                if (email.trim() === "") {
                  setEmailError("Your email is incomplete.");
                }
                if (
                  !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                    email.trim()
                  )
                ) {
                  setEmailError("Your email is invalid.");
                }
              }}
              onInput={() => {
                emailError && setEmailError(null);
              }}
            />
            {emailError && (
              <span
                className={classNames(
                  "text-[12px] sm:text-[13px] text-danger leading-[1.15] mt-1",
                  {
                    emailError: "",
                  }
                )}
              >
                {emailError}
              </span>
            )}
          </div>
        )}
        {addressLoading && (
          <div className="w-full flex justify-center items-center py-4 sm:py-6">
            <Spinner size="md" />
          </div>
        )}
      </div>

      {/* payment details */}
      <div>
        <h2 className="text-base tracking-wide mb-2">PAYMENT DETAILS</h2>

        {/* navigation */}
        {/* <div className="w-full">
          <div className="border border-primary flex justify-between mb-3">
            <div
              className={classNames(
                "group w-1/2 flex items-center text-center p-3 cursor-pointer",
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

            <div
              className={classNames(
                "w-1/2 flex items-center text-center p-3 transition-colors cursor-pointer",
                {
                  "bg-primary text-secondary": paymentMethod === "other",
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
        </div> */}

        {/* payment methods - card & apple pay */}
        <div className="w-full">
          <PaymentElement
            className="w-full mb-3"
            options={{
              business: {
                name: "Wrcked Art",
              },
              // paymentMethodOrder: ["card", "applePay", "googlePay"],
              wallets: {
                applePay: "auto",
                googlePay: "auto",
              },
            }}
            onLoaderStart={() => setPaymentLoading(true)}
            onReady={() => setPaymentLoading(false)}
          />
          {paymentLoading && (
            <div className="w-full flex justify-center items-center py-4 sm:py-6">
              <Spinner size="md" />
            </div>
          )}
          {!paymentLoading && (
            <>
              <AltButton
                className="w-full min-h-[56px] py-2 text-2xl font-bold mb-3"
                onClick={handleCardPayment}
                disabled={isProcessing}
              >
                {isProcessing ? <Spinner size="md" /> : "PAY"}
              </AltButton>
              <p className="text-sm font-bold text-danger text-center">
                FINAL SALE. NO RETURNS OR EXCHANGES ACCEPTED.
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CheckoutForm;
