import React, { FunctionComponent } from "react";
import { graphql } from "gatsby";

export const queryMarkdownBySlug = graphql`
  query queryMarkdownBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY. MM. DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;

const PostTemplate: FunctionComponent = (props: any) => {
  console.log(props);

  return <>{props.path}</>;
};

export default PostTemplate;
