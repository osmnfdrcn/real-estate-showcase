"use client";
import Title from "@/components/common/title";
import Image from "next/image";

import { GiPersonInBed } from "react-icons/gi";
import {
  LiaMapMarkerAltSolid,
  LiaBathSolid,
  LiaFileDownloadSolid,
} from "react-icons/lia";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { MdChair } from "react-icons/md";
import { IProperty } from "@/types";
import { useCallback, useState } from "react";
import useImageSlider from "@/hooks/useImageSlider";
import { BiSolidLeftArrow, BiSolidRightArrow, BiEuro } from "react-icons/bi";
import { FaTurkishLiraSign } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
type Props = {
  locale: string;
  property: IProperty;
  translations: any;
};

const Client = ({ locale, property, translations }: Props) => {
  const [currentImage, handlePrevImage, handleNextImage] = useImageSlider(
    property?.images,
    true
  );

  const handleImage = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, action: string) => {
      e.stopPropagation();

      if (action === "next") {
        handleNextImage();
      }
      if (action === "back") {
        handlePrevImage();
      }
    },
    [handleNextImage, handlePrevImage]
  );

  const dataBoxItems = [
    {
      id: 0,
      text: locale === "en" ? property.price : property.price * 28,
      style: "col-span-2 text-2xl font-semibold justify-center",
      icon: locale === "en" ? <BiEuro /> : <FaTurkishLiraSign />,
    },
    {
      id: 1,
      text: property.city.name + "/" + property.county.name,
      style: "text-sm justify-start",
      icon: <LiaMapMarkerAltSolid />,
    },
    {
      id: 2,
      text: property.squareMeter + translations.sqm,
      style: "text-sm justify-start",
      icon: <TfiRulerAlt2 />,
    },
    {
      id: 3,
      text: property.bedroom + " " + translations.bedrooms,
      style: "text-sm justify-start",
      icon: <GiPersonInBed />,
    },
    {
      id: 4,
      text: property.livingroom + " " + translations.livingRoom,
      style: "text-sm justify-start",
      icon: <MdChair />,
    },
    {
      id: 5,
      text: property.bathroom + " " + translations.bathroom,
      style: "text-sm justify-start",
      icon: <LiaBathSolid />,
    },
    {
      id: 6,
      text: "REF :" + property.bathroom,
      style: "text-sm justify-start",
      icon: null,
    },
  ];

  return (
    <div className="mt-[100px]">
      <Title text={locale === "en" ? property.titleEn : property.titleTr} />
      <div className="w-full grid items-center justify-center grid-cols-1  lg:grid-cols-3 gap-6 grid-row-1 px-4">
        {/* slider */}
        <div className="relative w-full  col-span-1 lg:col-span-2 items-center justify-center ">
          <Image
            src={currentImage as string}
            alt={property.slug}
            width={800}
            height={600}
            style={{ objectFit: "cover" }}
            className="w-full h-full"
          />
          <div className="w-full flex justify-between absolute z-10 top-[47%]">
            <button
              className="flex justify-center items-center"
              onClick={(e) => handleImage(e, "back")}
            >
              <BiSolidLeftArrow
                className=" text-white font-extrabold"
                size={36}
              />
            </button>
            <button
              className=" text-white font-extrabold"
              onClick={(e) => handleImage(e, "next")}
            >
              <BiSolidRightArrow
                className=" text-white font-extrabold"
                size={36}
              />
            </button>
          </div>
        </div>

        {/* data box */}
        <div className="container mx-auto h-full bg-slate-50 border border-1 w-full">
          <div className="grid grid-cols-2 gap-0 ">
            {dataBoxItems.map((f) => (
              <div
                key={f.id}
                className={`border border-1 p-4 flex  gap-2 items-center  ${f.style}`}
              >
                {f.icon}
                <p>{f.text}</p>
              </div>
            ))}

            <div className="border border-1 p-4 flex justify-center gap-4 items-center text-sm col-span-2">
              <div className="w-full bg-red-500 hover:bg-red-700 p-4 flex items-center justify-center gap-4 transition duration-500 cursor-pointer rounded-sm">
                <LiaFileDownloadSolid size={40} className="text-white" />
                <p className="text-white font-semibold text-md">
                  {translations.downloadFreeBrochure}
                </p>
              </div>
            </div>
            <div className=" p-4 flex justify-center gap-4 items-center text-sm col-span-2">
              <div className="w-3/4 bg-yellow-500 hover:bg-yellow-600 p-2 flex items-center justify-center gap-4 transition duration-500 cursor-pointer rounded-sm">
                <LiaFileDownloadSolid size={40} className="text-slate-700" />
                <p className="text-slate-700 font-semibold text-md">
                  {translations.onlineViwingTrip}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* description*/}
      <div className=" m-4">
        <p className="text-md text-slate-700 text-justify">
          {locale === "en" ? property.descriptionEn : property.descriptionTr}
        </p>
      </div>

      <Features
        text={translations.tags}
        feature={property.tags.map((i) => translations[i])}
      />
      <Features
        text={translations.features}
        feature={property.features.map((i) => translations[i])}
      />
      <Features
        text={translations.inDoorFacilities}
        feature={property.indoorFacilities.map((i) => translations[i])}
      />
      <Features
        text={translations.outDoorFacilities}
        feature={property.outdoorFacilities.map((i) => translations[i])}
      />
    </div>
  );
};

export default Client;

const Features = ({ text, feature }: { text: string; feature: string[] }) => {
  return (
    <div className="my-[20px] mx-4 ">
      <p className="text-lg font-semibold mb-1">{text} </p>
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-4">
        {feature.map((f) => (
          <div className="flex items-center justify-start gap-4" key={f}>
            <TiTick className="text-green-500" />
            <p className="text-md text-slate-700 text-justify">{f}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
