import { Dispatch, FC, useEffect, useRef, useState } from "react";
import * as RadixToast from "@radix-ui/react-toast";
import { Cross2Icon } from "@radix-ui/react-icons";
import classNames from "classnames";
import { ToastType } from "@src/types";

type ToastProps = {
  duration?: number;
  setOpen: Dispatch<boolean>;
  open: boolean;
  content: JSX.Element | string;
  position?: "center" | "top" | "bottom";
  type?: ToastType;
};

const Toast: FC<ToastProps> = ({
  duration = 5000,
  open,
  setOpen,
  content,
  position = "center",
  type = "neutral",
}) => {
  const timeoutRef = useRef<any>(null);

  useEffect(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);

    if (open) {
      timeoutRef.current = setTimeout(() => {
        setOpen(false);
      }, duration);
    }
  }, [open]);

  useEffect(() => console.log("content: ", content), [content]);

  return (
    <>
      <RadixToast.Root
        className="ToastRoot bg-white shadow rounded-md py-3 px-5"
        open={open}
        onOpenChange={setOpen}
      >
        <RadixToast.Title
          className={classNames("ToastTitle text-sm", {
            "text-primary": type === "neutral",
            "text-danger": type === "error",
            "text-green-600": type === "success",
          })}
        >
          {content}
        </RadixToast.Title>

        {/* <RadixToast.Description asChild>description</RadixToast.Description> */}

        <RadixToast.Action
          className="ToastAction"
          asChild
          altText="Goto schedule to undo"
        >
          <button className="flex items-center justify-center">
            <Cross2Icon width={16} height={16} color="#000000" />
          </button>
        </RadixToast.Action>
      </RadixToast.Root>
      <RadixToast.Viewport
        className={classNames(
          "ToastViewport fixed flex flex-col outline-none gap-4 min-w-[240px]",
          {
            "top-2 right-2": position === "top",
            "bottom-2 right-2": position === "bottom",
            "top-2 left-1/2 -translate-x-1/4": position === "center",
          }
        )}
      />
    </>
  );
};

export default Toast;
