import React from "react";
import Title from "./Title";

const Button = ({
  text,
  type = "button",
}: {
  text: string;
  type?: "submit" | "button";
}) => {
  return (
    <button
      type={type}
      title={text}
      className="flex items-center rounded-2xl my-1 p-3 bg-[#4894fe]"
    >
      <Title size="text-lg" text={text} />
    </button>
  );
};

export default Button;
