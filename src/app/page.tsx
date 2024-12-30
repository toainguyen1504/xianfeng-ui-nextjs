"use client";
import React from "react";
// import { Image } from "antd";
// import Link from "next/link";
import ServiceCards from "@/components/services/ServiceCards";
import BannerCarousel from "@/components/common/BannerCarousel";
export default function Home() {
  return (
    <div>
      {/* Banner */}
      <BannerCarousel />

      {/* Services */}
      <ServiceCards />
    </div>
  );
}
