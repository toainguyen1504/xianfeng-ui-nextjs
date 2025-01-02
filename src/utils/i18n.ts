import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// const savedLanguage = localStorage.getItem("language") || "en";

i18n
  .use(Backend) // Load file JSON
  .use(LanguageDetector) 
  .use(initReactI18next)
  .init({
    // lng: savedLanguage,
    fallbackLng: "en", 
    debug: process.env.NODE_ENV === "development", 
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
    console.log('i18next đã được khởi tạo xong.');
  })
  .catch((err) => {
    console.error('Lỗi khi khởi tạo i18next:', err);
  });

export default i18n;
