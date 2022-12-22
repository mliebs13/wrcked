import { ReactElement, useEffect, useState } from "react";
import { createClient } from "next-sanity";
import { NextPageWithLayout } from "../../_app";
import AdminLayout from "@src/layouts/AdminLayout";
import { shortenString } from "../../../utils";
import Spinner from "@src/components/shared/Spinner";
import { Product } from "@src/types";
import Tooltip from "@src/components/ui/Tooltip";

const Admin: NextPageWithLayout = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[] | null>(null);
  const [productsError, setProductsError] = useState<string | null>(null);
  const client = createClient({
    projectId: "t4jr7tcz",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: false,
    token:
      "skhXf6Ov7ZoDiG1uLDjvcSI5zZJ1azeV783F8rEbXrZuRdGqEuksZIcaQR3DPAMPLkRuJPkRB4Gdv4DkD25DAGSOCEhaHddizpnjInc8NWN3bRpC1a5POKr9rLa4pNhUIRLEYPqTqdebEohywUHIDwWjOuRlpBgBkhKQI62ijybQG7Li5ZoA",
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await client.fetch(`*[_type == "product"]`);
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
      <div className="w-full max-w-8xl flex flex-col items-center mx-auto py-8 sm:py-12 px-3 sm:px-10 2xl:px-20 overflow-auto">
        {products ? (
          <table className="w-fit min-w-full bg-white rounded-t-md shadow overflow-hidden">
            {/* head */}
            <thead className="bg-white h-[55px]">
              <tr>
                <th className="font-bold text-base text-primary px-4">Id</th>
                <th className="font-bold text-base text-primary px-4">Name</th>
                <th className="font-bold text-base text-primary px-4">
                  Description
                </th>
                <th className="font-bold text-base text-primary px-4">
                  Qunatity
                </th>
                <th className="font-bold text-base text-primary px-4">Price</th>
                {/* <th>Actions</th> */}
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
                      <td className="p-3 text-sm text-center">{price}</td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        ) : productsError ? (
          <p className="w-full text-center font-bold text-base">
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
