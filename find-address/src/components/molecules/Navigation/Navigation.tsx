import { useState, useEffect } from "react";

import classNames from "classnames/dedupe";

import TextWithIcon from "../TextWithIcon/TextWithIcon";
import SvgImage from "../../atoms/SvgImage/SvgImage";
import Paper from "../../atoms/Paper/Paper";
import Typography from "../../atoms/Typography/Typography";

import "./Navigation.scss";

const Navigation = () => {
  const [showSubNav, setShowSubNav] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isActivePage, setIsActivePage] = useState("");

  useEffect(() => setIsActivePage(window.location.pathname), []);
  const navigationLinks = [
    {
      iconName: "home",
      page: "Главная",
      path: "/",
    },
    {
      iconName: "search",
      page: "Поиск адресов",
      path: "/address",
    },
    {
      iconName: "tables",
      page: "Таблицы",
    },
    {
      iconName: "calendar",
      page: "Календарь",
    },
    {
      iconName: "location",
      page: "Карты",
    },
    {
      iconName: "widget",
      page: "Виджеты",
    },
    {
      iconName: "settings",
      page: "Настройки",
      subNavigationLinks: [
        {
          iconName: "person-settings",
          page: "Настройки профиля",
        },
        {
          iconName: "finance-settings",
          page: "Управление финансами",
        },
      ],
    },
    {
      iconName: "exit",
      page: "Выход",
    },
  ];

  return (
    <>
      <Paper
        top={{ desktop: 16, mobile: 8 }}
        left={{ desktop: 32, mobile: 16 }}
        className="Navigation-ShowOrHideMenu"
        onClick={() => setShowMenu(!showMenu)}
      >
        <SvgImage type="menu" />
      </Paper>
      <Paper
        className={classNames("Navigation", showMenu && "Navigation_active")}
        top={{ all: 24 }}
        right={{ all: 20 }}
        left={{ desktop: 32, mobile: 16 }}
      >
        {!showMenu && (
          <Typography size={20} weight={700}>
            Меню
          </Typography>
        )}
        <nav>
          {navigationLinks.map((link, index) => {
            const subLinks = link.subNavigationLinks;
            return (
              <>
                <Paper display="flex" top={{ all: index !== 0 ? 40 : 32 }}>
                  <a
                    className={classNames(
                      link.subNavigationLinks
                        ? "Navigation_subNav"
                        : "Navigation-Item",
                      showSubNav &&
                        link.subNavigationLinks &&
                        "Navigation_subNav_active",
                      link.path &&
                        isActivePage.includes(link.path) &&
                        link.path.length >= isActivePage.length &&
                        "Navigation-Item_active"
                    )}
                    href={link.path ?? "/"}
                    onClick={(e) => {
                      if (link.subNavigationLinks) {
                        e.preventDefault();
                        setShowSubNav(!showSubNav);
                      }
                    }}
                  >
                    <TextWithIcon
                      textSize={20}
                      textWeight={600}
                      leftSide
                      padding={{ all: 16 }}
                      svgType={link.iconName}
                      iconSize={32}
                    >
                      {link.page}
                    </TextWithIcon>
                    {link.subNavigationLinks && (
                      <SvgImage type="arrow" size={15} />
                    )}
                  </a>
                </Paper>
                {subLinks?.map((subLink, index) => {
                  if (showSubNav) {
                    return (
                      <Paper left={{ all: 40 }} top={{ all: 32 }}>
                        <TextWithIcon
                          textSize={20}
                          textWeight={600}
                          leftSide
                          padding={{ all: 16 }}
                          svgType={subLink.iconName}
                        >
                          {subLink.page}
                        </TextWithIcon>
                      </Paper>
                    );
                  }
                })}
              </>
            );
          })}
        </nav>
      </Paper>
    </>
  );
};

export default Navigation;
