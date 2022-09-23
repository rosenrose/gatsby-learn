import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import ProfileImage, { IProfileImageProps } from "components/Main/ProfileImage";
import { MAIN_WIDTH } from "utils/variables";
import { HEADER_HEIGHT } from "utils/variables";

const Background = styled.header`
  width: 100%;
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
  color: #fff;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: ${MAIN_WIDTH};
  height: ${HEADER_HEIGHT};
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 20rem;
    padding: 0 1.2rem;
  }
`;

const SubTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Title = styled.h1`
  margin-top: 0.3rem;
  font-size: 2.2rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Introduction: FunctionComponent<IProfileImageProps> = ({ profileImage }) => {
  return (
    <Background>
      <Wrapper>
        <ProfileImage profileImage={profileImage} />
        <div>
          <SubTitle>Hello world</SubTitle>
          <Title>Gatsby Blog</Title>
        </div>
      </Wrapper>
    </Background>
  );
};

export default Introduction;
