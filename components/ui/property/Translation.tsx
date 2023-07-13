import { useLocale, useTranslations } from "next-intl";
import React from "react";
import Client from "./Client";
import { IProperty } from "@/types";

type Props = {
  property: IProperty;
};

const Translation = ({ property }: Props) => {
  const t = useTranslations("Index");
  const locale = useLocale();

  const translations = {
    livingRoom: t("livingRoom"),
    bathroom: t("bathroom"),
    sqm: t("sqm"),
    downloadFreeBrochure: t("downloadFreeBrochure"),
    onlineViwingTrip: t("onlineViwingTrip"),
    "mountain view": t("mountain view"),
    "sea view": t("sea view"),
    "nature view": t("nature view"),
    "city view": t("city view"),
    "ready to live": t("ready to live"),
    "air conditioning": t("air conditioning"),
    "ceramic floor": t("ceramic floor"),
    "granite kitchen": t("granite kitchen"),
    "satellite dish": t("satellite dish"),
    "turkish bath": t("turkish bath"),
    "camera system": t("camera system"),
    caretaker: t("caretaker"),
    camellia: t("camellia"),
    playground: t("playground"),
    jacuzzi: t("jacuzzi"),
    bedrooms: t("bedrooms"),
    security: t("security"),
    generator: t("generator"),
    luxury: t("luxury"),
    "in construction process": t("in construction process"),
    "indoor pool": t("indoor pool"),
    investment: t("investment"),
    exclusive: t("exclusive"),
    "swimming pool": t("swimming pool"),
    fitness: t("fitness"),
    "private villas": t("private villas"),
    cinema: t("cinema"),
    cctv: t("cctv"),
    tags: t("tags"),
    features: t("features"),
    gym: t("gym"),
    elevator: t("elevator"),
    garage: t("garage"),
    garden: t("garden"),

    furniture: t("furniture"),
    "white goods": t("white goods"),
    pool: t("pool"),

    inDoorFacilities: t("inDoorFacilities"),
    outDoorFacilities: t("outDoorFacilities"),
    "high rent income": t("high rent income"),
    beachfront: t("beachfront"),
    "flexible installment": t("flexible installment"),
    "turkish citizenship": t("turkish citizenship"),
  };
  return (
    <Client locale={locale} property={property} translations={translations} />
  );
};

export default Translation;
