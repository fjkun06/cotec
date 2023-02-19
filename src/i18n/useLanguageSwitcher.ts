// const {i18n} = require("../../next-i18next.config")
import { useRouter } from "next/router";

export default function useLanguageSwitcher(language: string): void {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  // change just the locale and maintain all other route information including href's query
  router.push({ pathname, query }, asPath, { locale: language });
}
