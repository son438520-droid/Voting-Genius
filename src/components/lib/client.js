import SanityClient from "@sanity/client";

export const client = SanityClient({
  projectId: "oLS90aBnu",
  dataset: "production",
  apiVersion: "2024-09-26",
  useCdn: true,
});
