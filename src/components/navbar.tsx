import Gear from "public/assets/svg/navbar/GearIcon";
import Logo from "public/assets/svg/navbar/Logo";
import React from "react";
import ActiveNavLink from "./reusables/ActiveNavlink";
import { useRouter } from "next/router";

export type modalProps = {
  openModal: () => void;
};
type NavbarProps = modalProps & {
  lang: string;
  t: any;
  set: boolean;
  
};

const Navbar: React.FC<NavbarProps> = ({ lang, openModal, t, set }) => {
  // const { t } = useTranslation("navbar");
  const router = useRouter();

  // redirecting / to /en
  React.useEffect(() => {
    // if (router.pathname === "/") router.push(lang);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  return (
    <nav>
      <div className="navbar__icon">
        <Logo />
        <span>~ COTECHUB</span>
      </div>
      {set ? (
        <div>
          <ActiveNavLink to={lang} text={t("links.one")} />
          <ActiveNavLink to={lang + "/resources"} text={t("links.two")} />
          <ActiveNavLink to={lang + "/announcements"} text={t("links.three")} />
          <ActiveNavLink to={lang + "/internships"} text={t("links.four")} />
          <ActiveNavLink to={lang + "/polls"} text={t("links.five")} />
          <ActiveNavLink to={lang + "/projects"} text={t("links.six")} />
        </div>
      ) : (
        <span></span>
      )}

      <div>
        <Gear openModal={openModal} />
        <button className="navbar__button" onClick={() => router.push(lang + "/signin")} type="button">
          {t("links.eight")}
        </button>
        <button className="navbar__button" onClick={() => router.push(lang + "/signup")} type="button">
          {t("links.nine")}
        </button>
        {/* <button onClick={() => navigate(lang + "/signout")} type="button">
          {t("links.ten")}
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;
