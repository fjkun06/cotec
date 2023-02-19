import i18n from "./i18n";

export default function languageSwitcher(language: string): void {
    i18n.changeLanguage(language);
}
