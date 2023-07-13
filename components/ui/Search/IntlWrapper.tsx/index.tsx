import { useTranslations } from "next-intl";
import React from "react";
import SearchComponent from "..";
import { ICity, IProperty } from "@/types";

export type OptionsType = {
  id: number;
  label?: string;
  value: string;
};
type IntlWrapperType = {
  properties: IProperty[];
  cities: ICity[];
  selectedCity: string;
  min: string;
  max: string;
  type: string;
  bedroom: string;
  locale: string;
};
const IntlWrapper = ({
  properties,
  cities,
  selectedCity,
  locale,
  min,
  max,
  type,
  bedroom,
}: IntlWrapperType) => {
  const t = useTranslations("Index");

  const featuresOptions: OptionsType[] = [
    { id: 1, label: t("furniture"), value: "furniture" },
    { id: 2, label: t("sea view"), value: "sea view" },
    { id: 3, label: t("investment"), value: "investment" },
    { id: 4, label: t("flexible installment"), value: "flexible installment" },
    { id: 5, label: t("turkish citizenship"), value: "turkish citizenship" },
    { id: 6, label: t("high rent income"), value: "high rent income" },
    { id: 7, label: t("beachfront"), value: "beachfront" },
    {
      id: 8,
      label: t("in construction process"),
      value: "in construction process",
    },
    { id: 9, label: t("ready to live"), value: "ready to live" },
  ];

  const bedroomNumberOptions: OptionsType[] = [
    { id: 0, value: "0", label: "studio" },
    { id: 1, value: "1", label: `1 ${t("bedroom")}` },
    { id: 2, value: "2", label: `2 ${t("bedroom")}` },
    { id: 3, value: "3", label: `3 ${t("bedroom")}` },
    { id: 4, value: "4", label: `4 ${t("bedroom")}` },
    { id: 5, value: "5", label: `5 ${t("bedroom")}` },
  ];

  const propertyTypeOptions: OptionsType[] = [
    { id: 0, label: t("apartment"), value: "daire" },
    { id: 1, label: t("house"), value: "ev" },
    { id: 2, label: t("commercial"), value: "ticari" },
    { id: 3, label: t("land"), value: "arsa" },
  ];

  const titles = {
    propertyType: t("propertyType"),
    bedroom: t("bedroom"),
    features: t("features"),
    location: t("location"),
    priceRange: t("priceRange"),
  };

  return (
    <div>
      <SearchComponent
        properties={properties}
        cities={cities}
        selectedCity={selectedCity}
        min={min}
        max={max}
        bedroom={bedroom}
        type={type}
        featuresOptions={featuresOptions}
        bedroomNumberOptions={bedroomNumberOptions}
        propertyTypeOptions={propertyTypeOptions}
        titles={titles}
        locale={locale}
      />
    </div>
  );
};

export default IntlWrapper;
