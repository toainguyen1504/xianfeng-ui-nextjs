"use client";
import React, { useState } from "react";
import { Dropdown, Button, Image } from "antd";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import i18n from "@/utils/i18n";
import useLanguageLoader from "@/utils/useLanguageLoader";

interface LanguageDetails {
  label: string;
  src: string;
}

const languageDetails: Record<string, LanguageDetails> = {
  vi: { label: "Vi", src: "/flags/vi.svg" },
  zh: { label: "ZH-CN", src: "/flags/zh-CN.svg" },
  en: { label: "En", src: "/flags/en.svg" },
  ko: { label: "Ko", src: "/flags/ko.svg" },
};

export default function Header() {
  const { t } = useTranslation("common");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("zh");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (lang: string) => {
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang);
  };

  const isLoading = useLanguageLoader();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const languageMenuItems = Object.entries(languageDetails).map(
    ([key, value]) => ({
      key,
      label: (
        <a href="#" onClick={() => changeLanguage(key)}>
          <Image
            src={`/assets/icons${value.src}`}
            alt={key}
            width={24}
            height={24}
            preview={false}
            className="inline-block"
          />
          <span className="ml-2">{value.label}</span>
        </a>
      ),
    })
  );
  return (
    <header className="bg-white shadow-md h-[78px] sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center h-full px-4">
        <div className="flex items-center h-[48px]">
          <Link href="/">
            <Image
              src="/assets/img/logo.png"
              alt="Logo"
              preview={false}
              height={"30px"}
              className="mr-4 object-contain"
            />
          </Link>
        </div>
        {isLoading ? null : (
          <>
            <nav className="hidden md:flex items-center h-[48px] space-x-8">
              <Link
                href="/"
                className="font-semibold text-gray-700 hover:text-primary"
              >
                {t("navHeader.home")}
              </Link>
              <Link
                href="/about"
                className="font-semibold text-gray-700 hover:text-primary"
              >
                {t("navHeader.about")}
              </Link>
              <Link
                href="/services"
                className="font-semibold text-gray-700 hover:text-primary"
              >
                {t("navHeader.services")}
              </Link>
              <Link
                href="/contact"
                className="font-semibold text-gray-700 hover:text-primary"
              >
                {t("navHeader.contact")}
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Dropdown menu={{ items: languageMenuItems }} trigger={["click"]}>
                <Button className="min-w-[130px] border-none shadow-none">
                  <Image
                    src={`/assets/icons${languageDetails[selectedLanguage].src}`}
                    alt={selectedLanguage}
                    width={24}
                    height={24}
                    preview={false}
                    className="inline-block mr-2"
                  />
                  {languageDetails[selectedLanguage].label} <DownOutlined />
                </Button>
              </Dropdown>
              <Button className="md:hidden" onClick={handleMenuToggle}>
                <MenuOutlined />
              </Button>
            </div>
          </>
        )}
      </div>
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex">
          <div
            className="bg-black bg-opacity-40 w-2/5"
            onClick={handleMenuToggle}
          ></div>
          <div className="bg-white w-3/5 px-4 shadow-lg relative">
            <button
              className="absolute pl-8 py-3 top-0 right-4 text-gray-700 hover:text-primary"
              onClick={handleMenuToggle}
            >
              <IoMdClose size={20} />
            </button>
            <div className="py-12 space-y-2">
              {isLoading ? null : (
                <>
                  <Link
                    href="/"
                    className="block font-medium text-gray-700 hover:text-primary border-b border-gray-100 py-3"
                    style={{ borderColor: "rgba(107, 114, 128, 0.1)" }}
                  >
                    {t("navHeader.home")}
                  </Link>
                  <Link
                    href="/about"
                    className="block font-medium text-gray-700 hover:text-primary border-b border-gray-100 py-3"
                    style={{ borderColor: "rgba(107, 114, 128, 0.1)" }}
                  >
                    {t("navHeader.about")}
                  </Link>
                  <Link
                    href="/services"
                    className="block font-medium text-gray-700 hover:text-primary border-b border-gray-100 py-3"
                    style={{ borderColor: "rgba(107, 114, 128, 0.1)" }}
                  >
                    {t("navHeader.services")}
                  </Link>
                  <Link
                    href="/contact"
                    className="block font-medium text-gray-700 hover:text-primary border-b border-gray-100 py-3"
                    style={{ borderColor: "rgba(107, 114, 128, 0.1)" }}
                  >
                    {t("navHeader.contact")}
                  </Link>
                </>
              )}
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <span>Wechat: </span>
                <Image
                  src="/assets/img/QR-code-WeChat.png"
                  alt="QR Code"
                  preview={false}
                  width={"100px"}
                  className="mb-2 ml-2"
                />
              </div>
              <p>Zalo: 0899398383</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
