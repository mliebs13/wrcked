import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import classNames from "classnames";
import { spaceMono } from "@src/config/fonts";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/shop");
  }, []);

  return (
    <>
      <Head>
        <title>Wrcked - Home</title>
        <meta name="description" content="Wrcked - Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={classNames(
          "Home w-full bg-secondary text-primary py-12 px-10 2xl:px-20",
          spaceMono.className
        )}
      >
        <h1 className="text-center text-4xl font-bold">Wrcked</h1>
      </main>
    </>
  );
}
