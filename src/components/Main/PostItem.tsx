import React, { FunctionComponent } from "react";
import { Link } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import styled from "@emotion/styled";

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

const ThumbnailImage = styled(GatsbyImage)`
  width: 100%;
  height: 12.5rem;
  border-radius: 1rem 1rem 0 0;
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

export interface IPost {
  node: {
    id: string;
    frontmatter: {
      categories: string[];
      date: string;
      summary: string;
      title: string;
      thumbnail: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData;
        };
      };
    };
  };
}

const PostItem: FunctionComponent<IPost> = ({
  node: {
    id,
    frontmatter: {
      categories,
      date,
      summary,
      title,
      thumbnail: {
        childImageSharp: { gatsbyImageData },
      },
    },
  },
}) => {
  // console.log(thumbnail);
  return (
    <PostItemWrapper to={`post/${id}`}>
      <ThumbnailImage image={gatsbyImageData} alt="Post Item Image" />
      <PostItemContent>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Category>
          {categories.map((category) => (
            <CategoryItem key={category}>{category}</CategoryItem>
          ))}
        </Category>
        <Summary>{summary}</Summary>
      </PostItemContent>
    </PostItemWrapper>
  );
};

export default PostItem;
