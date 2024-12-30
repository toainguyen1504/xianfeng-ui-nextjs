"use client";
import React from "react";
import { Image } from "antd";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";
import { MdOutlineSecurity } from "react-icons/md";
import { SiReactos } from "react-icons/si";

const AboutPage = () => {
  return (
    <div className="my-20">
      {/* Intro */}
      <div>
        <h1 className="text-5xl">Pioneer Business Company Introduction</h1>
        <p className="py-4">
          Pioneer Business is a high-tech enterprise that focuses on providing
          comprehensive services to international companies entering the
          Vietnamese market. The core team has more than 20 years of industry
          experience. Our team is committed to helping customers achieve smooth
          landing and ensure that companies operate legally and compliantly in
          Vietnam. Our goal is to become your preferred partner for investment
          and development in Vietnam.
        </p>
        <Image
          src="/about/about-us-banner.webp"
          alt="scene"
          preview={false}
          height={"100%"}
          className="rounded-2xl w-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div>
        <div className="my-10 space-y-4">
          <h2 className="text-3xl">One-stop corporate services</h2>
          <p>
            Pioneer Business provides one-stop corporate services, covering
            company registration, compliance consulting, finance and accounting,
            human resources, visas and work permits, real estate and office
            leasing, etc. We professionally assist clients in Vietnam company
            registration, ensuring that the entire process is transparent and
            efficient, and the required documents and procedures are clear. At
            the same time, we have established a legal and regulatory resource
            library to provide the latest legal interpretation in a timely
            manner to ensure that your company is always compliant and avoid
            potential risks.
          </p>
          <p>
            In terms of finance and accounting, we provide comprehensive
            auditing, tax declaration and payroll management services to ensure
            transparent and efficient financial management and help companies
            achieve steady growth. Our team has rich industry experience and can
            help you recruit talents, outsource payroll and dispatch labor to
            build an efficient team.
          </p>
        </div>
        <div className="my-10 space-y-4">
          <Image
            src="/about/about-us-1.webp"
            alt="scene"
            preview={false}
            height={"100%"}
            className="rounded-2xl w-full object-cover object-center"
          />
          <h2 className="text-3xl">Information and data security services</h2>
          <p>
            Pioneer Business is well aware of the importance of information
            security, and therefore provides online and offline information and
            data security services. Our network traffic analysis and protection
            services help advertisers and e-commerce platform customers
            accurately identify fake traffic and users, ensuring the
            authenticity and security of data. At the same time, we provide
            comprehensive network security solutions, including intranet
            security testing, system vulnerability detection and optimized
            deployment, to ensure the security of corporate information.
          </p>
          <p>
            By combining advanced technology with rich industry experience,
            Pioneer Business provides customers with customized security
            services to ensure the security and stability of enterprises in the
            information age.
          </p>
        </div>
        <div className="my-10 space-y-4">
          <Image
            src="/about/about-us-2.webp"
            alt="scene"
            preview={false}
            height={"100%"}
            className="rounded-2xl w-full object-cover object-center"
          />
          <h2 className="text-3xl">
            Development of brand official website and independent e-commerce
            platform
          </h2>
          <p>
            In the wave of digital transformation, Pioneer Business is committed
            to providing customers with professional brand official website and
            cross-border e-commerce platform development services. Our team is
            proficient in a variety of development technologies and can
            customize user-friendly official websites according to corporate
            needs, optimize functions, and enhance online image. In addition, we
            also support the development of multi-language and multi-currency
            cross-border e-commerce independent sites to help companies expand
            into the international market and enhance market competitiveness.
          </p>
          <p>
            Our services are not limited to technology development, but also
            include all-round support such as brand design and marketing
            planning to help customers stand out in the fierce market
            competition.
          </p>
        </div>
      </div>

      <hr className="bg-slate-50 opacity-10 my-16" />

      {/* Reasons to choose Pioneer */}
      <div className="my-10">
        <h2 className="text-3xl">Reasons to choose Pioneer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-lg">
            <GiGiftOfKnowledge className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">Strong local roots</h3>
            <p>
              Pioneer Business has rich market knowledge and deep local roots,
              and can provide customers with tailor-made solutions to help
              companies quickly adapt to the Vietnamese market.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-lg">
            <RiTeamFill className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">
              Professional service team
            </h3>
            <p>
              Our team is composed of many industry experts with professional
              knowledge and rich practical experience, ensuring that we provide
              customers with efficient and high-quality services.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-lg">
            <MdOutlineSecurity className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">
              Comprehensive security protection
            </h3>
            <p>
              Pioneer Business focuses on information security and provides
              comprehensive data security services to help companies resist
              potential network risks and ensure operational security.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-lg">
            <SiReactos className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">
              Innovative technical support
            </h3>
            <p>
              We use the latest technologies and provide advanced solutions to
              help companies achieve efficient operations and enhance their
              brands during digital transformation.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="border border-slate-300 px-6 py-12 rounded-lg mt-20 mb-32">
        <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
        <p>
          Pioneer Business is committed to providing customers with the best
          services and helping them achieve success in the Vietnamese market. We
          are well aware that the needs of each business are different, so we
          always insist on providing customers with personalized solutions.
          Choose Pioneer to help your investment and development in Vietnam, and
          let us work together to create a brilliant future!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
