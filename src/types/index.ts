export type ToastType = "error" | "success" | "neutral";

export type SanityImage = {
  asset: {
    _ref: string;
    _type: string;
  };
};

export type Product = {
  _id: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
  image: SanityImage;
  gif: SanityImage;
};
