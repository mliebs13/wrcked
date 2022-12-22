import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "t4jr7tcz",
  dataset: "production",
  useCdn: false,
  //   apiVersion: "2022-03-25",
  apiVersion: "2021-12-28",
  withCredentials: false,
  token: process.env.SANITY_AUTH_TOKEN,
});
