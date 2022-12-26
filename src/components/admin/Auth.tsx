import { DetailedHTMLProps, FC, Fragment, HTMLAttributes } from "react";
import classNames from "classnames";
import useAdmin from "../../hooks/useAdmin";
import Spinner from "../shared/Spinner";
import { spaceMono } from "@src/config/fonts";

const Auth: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children }) => {
  const result = useAdmin(true);

  return result ? (
    <div className="w-full h-screen max-h-screen overflow-hidden">
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
