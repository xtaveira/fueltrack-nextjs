import React, { Dispatch, ReactEventHandler, SetStateAction } from "react";

const LabelAndInput = ({
  type = "text",
  title,
  state,
  setState,
}: {
  type?: string;
  title: string;
  state: string | number;
  setState: Dispatch<SetStateAction<any>>;
}) => {
  const handleChange = (event: any) => setState(event.target.value);

  return (
    <div className="w-full">
      <label
        htmlFor={title}
        className="font-bold text-lg text-[#4894fe] flex flex-col"
      >
        {title}
        <input
          className="border-2 border-[#4894fe] text-black rounded-full py-1 px-3"
          type={type}
          title={title}
          onChange={handleChange}
          value={state}
        />
      </label>
    </div>
  );
};

export default LabelAndInput;
