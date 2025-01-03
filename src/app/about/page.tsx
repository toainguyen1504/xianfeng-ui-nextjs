"use client";
import React from "react";
import { Image } from "antd";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";
import { MdOutlineSecurity } from "react-icons/md";
import { SiReactos } from "react-icons/si";
import { useTranslation } from "next-i18next";

const AboutPage = () => {
  const { t } = useTranslation("common");
  return (
    <div className="my-20">
      {/* Intro */}
      <div>
        <h1 className="text-5xl"> {t("aboutPage.title")}</h1>
        <p className="py-4">{t("aboutPage.desc")}</p>
        <Image
          src="/assets/img/about/about-us-banner.webp"
          alt="scene"
          preview={false}
          height={"100%"}
          className="rounded-2xl w-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div>
        <div className="my-10 space-y-4">
          <h2 className="text-3xl">{t("aboutPage.subTitle1")}</h2>
          <p>{t("aboutPage.subDesc1P1")}</p>
          <p>{t("aboutPage.subDesc1P2")}</p>
        </div>
        <div className="my-10 space-y-4">
          <Image
            src="/assets/img/about/about-us-1.webp"
            alt="scene"
            preview={false}
            height={"100%"}
            className="rounded-2xl w-full object-cover object-center"
          />
          <h2 className="text-3xl">{t("aboutPage.subTitle2")}</h2>
          <p>{t("aboutPage.subDesc2P1")}</p>
          <p>{t("aboutPage.subDesc2P2")}</p>
        </div>
        <div className="my-10 space-y-4">
          <Image
            src="/assets/img/about/about-us-2.webp"
            alt="scene"
            preview={false}
            height={"100%"}
            className="rounded-2xl w-full object-cover object-center"
          />
          <h2 className="text-3xl">{t("aboutPage.subTitle3")}</h2>
          <p>{t("aboutPage.subDesc3P1")}</p>
          <p>{t("aboutPage.subDesc3P2")}</p>
        </div>
      </div>

      <hr className="bg-slate-50 opacity-10 my-16" />

      {/* Reasons to choose XianFeng */}
      <div className="my-10">
        <h2 className="text-3xl">{t("aboutPage.reasons.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-lg">
            <GiGiftOfKnowledge className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">
              {t("aboutPage.reasons.title1")}
            </h3>
            <p>{t("aboutPage.reasons.desc1")}</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-lg">
            <RiTeamFill className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">
              {t("aboutPage.reasons.title2")}
            </h3>
            <p>{t("aboutPage.reasons.desc2")}</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-lg">
            <MdOutlineSecurity className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">
              {t("aboutPage.reasons.title3")}
            </h3>
            <p>{t("aboutPage.reasons.desc3")}</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-lg">
            <SiReactos className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">
              {t("aboutPage.reasons.title4")}
            </h3>
            <p>{t("aboutPage.reasons.desc4")}</p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="border border-slate-300 px-6 py-12 rounded-lg mt-20 mb-32">
        <h2 className="text-2xl font-bold mb-4">
          {t("aboutPage.conclusion.title")}
        </h2>
        <p>{t("aboutPage.conclusion.desc")}</p>
      </div>
    </div>
  );
};

export default AboutPage;
