import { FC } from "react";
import { spaceMono } from "@src/config/fonts";
import Head from "next/head";
import classNames from "classnames";

const NotFound: FC = () => {
  return (
    <>
      <Head>
        <title>404 - Wrcked</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="description" content="404 - Wrcked" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="page-type" content="404" />
        <meta name="audience" content="Everyone" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.wrcked.com/" />
        <meta name="publisher" content="Wrcked" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Wrcked" />
        <meta property="og:url" content="https://www.wrcked.com/" />
        <meta property="og:title" content="404 - Wrcked" />
        <meta property="og:description" content="404 - Wrcked" />
        {/* <meta property="og:image" content="https://wrcked/wrcked-banner.png/" /> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.wrcked.com/" />
        <meta property="twitter:title" content="404 - Wrcked" />
        <meta property="twitter:description" content="404 - Wrcked" />
        {/* <meta
          property="twitter:image"
          content="https://wrcked.com/wrcked-banner.png/"
        /> */}
      </Head>
      <div
        className={classNames(
          spaceMono.className,
          "w-full h-screen flex justify-center items-center bg-secondary text-primary text-base"
        )}
      >
        <div className="flex items-center">
          <p className="text-base text-primary">404</p>
          <div className="h-[50px] w-[1px] bg-primary mx-6" />
          <p>This page could not be found.</p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
