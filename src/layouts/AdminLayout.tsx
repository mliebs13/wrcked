import { DetailedHTMLProps, FC, HTMLAttributes, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Space_Mono } from "@next/font/google";
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

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  fallback: ["system-ui", "arial"],
});

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

  return (
    <Auth>
      {/* <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
      </Head> */}
      <div
        className={classNames(
          spaceMono.className,
          "relative w-full h-full min-h-screen grid sm:grid-cols-[0.25fr_1fr] overflow-x-auto",
          {
            "grid-cols-[0.25fr_1fr]": navOpen,
            "grid-cols-[1fr]": !navOpen,
          }
        )}
      >
        {/* left - navigation */}
        <div
          className={classNames("relative w-full h-full sm:!flex z-10", {
            hidden: !navOpen,
            flex: navOpen,
          })}
        >
          <div className="sticky left-0 top-0 w-full h-full min-w-[200px] flex flex-col justify-between bg-white py-12 px-3 shadow">
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
                        "w-full h-16 capitalize font-bold text-base flex items-center p-3 rounded-lg cursor-pointer transition-colors hover:bg-gray",
                        {
                          "bg-gray": currentRoute === route,
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
              className="w-[80%] text-base font-bold px-2 py-3"
              onClick={() => {
                Cookies.remove("wrcked-a-t");
                router.push("/22/admin/login");
              }}
            >
              <ExitIcon width={20} height={20} />
              <span className="ml-2">Logout</span>
            </Button>
          </div>
        </div>

        {/* right */}
        <div className="w-full h-full min-w-[360px] overflow-x-hidden">
          {/* top navigation */}
          <div className="w-full flex justify-between items-center bg-white py-8 px-10 2xl:px-20">
            <h1 className="hidden sm:block font-bold text-xl text-primary tracking-wide">
              Admin Dashboard
            </h1>

            {/* mobile nav toggler */}
            <Hamburger
              className="sm:hidden"
              onClick={() => setNavOpen(!navOpen)}
            />

            <div>
              <button className="relative border border-pimary rounded-full p-1 mr-10">
                <BellIcon width={20} height={20} />
                <span className="absolute w-5 h-5 flex items-center justify-center -top-2 -right-3 bg-orange-500 font-bold text-white text-xs rounded-full">
                  2
                </span>
              </button>
              <button
                className="border border-primary rounded-full p-1"
                onClick={() => router.push("/22/admin/settings")}
              >
                <PersonIcon width={20} height={20} />
              </button>
            </div>
          </div>

          <div className="w-full grid overflow-x-auto">{children}</div>
        </div>
      </div>
    </Auth>
  );
};

export default AdminLayout;
