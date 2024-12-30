"use client";
import React from "react";
import { Image } from "antd";
// import Link from "next/link";
import ServiceCards from "@/components/services/ServiceCards";
import BannerCarousel from "@/components/common/BannerCarousel";
import ContactForm from "@/components/common/ContactForm";
export default function Home() {
  return (
    <div>
      {/* Banner */}
      <BannerCarousel />

      {/* Services */}
      <ServiceCards />

      {/* Image Location */}
      <section className="my-20">
        <div className="flex relative md:h-[750px] h-[350px] overflow-hidden rounded-2xl">
          <Image
            src="/home/landmark-81.jpg"
            alt="scene"
            preview={false}
            height={"100%"}
            className="rounded-2xl w-full object-cover object-center"
          />
          <div className="absolute bottom-4 right-4 text-white bg-black bg-opacity-50 px-4 py-2 rounded-lg text-base font-medium">
            Based in Vietnam, serving the world
          </div>
        </div>
      </section>

      {/* Investment Support in Vietnam */}
      <section className="my-20 px-8 py-16 flex flex-col md:flex-row bg-[#103142] text-[#9FAEB6] rounded-xl">
        <div className="w-full md:w-2/5 relative flex items-center justify-center md:justify-start mb-8 md:mb-0">
          <Image
            src="/home/services_06.webp"
            alt="scene"
            preview={false}
            className="rounded-2xl"
          />
        </div>
        <div className="w-full md:w-3/5 pl-0 md:pl-8 flex flex-col justify-center">
          <h2 className="text-3xl text-white font-bold mb-6">
            Choose Pioneer to help your investment in Vietnam
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-2">
              <h3 className="text-xl text-white font-medium">
                Rich professional experience
              </h3>
              <p>
                With more than 20 years of experience in the Vietnamese market,
                we understand the local business environment and provide
                professional services.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="text-xl text-white font-medium">
                Full range of service support
              </h3>
              <p>
                From company registration to financial consulting, we provide
                one-stop solutions to help you run your business smoothly.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="text-xl text-white font-medium">
                Compliance assurance priority
              </h3>
              <p>
                Keep up with the latest laws and regulations to ensure business
                operations are in compliance and reduce legal risks.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="text-xl text-white font-medium">
                Efficient teamwork
              </h3>
              <p>
                Our experienced local team can respond to your needs quickly and
                help you advance your project efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <ContactForm />
    </div>
  );
}
