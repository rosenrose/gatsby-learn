import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import GlobalStyle from "components/Common/GlobalStyle";
import Introduction from "components/Main/Introduction";
import CategoryList from "components/Main/CategoryList";
import PostList from "components/Main/PostList";
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

const IndexPage: FunctionComponent = () => {
  return (
    <Container>
      <GlobalStyle />
      <Introduction />
      <CategoryList selecedCategory="Web" categoryList={CATEGORY_LIST} />
      <PostList />
      <Footer />
    </Container>
  );
};

export default IndexPage;
