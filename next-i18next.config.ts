import { UserConfig } from "next-i18next";

const config: UserConfig = {
  i18n: {
    defaultLocale: "zh",
    locales: ["zh", "vi", "en" , "ko"],
  },
  localePath: "./public/locales",
  reloadOnPrerender: process.env.NODE_ENV === "development",
};

export default config;
