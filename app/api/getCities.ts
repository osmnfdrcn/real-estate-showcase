import { ICity } from "@/types";

export const getCities = async (): Promise<ICity[]> => {
  const data = await fetch("http://localhost:3000/api/location/city");
  const cities = await data.json();

  return cities;
};
