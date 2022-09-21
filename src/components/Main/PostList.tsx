import React, { FunctionComponent, ReactNode } from "react";
import styled from "@emotion/styled";
import PostItem from "./PostItem";

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.2rem;
  width: 48rem;
  margin: 0 auto;
  padding: 3rem 0 6rem;
  background-color: purple;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 3rem 1.2rem;
  }
`;

const POST_ITEM_DATA = {
  title: "Post Item Title",
  date: new Date(),
  categories: ["Web", "Frontend", "Testing"],
  summary:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat doloremque fugit quis rem temporibus! Maxime molestias, suntrem debitis odit harum impedit. Modi cupiditate harum dignissimos eos in corrupti!",
  thumbnail: "https://avatars.githubusercontent.com/u/42435748",
  link: "https://www.google.co.kr/",
  postId: "1",
};

const PostList: FunctionComponent = () => {
  return (
    <PostListWrapper>
      {[...Array(4)].map((_, i) => (
        <PostItem key={i} {...POST_ITEM_DATA} />
      ))}
    </PostListWrapper>
  );
};

export default PostList;
