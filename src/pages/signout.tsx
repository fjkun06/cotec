import React from 'react'
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

const SignOut = () => {
  return (
    <div>SignOut</div>
  )
}

export default SignOut