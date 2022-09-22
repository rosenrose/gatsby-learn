const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const output = getConfig().output || {};

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        components: path.resolve(__dirname, "src/components"),
        hooks: path.resolve(__dirname, "src/hooks"),
        pages: path.resolve(__dirname, "src/pages"),
        utils: path.resolve(__dirname, "src/utils"),
      },
    },
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode });
    createNodeField({ node, name: "slug", value: slug });
  }
};
