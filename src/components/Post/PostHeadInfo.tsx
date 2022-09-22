import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export interface IPostHeadInfoProps {
  title: string;
  date: string;
  categories: string[];
}

const PostHeadInfo: FunctionComponent<IPostHeadInfoProps> = ({ title, date, categories }) => {
  return <FontAwesomeIcon icon={faArrowLeft} />;
};

export default PostHeadInfo;
