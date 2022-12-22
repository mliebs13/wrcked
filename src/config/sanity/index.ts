import { createClient } from "next-sanity";

export default createClient({
  projectId: "t4jr7tcz",
  dataset: "production",
  useCdn: false,
  apiVersion: "2022-03-25",
  token: process.env.SANITY_API_TOKEN,
});
