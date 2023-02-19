import React from "react";
// import { useLocation, useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { routesConfig, themeConfig } from "./config";
import switchTheme from "@/hooks/switchTheme";
import useClientOsTheme from "@/hooks/useClientOsTheme";
import { useRouter } from "next/router";

type ModalProps = {
  visibility: boolean;
  closeModal: () => void;
  setLang: (route: string) => void;
  t: any;

};

const Modal: React.FC<ModalProps> = ({ visibility, closeModal, setLang,t }) => {
  // const location = useLocation();
  const asideBar = React.useRef<HTMLDivElement>(null);
  const languageRef = React.useRef<HTMLDivElement[]>([]);
  const themeRef = React.useRef<HTMLDivElement[]>([]);
  let counter = 0;
  const clientTheme = useClientOsTheme();
  const backgroundClass = "current-option";
  const router = useRouter();

  // const { t } = useTranslation("navbar");

  type identifier = string | undefined;

  //language switching and theme switching useeffect
  React.useEffect(() => {
    switchTheme(clientTheme);

    const modeArray = themeRef.current;
    const routeArray = languageRef.current;

    function testState2(propToCompare: identifier, array: HTMLDivElement[], prop: identifier) {
      return array.filter((flag) => flag.classList.contains(backgroundClass)).some((elt) => elt.dataset[`${prop}`] === propToCompare);
    }

    function removeBorderFromOtherElements2(propToCompare: identifier, array: HTMLDivElement[], prop: identifier) {
      array.forEach((flag) => {
        if (flag.dataset[`${prop}`] !== propToCompare) {
          flag.classList.remove(backgroundClass);
        } else {
          flag.classList.add(backgroundClass);
        }
      });
    }

    //setting default lang
    routeArray.forEach((flag) => {
      if (flag.dataset.route === router.asPath.slice(0, 3)) {
        flag.classList.add(backgroundClass);
      } else {
        flag.classList.remove(backgroundClass);
      }
    });

    // styling default theme button
    modeArray.forEach((flag) => {
      if (flag.dataset.mode === document.documentElement.className) {
        flag.classList.add(backgroundClass);
      } else if (flag.dataset.mode === "system" && (document.documentElement.className === "light" || "dark")) {
        flag.classList.add(backgroundClass);
      } else {
        flag.classList.remove(backgroundClass);
      }
    });

    modeArray.forEach((elt) => {
      elt.addEventListener("click", (e: Event) => {
        e.stopImmediatePropagation();
        const element = e.target as HTMLDivElement;
        const mode = element.dataset.mode as string;

        if (testState2(mode, modeArray, "mode")) {
        } else {
          removeBorderFromOtherElements2(mode, modeArray, "mode");
          if (mode === "system") {
            switchTheme(clientTheme);
          } else {
            switchTheme(mode);
          }
        }
      });
    });
    routeArray.forEach((elt) => {
      elt.addEventListener("click", (e: Event) => {
        // e.stopImmediatePropagation();
        const element = e.target as HTMLDivElement;
        const route = element.dataset.route as string;

        if (testState2(route, routeArray, "route")) {
        } else {
          removeBorderFromOtherElements2(route, routeArray, "route");
        }
      });
    });
  }, [clientTheme, router.asPath]);

  function slideOut() {
    const slider = asideBar.current;

    counter++;
    if (slider) {
      if (counter === 50) {
        slider.children[1].classList.remove("contact__modal--in");
        slider.children[1].classList.add("contact__modal--out");
      }
      if (counter === 90) {
        closeModal();
      }
      if (counter === 92) {
        slider.children[1].classList.add("contact__modal--in");
      }

      if (counter < 94) {
        requestAnimationFrame(slideOut);
      }
    }
  }

  function switchLanguage(name: string) {
    if (router.asPath.slice(0, 3) === name) {
    } else if (router.asPath.length <= 3) {
      setLang(name);
      setTimeout(() => router.push(name), 300);
      // languageSwitcher(name);
    } else {
      setLang(name);
      setTimeout(() => router.push(name + router.asPath.slice(3 - router.asPath.length)), 300);
      // languageSwitcher(name);
    }
  }

  return (
    <div className="contact__modal" style={{ display: visibility ? "flex" : "none" }} ref={asideBar}>
      <section onClick={() => requestAnimationFrame(slideOut)} className="modal__toggler" style={{ display: visibility ? "block" : "none" }}></section>
      <aside className="contact__modal-aside contact__modal--in" style={{ display: visibility ? "block" : "none" }}>
        <header>
          <span className="">Settings</span>
          <span className="closer" onClick={() => requestAnimationFrame(slideOut)}>
            x
          </span>
        </header>
        <section className="section__theme">
          <span className="section__theme-title">MODE {clientTheme} </span>
          <div className="section__theme-options">
            {themeConfig.map(({ mode, icon, text }, index) => (
              <div
                key={mode}
                className=""
                ref={(element: HTMLDivElement) => {
                  themeRef.current[index] = element;
                }}
                data-mode={mode}
              >
                <span data-mode={mode}>{icon}</span>
                <span className="" data-mode={mode}>
                  {t(text)}
                </span>
              </div>
            ))}
          </div>
        </section>
        <section className="section__theme">
          <span className="section__theme-title">LANGUAGE</span>
          <div className="section__theme-options">
            {routesConfig.map(({ route, icon, text }, index) => (
              <div
                key={route}
                data-route={route}
                ref={(element: HTMLDivElement) => {
                  languageRef.current[index] = element;
                }}
                onClick={() => {
                  switchLanguage(route);
                }}
              >
                <span data-route={route}>{icon}</span>
                <span className="" data-route={route}>
                  {text}
                </span>
              </div>
            ))}
          </div>
        </section>
      </aside>
    </div>
  );
};

export default Modal;
