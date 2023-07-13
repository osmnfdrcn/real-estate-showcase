import { Property, City, County, PropertyType } from "@prisma/client";

export type IProperty = Omit<Property, "createdAt"> & {
  createdAt: string;
  city: City;
  county: County;
  propertyType: PropertyType;
};

export type ICity = City & {
  properties: IProperty[];
};

export type ICounty = County & {
  properties: IProperty[];
};

export type IPropertyType = PropertyType & {
  properties: IProperty[];
};
