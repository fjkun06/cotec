import Modal from "@/libs/Modal";
import Head from "next/head";
import React from "react";
// import Navbar from "./navbar";
// import Footer from "./footer";

const Navbar = React.lazy((() => import('./navbar')))
const Footer = React.lazy((() => import('./footer')))



type modalGeneric = () => void;
type langGeneric = (route: string) => void;

const Layout: React.FC<{ children: React.ReactNode, trans:any, set: boolean }> = ({ children, trans, set }) => {
  const [language, setLanguage] = React.useState<string>("/en");
  const [visibility, setVisibility] = React.useState(false);
  const modalOff: modalGeneric = () => setVisibility(false);
  const modalOn: modalGeneric = () => setVisibility(true);
  const chnageLanguage: langGeneric = (route) => setLanguage(route);

  //scrollbar useffect
  React.useEffect(() => {
    const scrollbar = document.documentElement;

    if (visibility) {
      scrollbar.style.overflowY = "hidden";
    } else {
      scrollbar.style.overflowY = "scroll";
    }

    return () => {};
  }, [visibility]);

  React.useEffect(() => {
    setLanguage(window.location.pathname[1] + window.location.pathname[2] || 'en')

  },[language])

  return (
    <main>
      <Head>
        <title>{"Hello"}</title>
      </Head>
      <Modal visibility={visibility} closeModal={modalOff} setLang= {chnageLanguage} t={trans}/>
      <Navbar lang={language} openModal={modalOn} t={trans} set/>

      <nav>My heade bitch</nav>
      <section>{children}</section>
      <footer>my fott bitxh</footer>
      <Footer/>
    </main>
  );
};

export default Layout;
