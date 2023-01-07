import { useEffect, useRef, useState } from "react";
import { ToastType } from "@src/types";

const useToast = () => {
  const [toastOpen, setToastOpen] = useState(false);
  const [toastContent, setToastContent] = useState("");
  const [toastType, setToastType] = useState<ToastType>("neutral");
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      timeoutIdRef.current && clearTimeout(timeoutIdRef.current);
    };
  }, []);

  const openToast = (text: string, type: ToastType = "neutral") => {
    setToastOpen(false);

    const id = setTimeout(() => {
      setToastContent(text);
      setToastType(type);
      setToastOpen(true);
    }, 150);

    timeoutIdRef.current = id;
  };

  return {
    openToast,
    open: toastOpen,
    setOpen: setToastOpen,
    toastContent,
    toastType,
  };
};

export default useToast;
