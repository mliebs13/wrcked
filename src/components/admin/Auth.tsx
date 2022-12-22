import { Space_Mono } from "@next/font/google";
import classNames from "classnames";
import { DetailedHTMLProps, FC, Fragment, HTMLAttributes } from "react";
import useAdmin from "../../hooks/useAdmin";
import Spinner from "../shared/Spinner";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  fallback: ["system-ui", "arial"],
});

const Auth: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children }) => {
  const result = useAdmin(true);

  return result ? (
    <div>
      {result?.admin ? (
        <Fragment>{children}</Fragment>
      ) : (
        result?.message ?? (
          <div
            className={classNames(
              spaceMono.className,
              "w-full text-center text-base py-3 sm:py-10 2xl:py-20"
            )}
          >
            Unauthorized access
          </div>
        )
      )}
    </div>
  ) : (
    <div className="w-full min-h-screen flex items-center justify-center">
      <Spinner size="lg" />
    </div>
  );
};

export default Auth;
