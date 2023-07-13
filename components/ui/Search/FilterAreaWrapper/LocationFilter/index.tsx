import { ICity } from "@/types";
import React from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

type Props = {
  setFilters: any;
  filters: any;
  setCity: any;
  city: any;
  cities: ICity[];
  title: string;
};

const LocationFilter = ({
  filters,
  setFilters,
  setCity,
  city,
  cities,
  title,
}: Props) => {
  return (
    <>
      <div className="w-full  h-auto cursor-pointer">
        <div
          className="text-sm text-slate-700  font-semibold flex items-center justify-between"
          onClick={() =>
            setFilters(() => ({
              ...filters,
              showCityFilter: !filters.showCityFilter,
            }))
          }
        >
          <p>{title}</p>
          {filters.showCityFilter ? (
            <AiOutlineArrowUp />
          ) : (
            <AiOutlineArrowDown />
          )}
        </div>
        <div
          className={`${
            filters.showCityFilter ? "block" : "hidden"
          } grid grid-cols-1 gap-2`}
        >
          <div className="mt-2 ">
            <select
              name={"city"}
              id={"city"}
              value={city}
              className="p-[6px] text-sm text-slate-700 rounded-md shadow-sm focus:border-slate-400 focus:ring-slate-400 w-full selection: "
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="">City</option>
              {cities.map((c: ICity) => (
                <option value={c.name} key={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <hr className="h-px my-4 bg-slate-100 border-1 dark:bg-gray-700" />
    </>
  );
};

export default LocationFilter;
