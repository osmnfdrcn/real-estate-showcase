import React, { useState } from "react";
import { GiPersonInBed } from "react-icons/gi";
import { LiaBathSolid, LiaMapMarkerAltSolid } from "react-icons/lia";
import { TfiRulerAlt2 } from "react-icons/tfi";
import Image from "next/image";
import { IProperty } from "@/types";
import usePagination from "@/hooks/usePagination";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Link from "next-intl/link";

type Props = {
  properties: IProperty[];
  locale: string;
};

const Properties = ({ properties, locale }: Props) => {
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const { next, prev, jump, currentData, currentPage, maxPage } = usePagination(
    { data: properties, itemsPerPage }
  );
  const data = currentData();

  return (
    <div className="grid grid-cols-1 gap-4 relative">
      {data.map((p) => {
        return (
          <Link href={`http://localhost:3000/property/${p.slug}`} key={p.id}>
            <div className="w-full bg-slate-50  hover:bg-slate-100 hover:shadow-md px-2 py-4 transition duration-500">
              <div className=" grid grid-cols-1 md:grid-cols-2 items-center sm:items-start justify-center gap-4 cursor-pointer">
                <Image
                  src={`${p.images[0]}`}
                  alt={p.slug}
                  width={400}
                  height={240}
                  style={{ objectFit: "cover" }}
                />
                <div className="flex flex-col justify-between  gap-6 py-2 md:px-6  w-full ">
                  <p className="text-sm font-semibold text-justify	 text-slate-600">
                    {locale === "en" ? p.titleEn : p.titleTr}
                  </p>
                  <div className="flex items-center justify-between text-md">
                    <span className="text-xs">REF-{p.referenceNo}</span>
                    <span className="text-xl text-rose-800">
                      {locale === "en" ? "EU " + p.price : "TL " + p.price * 28}
                    </span>
                  </div>
                  <div className="container mx-auto">
                    <div className="grid grid-cols-2 gap-0">
                      <div className="border p-2 flex justify-start gap-2 items-center text-sm">
                        <LiaMapMarkerAltSolid />
                        <p>
                          {p.city.name}/{p.county.name}
                        </p>
                      </div>
                      <div className="border p-2 flex justify-start gap-2 items-center text-sm">
                        <TfiRulerAlt2 />
                        <p>{p.squareMeter}sqm</p>
                      </div>{" "}
                      <div className="border p-2 flex justify-start gap-2 items-center text-sm">
                        <GiPersonInBed />
                        <p>{p.bedroom} bedrooms</p>
                      </div>{" "}
                      <div className="border p-2 flex justify-start gap-2 items-center text-sm">
                        <LiaBathSolid />
                        <p>{p.bathroom} bathroom</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
      {/* pagination */}
      {!!maxPage ? (
        <div className="w-full relative bottom left-0 bg-slate-100 text-slate-800 flex items-center justify-center gap-6 py-2">
          <AiOutlineArrowLeft
            className="cursor-pointer text-md text-slate-800 font-bold"
            onClick={prev}
          />
          <p className="text-md">
            {currentPage} / {maxPage}
          </p>
          <AiOutlineArrowRight
            className="cursor-pointer text-md  text-slate-800  font-bold"
            onClick={next}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Properties;
