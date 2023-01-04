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
  verticalDimension: string;
  horizontalDimension: string;
};

export type Shipping = {
  name: string;
  phone: string;
  address: {
    city: string;
    line1: string;
    line2: string;
    postal_code: string;
    state: string;
    country: string;
  };
};
