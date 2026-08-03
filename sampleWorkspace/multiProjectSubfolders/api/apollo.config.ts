const config = {
  client: {
    service: {
      name: "API",
      localSchemaFile: "./schema.graphql",
    },
    includes: ["../**/*.api.gql"],
  },
};

export default config;
