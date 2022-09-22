import React, { FunctionComponent, useMemo } from "react";
import styled from "@emotion/styled";
import PostItem, { IPost } from "./PostItem";
import useInfiniteScroll from "hooks/useInfiniteScroll";

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

export interface IPostListProps {
  posts: IPost[];
  selectedCategory: string;
}

const PostList: FunctionComponent<IPostListProps> = ({ posts, selectedCategory }) => {
  const { containerRef, postList } = useInfiniteScroll({ posts, selectedCategory });
  console.log(containerRef);

  return (
    <PostListWrapper ref={containerRef}>
      {postList.map((post) => (
        <PostItem key={post.node.id} {...post} />
      ))}
    </PostListWrapper>
  );
};

export default PostList;
