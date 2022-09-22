import React, { FunctionComponent } from "react";
import { graphql } from "gatsby";
import Template from "components/Common/Template";
import PostHead from "components/Post/PostHead";
import { IPost } from "components/Main/PostItem";

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

interface IPostTemplateProps {
  data: {
    allMarkdownRemark: {
      edges: IPost[];
    };
  };
}

const PostTemplate: FunctionComponent<IPostTemplateProps> = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const {
    node: {
      html,
      frontmatter: {
        title,
        summary,
        date,
        categories,
        thumbnail: {
          childImageSharp: { gatsbyImageData },
        },
      },
    },
  } = edges[0];

  return (
    <Template>
      <PostHead title={title} date={date} categories={categories} thumbnail={gatsbyImageData} />
    </Template>
  );
};

export default PostTemplate;
