import React, { FunctionComponent } from "react";
import { graphql, Link } from "gatsby";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

type InfoPageProps = {
  data: {
    site: {
      siteMetadata: {
        description: string;
        siteUrl: string;
        title: string;
      };
    };
  };
};

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        description
        siteUrl
        title
      }
    }
  }
`;

const textStyle = css`
  font-size: 1.2rem;
  font-weight: 700;
  color: skyblue;
`;

interface ITextProp {
  disabled?: boolean;
}

const Text1 = styled.div<ITextProp>`
  font-size: 1.5rem;
  color: seagreen;
  text-decoration: ${({ disabled }) => (disabled ? "line-through" : "")};
`;
const Text2 = styled.div<ITextProp>(({ disabled }) => ({
  fontSize: "1.8rem",
  color: "cyan",
  textDecoration: disabled ? "line-through" : "",
}));

const InfoPage: FunctionComponent<InfoPageProps> = ({
  data: {
    site: {
      siteMetadata: { description, siteUrl, title },
    },
  },
}) => {
  return (
    <>
      <p>{description}</p>
      <div css={textStyle}>{siteUrl}</div>
      <Text1>{title}</Text1>
      <Text2 disabled>{title}</Text2>
      <Link to="/">To Home</Link>
    </>
  );
};

export default InfoPage;
