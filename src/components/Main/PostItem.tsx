import React, { FunctionComponent } from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

interface IPostItemProps {
  title: string;
  date: Date;
  categories: string[];
  summary: string;
  thumbnail: string;
  link: string;
  postId: string;
}

const PostItemWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  transition: 0.3s box-shadow;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 12.5rem;
  border-radius: 1rem 1rem 0 0;
  object-fit: cover;
`;

const PostItemContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
`;

const Title = styled.h3`
  overflow: hidden;
  margin-bottom: 3px;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 1.2rem;
  font-weight: 700;
`;

const Date = styled.span`
  font-size: 0.8rem;
  font-weight: 400;
  opacity: 0.7;
`;

const Category = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const CategoryItem = styled.li`
  margin: 0.25rem 0.3rem;
  padding: 0.2rem 0.3rem;
  border-radius: 0.2rem;
  background: seagreen;
  font-size: 0.9rem;
  font-weight: 700;
  color: white;
`;

const Summary = styled(Title)`
  margin-top: auto;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 400;
  opacity: 0.8;
`;

const PostItem: FunctionComponent<IPostItemProps> = ({
  title,
  date,
  categories,
  summary,
  thumbnail,
  link,
  postId,
}) => {
  return (
    <PostItemWrapper to={`post/${postId}`}>
      <ThumbnailImage src={thumbnail} alt="Post Item Image" />
      <PostItemContent>
        <Title>{title}</Title>
        <Date>{date.toLocaleDateString()}</Date>
        <Category>
          {categories.map((category) => (
            <CategoryItem>{category}</CategoryItem>
          ))}
        </Category>
        <Summary>{summary}</Summary>
      </PostItemContent>
    </PostItemWrapper>
  );
};

export default PostItem;
