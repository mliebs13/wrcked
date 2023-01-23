import { ReactElement, useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "@src/config/axios";
import classNames from "classnames";
import { intlFormat } from "date-fns";
import { NextPageWithLayout } from "@src/pages/_app";
import AdminLayout from "@src/layouts/AdminLayout";
import { Order } from "@prisma/client";
import { formatPrice } from "@src/utils";
import { spaceMono } from "@src/config/fonts";

const Order: NextPageWithLayout = () => {
  const router = useRouter();
  const [error, setError] = useState<null | string>(null);
  const [order, setOrder] = useState<null | Order>(null);

  useEffect(() => {
    const getOrder = async () => {
      const id = router.query?.id?.toString();

      if (id) {
        try {
          error && setError(null);

          const { data } = await axios.get(`/api/orders/${id}`);

          if (data) {
            console.log("order: ", data.order);

            setOrder(data.order);
          } else {
            setError("Failed to retrieve order details");
          }
        } catch (err: any) {
          console.log("error occurred retrieving order details: ", err.message);

          setError("Failed to retrieve order details");
        }
      }
    };

    getOrder();
  }, [router.query]);

  const {
    createdAt,
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
        "w-full min-h-[calc(100vh-var(--admin-nav-height))] bg-lightGray text-primary flex items-start"
      )}
    >
      <div className="max-w-8xl w-full h-full flex justify-center mx-auto py-8 sm:py-12 px-3 sm:px-10 2xl:px-20 overflow-auto">
        {order && !error ? (
          <div className="w-fit flex flex-col items-start">
            <p className="text-base font-bold text-primary text-left mb-4">
              <span>Creation Date: </span>
              <span>
                {intlFormat(
                  new Date(createdAt ?? ""),
                  {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    timeZone: "America/New_York",
                    timeZoneName: "short",
                  },
                  {
                    locale: "en-US",
                  }
                )}
              </span>
            </p>
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
              <span>Product ordered: </span>
              <span>{name}</span>
            </p>
            <p className="text-base font-bold text-primary text-left mb-4">
              <span>Quantity: </span>
              <span>{quantity}</span>
            </p>
            <p className="text-base font-bold text-primary text-left mb-4">
              <span>Total amount: </span>
              <span>{total ? `${formatPrice(total)}` : "-"}</span>
            </p>
            <p className="text-base font-bold text-primary text-left mb-4">
              <span>Shipping Address: </span>
              <span>{`${country}, ${state}, ${city}, ${postalCode}, ${line1}`}</span>
            </p>
            <p className="text-base font-bold text-primary text-left mb-4">
              <span>Delivery Date: </span>
              <span>
                {intlFormat(
                  new Date(deliveryDate ?? ""),
                  {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    timeZone: "America/New_York",
                    timeZoneName: "short",
                  },
                  {
                    locale: "en-US",
                  }
                )}
              </span>
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
    <AdminLayout title="Order - Admin" description="Order - Admin">
      {page}
    </AdminLayout>
  );
};

export default Order;
