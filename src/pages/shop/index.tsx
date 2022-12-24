import { useState } from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Space_Mono } from "@next/font/google";
import groq from "groq";
import Product from "@src/components/product/Product";
import { Product as ProductType } from "@src/types";
import sanityClient from "@src/config/sanity";
import classNames from "classnames";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  fallback: ["system-ui", "arial"],
});

const Shop = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [index, setIndex] = useState(0);

  const product = products[index];

  return (
    <main className={classNames(spaceMono.className, "w-full")}>
      <Product
        id={product._id}
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
    const products: any[] = await sanityClient.fetch(
      groq`*[_type == "product"] | order(_createdAt asc)`
    );

    if (!products) {
      throw new Error("Failed to fetch products");
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
