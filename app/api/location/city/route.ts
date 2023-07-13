import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";

export async function GET(req: Request, res: NextResponse) {
  try {
    const cities = await prisma.city.findMany({
      include: {
        counties: true,
        properties: true,
      },
    });
    return NextResponse.json(cities);
  } catch (error) {
    console.log(error);
  }
}
