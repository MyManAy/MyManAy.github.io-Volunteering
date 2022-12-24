import { GraphQLClient } from "graphql-request";
import * as Realm from "realm-web";

const endpoint = "https://money.hasura.app/v1/graphql";

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

export const sdk = new GraphQLClient(endpoint, {
  headers: (async () => {
    const token = await getValidAccessToken();
    return { Authorization: `Bearer ${token}` };
  }) as any,
});
