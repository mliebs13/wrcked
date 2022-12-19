import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Space_Mono } from "@next/font/google";
import classNames from "classnames";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  fallback: ["system-ui", "arial"],
});

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/products");
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
          "Home w-full py-12 px-10 2xl:px-20",
          spaceMono.className
        )}
      >
        <h1 className="text-center text-4xl font-bold">Wrcked</h1>
      </main>
    </>
  );
}
