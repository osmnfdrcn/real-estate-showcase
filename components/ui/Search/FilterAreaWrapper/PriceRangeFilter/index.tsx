"use client";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
type Props = {
  showPriceRangeFilter: boolean;
  setShowPriceRangeFilter: (s: boolean) => void;
  handleMinPriceRange: any;
  handleMaxPriceRange: any;
  title: string;
  min: number | null;
  max: number | null;
};
type RangeType = {
  id: number;
  title: string;
  value: string;
};

const PriceRangeFilter = ({
  showPriceRangeFilter,
  setShowPriceRangeFilter,
  handleMinPriceRange,
  handleMaxPriceRange,
  title,
  min,
  max,
}: Props) => {
  return (
    <>
      <div className="w-full  h-auto ">
        <div
          className="text-sm text-slate-700  font-semibold flex items-center justify-between mb-4 cursor-pointer"
          onClick={() => setShowPriceRangeFilter(!showPriceRangeFilter)}
        >
          <p>{title}</p>
          {showPriceRangeFilter ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
        </div>
        <div
          className={`${
            showPriceRangeFilter ? "block" : "hidden"
          } grid grid-cols-1 gap-2`}
        >
          <div className="flex flex-col gap-2">
            <div className="flex flex-row">
              <span className="flex items-center bg-grey-lighter rounded rounded-r-none px-3  text-sm text-grey-darker">
                $
              </span>
              <input
                type="number"
                name="price-min"
                value={+min!}
                placeholder="min"
                className=" text-slate-500 py-1 text-sm   border border-grey-lighter rounded-md "
                onChange={(e) => handleMinPriceRange(e.target.value)}
              />
            </div>
            <div className="flex flex-row">
              <span className="flex items-center bg-grey-lighter rounded rounded-r-none px-3  text-sm text-grey-darker">
                $
              </span>
              <input
                type="number"
                name="price-max"
                value={+max!}
                placeholder="max"
                className=" text-slate-500 py-1 text-sm   border border-grey-lighter rounded-md "
                onChange={(e) => handleMaxPriceRange(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceRangeFilter;
