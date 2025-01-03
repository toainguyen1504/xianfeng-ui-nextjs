import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: 'export',
  i18n: {
    locales: ['en', 'vi', 'zh'], 
    defaultLocale: 'en', 
  },
};

export default nextConfig;
