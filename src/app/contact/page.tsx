"use client";
import React from "react";
import { Image } from "antd";
import ContactForm from "@/components/common/ContactForm";
import { useTranslation } from "react-i18next";
import Loading from "@/components/common/Loading";
import useLanguageLoader from "@/utils/useLanguageLoader";

const ContactPage = () => {
  const { t } = useTranslation("common");
  const isLoading = useLanguageLoader();

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="my-20">
          <h1 className="text-5xl"> {t("contactPageTitle")}</h1>
          {/* Contact Info */}
          <section className="my-20 flex flex-col md:flex-row text-[#9FAEB6]">
            <div className="w-full md:w-2/5 relative flex items-center justify-center md:justify-start mb-8 md:mb-0">
              <Image
                src="/assets/img/contact/landmark81.jpg"
                alt="scene"
                preview={false}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white p-4">
                <h2 className="text-3xl font-medium mb-4 ">
                  {t("contactInfo.title")}
                </h2>
                <p className="text-lg mb-2">{t("contactInfo.email")}</p>
                <p className="text-lg text-center">
                  {t("contactInfo.location")}
                </p>
              </div>
            </div>
            <div className="flex flex-col text-center items-center justify-center w-full md:w-3/5 lg:w-7/10 bg-[#F5F5F7] text-content p-8 lg:p-12">
              <h2 className="text-3xl font-bold mb-4">
                {t("contactInfo.wechatQR.title")}
              </h2>
              <p className="text-lg mb-4">{t("contactInfo.wechatQR.desc")}</p>
              <div className="flex justify-center">
                <Image
                  src="/assets/img/QR-code-WeChat.png"
                  alt="QR Code"
                  className="w-full h-auto"
                />
              </div>
              <span className="text-lg mt-4 block text-center">WeChat</span>
            </div>
          </section>

          {/* Maps */}
          <section className="flex justify-center">
            <div className="my-10">
              <Image
                src="/assets/img/contact/ggmap.png"
                alt="scene"
                height={700}
                className="h-auto object-cover"
              />
            </div>
          </section>

          <ContactForm />
        </div>
      )}
    </>
  );
};

export default ContactPage;
