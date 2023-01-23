import {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  useEffect,
  useState,
} from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import classNames from "classnames";
import {
  CubeIcon,
  GearIcon,
  MixIcon,
  PersonIcon,
  BellIcon,
  ExitIcon,
} from "@radix-ui/react-icons";
import { useMemo } from "react";
import Button from "@components/ui/Button";
import Auth from "@src/components/admin/Auth";
import Hamburger from "@src/components/shared/Hamburger";
import { spaceMono } from "@src/config/fonts";
import axios from "@src/config/axios";
import Tooltip from "@src/components/ui/Tooltip";
import useAdmin from "@src/hooks/useAdmin";

type AdminLayoutProps = {
  description?: string;
  title?: string;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const AdminLayout: FC<AdminLayoutProps> = ({
  children,
  title = "Admin - Wrcked",
  description = "Admin - Wrcked",
}) => {
  const router = useRouter();
  const [navOpen, setNavOpen] = useState(false);
  const adminRoutes: {
    [key: string]: {
      route: string;
      icon: JSX.Element;
    };
  } = useMemo(
    () => ({
      overview: {
        route: "",
        icon: <MixIcon width={20} height={20} />,
      },
      orders: {
        route: "orders",
        icon: <CubeIcon width={20} height={20} />,
      },
      settings: {
        route: "settings",
        icon: <GearIcon width={20} height={20} />,
      },
    }),
    []
  );
  const currentRoute = router.pathname.split("/")[3] ?? "";
  const [count, setCount] = useState<number | null>(null);
  const [intervalId, setIntervalId] = useState<NodeJS.Timer | null>(null);
  const result = useAdmin(true);

  useEffect(() => {
    const getCount = async () => {
      try {
        const { data } = await axios.post("/api/notificationsCount", {
          status: "PENDING",
        });

        data?.count !== null && setCount(data.count);
      } catch (err: any) {
        console.log("error occurred: ", err.message);
      }
    };

    result?.admin && getCount();

    const id = result?.admin
      ? setInterval(() => {
          getCount();
        }, 30000)
      : null;

    id && setIntervalId(id);

    return () => {
      intervalId && clearInterval(intervalId);
    };
  }, [result]);

  return (
    <Auth result={result}>
      <div
        className={classNames(
          spaceMono.className,
          "relative w-full h-full min-h-screen grid sm:grid-cols-[0.25fr_1fr] text-primary overflow-x-auto",
          {
            "grid-cols-[0.25fr_1fr]": navOpen,
            "grid-cols-[1fr]": !navOpen,
          }
        )}
      >
        <Head>
          <title>{title}</title>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="description" content={description} />
        </Head>

        {/* left - navigation */}
        <div
          className={classNames("relative w-full h-full sm:!flex z-10", {
            hidden: !navOpen,
            flex: navOpen,
          })}
        >
          <div className="sticky left-0 top-0 w-full h-full min-w-[200px] flex flex-col justify-between bg-secondary py-12 px-3 shadow">
            <ul className="w-full flex flex-col items-start">
              {Object.keys(adminRoutes).map((item, idx) => {
                const { route, icon } = adminRoutes[item];

                return (
                  <Link
                    key={`admin-route-${idx}`}
                    href={`/22/admin/${route}`}
                    className="w-full mb-6"
                    onClick={() => setNavOpen(false)}
                  >
                    <li
                      className={classNames(
                        "w-full h-16 flex items-center capitalize text-base tracking-wide p-3 rounded-lg cursor-pointer transition-colors hover:bg-gray",
                        {
                          "bg-gray font-bold": currentRoute === route,
                        }
                      )}
                    >
                      {icon}
                      <span className="ml-4">{item}</span>
                    </li>
                  </Link>
                );
              })}
            </ul>

            <Button
              className="w-[90%] min-h-[56px] max-w-[300px] text-base font-bold px-2 py-3"
              onClick={() => {
                Cookies.remove("wrcked-a-t");
                router.push("/22/admin/login");
              }}
            >
              <ExitIcon width={20} height={20} />
              <span className="ml-2 text-base tracking-wide">LOGOUT</span>
            </Button>
          </div>
        </div>

        {/* right */}
        <div className="scroll w-full h-full min-w-[360px] overflow-x-hidden">
          {/* top navigation */}
          <div className="w-full h-[var(--admin-nav-height)] flex justify-between items-center bg-secondary py-8 px-10 2xl:px-20">
            <h1 className="hidden sm:block text-lg text-primary tracking-wide">
              ADMIN
            </h1>

            {/* mobile nav toggler */}
            <Hamburger
              className="sm:hidden"
              onClick={() => setNavOpen(!navOpen)}
            />

            <div className="flex items-center">
              <Tooltip
                trigger={
                  <button
                    className="relative rounded-full mr-12"
                    onClick={() => router.push("/22/admin/notifications")}
                  >
                    <BellIcon width={20} height={20} />
                    {!!count && count >= 1 && (
                      <span className="absolute min-w-[20px] min-h-[20px] w-fit flex items-center justify-center -top-2 -right-4 bg-orange-500 font-bold text-secondary text-xs rounded-full">
                        {count}
                      </span>
                    )}
                  </button>
                }
                content={
                  <span
                    className={classNames(
                      spaceMono.className,
                      "text-sm text-primary"
                    )}
                  >
                    View notifications
                  </span>
                }
              />
              <Tooltip
                trigger={
                  <button
                    className="rounded-full"
                    onClick={() => router.push("/22/admin/settings")}
                  >
                    <PersonIcon width={20} height={20} />
                  </button>
                }
                content={
                  <span
                    className={classNames(
                      spaceMono.className,
                      "text-sm text-primary"
                    )}
                  >
                    Edit profile
                  </span>
                }
              />
            </div>
          </div>

          <div className="w-full grid min-h-[calc(100vh-var(--admin-nav-height))] overflow-x-auto">
            {children}
          </div>
        </div>
      </div>
    </Auth>
  );
};

export default AdminLayout;
