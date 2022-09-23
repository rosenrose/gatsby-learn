import React, { FunctionComponent, useRef, useEffect } from "react";

const CommentWidget: FunctionComponent = () => {
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const utterances: HTMLScriptElement = document.createElement("script");
    const attrs = {
      src: "https://utteranc.es/client.js",
      repo: "rosenrose/gatsby-learn",
      "issue-term": "title",
      label: "Comment",
      theme: "github-dark",
      crossorigin: "anonymous",
      async: "true",
    };

    Object.entries(attrs).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    element.current?.append(utterances);
  }, []);

  return <div ref={element}></div>;
};

export default CommentWidget;
