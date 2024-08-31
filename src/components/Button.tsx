import React from "react";

type ButtonTypes = {
  text: string;
};

const Button = ({ text }: ButtonTypes) => {
  return <div>{text} </div>;
};

export default Button;
