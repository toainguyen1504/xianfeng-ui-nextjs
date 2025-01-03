import { UserConfig } from "next-i18next";

const config: UserConfig = {
  i18n: {
    defaultLocale: "en", // Ngôn ngữ mặc định
    locales: ["en", "vi", "zh", "ko"], // Các ngôn ngữ hỗ trợ
  },
  localePath: "./public/locales", // Đường dẫn đến các tệp JSON ngôn ngữ
  reloadOnPrerender: process.env.NODE_ENV === "development", // Tự động reload trong môi trường dev
};

export default config;
