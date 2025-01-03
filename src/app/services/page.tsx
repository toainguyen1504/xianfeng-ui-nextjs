"use client";
import React from "react";
import ServiceCards from "@/components/services/ServiceCards";
import ContactForm from "@/components/common/ContactForm";
import { useTranslation } from "next-i18next";

const ServicesPage = () => {
  const { t } = useTranslation("common");
  return (
    <div className="my-20">
      <h1 className="text-5xl mb-10">{t("servicesList.titleServicePage")}</h1>
      <ServiceCards />
      <ContactForm />
    </div>
  );
};

export default ServicesPage;
