import Container from "@/components/common/container";
import Title from "@/components/common/title";
import React from "react";
import { useTranslations } from "next-intl";
import Link from "next-intl/link";

import Card from "./card";

type Props = {};

const locations = [
  { id: 0, city: "Alanya", image: "/images/alanya.jpeg" },
  { id: 1, city: "Antalya", image: "/images/antalya.jpeg" },
  { id: 2, city: "Kibris", image: "/images/cyprus.jpeg" },
  { id: 3, city: "Istanbul", image: "/images/istanbul.jpeg" },
  { id: 4, city: "Izmir", image: "/images/izmir.jpeg" },
  { id: 5, city: "Mersin", image: "/images/mersin.jpeg" },
];

const Locations = (props: Props) => {
  const t = useTranslations("Index");

  return (
    <Container>
      <Title
        text={t("discoverLocationsText")}
        subText={t("propertyLocationsSubText")}
        color="slate-800"
      />

      <div className="h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 h-5/6 w-5/6 mx-auto ">
          {locations.map((l) => (
            <Link
              key={l.id}
              href={`/search?city=${l.city.toLowerCase()}`}
              className=" w-full relative locations-wrapper"
            >
              <Card key={l.id} city={l.city} image={l.image} />
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Locations;
