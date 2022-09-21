import React, { FunctionComponent, ReactNode } from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

export interface ICategoryListProps {
  selecedCategory: string;
  categoryList: {
    [k: string]: number;
  };
}

const CategoryListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 48rem;
  margin: 3rem auto 0;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 1.5rem;
    padding: 0 1.2rem;
  }
`;

interface ICategoryItemProps {
  active: boolean;
  children: ReactNode;
  className?: string;
  to: string;
}

const CategoryItem = styled(({ active, ...props }: ICategoryItemProps) => <Link {...props} />)`
  padding: 0.3rem 0;
  font-size: 1.2rem;
  font-weight: ${({ active }) => (active ? "800" : "400")};

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CategoryList: FunctionComponent<ICategoryListProps> = ({ selecedCategory, categoryList }) => {
  return (
    <CategoryListWrapper>
      {Object.entries(categoryList).map(([category, count]) => (
        <CategoryItem
          key={category}
          to={`/?category=${category}`}
          active={category === selecedCategory}
        >
          #{category}({count})
        </CategoryItem>
      ))}
    </CategoryListWrapper>
  );
};

export default CategoryList;
