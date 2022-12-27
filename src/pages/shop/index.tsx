import { useState } from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import groq from "groq";
import Product from "@src/components/product/Product";
import { Product as ProductType } from "@src/types";
import sanityClient from "@src/config/sanity";
import classNames from "classnames";
import { spaceMono } from "@src/config/fonts";
import Head from "next/head";

const Shop = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [index, setIndex] = useState(0);

  const product = products[index];

  return (
    <main className={classNames(spaceMono.className, "w-full")}>
      <Head>
        <title>Shop - Wrcked</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Checkout Success" />
      </Head>
      <Product
        name={product.name}
        price={product.price}
        quantity={product.quantity}
        image={product.image}
        gif={product.gif}
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
