import { GraphQLClient } from "graphql-request";

const endpoint = "https://money.hasura.app/v1/graphql";

export const client = new GraphQLClient(endpoint, {
  headers: {
    "x-hasura-admin-secret":
      "PEXc9q6lySrzh2IeMUQTlD9gDG4tt39Qnx721QarVJYAhSUfkXUNSD27xSwG76pt",
  },
});
