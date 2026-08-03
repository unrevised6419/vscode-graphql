const config = {
  client: {
    service: {
      name: "CMS",
      localSchemaFile: "./schema.graphql",
    },
    includes: ["../**/*.cms.gql"],
  },
};

export default config;
