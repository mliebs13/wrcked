import { Dispatch, FC, SetStateAction } from "react";
import { Space_Mono } from "@next/font/google";
import classNames from "classnames";
import Header from "@src/components/product/Header";
import ProductDetails from "@src/components/product/ProductDetails";
import ProductImages from "@src/components/product/ProductImages";
import { SanityImage } from "@src/types";
import { getSanityImageUrl } from "@src/utils";
import Nav from "@src/components/shared/Nav";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  fallback: ["system-ui", "arial"],
});

type ProductProps = {
  name: string;
  price: number;
  quantity: number;
  image: SanityImage;
  gif: SanityImage;
  total: number;
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  handleBuy: string | Dispatch<SetStateAction<boolean>>;
};

const Product: FC<ProductProps> = ({
  name,
  price,
  quantity,
  image,
  gif,
  total,
  index,
  setIndex,
  handleBuy,
}) => {
  return (
    <div
      style={{
        backgroundSize: "14px 26px",
      }}
      className={classNames(
        "Product relative w-full min-h-screen flex flex-col justify-start bg-dots-primary pb-10",
        spaceMono.className
      )}
    >
      {/* vertical line */}
      <div className="fixed top-0 left-[calc(2.5rem+174px)] 2xl:left-[calc(5rem+174px)] w-0.5 min-h-screen hidden lg:block bg-primary" />

      <Header />

      <div className="relative flex flex-col justify-start">
        {total >= 1 ? (
          <div className="w-full flex flex-col-reverse lg:flex-row min-h-fit lg:min-h-[520px] lg:h-[calc(90vh-132px)] pt-[22.5px] lg:pt-[27px]">
            <ProductDetails
              price={price}
              name={name}
              quantity={quantity}
              totalProducts={total}
              index={index}
              setIndex={setIndex}
              handleBuy={handleBuy}
            />

            {/* more details */}
            <div className="w-full max-h-[420px] flex flex-col justify-end items-center self-end lg:min-w-[218px] 2xl:min-w-[258px] lg:w-[218px] 2xl:w-[258px] px-4 pt-4 pb-5">
              <div className="hidden lg:block mb-12">
                <div className="flex items-center text-sm font-bold mb-2">
                  <div className="h-6 w-8 flex items-center justify-center rounded-[50%] border-primary border-2 mr-2">
                    IT
                  </div>
                  <span className="text-sm"> VU A</span>
                </div>
                <div className="flex items-center text-sm font-bold mb-2">
                  <div className="h-6 w-8 flex items-center justify-center rounded-[50%] border-primary border-2 mr-2">
                    ENG
                  </div>
                  <span className="text-sm"> VU A</span>
                </div>
                <div className="flex items-center text-sm font-bold mb-2">
                  <div className="h-6 w-8 flex items-center justify-center rounded-[50%] border-primary border-2 mr-2">
                    EST
                  </div>
                  <span className="text-sm"> VU A</span>
                </div>
                <div className="flex items-center text-sm font-bold mb-2">
                  <div className="h-6 w-8 flex items-center justify-center rounded-[50%] border-primary border-2 mr-2">
                    DE
                  </div>
                  <span className="text-sm"> VU A</span>
                </div>
                <div className="flex items-center text-sm font-bold">
                  <div className="h-6 w-8 flex items-center justify-center rounded-[50%] border-primary border-2 mr-2">
                    KR
                  </div>
                  <span className="text-sm"> VU A</span>
                </div>
              </div>

              <div className="w-full lg:w-fit flex justify-start items-center lg:justify-center text-left lg:text-center mb-2 lg:mb-6">
                {/* 1 */}
                <div className="mr-2">
                  <svg
                    viewBox="0 0 36 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8"
                  >
                    <path
                      d="M17.7432 13.0043L10.9859 19.5955L8.81523 17.7253C7.52229 16.6143 5.8577 18.5517 7.14668 19.6627L10.2031 22.3C10.7052 22.731 11.4525 22.7073 11.927 22.2447L15.0585 19.1922L14.8924 22.6361L13.2041 26.0404C12.3619 27.5943 14.7659 28.7844 15.4895 27.1712L17.2964 23.5337C17.3755 23.3755 17.4229 23.2015 17.4308 23.0236L17.585 19.8802L19.993 17.5395L23.0494 22.13C23.8441 23.3834 25.7104 22.1418 24.8642 20.924L21.8316 16.3691L27.1852 18.9866C28.5256 19.7339 29.5536 17.6304 28.142 17.0334L19.1745 12.6485C18.6289 12.3796 18.1228 12.6366 17.7432 13.0083V13.0043Z"
                      className="fill-primary"
                    />
                    <path
                      d="M24.0617 14.1031C24.6904 13.079 24.374 11.7387 23.346 11.106C22.322 10.4774 20.9855 10.7976 20.3569 11.8256C20.2185 12.051 20.1275 12.2962 20.0801 12.5413L23.8561 14.3878C23.9312 14.3008 24.0024 14.2059 24.0656 14.1031H24.0617Z"
                      className="fill-primary"
                    />
                    <path
                      d="M35.0239 16.7535L19.5878 1.31732C19.1251 0.838895 18.5558 0.601685 17.8797 0.601685C17.2035 0.601685 16.6025 0.838895 16.1518 1.31732L0.71566 16.7535C0.237235 17.1923 0 17.7657 0 18.4813C0 19.197 0.237235 19.7663 0.71566 20.2289L16.1123 35.586C16.5749 36.104 17.164 36.361 17.8797 36.361C18.5676 36.3728 19.1528 36.1158 19.6273 35.586L35.0239 20.2289C35.4865 19.7663 35.7277 19.1812 35.7395 18.4813C35.7395 17.7657 35.5023 17.1884 35.0239 16.7535ZM17.8797 34.7003L1.6211 18.4853L17.8797 2.24648L34.1184 18.4853L17.8797 34.7003Z"
                      className="fill-primary"
                    />
                    <path
                      d="M19.3111 27.9345L17.7493 25.0876L16.1875 27.9345H19.3111Z"
                      className="fill-primary"
                    />
                    <circle
                      cx="28.2148"
                      cy="21.3947"
                      r="1.5"
                      className="fill-primary"
                    />
                  </svg>
                </div>

                {/* 2 */}
                <div className="mr-2">
                  <svg
                    viewBox="0 0 37 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8"
                  >
                    <path
                      d="M35.3305 16.1518L19.8944 0.715636C19.4318 0.237211 18.8624 0 18.1863 0C17.5102 0 16.9092 0.237211 16.4584 0.715636L1.02228 16.1518C0.543882 16.5907 0.30658 17.164 0.30658 17.8796C0.30658 18.5953 0.543882 19.1646 1.02228 19.6272L16.4189 34.9843C16.8815 35.5023 17.4706 35.7593 18.1863 35.7593C18.8743 35.7711 19.4595 35.5142 19.9339 34.9843L35.3305 19.6272C35.7931 19.1646 36.0343 18.5795 36.0462 17.8796C36.0462 17.164 35.8089 16.5867 35.3305 16.1518ZM18.1863 34.0987L1.92768 17.8836L18.1863 1.6448L34.4251 17.8836L18.1863 34.0987Z"
                      className="fill-primary"
                    />
                    <path
                      d="M12.1875 15.6374V11.632C12.1875 11.5319 12.2389 11.4818 12.3417 11.4818C12.919 11.4818 13.4963 11.4818 14.0735 11.4818C14.1724 11.4818 14.2 11.5055 14.2 11.6044C14.2 14.297 14.2 16.9895 14.2 19.6821C14.2 19.777 14.1684 19.8008 14.0775 19.8008C13.4962 19.8008 12.919 19.8008 12.3378 19.8008C12.2376 19.8008 12.1875 19.7521 12.1875 19.6546C12.1875 18.3142 12.1875 16.9777 12.1875 15.6374Z"
                      className="fill-primary"
                    />
                    <path
                      d="M17.166 15.6334V11.6399C17.166 11.5345 17.2187 11.4818 17.3242 11.4818C17.9015 11.4818 18.4787 11.4818 19.056 11.4818C19.1588 11.4818 19.1825 11.5134 19.1825 11.6083C19.1825 14.297 19.1825 16.9855 19.1825 19.6782C19.1825 19.773 19.1588 19.8048 19.06 19.8048C18.4708 19.8048 17.8856 19.8048 17.3005 19.8048C17.2161 19.8048 17.1739 19.7612 17.1739 19.6742C17.1739 18.3259 17.1739 16.9817 17.1739 15.6374L17.166 15.6334Z"
                      className="fill-primary"
                    />
                    <path
                      d="M22.1426 15.6376V11.6441C22.1426 11.5387 22.1953 11.4859 22.3007 11.4859C22.878 11.4859 23.4553 11.4859 24.0326 11.4859C24.1314 11.4859 24.1591 11.5176 24.1591 11.6125C24.1591 14.3012 24.1591 16.9898 24.1591 19.6824C24.1591 19.7773 24.1353 19.809 24.0365 19.809C23.4474 19.809 22.8622 19.809 22.277 19.809C22.1927 19.809 22.1505 19.7655 22.1505 19.6785C22.1505 18.3302 22.1505 16.9859 22.1505 15.6415L22.1426 15.6376Z"
                      className="fill-primary"
                    />
                    <path
                      d="M23.1469 21.9359C23.7874 21.9359 24.3172 22.4578 24.3212 23.0983C24.3212 23.7428 23.7993 24.2766 23.1508 24.2766C22.5103 24.2766 21.9844 23.7507 21.9805 23.1062C21.9805 22.4697 22.5063 21.9398 23.1469 21.9359Z"
                      className="fill-primary"
                    />
                    <path
                      d="M14.3662 23.1142C14.3662 23.7547 13.8363 24.2806 13.1918 24.2766C12.5473 24.2766 12.0215 23.7428 12.0254 23.0944C12.0254 22.4578 12.5592 21.932 13.2037 21.9359C13.8403 21.9359 14.3662 22.4697 14.3662 23.1142Z"
                      className="fill-primary"
                    />
                    <path
                      d="M18.1743 21.9359C18.8148 21.9359 19.3407 22.4617 19.3446 23.1062C19.3446 23.7507 18.8148 24.2805 18.1664 24.2766C17.5258 24.2766 17.0039 23.7468 17.0039 23.1023C17.0039 22.4617 17.5298 21.9359 18.1743 21.9359Z"
                      className="fill-primary"
                    />
                  </svg>
                </div>

                {/* 3 */}
                <div className="mr-2">
                  <svg
                    viewBox="0 0 37 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8"
                  >
                    <path
                      d="M35.864 17.1258L20.4276 1.68968C19.965 1.21126 19.3956 0.973999 18.7195 0.973999C18.0434 0.973999 17.4424 1.21126 16.9916 1.68968L1.55548 17.1258C1.07708 17.5647 0.839783 18.138 0.839783 18.8537C0.839783 19.5693 1.07708 20.1387 1.55548 20.6013L16.9521 35.9584C17.4147 36.4763 18.0038 36.7333 18.7195 36.7333C19.4075 36.7452 19.9927 36.4882 20.4671 35.9584L35.864 20.6013C36.326 20.1387 36.568 19.5535 36.579 18.8537C36.579 18.138 36.342 17.5607 35.864 17.1258ZM18.7195 35.0727L2.46088 18.8576L18.7195 2.61885L34.958 18.8576L18.7195 35.0727Z"
                      className="fill-primary"
                    />
                    <path
                      d="M25.048 25.4689C25.025 25.4293 25.001 25.3898 24.973 25.3502C24.914 25.2672 24.843 25.1921 24.776 25.117C24.708 25.0458 24.633 24.9786 24.558 24.9114C24.491 24.856 24.42 24.8007 24.356 24.7414C24.222 24.6149 24.096 24.4764 23.957 24.3578C23.925 24.3301 23.89 24.2985 23.858 24.2708C23.807 24.2234 23.752 24.1759 23.7 24.1285C23.585 24.0257 23.506 23.8992 23.423 23.7726C23.313 23.6026 23.202 23.4326 23.083 23.2705C22.953 23.0846 22.83 22.8949 22.708 22.7051C22.609 22.5509 22.51 22.3967 22.411 22.2425C22.372 22.1832 22.332 22.1278 22.293 22.0685C22.213 21.9499 22.134 21.8273 22.051 21.7087C21.9525 21.5703 21.8536 21.4359 21.7508 21.3054C21.6599 21.1868 21.561 21.0761 21.4661 20.9614C21.2882 20.7479 21.1103 20.5344 20.9363 20.3209C20.7861 20.139 20.6398 19.9531 20.4974 19.7673C20.363 19.5894 20.2365 19.4115 20.106 19.2296C20.0032 19.0872 19.8964 18.9409 19.7936 18.7947C19.6355 18.5653 19.4852 18.332 19.3389 18.0948C19.2164 17.8971 19.0977 17.6954 18.9831 17.4898C18.8882 17.3159 18.7972 17.1419 18.7102 16.964C18.6193 16.7742 18.5363 16.5844 18.473 16.3828C18.4256 16.2325 18.3979 16.0743 18.386 15.9162C18.3742 15.758 18.386 15.5999 18.4058 15.4417C18.4374 15.2164 18.4888 14.991 18.5402 14.7695C18.6193 14.4414 18.7103 14.1132 18.821 13.7929C18.8803 13.619 18.9475 13.445 19.0107 13.271C19.0542 13.1564 19.0977 13.0417 19.1452 12.931C19.2243 12.7412 19.3073 12.5554 19.3983 12.3735C19.4773 12.2153 19.5169 12.0413 19.505 11.8634C19.4931 11.6855 19.4417 11.5194 19.3587 11.3612C19.2638 11.1754 19.1452 11.0093 18.9949 10.8591C18.9238 10.7879 18.8526 10.7128 18.7735 10.6496C18.6944 10.5824 18.6154 10.5191 18.5323 10.4598C18.3307 10.3214 18.1211 10.1988 17.8997 10.096C17.6941 10.0011 17.4806 9.92207 17.2631 9.8588C17.0496 9.79554 16.8321 9.7481 16.6147 9.72043C16.4723 9.70066 16.33 9.68481 16.1837 9.68481C16.1402 9.68481 16.0967 9.68481 16.0532 9.68481C15.8872 9.68085 15.7211 9.68879 15.555 9.71251C15.2466 9.756 14.954 9.83902 14.6852 9.99722C14.5823 10.0565 14.4835 10.1277 14.4005 10.2107C14.2937 10.3135 14.2067 10.436 14.1474 10.5744C14.1118 10.6535 14.0881 10.7365 14.0763 10.8196C14.0604 10.9224 14.0565 11.0291 14.0446 11.1319C14.0328 11.2545 14.0209 11.381 14.009 11.5036C13.9932 11.6538 13.9735 11.8041 13.9576 11.9543C13.9379 12.1283 13.9181 12.3023 13.8904 12.4763C13.8667 12.6344 13.839 12.7926 13.8074 12.9507C13.7362 13.3382 13.6334 13.7138 13.5069 14.0855C13.4594 14.2239 13.412 14.3623 13.3646 14.5007C13.3211 14.6193 13.2815 14.734 13.2341 14.8486C13.1748 14.991 13.1154 15.1293 13.0522 15.2717C12.9612 15.4892 12.8387 15.6908 12.7003 15.8846C12.5817 16.0467 12.4591 16.2088 12.3444 16.3749C12.2574 16.5014 12.1744 16.6358 12.0953 16.7702C11.9293 17.0391 11.779 17.3119 11.6367 17.5926C11.5734 17.7152 11.522 17.8457 11.4667 17.9723C11.3757 18.1858 11.3006 18.4032 11.2571 18.6325C11.2255 18.7907 11.2097 18.9489 11.2294 19.111C11.2611 19.3285 11.3362 19.5301 11.4548 19.7159C11.5378 19.8464 11.6327 19.965 11.7355 20.0797C11.866 20.226 12.0084 20.3604 12.1547 20.4869C12.3444 20.6491 12.5382 20.8032 12.7201 20.9693C12.7675 21.0128 12.8149 21.0523 12.8624 21.0958C12.9415 21.167 13.0245 21.2342 13.0996 21.3093C13.2538 21.4596 13.408 21.6138 13.5622 21.768C13.5781 21.7838 13.5939 21.8036 13.6097 21.8234C13.6848 21.9104 13.7639 22.0013 13.839 22.0883C13.9023 22.1594 13.9616 22.2306 14.0209 22.3057C14.1158 22.4283 14.2107 22.5548 14.3016 22.6813C14.4321 22.8553 14.5428 23.0412 14.6456 23.2309C14.7642 23.4524 14.9066 23.654 15.0845 23.828C15.1399 23.8833 15.1992 23.9348 15.2545 23.9862C15.381 24.1048 15.5036 24.2234 15.6301 24.346C15.7211 24.433 15.816 24.516 15.9306 24.5753C16.0137 24.6188 16.069 24.6781 16.1165 24.7572C16.2035 24.9035 16.2984 25.0458 16.4091 25.1763C16.4803 25.2633 16.5435 25.3542 16.6186 25.4412C16.674 25.5044 16.7333 25.5677 16.8005 25.6231C16.927 25.7219 17.0773 25.7892 17.2354 25.8208C17.3066 25.8366 17.3778 25.8484 17.4529 25.8366C17.5913 25.8129 17.7099 25.7456 17.8008 25.6389C17.8048 25.6349 17.8127 25.627 17.8167 25.6191C17.8681 25.5084 17.959 25.2395 17.8404 24.9628C17.6704 24.5555 16.8242 23.3772 16.8163 23.3654C16.7807 23.3179 16.7926 23.2468 16.84 23.2112C16.8875 23.1756 16.9587 23.1875 16.9943 23.2349C17.0298 23.2824 17.8641 24.4448 18.0421 24.8758C18.2042 25.2672 18.0579 25.6231 17.9946 25.7456C18.046 25.8247 18.0974 25.9038 18.1567 25.979C18.2753 26.1213 18.4058 26.2478 18.5719 26.3308C18.7933 26.4376 19.0187 26.4574 19.244 26.3625C19.679 26.145 19.7502 25.6349 19.5959 25.2672C19.4259 24.856 18.4058 23.3812 18.3939 23.3654C18.3584 23.314 18.3702 23.2467 18.4216 23.2151C18.473 23.1795 18.5402 23.1914 18.5758 23.2428C18.6193 23.3061 19.6197 24.7532 19.7976 25.1842C19.9636 25.5836 19.9123 26.1134 19.5406 26.4258C19.6592 26.5127 19.7857 26.576 19.9281 26.6155C20.2207 26.6986 20.4935 26.659 20.7465 26.4929C20.7663 26.4811 20.8573 26.398 20.8573 26.398C21.1657 26.0817 21.2645 25.714 21.1222 25.374C20.9521 24.9628 19.8727 23.3812 19.8609 23.3654C19.8253 23.314 19.8411 23.2467 19.8885 23.2151C19.9399 23.1795 20.0072 23.1954 20.0388 23.2428C20.0823 23.31 21.1419 24.86 21.3199 25.2909C21.4147 25.5203 21.4266 25.7694 21.3475 26.0106C21.2882 26.1964 21.1736 26.3783 21.0154 26.5443C21.0352 26.5602 21.0549 26.576 21.0747 26.5878C21.2961 26.7499 21.5452 26.8409 21.822 26.833C21.992 26.829 22.237 26.6709 22.38 26.5206C22.407 26.489 22.466 26.4099 22.466 26.4099C22.735 26.058 22.799 25.7615 22.68 25.4728C22.51 25.0616 21.3475 23.3812 21.3357 23.3654C21.3001 23.314 21.3119 23.2467 21.3633 23.2151C21.4147 23.1795 21.482 23.1914 21.5136 23.2428C21.561 23.314 22.7 24.9628 22.878 25.3937C23.067 25.8484 22.862 26.2597 22.621 26.5641C22.68 26.6037 22.743 26.6353 22.81 26.6669C22.981 26.746 23.158 26.7934 23.344 26.8014C23.53 26.8132 23.72 26.8053 23.906 26.7737C24.103 26.7381 24.293 26.6867 24.471 26.5918C24.617 26.5127 24.74 26.406 24.839 26.2755C24.961 26.1094 25.04 25.9275 25.068 25.7219C25.08 25.631 25.068 25.548 25.025 25.4689H25.048ZM16.4803 12.6186C15.3811 12.3023 14.6298 11.555 14.8038 10.954C14.9778 10.353 16.0097 10.1197 17.1089 10.436C18.2081 10.7524 18.9593 11.4996 18.7854 12.1006C18.6114 12.7016 17.5794 12.9349 16.4803 12.6186Z"
                      className="fill-primary"
                    />
                    <path
                      d="M17.5207 11.7601C17.5836 11.5419 17.313 11.2724 16.9164 11.1582C16.5199 11.0439 16.1474 11.1282 16.0845 11.3464C16.0217 11.5647 16.2922 11.8342 16.6888 11.9484C17.0854 12.0627 17.4579 11.9784 17.5207 11.7601Z"
                      className="fill-primary"
                    />
                  </svg>
                </div>

                {/* 4 */}
                <div>
                  <svg
                    viewBox="0 0 36 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8"
                  >
                    <path
                      d="M35.0242 17.1165L19.5878 1.6804C19.1252 1.20198 18.5558 0.964722 17.8797 0.964722C17.2036 0.964722 16.6026 1.20198 16.1518 1.6804L0.715698 17.1165C0.237298 17.5554 0 18.1287 0 18.8444C0 19.56 0.237298 20.1294 0.715698 20.592L16.1123 35.9491C16.5749 36.467 17.164 36.724 17.8797 36.724C18.5677 36.7359 19.1529 36.4789 19.6273 35.9491L35.0242 20.592C35.4862 20.1294 35.7282 19.5442 35.7392 18.8444C35.7392 18.1287 35.5022 17.5514 35.0242 17.1165ZM17.8797 35.0634L1.6211 18.8483L17.8797 2.60957L34.1182 18.8483L17.8797 35.0634Z"
                      className="fill-primary"
                    />
                    <path
                      d="M12.974 25.9515H12.375C12.567 25.9543 12.776 25.9515 12.974 25.9515Z"
                      className="fill-primary"
                    />
                    <path
                      d="M18.938 26.1912C18.909 26.1884 18.878 26.1855 18.85 26.1855L18.941 26.1912H18.938Z"
                      className="fill-primary"
                    />
                    <path
                      d="M12.56 15.1855C12.475 15.1488 12.365 15.2138 12.396 15.3127C12.404 15.3381 12.419 15.3607 12.444 15.3748C12.492 15.4031 12.56 15.3946 12.599 15.355C12.619 15.3381 12.633 15.3127 12.633 15.2872C12.633 15.242 12.599 15.2025 12.56 15.1855Z"
                      className="fill-primary"
                    />
                    <path
                      d="M23 12.0059V13.4681C20.8412 13.3594 19.0235 14.524 18.7726 16.2061H21.8924V17.6787H18.7924C18.7924 19.2314 20.8638 20.5746 22.9859 20.4426V21.8866C21.4359 22.2412 19.2123 21.3535 18.0653 19.9276C17.4134 19.1193 17.0433 18.1487 17.0036 17.1436C16.9638 16.1384 17.2563 15.1458 17.8426 14.2962C18.9248 12.702 21.1231 11.7238 22.9859 12.0162L23 12.0059Z"
                      className="fill-primary"
                    />
                    <path
                      d="M17 12.0279V13.4837C16.3942 13.4029 15.7762 13.4577 15.1984 13.6435C14.6206 13.8293 14.1 14.1405 13.6807 14.5508C13.3109 14.8982 13.0263 15.3144 12.8461 15.7715C12.6659 16.2286 12.5943 16.716 12.6362 17.2007C12.6732 17.6839 12.8178 18.1549 13.0611 18.5845C13.3044 19.0141 13.6412 19.393 14.0505 19.6977C14.4599 20.0023 14.9329 20.2263 15.4404 20.3555C15.9478 20.4847 16.4787 20.5165 17 20.4489V21.8942C15.5923 22.1869 13.3795 21.573 12.0788 19.9671C11.413 19.1456 11.0374 18.1559 11.0026 17.1316C10.9679 16.1074 11.2757 15.0981 11.8846 14.24C12.991 12.6626 15.2292 11.6912 17 12.0331V12.0279Z"
                      className="fill-primary"
                    />
                    <path
                      d="M20 26.8467C20 27.5921 19.666 27.9647 19.0672 27.9647H18.9348C18.3055 27.9647 18 27.5622 18 26.8467V25.1076C18 24.402 18.2607 23.9647 18.9308 23.9647H19.0652C19.7332 23.9647 19.998 24.4144 19.998 25.1076L20 26.8467ZM19.2098 25.1076C19.2098 24.884 19.1487 24.7647 19.0061 24.7647C18.8635 24.7647 18.8024 24.874 18.8024 25.1076V26.8467C18.8024 27.0579 18.8595 27.1746 19.0061 27.1746C19.1528 27.1746 19.2098 27.0529 19.2098 26.8467V25.1076Z"
                      className="fill-primary"
                    />
                    <path
                      d="M23 26.8467C23 27.5921 22.6656 27.9647 22.0663 27.9647H21.9358C21.3058 27.9647 21 27.5622 21 26.8467V25.1076C21 24.402 21.261 23.9647 21.9317 23.9647H22.0663C22.735 23.9647 23 24.4144 23 25.1076V26.8467ZM22.209 25.1076C22.209 24.884 22.1478 24.7647 22.0051 24.7647C21.8624 24.7647 21.8012 24.874 21.8012 25.1076V26.8467C21.8012 27.0579 21.8583 27.1746 22.0051 27.1746C22.1519 27.1746 22.209 27.0529 22.209 26.8467V25.1076Z"
                      className="fill-primary"
                    />
                    <path
                      d="M14 26.8467C14 27.5921 13.666 27.9647 13.0672 27.9647H12.9348C12.3055 27.9647 12 27.5622 12 26.8467V25.1076C12 24.402 12.2607 23.9647 12.9308 23.9647H13.0652C13.7332 23.9647 13.998 24.4144 13.998 25.1076L14 26.8467ZM13.2098 25.1076C13.2098 24.884 13.1487 24.7647 13.0061 24.7647C12.8635 24.7647 12.8024 24.874 12.8024 25.1076V26.8467C12.8024 27.0579 12.8595 27.1746 13.0061 27.1746C13.1528 27.1746 13.2098 27.0529 13.2098 26.8467V25.1076Z"
                      className="fill-primary"
                    />
                    <path
                      d="M17 26.8467C17 27.5921 16.6656 27.9647 16.0663 27.9647H15.9358C15.3058 27.9647 15 27.5622 15 26.8467V25.1076C15 24.402 15.261 23.9647 15.9317 23.9647H16.0663C16.735 23.9647 17 24.4144 17 25.1076V26.8467ZM16.209 25.1076C16.209 24.884 16.1478 24.7647 16.0051 24.7647C15.8624 24.7647 15.8012 24.874 15.8012 25.1076V26.8467C15.8012 27.0579 15.8583 27.1746 16.0051 27.1746C16.1519 27.1746 16.209 27.0529 16.209 26.8467V25.1076Z"
                      className="fill-primary"
                    />
                  </svg>
                </div>
              </div>

              <div className="w-full lg:w-fit flex justify-start lg:justify-center text-left lg:text-center mb-4 lg:mb-6">
                <p
                  className={classNames(
                    "font-bold text-sm text-left lg:text-center text-primary"
                  )}
                >
                  CONTENTS:
                  <br />
                  1(one) ORIGINAL
                  <br />
                  LITHOGRAPH
                </p>
              </div>

              <div>
                <p
                  className={classNames(
                    "font-bold text-sm text-center text-danger"
                  )}
                >
                  No Copies, No Duplicates.
                </p>
              </div>
            </div>

            <ProductImages
              image={getSanityImageUrl(image)}
              gif={getSanityImageUrl(gif)}
            />
          </div>
        ) : (
          <p className="font-bold text-base text-pirmary">
            No products available
          </p>
        )}

        <Nav />
      </div>
    </div>
  );
};

export default Product;