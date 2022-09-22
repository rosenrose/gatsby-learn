import React, { FunctionComponent, useMemo } from "react";
import { graphql } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import Introduction from "components/Main/Introduction";
import CategoryList from "components/Main/CategoryList";
import PostList from "components/Main/PostList";
import { IPost } from "components/Main/PostItem";
import Template from "components/Common/Template";

interface IIndexPagePros {
  data: {
    allMarkdownRemark: {
      edges: IPost[];
    };
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
  location: {
    search: string;
  };
}

export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }) {
      edges {
        node {
          id
          frontmatter {
            title
            summary
            date(formatString: "YYYY. MM. DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 768, height: 400)
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
    file(name: { eq: "profile_image" }) {
      childImageSharp {
        gatsbyImageData(width: 120, height: 120)
      }
    }
  }
`;

export const CATEGORY_ALL = "All";

const IndexPage: FunctionComponent<IIndexPagePros> = ({
  data: {
    allMarkdownRemark: { edges },
    file: {
      childImageSharp: { gatsbyImageData },
    },
  },
  location: { search },
}) => {
  const params = new URLSearchParams(search);
  const selectedCategory = params.get("category") || CATEGORY_ALL;

  const categoryList = useMemo(
    () =>
      edges.reduce(
        (
          catList,
          {
            node: {
              frontmatter: { categories },
            },
          }
        ) => {
          categories.forEach((category) => {
            if (!(category in catList)) {
              catList[category] = 0;
            }
            catList[category] += 1;
          });

          catList[CATEGORY_ALL] += 1;

          return catList;
        },
        { [CATEGORY_ALL]: 0 } as { [k: string]: number }
      ),
    []
  );

  return (
    <Template>
      <Introduction profileImage={gatsbyImageData} />
      <CategoryList selectedCategory={selectedCategory} categoryList={categoryList} />
      <PostList selectedCategory={selectedCategory} posts={edges} />
    </Template>
  );
};

export default IndexPage;
