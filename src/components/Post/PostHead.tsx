import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import PostHeadInfo from "components/Post/PostHeadInfo";
import { IFrontmatter } from "components/Main/PostItem";
import { HEADER_HEIGHT, HEADER_HEIGHT_MOBILE } from "utils/variables";

const PostHeadWrapper = styled.header`
  position: relative;
  width: 100%;
  height: ${HEADER_HEIGHT};

  @media (max-width: 768px) {
    height: ${HEADER_HEIGHT_MOBILE};
  }
`;

interface IGatsbyImgProps {
  image: IGatsbyImageData;
  alt: string;
  className?: string;
}

const BackgroundImage = styled((props: IGatsbyImgProps) => (
  <GatsbyImage {...props} style={{ position: "absolute" }} />
))`
  /* position: absolute; GatsbyImage 컴포넌트에는 기본적으로 적용된 스타일이 존재함. !important 속성이 없어서 적용 순위에서 밀림. 그래서 윗줄에서 인라인으로 적용.*/
  z-index: -1;
  width: 100%;
  height: ${HEADER_HEIGHT};
  object-fit: cover;
  filter: brightness(0.25);

  @media (max-width: 768px) {
    height: ${HEADER_HEIGHT_MOBILE};
  }
`;

const PostHead: FunctionComponent<IFrontmatter> = ({
  title,
  date,
  categories,
  thumbnail: {
    childImageSharp: { gatsbyImageData },
  },
}) => {
  return (
    <PostHeadWrapper>
      <BackgroundImage image={gatsbyImageData} alt="thumbnail" />
      <PostHeadInfo {...{ title, date, categories }} />
    </PostHeadWrapper>
  );
};

export default PostHead;
