import React from "react";

type Props = {
  text: string;
  subText?: string;
  color?: string;
};

const Title = ({ text, subText, color }: Props) => {
  return (
    <div className="w-full flex flex-col items-center justify-center p-4 mt-[20px] ">
      <p className={`text-xl italic text-${color} font-bold text-center`}>
        {text}
      </p>
      <p className={`text-md text-${color}  text-center`}>{subText}</p>
    </div>
  );
};

export default Title;
