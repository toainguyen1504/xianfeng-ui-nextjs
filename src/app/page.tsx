"use client";
import React from "react";
import { Image } from "antd";
// import Link from "next/link";
import ServiceCards from "@/components/services/ServiceCards";
import BannerHome from "@/components/common/BannerHome";
import ContactForm from "@/components/common/ContactForm";
import { useTranslation } from "next-i18next";
export default function Home() {
  const { t } = useTranslation("common");
  return (
    <div>
      {/* Banner */}
      <BannerHome />

      {/* Services */}
      <div className="my-20">
        <h2 className="text-3xl font-bold mb-10">
          {t("servicesList.titleHomePage")}
        </h2>
        <ServiceCards />
      </div>

      {/* Image Location */}
      <div className="my-20">
        <div className="flex relative md:h-[750px] h-[350px] overflow-hidden rounded-2xl">
          <Image
            src="/assets/img/home/landmark-81.jpg"
            alt="scene"
            preview={false}
            height={"100%"}
            className="rounded-2xl w-full object-cover object-center"
          />
          <div className="absolute bottom-4 right-4 text-white bg-black bg-opacity-50 px-4 py-2 rounded-lg text-base font-medium">
            {t("imageLocationDesc")}
          </div>
        </div>
      </div>

      {/* Investment Support in Vietnam */}
      <div className="my-20 px-8 py-16 flex flex-col md:flex-row bg-[#103142] text-[#9FAEB6] rounded-xl">
        <div className="w-full md:w-2/5 relative flex items-center justify-center md:justify-start mb-8 md:mb-0">
          <Image
            src="/assets/img/home/services_06.webp"
            alt="scene"
            preview={false}
            className="rounded-2xl"
          />
        </div>
        <div className="w-full md:w-3/5 pl-0 md:pl-8 flex flex-col justify-center">
          <h2 className="text-3xl text-white font-bold mb-6">
            {t("investment.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-2">
              <h3 className="text-xl text-white font-medium">
                {t("investment.subTitle1")}
              </h3>
              <p>{t("investment.desc1")}</p>
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="text-xl text-white font-medium">
                {t("investment.subTitle2")}
              </h3>
              <p>{t("investment.desc2")}</p>
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="text-xl text-white font-medium">
                {t("investment.subTitle3")}
              </h3>
              <p>{t("investment.desc3")}</p>
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="text-xl text-white font-medium">
                {t("investment.subTitle4")}
              </h3>
              <p>{t("investment.desc4")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <ContactForm />
    </div>
  );
}
