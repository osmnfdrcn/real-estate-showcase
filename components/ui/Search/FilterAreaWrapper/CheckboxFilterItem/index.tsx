"use client";

import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

type Props = {
  title: string;
  showFilter: boolean;
  setShowFilter: (s: boolean) => void;
  handle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  data: any;
  options: { id: number; value: string; label?: string }[];
};
const CheckboxFilterItem = ({
  title,
  showFilter,
  setShowFilter,
  handle,
  data,
  options,
}: Props) => {
  return (
    <div className="w-full  h-auto cursor-pointer">
      <div
        className="text-sm text-slate-700  font-semibold flex items-center justify-between  mb-4 "
        onClick={() => setShowFilter(!showFilter)}
      >
        <p>{title}</p>
        {showFilter ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
      </div>
      <div className={`${showFilter ? "block" : "hidden"} grid grid-cols-2`}>
        {options.map((option) => {
          const checked = data?.includes(option.value);
          return (
            <div className="mt-2 " key={option.id}>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  id={option.value}
                  value={option.value}
                  checked={checked}
                  className="w-5 h-5 rounded-full text-rose-700 border-1 focus:ring-0"
                  onChange={(e) => handle(e as any)}
                />
                <span className="ml-2 text-xs uppercase">
                  {option.label || option.value}
                </span>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CheckboxFilterItem;
