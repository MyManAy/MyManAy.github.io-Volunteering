import { GraphQLClient } from "graphql-request";
import { getSdk } from "../generated/graphql";

const endpoint = "";

const client = new GraphQLClient(endpoint, {
  headers: {
    "x-hasura-admin-secret":
      "PEXc9q6lySrzh2IeMUQTlD9gDG4tt39Qnx721QarVJYAhSUfkXUNSD27xSwG76pt",
  },
});

export const sdk = getSdk(client);
