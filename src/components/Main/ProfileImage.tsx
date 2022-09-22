import React, { FunctionComponent } from "react";
import { graphql } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import styled from "@emotion/styled";

const ProfileImageWrapper = styled(GatsbyImage)`
  width: 10rem;
  height: 10rem;
  margin-bottom: 2rem;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 5rem;
    height: 5rem;
  }
`;

export const getProfileImage = graphql`
  query getProfileImage {
    file(name: { eq: "profile_image" }) {
      childImageSharp {
        gatsbyImageData(width: 120, height: 120)
      }
    }
  }
`;

interface IProfileImageProps {
  profileImage: IGatsbyImageData;
}

const ProfileImage: FunctionComponent<IProfileImageProps> = ({ profileImage }) => {
  return <ProfileImageWrapper image={profileImage} alt="Profile Image" />;
};

export default ProfileImage;
