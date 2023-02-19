
// export{}
import React from "react";
const Light = React.lazy(() => import("assets/svg/navbar/Light"));
const DarkModeIcon = React.lazy(() => import("assets/svg/navbar/DarkModeIcon"));
const SystemIcon = React.lazy(() => import("assets/svg/navbar/SystemIcon"));
const EnglandIcon = React.lazy(() => import("assets/svg/navbar/EnglandIcon"));
const GermanyIcon = React.lazy(() => import("assets/svg/navbar/GermanyIcon"));
const FranceIcon = React.lazy(() => import("assets/svg/navbar/FranceIcon"));


export const routesConfig = [
  {
    route: "/en",
    icon: <EnglandIcon />,
    text: "EN",
  },
  {
    route: "/fr",
    icon: <FranceIcon />,
    text: "FR",
  },
  {
    route: "/de",
    icon: <GermanyIcon />,
    text: "DE",
  },
];
export const themeConfig = [
  {
    mode: "manualLight",
    icon: <Light />,
    text: "modal.themes.light",
  },
  {
    mode: "system",
    icon: <SystemIcon />,
    text: "modal.themes.system",
  },
  {
    mode: "manualDark",
    icon: <DarkModeIcon />,
    text: "modal.themes.dark",
  },
];