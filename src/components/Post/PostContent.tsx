import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { MAIN_WIDTH } from "utils/variables";

const MarkdownRenderer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${MAIN_WIDTH};
  margin: 0 auto;
  padding: 6rem 0;
  word-break: break-all;

  line-height: 1.8;
  font-size: 1rem;
  font-weight: 400;

  p {
    padding: 0.2rem 0;
  }

  h1,
  h2,
  h3 {
    font-weight: 800;
    margin-bottom: 2rem;
  }
  * + :is(h1, h2, h3) {
    margin-top: 5rem;
  }
  hr + :is(h1, h2, h3) {
    margin-top: 0;
  }

  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.5rem;
  }
  h3 {
    font-size: 1.2rem;
  }

  blockquote {
    margin: 2rem 0;
    padding: 0.3rem 1rem;
    border-left: 2px solid #000;
    font-weight: 800;
  }

  ol,
  ul {
    margin-left: 1.2rem;
    padding: 2rem 0;
  }

  hr {
    border: none;
    padding: 2rem 0;
  }

  a {
    color: #4263eb;
    text-decoration: underline;
  }

  pre[class*="language-"] {
    margin: 2rem 0;
    padding: 1rem;
    font-size: 0.9rem;
  }
  code[class*="language-"],
  pre[class*="language-"] {
    tab-size: 2;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 5rem 1.2rem;
    line-height: 1.6;
    font-size: 0.8rem;

    h1 {
      font-size: 1.4rem;
    }
    h2 {
      font-size: 1.2rem;
    }
    h3 {
      font-size: 1.1rem;
    }

    img {
      width: 100%;
    }
  }
`;

const PostContent: FunctionComponent<{ html: string }> = ({ html }) => {
  return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />;
};

export default PostContent;
