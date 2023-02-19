import React from "react";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
type HomeProps = { locale: string };

export async function getStaticProps({ locale }: HomeProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const Home: React.FC<HomeProps> = () => {
  const router = useRouter();
  const { t } = useTranslation("common");

  React.useEffect(() => {
    console.log(router);
  });
  return (
    <section className="home">
      <h1>{t("links.one")}</h1>
      <h1>{t("links.two")}</h1>
      <h1>{t("links.three")}</h1>
    </section>
  );
};

export default Home;
