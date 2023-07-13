import { IProperty } from "@/types";

export const getProperties = async (url: string): Promise<IProperty[]> => {
  const data = await fetch(
    url
    // {cache : "no-cache"}
  );

  const posts = await data.json();

  return posts;
};
