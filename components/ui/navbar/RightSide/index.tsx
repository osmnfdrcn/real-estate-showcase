"use client";
import Button from "@/components/common/button";
import LanguageSwitcher from "./LanguageSwitcher";
import SubMenu from "./SubMenu";

type RightSide = {
  locale: string;
  menuItems: {
    id: number;
    title: string;
  }[];
};
const RightSide = ({ menuItems, locale }: RightSide) => {
  return (
    <div className="flex items-center justify-end gap-4 ">
      <LanguageSwitcher locale={locale} />

      <SubMenu menuItems={menuItems} />
    </div>
  );
};

export default RightSide;
