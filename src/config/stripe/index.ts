import Stripe from "stripe";

export default new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY ?? "", {
  apiVersion: "2022-11-15",
});
