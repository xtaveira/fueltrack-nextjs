import React from "react";

type TitleTypes = {
  text: string;
  size?: string;
};

const Title = ({ text, size = "text-xl" }: TitleTypes) => {
  return (
    <div className={`flex items-center text-center font-bold ${size}`}>
      {text}
    </div>
  );
};

export default Title;
