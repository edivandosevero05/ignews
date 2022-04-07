import * as prismic from "@prismicio/client";
import { enableAutoPreviews } from "@prismicio/next";
import sm from "../../sm.json";

export const endpoint = sm.apiEndpoint;
export const repositoryName = prismic.getRepositoryName(endpoint);

export function linkResolver(doc) {
  switch (doc.type) {
    case "posts":
      return "/posts";
    default:
      return null;
  }
}

export function createClient(config = {}, req?: unknown) {
  const client = prismic.createClient(endpoint, {
    ...config,
    accessToken: process.env.PRISMIC_MASTER,
  });
  enableAutoPreviews({
    client,
    req: req,
  });

  return client;
}

// import * as prismic from '@prismicio/client';
// import * as prismicH from '@prismicio/helpers';

// const repoName = "ignews";
// const endpoint = prismic.getEndpoint(repoName);

// export function createClient() {
//   const client = prismic.createClient(endpoint, {
//     accessToken: process.env.PRISMIC_MASTER,
//   });
//   console.log(client);
//   return client;
// }
