import { Space_Mono } from "@next/font/google";

export const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  fallback: ["Space Mono", "monospace", "arial", "system-ui"],
  preload: true,
  display: "auto",
  style: "normal",
});
