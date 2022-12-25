import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      "https://us-east-1.aws.realm.mongodb.com/api/client/v2.0/app/application-0-weajw/graphql":
        {
          customFetch:
            "C:\\Users\\mkr\\Documents\\VScode Projects\\Volunteering\\src\\backend\\client\\fetcher.ts#fetchData",
        },
    },
  ],
  documents: "src/backend/graphql/**/*.gql",
  generates: {
    "src/backend/generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-resolvers",
        "typescript-react-apollo",
      ],
      config: [
        {
          fetcher: "src/backend/client/fetcher.ts#fetchData",
        },
      ],
    },
    //   "./graphql.schema.json": {
    //     "plugins": [
    //       "introspection"
    //     ],
    //     "config": [
    //       {
    //         "fetcher": "src/backend/client/fetcher.ts#fetchData"
    //       }
    //     ]
    //   }
  },
};

export default config;
