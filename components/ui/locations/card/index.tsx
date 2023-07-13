import { getProperties } from "@/helpers/getProperties";
import { useTranslations } from "next-intl";
import React from "react";

type Props = {
  image: string;
  city: string;
};

async function Card({ image, city }: Props) {
  const t = useTranslations("Index");
  const properties = await getProperties(
    `http://localhost:3000/api/property?city=${city.toLowerCase()}`
  );

  return (
    <>
      <div
        className=" w-full h-full bg-cover  bg-no-repeat bg-center cursor-pointer brightness-50 hover:brightness-75  transition duration-700 ease-in-out"
        style={{ backgroundImage: `url(${image})` }}
      />

      <div className="text-white brightness-250 p-4  absolute  bottom-0 left-0  shadow-xl font-bold tracking-wide text-md">
        {city}{" "}
      </div>
      <div className="locations-banner font-semibold text-slate-900">
        <span>
          {properties.length} {t("properties")}
        </span>
      </div>
    </>
  );
}

export default Card;
