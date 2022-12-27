import { ReactElement, useEffect, useState } from "react";
import { NextPageWithLayout } from "../../../_app";
import AdminLayout from "@src/layouts/AdminLayout";
import {
  orderShippingDelimeter,
  orderItemDelimeter,
  shortenString,
  formatPrice,
} from "@src/utils";
import Spinner from "@src/components/shared/Spinner";
import axios from "axios";
import { Order } from "@prisma/client";
import classNames from "classnames";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Orders: NextPageWithLayout = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [orders, setOrders] = useState<null | Order[]>(null);
  const [selected, setSelected] = useState<"" | "unfulfilled" | "fulfilled">(
    ""
  );
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const totalPages = Math.ceil(total / 10);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);

        const { data } = await axios.post("/api/orders", {
          status: selected,
          page,
        });

        console.log("orders: ", data);

        if (!data) {
          setError(data.message);
        } else {
          setTotal(data.total);
          setOrders(data.orders);
        }
      } catch (err: any) {
        setError("An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [selected, page]);

  return (
    <main className="w-full min-h-[calc(100vh-95px)] bg-lightGray flex items-start">
      <div className="w-full max-w-8xl flex flex-col items-center mx-auto py-8 sm:py-12 px-3 sm:px-10 2xl:px-20 overflow-auto">
        {/* navigation */}
        <ul className="w-full max-w-[560px] flex items-center justify-between mb-8">
          <li
            className={classNames(
              "font-bold text-sm text-darkGray mr-5 cursor-pointer tracking-wide hover:text-primary",
              {
                "!text-primary after:content-[''] after:block after:h-0.5 after:w-full after:bg-primary after:rounded":
                  selected === "",
              }
            )}
            onClick={() => setSelected("")}
          >
            ALL
          </li>
          <li
            className={classNames(
              "font-bold text-sm text-darkGray mr-5 cursor-pointer tracking-wide hover:text-primary",
              {
                "!text-primary after:content-[''] after:block after:h-0.5 after:w-full after:bg-primary after:rounded":
                  selected === "fulfilled",
              }
            )}
            onClick={() => setSelected("fulfilled")}
          >
            FULFILLED
          </li>
          <li
            className={classNames(
              "font-bold text-sm text-darkGray cursor-pointer tracking-wide hover:text-primary",
              {
                "!text-primary after:content-[''] after:block after:h-0.5 after:w-full after:bg-primary after:rounded":
                  selected === "unfulfilled",
              }
            )}
            onClick={() => setSelected("unfulfilled")}
          >
            UNFULFILLED
          </li>
        </ul>

        {orders && !loading ? (
          orders.length >= 1 ? (
            <>
              <table className="w-fit min-w-full bg-white rounded-md mb-6 shadow">
                {/* head */}
                <thead className="bg-whites h-[55px]">
                  <tr>
                    <th className="font-bold text-base text-primary text-center px-4">
                      Customer
                    </th>
                    <th className="font-bold text-base text-primary text-center px-4">
                      Order ID
                    </th>
                    <th className="font-bold text-base text-primary text-center px-4">
                      Address
                    </th>
                    <th className="font-bold text-base text-primary text-center px-4">
                      Phone
                    </th>
                    <th className="font-bold text-base text-primary text-center px-4">
                      Email
                    </th>
                    <th className="font-bold text-base text-primary text-center px-4">
                      Products
                    </th>
                    <th className="font-bold text-base text-primary text-center px-4">
                      Total
                    </th>
                    <th className="font-bold text-base text-primary text-center px-4">
                      Status
                    </th>
                    <th className="font-bold text-base text-primary text-center px-4">
                      Actions
                    </th>
                    {/* <th>Actions</th> */}
                  </tr>
                </thead>

                {/* body */}
                <tbody>
                  {orders?.map(
                    (
                      {
                        id,
                        username,
                        phone,
                        email,
                        shipping,
                        total,
                        item,
                        status,
                      },
                      i
                    ) => {
                      const [country, state, city, postalCode, line1, line2] =
                        shipping.split(orderShippingDelimeter);
                      const [pid, name, quantity, price] =
                        item.split(orderItemDelimeter);

                      return (
                        <tr key={`tr-${i}`}>
                          <td className="p-4 text-sm text-primary text-center">
                            {shortenString(username, 15)}
                          </td>
                          <td className="p-4 text-sm text-primary text-center">
                            {id}
                          </td>
                          <td className="p-4 text-sm text-primary text-center">{`${country}, ${state}, ${city}, ${postalCode}`}</td>
                          <td className="p-4 text-sm text-primary text-center">
                            {phone ?? "-"}
                          </td>
                          <td className="p-4 text-sm text-primary text-center">
                            {email.length < 1 ? "-" : email}
                          </td>
                          <td className="p-4 text-sm text-primary text-center">
                            {`${name} x${quantity} $${formatPrice(+price)}`}
                          </td>
                          <td className="p-4 text-sm text-primary text-center">
                            ${formatPrice(total)}
                          </td>
                          <td className="p-4 text-sm text-primary text-center">
                            <span
                              className="cursor-pointer"
                              title="toggle order status"
                              onClick={async () => {
                                const newStatus =
                                  status === "FULFILLED"
                                    ? "UNFULFILLED"
                                    : "FULFILLED";

                                const { data } = await axios.put(
                                  `/api/orders/${id}`,
                                  {
                                    status: newStatus,
                                  }
                                );

                                data?.success &&
                                  setOrders(() =>
                                    [...orders].map((order) =>
                                      order.id === id
                                        ? {
                                            ...order,
                                            status: newStatus,
                                          }
                                        : order
                                    )
                                  );
                              }}
                            >
                              {status}
                            </span>
                          </td>
                          <td className="p-4 text-sm text-primary text-center undeline">
                            <Link
                              href={`/22/admin/orders/${id}`}
                              className="underline"
                            >
                              more details
                            </Link>
                          </td>
                        </tr>
                      );

                      /*
                    pending fulfilled

                   delete, more details, edit status

                   pagination

                   remove when scroll into view

                   font bold for pending

                   ref orders from notif and add action on both to go to ref page
                  */
                    }
                  )}
                </tbody>
              </table>
              <div className="flex items-center mb-2">
                <button
                  className="flex items-center justify-center mr-6 disabled:cursor-not-allowed"
                  onClick={() => setPage((prev) => prev - 1)}
                  disabled={page === 1}
                >
                  <ChevronLeftIcon width={22} height={22} />
                </button>
                <p className="font-bold text-sm text-primary mr-6">
                  Showing {orders.length + (page - 1) * 10} of {total} orders
                </p>
                <button
                  className="flex items-center justify-center disabled:cursor-not-allowed"
                  onClick={() => setPage((prev) => prev + 1)}
                  disabled={page === totalPages}
                >
                  <ChevronRightIcon width={22} height={22} />
                </button>
              </div>
              <p className="font-bold text-primary text-sm">
                Page {page} of {totalPages}
              </p>
            </>
          ) : (
            <p className="font-bold text-sm text-primary">
              No orders available
            </p>
          )
        ) : loading ? (
          <div className="w-full py-12 flex justify-center">
            <Spinner size="lg" />
          </div>
        ) : (
          <div className="w-full py-12 flex justify-center">
            <p className="text-base text-center text-danger">{error}</p>
          </div>
        )}
      </div>
    </main>
  );
};

Orders.getLayout = (page: ReactElement) => {
  return (
    <AdminLayout title="Orders - Admin" description="Orders - Admin">
      {page}
    </AdminLayout>
  );
};

export default Orders;
