import Layout from "@/components/layout";
import type { AppProps } from "next/app";
import React from 'react';
import "public/assets/sass/main.scss";
import { appWithTranslation } from 'next-i18next'
// import nextI18NextConfig from '../../next-i18next.config.js/index.js'

//setting up language
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
type HomeProps = { locale: string };

export async function getStaticProps({ locale }: HomeProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["navbar"])),
    },
  };
}

 function App({ Component, pageProps }: AppProps) {
  const { t, i18n } = useTranslation(['common', 'footer'], { bindI18n: 'languageChanged loaded' })
  // bindI18n: loaded is needed because of the reloadResources call
  // if all pages use the reloadResources mechanism, the bindI18n option can also be defined in next-i18next.config.js
  React.useEffect(() => {
    i18n.reloadResources(i18n.resolvedLanguage, ['common', 'footer'])
  }, [])
  return (
    <Layout trans={t}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default appWithTranslation(App);