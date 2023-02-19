
// @ts-check

/**
 * @type {import('next-i18next').UserConfig}
 */
const Backend =  require('i18next-http-backend/cjs');
const isBrowser = typeof window !== 'undefined'

module.exports = {
  // https://www.i18next.com/overview/configuration-options#logging
  debug: process.env.NODE_ENV === 'development',
  defaultNS: "navbar",
  i18n: {
    locales: ["en", "fr", "de"],
    defaultLocale: "en",
  },
  ns: ['navbar'],
// defaultNS: 'translation',
  /** To avoid issues when deploying to some paas (vercel...) */
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/locales',

  reloadOnPrerender: process.env.NODE_ENV === 'development',
  use: isBrowser ? [Backend] : [],


  /**
   * @link https://github.com/i18next/next-i18next#6-advanced-configuration
   */
  // saveMissing: false,
  // strictMode: true,
  // serializeConfig: false,
  // react: { useSuspense: true }
}