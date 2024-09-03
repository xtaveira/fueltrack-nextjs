import React from "react";
import Title from "./Title";

const Button = ({
  text,
  type = "button",
  onClick,
}: {
  text: string;
  type?: "submit" | "button";
  onClick: (event: Event) => void;
}) => {
  return (
    <button
      type={type}
      title={text}
      className="flex items-center rounded-full my-1 py-3 px-4 bg-[#4894fe]"
    >
      <Title size="text-lg" text={text} />
    </button>
  );
};

export default Button;
