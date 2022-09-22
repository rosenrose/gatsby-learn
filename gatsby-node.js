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

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const queryAllMarkdown = await graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (queryAllMarkdown.errors) {
    reporter.panicOnBuild("Error queryAllMarkdown");
    return;
  }

  const PostTemplate = path.resolve(__dirname, "src/templates/PostTemplate.tsx");
  const generatePostPage = ({
    node: {
      fields: { slug },
    },
  }) => {
    const pageOptions = { path: slug, component: PostTemplate, context: { slug } };

    createPage(pageOptions);
  };

  queryAllMarkdown.data.allMarkdownRemark.edges.forEach(generatePostPage);
};
