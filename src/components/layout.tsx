import Head from "next/head";
import React from "react";
// import Navbar from "./navbar";
// import Footer from "./footer";

const Navbar = React.lazy((() => import('./navbar')))
const Footer = React.lazy((() => import('./footer')))



type modalGeneric = () => void;
type langGeneric = (route: string) => void;

const Layout: React.FC<{ children: React.ReactNode, trans:any }> = ({ children, trans }) => {
  const [language, setLanguage] = React.useState<string>("/en");
  const [visibility, setVisibility] = React.useState(false);
  const modalOff: modalGeneric = () => setVisibility(false);
  const modalOn: modalGeneric = () => setVisibility(true);
  const chnageLanguage: langGeneric = (route) => setLanguage(route);

  React.useEffect(() => {
    const scrollbar = document.documentElement;

    if (visibility) {
      scrollbar.style.overflowY = "hidden";
    } else {
      scrollbar.style.overflowY = "scroll";
    }

    return () => {};
  }, [visibility]);

  return (
    <main>
      <Head>
        <title>{"Hello"}</title>
      </Head>
      <Navbar lang={language} openModal={modalOn} t={trans} />

      <nav>My heade bitch</nav>
      <section>{children}</section>
      <footer>my fott bitxh</footer>
      <Footer/>
    </main>
  );
};

export default Layout;
