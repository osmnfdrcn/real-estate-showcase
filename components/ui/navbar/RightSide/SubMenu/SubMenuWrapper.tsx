import React from "react";

type Props = {
  content: React.ReactNode;
};

const SubMenuWrapper = ({ content }: Props) => {
  return (
    <div className="absolute p-6 flex-col bg-slate-500 text-xs text-white top-[60px] -right-4 lg:hidden min-w-[200px]">
      {content}
    </div>
  );
};

export default SubMenuWrapper;
