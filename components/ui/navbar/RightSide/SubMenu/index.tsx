"use client";
import { useRef, useState } from "react";
import { IconType } from "react-icons";
import { FiMenu } from "react-icons/fi";
import { useOnClickOutside } from "usehooks-ts";
import Menu from "../../Menu";
import SubMenuWrapper from "./SubMenuWrapper";

type SubMenuType = {
  menuItems: {
    id: number;
    title: string;
  }[];
};
function SubMenu({ menuItems }: SubMenuType) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const ref = useRef(null);

  const handleClickOutsideSocialSubMenu = () => {
    setShowMobileMenu(false);
  };
  useOnClickOutside(ref, handleClickOutsideSocialSubMenu);

  return (
    <div className=" flex gap-6" ref={ref}>
      <div
        className="flex lg:hidden items-center justify-center hover:scale-125 transition duration-200 text-2xl font-extrabold text-white"
        onClick={() => setShowMobileMenu((showMobileMenu) => !showMobileMenu)}
      >
        <IconImage iconImage={FiMenu} label={"menu-icon"} />
      </div>
      );
      {showMobileMenu ? (
        <SubMenuWrapper
          content={<Menu variant="col" menuItems={menuItems} />}
        />
      ) : null}
    </div>
  );
}

export default SubMenu;

export const IconImage = (props: { iconImage: IconType; label?: string }) => {
  return (
    <button
      className="hover:text-yellow-400 transition duration-500"
      aria-label={props.label}
    >
      {props.iconImage && <props.iconImage />}
    </button>
  );
};
