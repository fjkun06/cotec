import React from "react";

const useClientOsTheme = () => {
const isBrowser = typeof window !== 'undefined'

  const userTheme = isBrowser? window.matchMedia("(prefers-color-scheme: dark)").matches : "";

  const [clientOsTheme, setClientOsTheme] = React.useState(userTheme ? "dark" : "light");

  //detecting clientOS theme
  React.useEffect(() => {
    userTheme ? setClientOsTheme("dark") : setClientOsTheme("light");

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      e.matches ? setClientOsTheme("dark") : setClientOsTheme("light");
    });
  }, [userTheme]);

  return clientOsTheme;
};

export default useClientOsTheme;
