import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import PostHeadInfo, { IPostHeadInfoProps } from "components/Post/PostHeadInfo";

const PostHeadWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 12.5rem;
`;

interface IGatsbyImgProps {
  image: IGatsbyImageData;
  alt: string;
  className?: string;
}

interface IPostHeadProps extends IPostHeadInfoProps {
  thumbnail: IGatsbyImageData;
}
const BackgroundImage = styled((props: IGatsbyImgProps) => (
  <GatsbyImage {...props} style={{ position: "absolute" }} />
))`
  /* position: absolute; GatsbyImage 컴포넌트에는 기본적으로 적용된 스타일이 존재함. !important 속성이 없어서 적용 순위에서 밀림. 그래서 윗줄에서 인라인으로 적용.*/
  z-index: -1;
  width: 100%;
  height: 12.5rem;
  object-fit: cover;
  filter: brightness(0.25);
`;

const PostHead: FunctionComponent<IPostHeadProps> = ({ title, date, categories, thumbnail }) => {
  return (
    <PostHeadWrapper>
      <BackgroundImage image={thumbnail} alt="thumbnail" />
      <PostHeadInfo {...{ title, date, categories }} />
    </PostHeadWrapper>
  );
};

export default PostHead;
