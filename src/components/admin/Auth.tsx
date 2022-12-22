import {
  DetailedHTMLProps,
  FC,
  Fragment,
  HTMLAttributes,
  useEffect,
} from "react";
import useAdmin from "../../hooks/useAdmin";
import Spinner from "../shared/Spinner";

const Auth: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children }) => {
  const result = useAdmin(false);

  return result ? (
    <div>
      {result?.admin ? (
        <Fragment>{children}</Fragment>
      ) : (
        result?.message ?? <div>Unauthorized access</div>
      )}
    </div>
  ) : (
    <div className="w-full min-h-screen flex items-center justify-center">
      <Spinner size="lg" />
    </div>
  );
};

export default Auth;
