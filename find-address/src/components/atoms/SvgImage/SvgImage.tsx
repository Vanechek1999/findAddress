import { HandySvg } from "handy-svg";

import logo from "./svgs/logo.svg"
import home from "./svgs/home.svg";
import search from "./svgs/search.svg";
import tables from "./svgs/tables.svg";
import calendar from "./svgs/calendar.svg";
import location from "./svgs/location.svg";
import widget from "./svgs/widget.svg";
import settings from "./svgs/settings.svg";
import personSettings from "./svgs/person-settings.svg";
import financeSettings from "./svgs/finance-settings.svg";
import exit from "./svgs/exit.svg";
import person from "./svgs/person.svg";
import arrow from "./svgs/arrow.svg";
import menu from './svgs/menu.svg'
import cross from './svgs/cross.svg'
import searchWhite from './svgs/search-white.svg'

type SvgImageProps = {
  type: string;
  color?: "default" | "white" | "green" | "blue" | "red" | "muted-gray";
  size?: number;
  className?: string;
};

function SvgImage({
  type,
  color = "default",
  size = 24,
}: SvgImageProps) {
  const svgTypes = {
    "home": home,
    "search": search,
    "tables": tables,
    "calendar": calendar,
    "location": location,
    "logo": logo,
    "widget": widget,
    "settings": settings,
    "person-settings": personSettings,
    "finance-settings": financeSettings,
    "exit": exit,
    "person": person,
    "arrow": arrow,
    "menu": menu,
    "cross": cross,
    "searchWhite": searchWhite
  };

  return <HandySvg src={svgTypes[type as keyof typeof svgTypes]} width={size} height={size} />;
}

export default SvgImage;
