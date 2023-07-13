"use client";
import Button from "@/components/common/button";
import { useRouter } from "next-intl/client";
import React, { useMemo, useReducer } from "react";
import { initialState, reducer } from "./reducer";
import { ICity } from "@/types";

type Props = {
  translations: {
    search: string;
    location: string;
    bedroom: string;
    priceRange: string;
    type: string;
  };
  cities: ICity[];
};

type SelectNodesType = {
  name: string;
  id: string;
  label: string;
  data: (ICity | { id: number; type: string } | string)[];
  value?: string;
  handleChange: (e: any) => void;
};

const Client = ({ translations, cities }: Props) => {
  const router = useRouter();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { city, type, numberOfBedroom, min, max } = state;

  const types = [
    { id: 0, type: "ev" },
    { id: 1, type: "daire" },
    { id: 2, type: "ticari" },
    { id: 3, type: "arsa" },
  ];
  let url = "/search?";
  !!city ? (url += `city=${city}&`) : null;
  !!type ? (url += `type=${type}&`) : null;
  !!numberOfBedroom ? (url += `bedroom=${numberOfBedroom}&`) : null;
  !!min && !!max ? (url += `min=${min}&max=${max}&`) : null;

  const handleFilterClick = () => router.push(url);

  const selectNodes: SelectNodesType[] = useMemo(
    () => [
      {
        name: "city",
        id: "city",
        label: translations.location,
        data: cities,
        value: "name",
        handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {
          dispatch({ type: "SET_CITY", payload: e.target.value });
        },
      },
      {
        name: "property-type",
        id: "property-type",
        label: translations.type,
        data: types,
        handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {
          dispatch({ type: "SET_TYPE", payload: e.target.value });
        },
      },
      {
        name: "bedroom-number",
        id: "bedroom-number",
        label: translations.bedroom,
        data: ["1", "2", "3", "4", "5"],
        value: "type",
        handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {
          dispatch({ type: "SET_NUMBER_OF_BEDROOM", payload: e.target.value });
        },
      },
      {
        name: "price-range",
        id: "price-range",
        label: translations.priceRange,
        data: [
          "0-75000",
          "75000-150000",
          "150000-250000",
          "250000-350000",
          "350000-500000",
          "500000-5000000",
        ],
        value: "type",
        handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {
          dispatch({ type: "SET_PRICE_RANGE", payload: e.target.value });
        },
      },
    ],
    [cities, types]
  );

  return (
    <div className="bg-yellow-400 md:mx-[5%] lg:mx-[1%] p-[16px] rounded-md grid grid-cols-10 gap-6 items-center justify-center">
      {selectNodes.map((selectNode) => (
        <select
          key={selectNode.id}
          name={selectNode.name}
          id={selectNode.id}
          className=" p-[12px] text-sm text-slate-700 border-none rounded-md shadow-sm focus:border-slate-400 focus:ring-slate-400 col-span-5 lg:col-span-2"
          onChange={selectNode.handleChange}
        >
          <option value="">{selectNode.label}</option>
          {selectNode.data.map((item, index) => {
            let value = "";
            let label = "";

            if (typeof item === "object") {
              if ("name" in item) {
                value = item.name;
                label = item.name;
              } else if ("type" in item) {
                value = item.type;
                label = item.type;
              }
            } else {
              value = item;
              label = item;
            }

            return (
              <option key={index} value={value} className="text-xs">
                {label.toUpperCase()}
              </option>
            );
          })}
        </select>
      ))}

      <div className="col-span-10 lg:col-span-2">
        <Button
          text={translations.search}
          onClick={handleFilterClick}
          variant="secondary"
        />
      </div>
    </div>
  );
};

export default Client;
