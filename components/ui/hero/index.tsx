import React from "react";
import Search from "./search";
import Title from "@/components/common/title";
import { useTranslations } from "next-intl";
import Image from "next/image";
type Props = {};

const Hero = (props: Props) => {
  const t = useTranslations("Index");
  return (
    <div className="relative">
      <section className="mt-[60px] lg:mt-[70px] h-[700px] bg-slate-500  flex flex-col items-center justify-center bg-cover bg-no-repeat bg-center " />
      <Image
        src="/images/hero.webp"
        alt="hero"
        fill
        quality={100}
        style={{ objectFit: "cover" }}
        className="brightness-50"
        priority={true}
      />
      <div className="absolute top-[20%] lg:top-[40%] left-0 right-0 m-auto  max-w-[1140px]">
        <Title text={t("discoverPopular")} color="white" />
        <Search />
      </div>
    </div>
  );
};

export default Hero;
