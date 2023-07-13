import React from "react";
import Menu from "./Menu";
import Logo from "./Logo";
import RightSide from "./RightSide";
import { useLocale, useTranslations } from "next-intl";

const Navbar = () => {
  const t = useTranslations("Index");
  const locale = useLocale();

  const menuItems = [
    { id: 0, title: t("realEstateInTurkey") },
    { id: 1, title: t("blog") },
    { id: 2, title: t("testimonials") },
    { id: 3, title: t("aboutUs") },
    { id: 4, title: t("contactUs") },
  ];

  return (
    <div className="w-full fixed top-0 right-0 z-[1000] bg-slate-900 flex justify-center items-center">
      <div className="w-[1140px] flex justify-between items-center h-[70px] ">
        <Logo />
        <Menu variant="row" menuItems={menuItems} />
        <RightSide menuItems={menuItems} locale={locale} />
      </div>
    </div>
  );
};

export default React.memo(Navbar);
