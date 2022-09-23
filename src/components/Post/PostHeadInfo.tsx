import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { MAIN_WIDTH } from "utils/variables";

export interface IPostHeadInfoProps {
  title: string;
  date: string;
  categories: string[];
}

const PostHeadInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${MAIN_WIDTH};
  height: 100%;
  margin: 0 auto;
  padding: 4rem 0;
  color: #fff;

  @media (max-width: 768px) {
    width: 100%;
    padding: 2.5rem 1.2rem;
  }
`;

const PrevIcon = styled.div`
  display: grid;
  place-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: #fff;
  color: #000;
  font-size: 1.3rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  @media (max-width: 768px) {
    width: 2rem;
    height: 2rem;
    font-size: 1.1rem;
  }
`;

const Title = styled.h1`
  overflow: hidden;
  overflow-wrap: break-word;
  margin-top: auto;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  font-size: 3rem;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const PostData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: 700;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    font-size: 1rem;
    font-weight: 400;
    gap: 0.5rem;
  }
`;

const PostHeadInfo: FunctionComponent<IPostHeadInfoProps> = ({ title, date, categories }) => {
  return (
    <PostHeadInfoWrapper>
      <PrevIcon onClick={() => window.history.back()}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </PrevIcon>
      <Title>{title}</Title>
      <PostData>
        <div>{categories.join(" / ")}</div>
        <div>{date}</div>
      </PostData>
    </PostHeadInfoWrapper>
  );
};

export default PostHeadInfo;
