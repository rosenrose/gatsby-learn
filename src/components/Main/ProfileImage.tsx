import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";

const PROFILE_IMAGE_LINK = "https://avatars.githubusercontent.com/u/42435748";
const ProfileImageWrapper = styled.img`
  width: 10rem;
  height: 10rem;
  margin-bottom: 2rem;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 5rem;
    height: 5rem;
  }
`;

const ProfileImage: FunctionComponent = () => {
  return <ProfileImageWrapper src={PROFILE_IMAGE_LINK} alt="Profile Image" />;
};

export default ProfileImage;
