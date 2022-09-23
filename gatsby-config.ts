import type { GatsbyConfig } from "gatsby";

const siteUrl = "https://rosenrose.github.io/gatsby-learn";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Learning Gatsby",
    description: "Gatsby with Typescript",
    author: "user",
    siteUrl,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl,
        stripQueryString: true,
      },
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [{ userAgent: "*", allow: "/" }],
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap/sitemap-index.xml`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/posts`,
      },
      __key: "posts",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "static",
        path: `${__dirname}/static`,
      },
      __key: "static",
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-transformer-sharp",
      options: {
        defaults: {
          formats: ["auto", "webp"],
          quality: 100,
          placeholder: "blurred",
        },
      },
    },
  ],
};

export default config;
