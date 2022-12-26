import { GraphQLClient } from "graphql-request";
import { getSdk } from "../generated/graphql";

const endpoint = "https://volunteering.hasura.app/v1/graphql";

const client = new GraphQLClient(endpoint, {
  headers: {
    "x-hasura-admin-secret":
      "mXmyE11tjA0RlkEUBqCYQ7rQCkUqIxhl3vc4HQliGhwVddeior79lD3MkH4Tj11Y",
  },
});

export const sdk = getSdk(client);
