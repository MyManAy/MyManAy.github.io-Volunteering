import { getValidAccessToken } from "./sdk";

export const fetchData = <TData, TVariables>(
  query: string,
  variables?: TVariables,
  options?: RequestInit["headers"]
): (() => Promise<TData>) => {
  return async () => {
    const accessToken = await getValidAccessToken();
    const res = await fetch(
      "https://us-east-1.aws.realm.mongodb.com/api/client/v2.0/app/application-0-weajw/graphql",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
          ...options,
        },
        body: JSON.stringify({
          query,
          variables,
        }),
      }
    );

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0] || {};
      throw new Error(message || "Error…");
    }

    return json.data;
  };
};
