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

const Announcements = () => {
  return (
    <div className="page Announcements">
      <h1>PAGE 2</h1>
      <div>
      
      </div>
    </div>
  );
};

export default Announcements;
