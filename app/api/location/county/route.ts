import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";

export async function GET(req: Request, res: NextResponse) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get("city");
  let query: any = {};
  city ? (query.city = { name: city }) : null;
  try {
    const cities = await prisma.county.findMany({
      where: query,
      include: {
        properties: true,
      },
    });
    return NextResponse.json(cities);
  } catch (error) {
    console.log(error);
  }
}
