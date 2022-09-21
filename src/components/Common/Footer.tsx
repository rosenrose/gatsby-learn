import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";

const FooterWrapper = styled.div`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 3rem 0;
  font-size: 0.9rem;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Footer: FunctionComponent = () => {
  return (
    <FooterWrapper>
      Thank you <br />
      &copy; 2022 Powered by Gatsby.
    </FooterWrapper>
  );
};
export default Footer;
