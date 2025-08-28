import SanityClient from "@sanity/client";

export const client = SanityClient({
  projectId: "7y2hiuox",
  dataset: "production",
  apiVersion: "2024-09-26",
  useCdn: true,
});
