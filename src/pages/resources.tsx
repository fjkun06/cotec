import React from "react";
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

const Resources = () => {

  return (
    <div className="page Resources">
      <h1>PAGE 3</h1>
      <div>
      
      </div>
    </div>
  );
};

export default Resources;
