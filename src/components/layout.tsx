import Head from "next/head";
import React from "react";

const Layout = ({ children }: any) => {
  return (
    <section>
      <Head>
        <title>{"Hello"}</title>
      </Head>
      <nav>My heade bitch</nav>
      <section>{children}</section>
      <footer>my fott bitxh</footer>
    </section>
  );
};

export default Layout;
