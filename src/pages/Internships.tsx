import React, { useRef } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
type HomeProps = { locale: string };

export async function getStaticProps({ locale }: HomeProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const Internships = () => {
  const router = useRouter();
  const { pathname, query, asPath, locale: activeLocale } = router;
  const { t } = useTranslation("common");
  const linkRef = useRef<HTMLAnchorElement>(null);

  const tester = () => {
    linkRef.current?.click();
    console.log(linkRef);
    setTimeout(() => router.reload(), 100);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {t("links.ten")}
        kdhjkhzkjdhjkzdjkhkz jhzdkjhjkzd kjhzdjk dzkjhkj fzdufjdzkl fkjzldkjfkdz \dzlkjfdjlkzd flzhfnzlndz
        <Link href={{ pathname, query }} as={asPath} locale={"fr"} ref={linkRef}>
          Switch
        </Link>
        <button type="button" onClick={tester}>
          test
        </button>
      </div>
    </>
  );
};

export default Internships;
