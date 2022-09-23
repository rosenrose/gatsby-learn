import React, { FunctionComponent } from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import GlobalStyle from "components/Common/GlobalStyle";

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  height: 100vh;
`;

const NotFoundText = styled.p`
  font-size: 10rem;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 6rem;
  }
`;

const NotFoundDescription = styled.p`
  font-size: 1.5rem;
  text-align: center;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const GotoHome = styled(Link)`
  font-size: 1.2rem;
  text-decoration: underline;

  &:hover {
    text-decoration: underline;
  }
`;

const NotFound: FunctionComponent = () => {
  return (
    <NotFoundWrapper>
      <GlobalStyle />
      <NotFoundText>404</NotFoundText>
      <NotFoundDescription>
        찾을 수 없는 페이지입니다. <br />
        다른 콘텐츠를 보러 가보시겠어요?
      </NotFoundDescription>
      <GotoHome to="/">홈 화면으로</GotoHome>
    </NotFoundWrapper>
  );
};

export default NotFound;
