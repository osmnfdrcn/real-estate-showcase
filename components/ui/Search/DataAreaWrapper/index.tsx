"use client";
import { IProperty } from "@/types";
import { useState } from "react";
import Properties from "./Properties";
import SortingBar from "./SortingBar";

type Props = {
  data: IProperty[];
  locale: string;
};

const DataAreaWrapper = ({ data, locale }: Props) => {
  const [sortBy, setSortBy] = useState<
    "priceAsc" | "priceDesc" | "newest" | ""
  >("");
  let properties;

  if (sortBy === "priceAsc") {
    properties = [...data].sort((a, b) => a.price - b.price);
  } else if (sortBy === "priceDesc") {
    properties = [...data].sort((a, b) => b.price - a.price);
  } else if (sortBy === "newest") {
    properties = [...data].reverse();
  } else {
    properties = data;
  }

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <SortingBar length={properties?.length} setSortBy={setSortBy} />
      <Properties properties={properties} locale={locale} />
    </div>
  );
};

export default DataAreaWrapper;

const sortArray = (array: IProperty[], sortBy: string) => {
  switch (sortBy) {
    case "priceAsc":
      return array.sort((a, b) => a.price - b.price);
    case "priceDesc":
      return array.sort((a, b) => b.price - a.price);

    default:
      return array;
  }
};
