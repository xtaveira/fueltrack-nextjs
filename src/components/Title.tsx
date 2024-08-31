import React from "react";

type TitleTypes = {
  text: string;
};

const Title = ({ text }: TitleTypes) => {
  return (
    <div className="flex items-center text-center font-bold text-xl">
      {text}
    </div>
  );
};

export default Title;
