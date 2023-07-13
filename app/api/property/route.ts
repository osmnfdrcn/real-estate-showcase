import prisma from "@/libs/prismadb";
import { IProperty } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export type IPropertyData = Omit<
  IProperty,
  "city" | "county" | "propertyType"
> & {
  cityId: string;
  countyId: string;
  propertyTypeId: string;
};

export async function GET(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);
  const reference = searchParams.get("reference");
  const slug = searchParams.get("slug");
  const city = searchParams.get("city");
  const county = searchParams.get("county");
  const type = searchParams.get("type")?.split(",");
  const min = searchParams.get("min");
  const max = searchParams.get("max");
  const bedroom = searchParams
    .get("bedroom")
    ?.split(",")
    .map((el) => parseInt(el));
  const features = searchParams.get("features")?.split(",");

  let query: any = {};
  city ? (query.city = { name: city }) : null;
  slug ? (query.slug = slug) : null;
  county ? (query.county = { name: county }) : null;
  type ? (query.propertyType = { type: { in: type } }) : null;
  features ? (query.features = { hasSome: features }) : null;
  min && max
    ? (query.price = {
        gte: +min,
        lte: +max,
      })
    : null;
  bedroom ? (query.bedroom = { in: bedroom }) : null;
  reference ? (query.referenceNo = parseInt(reference)) : null;

  try {
    const properties = await prisma.property.findMany({
      where: query,
      include: {
        city: true,
        county: true,
        propertyType: true,
      },
    });
    return NextResponse.json(properties);
  } catch (error) {
    console.log(error);
  }
}
