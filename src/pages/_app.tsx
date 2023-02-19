import Layout from "@/components/layout";
import type { AppProps } from "next/app";
import React from 'react';
import "public/assets/sass/main.scss";
import { appWithTranslation } from 'next-i18next'
// import nextI18NextConfig from '../../next-i18next.config.js/index.js'

//setting up language
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
type HomeProps = { locale: string };

export async function getStaticProps({ locale }: HomeProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

 function App({ Component, pageProps }: AppProps) {
  const { t, i18n,ready } = useTranslation(['common'])

  const router = useRouter();
const { locale } = router;

React.useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);
  
  return (
    <Layout trans={t} set={ready}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default appWithTranslation(App);