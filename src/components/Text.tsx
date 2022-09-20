import React, { FunctionComponent } from "react";

type TextProps = {
  text: string;
};

const Text: FunctionComponent<TextProps> = ({ text }) => {
  return <p>{text}</p>;
};

export default Text;
