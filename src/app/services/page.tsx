"use client";
import React from "react";
import ServiceCards from "@/components/services/ServiceCards";
import ContactForm from "@/components/common/ContactForm";

const ServicesPage = () => {
  return (
    <div className="my-10">
      <h1 className="text-5xl">Our Services</h1>
      <ServiceCards />
      <ContactForm />
    </div>
  );
};

export default ServicesPage;
