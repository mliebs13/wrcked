import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "t4jr7tcz",
  dataset: "production",
  useCdn: false,
  apiVersion: "2021-10-21",
});
