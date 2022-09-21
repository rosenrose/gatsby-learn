import React, { FunctionComponent } from "react";
import { graphql } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import GlobalStyle from "components/Common/GlobalStyle";
import Introduction from "components/Main/Introduction";
import CategoryList from "components/Main/CategoryList";
import PostList from "components/Main/PostList";
import { IPost } from "components/Main/PostItem";
import Footer from "components/Common/Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const CATEGORY_LIST = {
  All: 5,
  Web: 3,
  Mobile: 2,
};

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

const IndexPage: FunctionComponent<IIndexPagePros> = ({
  data: {
    allMarkdownRemark: { edges },
    file: {
      childImageSharp: { gatsbyImageData },
    },
  },
}) => {
  return (
    <Container>
      <GlobalStyle />
      <Introduction profileImage={gatsbyImageData} />
      <CategoryList selecedCategory="Web" categoryList={CATEGORY_LIST} />
      <PostList posts={edges} />
      <Footer />
    </Container>
  );
};

export default IndexPage;
