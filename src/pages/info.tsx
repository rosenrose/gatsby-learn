import React, { FunctionComponent } from "react";
import { graphql, Link } from "gatsby";
import Text from "../components/Text";

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

const InfoPage: FunctionComponent<InfoPageProps> = ({
  data: {
    site: {
      siteMetadata: { description, siteUrl, title },
    },
  },
}) => {
  return (
    <>
      <Text text={description} />
      <Text text={siteUrl} />
      <Text text={title} />
      <Link to="/">To Home</Link>
    </>
  );
};

export default InfoPage;
