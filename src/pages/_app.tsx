import { ReactElement, ReactNode, useRef } from "react";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import * as RadixToast from "@radix-ui/react-toast";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import "../styles/base.css";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  const ref = useRef(null);

  return getLayout(
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        smoothMobile: true,
        mobile: {
          smooth: true,
        },
        tablet: {
          smooth: true,
          breakpoint: 960,
        },
      }}
      containerRef={ref}
    >
      <RadixToast.Provider swipeDirection="right">
        <Component {...pageProps} />
      </RadixToast.Provider>
    </LocomotiveScrollProvider>
  );
};

export default App;
