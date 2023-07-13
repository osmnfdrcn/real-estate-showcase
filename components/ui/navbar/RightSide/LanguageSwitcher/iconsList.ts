import { IconType } from "react-icons";
import { BsLinkedin, BsInstagram, BsYoutube, BsBehance } from "react-icons/bs";
import { ImBehance2 } from "react-icons/im";
import { FaYoutubeSquare } from "react-icons/fa";

export type Icon = {
  id: number;
  icon: IconType;
};

export const iconsList: Icon[] = [
  { id: 0, icon: BsLinkedin },
  { id: 1, icon: BsInstagram },
  { id: 2, icon: FaYoutubeSquare },
  { id: 3, icon: ImBehance2 },
];
