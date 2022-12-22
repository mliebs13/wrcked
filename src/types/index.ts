export type ToastType = "error" | "success" | "neutral";

export type Product = {
  _id: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
  image: string;
  gif: string;
};
