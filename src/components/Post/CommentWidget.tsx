import React, { FunctionComponent, useRef, useEffect } from "react";
import styled from "@emotion/styled";

const CommentWrapper = styled.div`
  @media (max-width: 768px) {
    padding: 0 1.2rem;
  }
`;

const CommentWidget: FunctionComponent = () => {
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const utterances: HTMLScriptElement = document.createElement("script");

    Object.entries({
      src: "https://utteranc.es/client.js",
      repo: "rosenrose/gatsby-learn",
      "issue-term": "title",
      label: "Comment",
      theme: "github-dark",
      crossorigin: "anonymous",
      async: "true",
    }).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    element.current?.append(utterances);
  }, []);

  return <CommentWrapper ref={element} />;
};

export default CommentWidget;
