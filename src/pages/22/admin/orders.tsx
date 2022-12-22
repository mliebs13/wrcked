import { ReactElement, useState } from "react";
import { NextPageWithLayout } from "../../_app";
import AdminLayout from "@src/layouts/AdminLayout";
import { shortenString } from "@src/utils";
import Spinner from "@src/components/shared/Spinner";

const Orders: NextPageWithLayout = () => {
  const [loading, setLoading] = useState(false);
  const orders: any[] = [];

  return (
    <main className="w-full min-h-[calc(100vh-95px)] bg-lightGray flex items-start">
      {!loading && orders ? (
        <div className="w-full max-w-8xl flex flex-col items-center mx-auto py-12 px-10 2xl:px-20 overflow-auto">
          <table className="w-fit min-w-full bg-white rounded-t-md shadow">
            {/* head */}
            <thead className="bg-whites h-[55px]">
              <tr>
                <th className="font-bold text-base text-primary px-4">
                  Customer
                </th>
                <th className="font-bold text-base text-primary px-4">
                  Order ID
                </th>
                <th className="font-bold text-base text-primary px-4">
                  Address
                </th>
                <th className="font-bold text-base text-primary px-4">
                  Products
                </th>
                <th className="font-bold text-base text-primary px-4">
                  Status
                </th>
                {/* <th>Actions</th> */}
              </tr>
            </thead>

            {/* body */}
            <tbody>
              {orders?.map(
                ({ customer, orderId, address, quantity, price }, i) => {
                  return (
                    <tr key={`tr-${i}`}>
                      <td className="px-4 text-sm">
                        {shortenString(customer, 15)}
                      </td>
                      <td className="px-4 text-sm">{orderId}</td>
                      <td className="px-4 text-sm">{address}</td>
                      <td className="px-4 text-sm">{quantity}</td>
                      <td className="px-4 text-sm">{price}</td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="w-full py-12 flex justify-center">
          <Spinner size="lg" />
        </div>
      )}
    </main>
  );
};

Orders.getLayout = (page: ReactElement) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Orders;
