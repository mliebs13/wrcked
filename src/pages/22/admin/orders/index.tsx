import { ReactElement, useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { formatInTimeZone } from "date-fns-tz";
import classNames from "classnames";
import {
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";
// @ts-ignore
import DatePicker from "react-datepicker";
import en from "date-fns/locale/en-US";
import { Order, OrderStatus } from "@prisma/client";
import { spaceMono } from "@src/config/fonts";
import { NextPageWithLayout } from "../../../_app";
import AdminLayout from "@src/layouts/AdminLayout";
import { formatPrice } from "@src/utils";
import Spinner from "@src/components/shared/Spinner";
import Tooltip from "@src/components/ui/Tooltip";
import Toast from "@src/components/ui/Toast";
import { ToastType } from "@src/types";

import "react-datepicker/dist/react-datepicker.css";

const Orders: NextPageWithLayout = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [orders, setOrders] = useState<null | Order[]>(null);
  const [selected, setSelected] = useState<
    "" | "pending" | "dispatched" | "delivered"
  >("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [statusEditId, setStatusEditId] = useState<string | null>(null);
  const [dateEditId, setDateEditId] = useState<string | null>(null);
  const [editStatusValue, setEditStatusValue] =
    useState<OrderStatus>("PENDING");
  const [statusLoading, setStatusLoading] = useState<String[]>([]);
  const [dateLoading, setDateLoading] = useState<String[]>([]);
  const [editDateValue, setEditDateValue] = useState<Date | null>(new Date());
  const [toastOpen, setToastOpen] = useState(false);
  const [toastContent, setToastContent] = useState("");
  const [toastType, setToastType] = useState<ToastType>("neutral");

  const totalPages = Math.ceil(total / 10);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);

        const { data } = await axios.post("/api/orders", {
          status: selected.toUpperCase(),
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

  const openToast = (text: string, type: ToastType = "neutral") => {
    setToastOpen(false);
    setTimeout(() => {
      setToastContent(text);
      setToastType(type);
      setToastOpen(true);
    }, 150);
  };

  return (
    <main className="w-full min-h-[calc(100vh-95px)] bg-lightGray text-primary flex items-start">
      <Toast
        content={toastContent}
        open={toastOpen}
        setOpen={setToastOpen}
        duration={5000}
        position="bottom"
        type={toastType}
      />

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
              "font-bold text-sm text-darkGray cursor-pointer tracking-wide hover:text-primary",
              {
                "!text-primary after:content-[''] after:block after:h-0.5 after:w-full after:bg-primary after:rounded":
                  selected === "pending",
              }
            )}
            onClick={() => setSelected("pending")}
          >
            PENDING
          </li>

          <li
            className={classNames(
              "font-bold text-sm text-darkGray mr-5 cursor-pointer tracking-wide hover:text-primary",
              {
                "!text-primary after:content-[''] after:block after:h-0.5 after:w-full after:bg-primary after:rounded":
                  selected === "dispatched",
              }
            )}
            onClick={() => setSelected("dispatched")}
          >
            DISPATCHED
          </li>
          <li
            className={classNames(
              "font-bold text-sm text-darkGray mr-5 cursor-pointer tracking-wide hover:text-primary",
              {
                "!text-primary after:content-[''] after:block after:h-0.5 after:w-full after:bg-primary after:rounded":
                  selected === "delivered",
              }
            )}
            onClick={() => setSelected("delivered")}
          >
            DELIVERED
          </li>
        </ul>

        {orders && !loading ? (
          orders.length >= 1 ? (
            <>
              <table className="w-fit min-w-full bg-secondary rounded-md mb-6 shadow">
                {/* head */}
                <thead className="bg-secondary h-[55px]">
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
                      Delivery Date
                    </th>
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
                        country,
                        state,
                        city,
                        postalCode,
                        line1,
                        line2,
                        total,
                        productName: name,
                        productPrice: price,
                        quantity,
                        status,
                        deliveryDate,
                      },
                      i
                    ) => {
                      const isStatusLoading = statusLoading.includes(id);
                      const isDateLoading = dateLoading.includes(id);

                      return (
                        <tr key={`tr-${i}`}>
                          <td className="p-4 text-sm text-primary text-center">
                            {username}
                          </td>
                          <td className="p-4 text-sm text-primary text-center">
                            <Link
                              className="text-primary underline"
                              href={`/22/admin/orders/${id}`}
                              target="_blank"
                              title="More details"
                            >
                              {id}
                            </Link>
                          </td>
                          <td className="p-4 text-sm text-primary text-center">{`${country}, ${state}, ${city}, ${postalCode}, ${line1}${
                            line2 ? " ," + line2 : ""
                          }`}</td>
                          <td className="p-4 text-sm text-primary text-center">
                            {phone ?? "-"}
                          </td>
                          <td className="p-4 text-sm text-primary text-center">
                            {email.length < 1 ? "-" : email}
                          </td>
                          <td className="p-4 text-sm text-primary text-center">
                            {`${name} ×${quantity} $${formatPrice(+price)}`}
                          </td>
                          <td className="p-4 text-sm text-primary text-center">
                            ${formatPrice(total)}
                          </td>
                          <td className="p-4 text-sm text-primary text-center">
                            <div
                              title="Update order status"
                              onMouseOver={() => {
                                statusEditId !== id &&
                                  setEditStatusValue(status);
                                setStatusEditId(id);
                              }}
                              className="cursor-pointer"
                            >
                              <Tooltip
                                trigger={
                                  <div className="flex justify-center items-center text-primary text-sm">
                                    {isStatusLoading ? (
                                      <Spinner size="sm" />
                                    ) : (
                                      status
                                    )}
                                  </div>
                                }
                                content={
                                  <div
                                    className={classNames(
                                      "flex flex-col items-center text-primary text-sm p-3",
                                      spaceMono.className
                                    )}
                                  >
                                    <div className="flex items-center mb-2.5">
                                      <button
                                        className="mr-3 disabled:cursor-not-allowed"
                                        disabled={
                                          isStatusLoading ||
                                          editStatusValue === "PENDING"
                                        }
                                        onClick={() => {
                                          editStatusValue !== "PENDING" &&
                                            setEditStatusValue(
                                              editStatusValue === "DELIVERED"
                                                ? "DISPATCHED"
                                                : "PENDING"
                                            );
                                        }}
                                      >
                                        <ChevronLeftIcon color="#000000" />
                                      </button>
                                      <span>{editStatusValue}</span>
                                      <button
                                        className="ml-3 disabled:cursor-not-allowed"
                                        disabled={
                                          isStatusLoading ||
                                          editStatusValue === "DELIVERED"
                                        }
                                        onClick={() => {
                                          editStatusValue !== "DELIVERED" &&
                                            setEditStatusValue(
                                              editStatusValue === "DISPATCHED"
                                                ? "DELIVERED"
                                                : "DISPATCHED"
                                            );
                                        }}
                                      >
                                        <ChevronRightIcon color="#000000" />
                                      </button>
                                    </div>
                                    <button
                                      title="Confirm"
                                      onClick={async () => {
                                        try {
                                          setStatusLoading((prev) => [
                                            ...prev,
                                            id,
                                          ]);

                                          const { data } = await axios.put(
                                            `/api/orders/${id}`,
                                            {
                                              status: editStatusValue,
                                            }
                                          );

                                          if (data?.success) {
                                            setOrders(() =>
                                              [...orders].map((order) =>
                                                order.id === id
                                                  ? {
                                                      ...order,
                                                      status: data.status,
                                                    }
                                                  : order
                                              )
                                            );

                                            openToast(
                                              "Order status updated",
                                              "success"
                                            );

                                            document.body.click();
                                          }
                                        } catch (err: any) {
                                          console.log(
                                            "Failed to update order status: ",
                                            err.message
                                          );

                                          openToast(
                                            "Failed to update order status",
                                            "error"
                                          );
                                        } finally {
                                          setStatusLoading((prev) =>
                                            prev.filter((oid) => oid !== id)
                                          );
                                        }
                                      }}
                                      className="p-1.5 cursor-pointer"
                                    >
                                      {isStatusLoading ? (
                                        <Spinner size="sm" />
                                      ) : (
                                        <CheckIcon color="#000000" />
                                      )}
                                    </button>
                                  </div>
                                }
                              />
                            </div>
                          </td>
                          <td className="p-4 text-sm text-primary text-center undeline">
                            <div title="Update delivery date">
                              <Tooltip
                                trigger={
                                  <div
                                    className="flex justify-center items-center text-primary text-sm cursor-pointer"
                                    onMouseOver={() => {
                                      setDateEditId(id);
                                      dateEditId !== id &&
                                        setEditDateValue(
                                          new Date(deliveryDate)
                                        );
                                    }}
                                  >
                                    {isDateLoading ? (
                                      <Spinner size="sm" />
                                    ) : (
                                      formatInTimeZone(
                                        deliveryDate,
                                        "America/Chicago",
                                        "yyyy-MM-dd zzz"
                                      )
                                    )}
                                  </div>
                                }
                                content={
                                  <div
                                    className={classNames(
                                      spaceMono.className,
                                      "flex flex-col items-center tex-sm text-primary p-3"
                                    )}
                                  >
                                    <div className="mb-2.5">
                                      <DatePicker
                                        selected={editDateValue}
                                        onChange={(value: Date) => {
                                          setEditDateValue(value);
                                        }}
                                        dateFormat="yyyy/MM/dd"
                                        locale={en}
                                        className={classNames(
                                          spaceMono.className,
                                          "text-sm text-primary"
                                        )}
                                      />
                                    </div>
                                    <button
                                      title="Confirm"
                                      onClick={async () => {
                                        try {
                                          setDateLoading((prev) => [
                                            ...prev,
                                            id,
                                          ]);

                                          const { data } = await axios.put(
                                            `/api/orders/${id}`,
                                            {
                                              deliveryDate: editDateValue,
                                            }
                                          );

                                          if (data?.success) {
                                            setOrders(() =>
                                              [...orders].map((order) =>
                                                order.id === id
                                                  ? {
                                                      ...order,
                                                      deliveryDate:
                                                        data.deliveryDate,
                                                    }
                                                  : order
                                              )
                                            );

                                            openToast(
                                              "Order delivery date updated",
                                              "success"
                                            );

                                            document.body.click();
                                          }
                                        } catch (err: any) {
                                          console.log(
                                            "Failed to update order status: ",
                                            err.message
                                          );

                                          openToast(
                                            "Failed to update order delivery date",
                                            "error"
                                          );
                                        } finally {
                                          setDateLoading((prev) =>
                                            prev.filter((oid) => oid !== id)
                                          );
                                        }
                                      }}
                                      className="p-1.5 cursor-pointer"
                                    >
                                      {isDateLoading ? (
                                        <Spinner size="sm" />
                                      ) : (
                                        <CheckIcon color="#000000" />
                                      )}
                                    </button>
                                  </div>
                                }
                              />
                            </div>
                          </td>
                        </tr>
                      );
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
