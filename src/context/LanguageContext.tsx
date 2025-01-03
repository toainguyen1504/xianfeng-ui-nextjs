// src/context/LanguageContext.tsx
"use client";

import React, { createContext, useContext, useState } from "react";
import i18n from "@/utils/i18n";

interface LanguageContextProps {
  isLoading: boolean;
  selectedLanguage: string;
  changeLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const changeLanguage = async (lang: string) => {
    setIsLoading(true);
    setSelectedLanguage(lang);
    await i18n.changeLanguage(lang);
    setIsLoading(false);
  };

  return (
    <LanguageContext.Provider
      value={{ isLoading, selectedLanguage, changeLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
