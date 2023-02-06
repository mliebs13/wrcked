import classNames from "classnames";
import Link from "next/link";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

type NavProps = {
  color?: "light" | "dark";
} & DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>;

const Nav: FC<NavProps> = ({ className, color = "dark", ...props }) => {
  const colorClass = color === "light" ? "text-secondary" : "text-primary";

  return (
    <ul
      className={classNames(
        "w-fit h-fit flex items-center justify-center mx-auto",
        className
      )}
      {...props}
    >
      <li
        className={classNames(
          "font-bold text-sm text-primary underline mr-6 sm:mr-8",
          colorClass
        )}
      >
        <Link href="/faq">FAQ</Link>
      </li>
      <li
        className={classNames(
          "font-bold text-sm text-primary underline mr-6 sm:mr-8",
          colorClass
        )}
      >
        <Link href="/refunds">REFUNDS</Link>
      </li>
      <li
        className={classNames(
          "font-bold text-sm text-primary underline mr-6 sm:mr-8",
          colorClass
        )}
      >
        <Link href="mailto:art@wrcked.com">SUPPORT</Link>
      </li>
      <li
        className={classNames(
          "font-bold text-sm text-primary underline mr-6 sm:mr-8",
          colorClass
        )}
      >
        <Link href="/terms.html" target="_blank">
          TERMS
        </Link>
      </li>
      <li
        className={classNames(
          "font-bold text-sm text-primary underline",
          colorClass
        )}
      >
        <Link href="https://instagram.com/wrcked" target="_blank">
          INSTAGRAM
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
