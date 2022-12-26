import { ReactElement, useEffect, useState } from "react";
import { useRouter } from "next/router";
import AdminLayout from "@src/layouts/AdminLayout";
import { NextPageWithLayout } from "@src/pages/_app";
import axios from "@src/config/axios";
import { Order } from "@prisma/client";
import { formatPrice, orderItemDelimeter } from "@src/utils";
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
          setOrder(data.order);
        } else {
          setError("Failed to retrieve order details");
        }
      }
    };

    getOrder();
  }, [router.query]);

  const [productId, name, quantity, price] = order
    ? order.item.split(orderItemDelimeter)
    : [];

  return (
    <main
      className={classNames(
        spaceMono.className,
        "w-full min-h-[calc(100vh-95px)] bg-lightGray flex items-start"
      )}
    >
      <div className="max-w-8xl w-full h-full flex justify-center mx-auto py-8 sm:py-12 px-3 sm:px-10 2xl:px-20 overflow-auto">
        {order ? (
          <div className="w-full flex flex-col items-center">
            <p className="text-base font-bold text-primary text-left mb-4">
              <span>Customer name: </span>
              <span>{order?.username}</span>
            </p>
            <p className="text-base font-bold text-primary text-left mb-4">
              <span>Customer phone: </span>
              <span>{order?.phone}</span>
            </p>
            <p className="text-base font-bold text-primary text-left mb-4">
              <span>Customer email: </span>
              <span>{order?.email}</span>
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
              <span>${formatPrice(order.total)}</span>
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
  return <AdminLayout>{page}</AdminLayout>;
};

export default Order;
