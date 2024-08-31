import React from "react";

type TitleTypes = {
  text: string;
};

const Title = ({ text }: TitleTypes) => {
  return <div>{text}</div>;
};

export default Title;
