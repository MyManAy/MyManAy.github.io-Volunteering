<<<<<<< HEAD
import * as Realm from "realm-web";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
=======
import { GraphQLClient } from "graphql-request";
import { getSdk } from "../generated/graphql";
>>>>>>> parent of 0ee4724 (Revert "Revert "removed typescript codegen stuff"")

const endpoint =
  "https://us-east-1.aws.realm.mongodb.com/api/client/v2.0/app/application-0-weajw/graphql";

<<<<<<< HEAD
// Connect to your MongoDB Realm app
const app = new Realm.App("application-0-weajw");

// Gets a valid Realm user access token to authenticate requests
async function getValidAccessToken() {
  // Guarantee that there's a logged in user with a valid access token
  if (!app.currentUser) {
    // If no user is logged in, log in an anonymous user. The logged in user will have a valid
    // access token.
    await app.logIn(Realm.Credentials.anonymous());
  } else {
    // An already logged in user's access token might be stale. Tokens must be refreshed after
    // 30 minutes. To guarantee that the token is valid, we refresh the user's access token.
    await app.currentUser.refreshAccessToken();
  }
  return app.currentUser!.accessToken;
}

// Configure the ApolloClient to connect to your app's GraphQL endpoint
export const sdk = new ApolloClient({
  link: new HttpLink({
    uri: endpoint,
    // We define a custom fetch handler for the Apollo client that lets us authenticate GraphQL requests.
    // The function intercepts every Apollo HTTP request and adds an Authorization header with a valid
    // access token before sending the request.
    fetch: async (uri, options) => {
      const accessToken = await getValidAccessToken();
      (options as any).headers.Authorization = `Bearer ${accessToken}`;
      return fetch(uri, options);
    },
  }),
  cache: new InMemoryCache(),
=======
const client = new GraphQLClient(endpoint, {
  headers: {
    "x-hasura-admin-secret":
      "PEXc9q6lySrzh2IeMUQTlD9gDG4tt39Qnx721QarVJYAhSUfkXUNSD27xSwG76pt",
  },
>>>>>>> parent of 0ee4724 (Revert "Revert "removed typescript codegen stuff"")
});

export const sdk = getSdk(client);
