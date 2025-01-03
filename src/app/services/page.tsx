"use client";
import React from "react";
import ServiceCards from "@/components/services/ServiceCards";
import ContactForm from "@/components/common/ContactForm";
import { useTranslation } from "react-i18next";
import Loading from "@/components/common/Loading";
import useLanguageLoader from "@/utils/useLanguageLoader";

const ServicesPage = () => {
  const { t } = useTranslation("common");
  const isLoading = useLanguageLoader();

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="my-20">
          <h1 className="text-5xl mb-10">
            {t("servicesList.titleServicePage")}
          </h1>
          <ServiceCards />
          <ContactForm />
        </div>
      )}
    </>
  );
};

export default ServicesPage;
