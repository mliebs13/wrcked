import { ReactElement, useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "@src/config/axios";
import { formatInTimeZone } from "date-fns-tz";
import { NextPageWithLayout } from "@src/pages/_app";
import AdminLayout from "@src/layouts/AdminLayout";
import { Order } from "@prisma/client";
import { formatPrice } from "@src/utils";
import classNames from "classnames";
import { spaceMono } from "@src/config/fonts";

const Order: NextPageWithLayout = () => {
  const router = useRouter();
  const [error, setError] = useState<null | string>(null);
  const [order, setOrder] = useState<null | Order>(null);

  useEffect(() => {
    const getOrder = async () => {
      const id = router.query?.id?.toString();

      if (id) {
        const { data } = await axios.get(`/api/orders/${id}`);
        if (data) {
          console.log("order: ", data.order);

          setOrder(data.order);
        } else {
          setError("Failed to retrieve order details");
        }
      }
    };

    getOrder();
  }, [router.query]);

  const {
    productId: pid,
    productName: name,
    quantity,
    productPrice: price,
    username,
    total,
    status,
    email,
    phone,
    country,
    state,
    city,
    postalCode,
    line1,
    line2,
    deliveryDate,
  } = order ?? {};

  return (
    <main
      className={classNames(
        spaceMono.className,
        "w-full min-h-[calc(100vh-95px)] bg-lightGray text-primary flex items-start"
      )}
    >
      <div className="max-w-8xl w-full h-full flex justify-center mx-auto py-8 sm:py-12 px-3 sm:px-10 2xl:px-20 overflow-auto">
        {order ? (
          <div className="w-fit flex flex-col items-start">
            <p className="text-base font-bold text-primary text-left mb-4">
              <span>Order status: </span>
              <span>{status}</span>
            </p>
            <p className="text-base font-bold text-primary text-left mb-4">
              <span>Customer name: </span>
              <span>{username}</span>
            </p>
            <p className="text-base font-bold text-primary text-left mb-4">
              <span>Customer phone: </span>
              <span>{phone}</span>
            </p>
            <p className="text-base font-bold text-primary text-left mb-4">
              <span>Customer email: </span>
              <span>{email}</span>
            </p>
            <p className="text-base font-bold text-primary text-left mb-4">
              <span>Product name: </span>
              <span>{name}</span>
            </p>
            <p className="text-base font-bold text-primary text-left mb-4">
              <span>Quantity: </span>
              <span>{quantity}</span>
            </p>
            <p className="text-base font-bold text-primary text-left mb-4">
              <span>Total amount: </span>
              <span>{total ? `$${formatPrice(total)}` : "-"}</span>
            </p>
            <p className="text-base font-bold text-primary text-left mb-4">
              <span>Address: </span>
              <span>{`${country}, ${state}, ${city}, ${postalCode}, ${line1}${
                line2 ? " ," + line2 : ""
              }`}</span>
            </p>
            <p className="text-base font-bold text-primary text-left mb-4">
              <span>Delivery Date: </span>
              <span>{`${formatInTimeZone(
                new Date(String(deliveryDate)),
                "America/Chicago",
                "yyyy-MM-dd zzz"
              )}`}</span>
            </p>
          </div>
        ) : error ? (
          <p className="font-bold text-sm tex-danger">{error}</p>
        ) : (
          <></>
        )}
      </div>
    </main>
  );
};

Order.getLayout = (page: ReactElement) => {
  return (
    <AdminLayout title="Admin - Order" description="Admin - Order">
      {page}
    </AdminLayout>
  );
};

export default Order;
