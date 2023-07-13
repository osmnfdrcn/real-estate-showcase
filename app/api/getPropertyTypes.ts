import { IPropertyType } from "@/types";

export const getPropertyTypes = async (): Promise<IPropertyType[]> => {
  const data = await fetch("http://localhost:3000/api/propertyType");
  const type = await data.json();

  return type;
};
