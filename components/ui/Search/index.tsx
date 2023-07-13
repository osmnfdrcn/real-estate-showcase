"use client";
import { ICity, IProperty } from "@/types";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

import DataAreaWrapper from "./DataAreaWrapper";
import FilterAreaWrapper from "./FilterAreaWrapper";
import CheckboxFilterItem from "./FilterAreaWrapper/CheckboxFilterItem";
import LocationFilter from "./FilterAreaWrapper/LocationFilter";
import PriceRangeFilter from "./FilterAreaWrapper/PriceRangeFilter";
import ReferenceFilter from "./FilterAreaWrapper/ReferenceFilter";
import { OptionsType } from "./IntlWrapper.tsx";

type Props = {
  properties: IProperty[];
  cities: ICity[];
  selectedCity: string;
  min: string;
  max: string;
  type: string;
  bedroom: string;
  featuresOptions: OptionsType[];
  propertyTypeOptions: OptionsType[];
  bedroomNumberOptions: OptionsType[];
  titles: any;
  locale: string;
};

type CheckBoxFiltersType = {
  id: number;
  title: string;
  showFilter: boolean;
  setShowFilter: () => void;
  handle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  data: unknown;
  options: { id: number; value: string; label?: string }[];
};

const SearchComponent = ({
  properties,
  cities,
  selectedCity,
  featuresOptions,
  bedroomNumberOptions,
  propertyTypeOptions,
  titles,
  min,
  max,
  type,
  bedroom,
  locale,
}: Props) => {
  const router = useRouter();
  const [filters, setFilters] = useState({
    filterArea: false,
    showCityFilter: true,
    showBedroomFilter: true,
    showPropertyTypeFilter: true,
    showPriceRangeFilter: true,
    showFeaturesFilter: true,
  });

  // daha sonra useReducer ile refactor edilecek
  const [city, setCity] = useState<string>(selectedCity);
  const [propertyTypes, setPropertyTypes] = useState<string[]>(
    type ? [type] : []
  );
  const [bedroomNumber, setBedroomNumber] = useState<string[]>(
    bedroom ? [bedroom] : []
  );
  const [minPrice, setMinPrice] = useState<number>(+min);
  const [maxPrice, setMaxPrice] = useState<number>(+max);
  const [features, setFeatures] = useState<string[]>([]);

  let url = "/search?";
  useEffect(() => {
    !!city ? (url += `city=${city.toString()}&`) : null;
    !!propertyTypes.length
      ? (url += `type=${propertyTypes.toString()}&`)
      : null;
    !!features.length ? (url += `features=${features.toString()}&`) : null;
    !!bedroomNumber.length
      ? (url += `bedroom=${bedroomNumber.toString()}&`)
      : null;
    !!minPrice ? (url += `min=${minPrice.toString()}&`) : null;
    !!maxPrice ? (url += `max=${maxPrice.toString()}&`) : null;
    url = url.slice(0, -1);
    router.push(url);
  }, [
    city,
    propertyTypes.length,
    features.length,
    minPrice,
    maxPrice,
    bedroomNumber.length,
  ]);

  const handleFilter = useCallback(
    (
      value: string,
      setState: React.Dispatch<React.SetStateAction<string[]>>
    ) => {
      setState((prev) => {
        if (prev.includes(value)) {
          return prev.filter((item) => item !== value);
        } else {
          return [...prev, value];
        }
      });
    },
    []
  );
  const handlePropertyType = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFilter(e.target.value, setPropertyTypes);
  };
  const handleBedroomNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFilter(e.target.value, setBedroomNumber);
  };
  const handleFeature = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFilter(e.target.value, setFeatures);
  };
  const handleMinPriceRange = useCallback(
    (min: number) => {
      setMinPrice(min);
    },
    [minPrice]
  );
  const handleMaxPriceRange = useCallback(
    (max: number) => {
      setMaxPrice(max);
    },
    [maxPrice]
  );

  const checkBoxFilters: CheckBoxFiltersType[] = [
    {
      id: 0,
      title: titles["propertyType"],
      showFilter: filters.showPropertyTypeFilter,
      setShowFilter: () =>
        setFilters({
          ...filters,
          showPropertyTypeFilter: !filters.showPropertyTypeFilter,
        }),
      handle: handlePropertyType,
      data: propertyTypes,
      options: propertyTypeOptions,
    },
    {
      id: 1,
      title: titles["bedroom"],
      showFilter: filters.showBedroomFilter,
      setShowFilter: () =>
        setFilters({
          ...filters,
          showBedroomFilter: !filters.showBedroomFilter,
        }),
      handle: handleBedroomNumber,
      data: bedroomNumber,
      options: bedroomNumberOptions,
    },
    {
      id: 2,
      title: titles["features"],
      showFilter: filters.showFeaturesFilter,
      setShowFilter: () =>
        setFilters({
          ...filters,
          showFeaturesFilter: !filters.showFeaturesFilter,
        }),
      handle: handleFeature,
      data: features,
      options: featuresOptions,
    },
  ];

  return (
    <div className="mt-[76px] flex flex-col lg:flex-row gap-2 mx-2 items-start">
      <FilterAreaWrapper filters={filters} setFilters={setFilters}>
        <ReferenceFilter />
        <LocationFilter
          city={city}
          setCity={setCity}
          cities={cities}
          setFilters={setFilters}
          filters={filters}
          title={titles["location"]}
        />

        {/* propertyType, bedroom number and features filters */}
        {checkBoxFilters.map((p) => {
          return (
            <div key={p.id}>
              <CheckboxFilterItem
                title={p.title}
                showFilter={p.showFilter}
                setShowFilter={p.setShowFilter}
                handle={p.handle}
                data={p.data}
                options={p.options}
              />
              <hr className="h-px my-4 bg-slate-100 border-1 dark:bg-gray-700" />
            </div>
          );
        })}
        <PriceRangeFilter
          title={titles["priceRange"]}
          showPriceRangeFilter={filters.showPriceRangeFilter}
          setShowPriceRangeFilter={() =>
            setFilters({
              ...filters,
              showPriceRangeFilter: !filters.showPriceRangeFilter,
            })
          }
          handleMinPriceRange={handleMinPriceRange}
          handleMaxPriceRange={handleMaxPriceRange}
          min={minPrice || null}
          max={maxPrice || null}
        />
      </FilterAreaWrapper>

      <DataAreaWrapper data={properties} locale={locale} />
    </div>
  );
};

export default SearchComponent;
