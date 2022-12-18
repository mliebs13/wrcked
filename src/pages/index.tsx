import Head from "next/head";
import { Space_Mono } from "@next/font/google";
import classNames from "classnames";

const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Wrcked - Home</title>
        <meta name="description" content="Wrcked - Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full">
        <h1
          className={classNames(
            spaceMono.className,
            "text-center text-4xl font-bold"
          )}
        >
          Wrcked
        </h1>
      </main>
    </>
  );
}
