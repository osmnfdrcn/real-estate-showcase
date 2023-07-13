import React from "react";

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="max-w-[1140px] mx-auto h-auto">{children}</div>;
};

export default Container;
