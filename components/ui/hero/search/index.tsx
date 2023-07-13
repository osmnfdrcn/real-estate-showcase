import React from "react";
import Client from "./client";
import { useTranslations } from "next-intl";
import { getCities } from "@/app/api/getCities";
import { ICity } from "@/types";

type Props = {};

const Search = async (props: Props) => {
  const t = useTranslations("Index");
  const cities = await getCities();
  const translations = {
    search: t("search"),
    location: t("location"),
    cities: { cities },
    bedroom: t("bedroom"),
    priceRange: t("priceRange"),
    type: t("type"),
  };

  return <Client translations={translations} cities={cities} />;
};

export default Search;
