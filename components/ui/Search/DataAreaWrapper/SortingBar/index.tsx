import React from "react";

type Props = {
  length: number;
  setSortBy: (s: any) => void;
};

const SortingBar = ({ length, setSortBy }: Props) => {
  return (
    <div className="min-h-[50px] bg-slate-500 border border-slate-300 text-white  text-sm  w-full flex flex-col sm:flex-row items-center justify-between gap-2 p-2 lg:p-3 rounded-md mb-4">
      <span className="font-bold tracking-widest">{length} found</span>
      <div className="h-full flex items-center  min-w-[300px]">
        <select
          name="sorting"
          id="sorting"
          className="p-[6px] text-sm text-slate-600  border border-1 border-slate-300 rounded-md shadow-sm focus:border-slate-400 focus:ring-slate-400  w-full cursor-pointer"
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="newest">Recently Added</option>
          <option value="priceDesc">Price : Highest First</option>
          <option value="priceAsc">Price : Lowest First</option>
          <option value="">Clear Selection</option>
        </select>
      </div>
    </div>
  );
};

export default SortingBar;
