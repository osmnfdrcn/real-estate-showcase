"use client";
import turkish from "@/public/icons/turkish-flag.svg";
import english from "@/public/icons/uk-flag.svg";
import React from "react";

import { usePathname } from "next-intl/client";
import Link from "next-intl/link";
import Image from "next/image";

type LanguageSwitcherType = {
  locale: string;
};
const LanguageSwitcher = ({ locale }: LanguageSwitcherType) => {
  const pathname = usePathname();

  return (
    <div className=" lg:flex items-center justify-center gap-8 ">
      <div className=" w-[50px] h-[20px] flex items-center justify-between gap-4 cursor-pointer">
        <Link href={pathname} locale={locale === "en" ? "tr" : "en"}>
          <Image
            src={locale === "tr" ? english : turkish}
            alt="language switcher icon"
            width={20}
            height={20}
          />
        </Link>
      </div>
    </div>
  );
};
export default React.memo(LanguageSwitcher);
