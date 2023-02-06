import { ReactElement, ReactNode, useRef } from "react";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
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
        smooth: false,
        mobile: {
          smooth: true,
          breakpoint: 0,
          getDirection: true,
        },
        tablet: {
          smooth: true,
          breakpoint: 0,
          getDirection: true,
        },
      }}
      containerRef={ref}
    >
      <RadixToast.Provider swipeDirection="right">
        <Component {...pageProps} />
        <Analytics />
      </RadixToast.Provider>
    </LocomotiveScrollProvider>
  );
};

export default App;
