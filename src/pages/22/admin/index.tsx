import { ReactElement, useEffect, useState } from "react";
import groq from "groq";
import { NextPageWithLayout } from "../../_app";
import AdminLayout from "@src/layouts/AdminLayout";
import Spinner from "@src/components/shared/Spinner";
import { formatPrice, shortenString } from "../../../utils";
import { Product } from "@src/types";
import sanityClient from "@src/config/sanity";

const Admin: NextPageWithLayout = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[] | null>(null);
  const [productsError, setProductsError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts: any[] = await sanityClient.fetch(
          groq`*[_type == "product"]`
        );

        console.log("products: ", fetchedProducts);

        setProducts(fetchedProducts);
      } catch (err: any) {
        console.log("error occurred: ", err.message);
        setProductsError(`Error occurred fetching products: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main className="w-full min-h-[calc(100vh-95px)] bg-lightGray flex items-start">
      <div className="w-full h-full max-w-8xl flex flex-col items-center mx-auto py-8 sm:py-12 px-3 sm:px-10 2xl:px-20 overflow-auto">
        {products ? (
          products.length >= 1 ? (
            <table className="w-fit min-w-full bg-white rounded-md shadow overflow-hidden">
              {/* head */}
              <thead className="bg-white h-[55px]">
                <tr>
                  <th className="font-bold text-base text-primary px-4">Id</th>
                  <th className="font-bold text-base text-primary px-4">
                    Name
                  </th>
                  <th className="font-bold text-base text-primary px-4">
                    Description
                  </th>
                  <th className="font-bold text-base text-primary px-4">
                    Qunatity
                  </th>
                  <th className="font-bold text-base text-primary px-4">
                    Price
                  </th>
                </tr>
              </thead>

              {/* body */}
              <tbody>
                {products?.map(
                  ({ _id, name, description, price, quantity }, i) => {
                    return (
                      <tr key={`tr-${i}`}>
                        <td className="p-3 text-sm text-center">
                          <span>{shortenString(_id ?? "", 15)}</span>
                        </td>
                        <td className="p-3 text-sm text-center">{name}</td>
                        <td className="p-3 text-sm text-center">
                          <span className="max-w-sm">
                            {shortenString(description ?? "", 40)}
                          </span>
                        </td>
                        <td className="p-3 text-sm text-center">{quantity}</td>
                        <td className="p-3 text-sm text-center">
                          ${formatPrice(price)}
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          ) : (
            <p className="text-sm font-bold text-primary">No product to show</p>
          )
        ) : productsError ? (
          <p className="w-full text-center font-bold text-sm text-danger">
            {productsError}
          </p>
        ) : loading ? (
          <div className="w-full py-12 flex justify-center">
            <Spinner size="lg" />
          </div>
        ) : (
          <></>
        )}
      </div>
    </main>
  );
};

Admin.getLayout = (page: ReactElement) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Admin;
