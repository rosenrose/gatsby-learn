import React, { FunctionComponent } from "react";
import { Link } from "gatsby";
import Text from "../components/Text";

const IndexPage: FunctionComponent = () => {
  return (
    <>
      <Text text="Home" />
      <Link to="/info">To Info</Link>
    </>
  );
};

export default IndexPage;
