import React from "react";
import { Header } from "semantic-ui-react";

type TextProps = {
  text?: string;
  imgSrc?: string;
  externLink?: string;
};

export const ImportantTitle = ({ text }: TextProps) => (
  <Header as="h2" className="bold">
    {text}
  </Header>
);

export const SocialLink = ({ imgSrc, externLink }: TextProps) => (
  <div>
    <a href={externLink}>
      <img src={imgSrc} alt="Social Media Link" />
    </a>
  </div>
);
