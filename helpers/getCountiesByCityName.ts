import { ICity, ICounty } from "@/types";

export const getCountiesByCityName = async (
  city: string
): Promise<ICounty[]> => {
  const data = await fetch(`http://localhost:3000/api/county?city=${city}`);
  const counties = await data.json();

  return counties;
};
