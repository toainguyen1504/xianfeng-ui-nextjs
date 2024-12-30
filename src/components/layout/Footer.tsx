import React from "react";
import { Button, Image, Input } from "antd";
import Link from "next/link";
import { IoIosSend } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="bg-[#003366] text-gray pt-16">
      <div className="container mx-auto flex flex-wrap justify-around">
        <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
          <div className="flex items-center mb-6">
            <Image
              src="/logo_white.png"
              alt="xianfeng"
              preview={false}
              width={"80px"}
            />
            <p className="ml-2 text-3xl text-white">Pioneer Business</p>
          </div>
          <p>
            Only professional services and innovative technology can drive
            enterprise development!
          </p>
        </div>
        <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0 space-y-6">
          <h3 className="text-xl text-white mb-2">Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className=" hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">
                Services
              </Link>
            </li>

            <li>
              <Link href="/news" className="hover:underline">
                Latest News
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 px-4 space-y-6">
          <h3 className="text-xl text-white mb-2">
            We Create Truly Excellent Ideas
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
              src="/QR-code-WeChat.png"
              alt="QR Code"
              preview={false}
              style={{ width: "100px" }}
              className="mb-2 ml-2"
            />
          </div>
          <p>
            Zalo/ Whatsapp/ Line: <span className="text-white">0899398383</span>
          </p>
        </div>
      </div>
      <div className="text-center text-sm border-t border-gray-200 mt-8 py-6">
        Copyright © 2024 Pioneer. All rights reserved.
      </div>
    </footer>
  );
}
