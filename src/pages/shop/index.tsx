import { useState } from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import groq from "groq";
import Product from "@src/components/product/Product";
import { Product as ProductType } from "@src/types";
import sanityClient from "@src/config/sanity";
import classNames from "classnames";
import { spaceMono } from "@src/config/fonts";

const Shop = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [index, setIndex] = useState(0);

  const product = products[index];

  return (
    <main
      className={classNames(
        spaceMono.className,
        "w-full bg-secondary text-primary bg-dots-primary"
      )}
      style={{
        backgroundSize: "42px",
      }}
    >
      <Head>
        <title>Shop - Wrcked</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="description" content="Shop - Wrcked" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="page-topic" content="Shop" />
        <meta name="page-type" content="Shop" />
        <meta name="audience" content="Everyone" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.wrcked.com/" />
        <meta name="publisher" content="Wrcked" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Wrcked" />
        <meta property="og:url" content="https://www.wrcked.com/" />
        <meta property="og:title" content="Shop - Wrcked" />
        <meta property="og:description" content="Shop - Wrcked" />
        <meta property="og:image" content="https://wrcked/wrcked-banner.png/" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.wrcked.com/" />
        <meta property="twitter:title" content="Shop - Wrcked" />
        <meta property="twitter:description" content="Shop - Wrcked" />
        <meta
          property="twitter:image"
          content="https://wrcked.com/wrcked-banner.png/"
        />
      </Head>

      <Product
        name={product.name}
        price={product.price}
        quantity={product.quantity}
        image={product.image}
        gif={product.gif}
        verticalDimension={product.verticalDimension}
        total={products.length}
        index={index}
        setIndex={setIndex}
        handleBuy={`/shop/${product._id}`}
      />
    </main>
  );
};

export const getStaticProps: GetStaticProps<{
  products: ProductType[];
}> = async () => {
  try {
    let products: any[] = await sanityClient.fetch(
      groq`*[_type == "product"] | order(_createdAt asc)`
    );

    if (!products) {
      products = [];
    }

    return {
      props: {
        products,
      },
    };
  } catch (err: any) {
    console.log("error occurred fetching products: ", err);

    throw new Error("Failed to fetch products");
  }
};

export default Shop;
