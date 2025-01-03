"use client";
import React from "react";
import { Button, Image, Input } from "antd";
import Link from "next/link";
import { IoIosSend } from "react-icons/io";
import { useTranslation } from "next-i18next";
import useLanguageLoader from "@/utils/useLanguageLoader";

export default function Footer() {
  const { t } = useTranslation("common");
  const isLoading = useLanguageLoader();

  return (
    <footer className="bg-[#003366] text-gray pt-16">
      {isLoading ? null : (
        <>
          <div className="container mx-auto flex flex-wrap justify-around">
            <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0 space-y-6">
              <div className="flex items-center mb-6">
                <Image
                  src="/assets/img/logo_white.png"
                  alt="xianfeng"
                  preview={false}
                  width={"80px"}
                />
                <p className="ml-3 text-2xl text-white">先锋商务</p>
              </div>
              <p>{t("footer.desc")}</p>
              <p>
                Zalo/ Whatsapp/ Line:
                <span className="text-white"> 0899398383</span>
              </p>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0 space-y-6">
              <h3 className="text-xl text-white mb-2">Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className=" hover:underline">
                    {t("navHeader.home")}
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:underline">
                    {t("navHeader.about")}
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:underline">
                    {t("navHeader.services")}
                  </Link>
                </li>

                <li>
                  <Link href="/contact" className="hover:underline">
                    {t("navHeader.contact")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 px-4 space-y-6">
              <h3 className="text-xl text-white mb-2">
                {t("footer.toActionTitle")}
              </h3>
              <div className="flex gap-2 mb-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  style={{ height: 42 }}
                />
                <Button
                  type="primary"
                  style={{ height: 42, display: "flex", alignItems: "center" }}
                >
                  <IoIosSend size={20} />
                </Button>
              </div>

              <div className="flex items-center">
                <span>Wechat: </span>
                <Image
                  src="/assets/img/QR-code-WeChat.png"
                  alt="QR Code"
                  preview={false}
                  style={{ width: "100px" }}
                  className="mb-2 ml-2"
                />
              </div>
            </div>
          </div>
        </>
      )}

      <div className="text-center text-sm border-t border-gray-200 mt-8 py-6">
        Copyright © 2025 Cartoon. All rights reserved.
      </div>
    </footer>
  );
}
