import { useState, useEffect } from "react";
import i18n from "@/utils/i18n";

const useLanguageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLanguageLoaded = () => {
      setIsLoading(false);
    };

    if (i18n.isInitialized) {
      setIsLoading(false);
    } else {
      i18n.on("initialized", handleLanguageLoaded);
    }

    return () => {
      i18n.off("initialized", handleLanguageLoaded);
    };
  }, []);

  return isLoading;
};

export default useLanguageLoader;
