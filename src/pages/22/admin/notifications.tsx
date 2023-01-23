import { ReactElement, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "../../_app";
import AdminLayout from "@src/layouts/AdminLayout";
import { Notification } from "@prisma/client";
import axios from "@src/config/axios";
import Spinner from "@src/components/shared/Spinner";
import classNames from "classnames";

const Notifications: NextPageWithLayout = () => {
  const [loading, setLoading] = useState(true);
  const [notifs, setNotifs] = useState<null | Notification[]>(null);
  const [total, setTotal] = useState(0);
  const [status, setStatus] = useState("PENDING");
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const router = useRouter();

  useEffect(() => {
    const getNotifs = async () => {
      try {
        setLoading(true);

        const { data } = await axios.post("/api/notifications", {
          status,
        });

        if (data?.notifications !== null) {
          setTotal(data.total);
          setNotifs(data.notifications);
        } else setError("Failed to fetch notifications");
      } catch (err: any) {
        console.log("error occurred: ", err.message);
        setError(`An error occurred: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    getNotifs();
  }, [status]);

  useEffect(() => {
    checkNotifs();

    document
      .querySelector(".scroll")
      ?.removeEventListener("scroll", checkNotifs);

    document.querySelector(".scroll")?.addEventListener("scroll", checkNotifs);

    return () =>
      document
        .querySelector(".scroll")
        ?.removeEventListener("scroll", checkNotifs);
  }, [notifs]);

  const checkNotifs = () => {
    if (notifs) {
      for (const notif of notifs) {
        const el = document.querySelector(`.notif-${notif.id}`);
        if (el && isVisible(el)) {
          notif.status === "PENDING" &&
            axios.post(`/api/resolveNotification/${notif.id}`);
          notif.status === "PENDING" &&
            setNotifs(() =>
              notifs.map((n) =>
                n.id === notif.id
                  ? {
                      ...n,
                      status: "RESOLVED",
                    }
                  : n
              )
            );
        }
      }
    }
  };

  function isVisible(el: Element) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  return (
    <main className="w-full min-h-[calc(100vh-var(--admin-nav-height))] bg-lightGray text-primary flex items-start">
      <div className="w-full flex flex-col items-center px-3 sm:px-10 py-8 sm:py-12 2xl:px-20">
        {notifs ? (
          notifs.length < 1 ? (
            <p className="font-bold text-sm text-primary">
              No new notifications
            </p>
          ) : (
            <>
              <h2 className="font-bold text-lg text-center mb-6">
                Notifications
              </h2>
              <div className="w-full">
                {notifs.map((notif, i) => {
                  const date = new Date(notif.createdAt);
                  const formatted = `${date.getDate()}/${
                    date.getMonth() + 1
                  }/${date.getFullYear()}`;

                  return (
                    <div
                      key={`notif-${i}`}
                      className={classNames(
                        `notif-${notif.id}`,
                        "w-full flex justify-between items-center bg-secondary text-base rounded shadow-sm px-4 py-3 mb-4"
                      )}
                    >
                      <span
                        className={classNames(
                          "font-bold text-primary mr-4 sm:mr-6"
                        )}
                      >
                        {notif.text}
                      </span>
                      <div className="flex flex-col items-center">
                        <span className="font-bold text-sm text-darkGray mb-2">
                          {formatted}
                        </span>
                        <button
                          className="font-bold text-sm text-darkGray underline"
                          onClick={() =>
                            router.push(`/22/admin/orders/${notif.orderId}`)
                          }
                        >
                          order details
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="font-bold text-sm text-primary tracking-wide mb-2">
                Showing {notifs.length} of {total} recent notifications
              </p>

              {/* <p className="font-bold text-sm text-primary tracking-wide">
                page {page} of {Math.floor(total / 5) + 1} page(s)
              </p> */}
            </>
          )
        ) : loading ? (
          <div className="w-full h-full flex items-center justify-center">
            <Spinner size="lg" />
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <p className="font-bold text-sm text-danger">
              {error ?? "Something went wrong"}
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

Notifications.getLayout = (page: ReactElement) => {
  return (
    <AdminLayout
      title="Notifications - Admin"
      description="Notifications - Admin"
    >
      {page}
    </AdminLayout>
  );
};

export default Notifications;
