import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
const isDevelopment = process.env.NODE_ENV === "development";

// const savedLanguage = localStorage.getItem("language") || "en";

i18n
  .use(Backend) // Load file JSON
  .use(LanguageDetector) 
  .use(initReactI18next)
  .init({
    // lng: savedLanguage,
    fallbackLng: "en", 
    debug: isDevelopment,
    interpolation: {
      escapeValue: false, 
    },
    backend: {
      loadPath: "/locales/{{lng}}/common.json", 
    },
    react: {
      useSuspense: false, 
    },
  })
  .then(() => {
    if (isDevelopment) {
      // console.debug('i18next đã được khởi tạo xong.');
    }
  })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  .catch((err) => {
    // console.error('Lỗi khi khởi tạo i18next:', err);
  });

export default i18n;
