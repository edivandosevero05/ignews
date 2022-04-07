import { Client } from "faunadb";

const secret = process.env.FAUNADB_KEY;
const domain = process.env.FAUNADB_ENDPOINT;

export const fauna = new Client({
  secret: secret,
  domain: "db.us.fauna.com",
});
