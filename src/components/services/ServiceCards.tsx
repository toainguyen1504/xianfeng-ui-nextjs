import { Card, Col, Row } from "antd";
import {
  FaBuilding,
  FaChartLine,
  FaUsers,
  FaPassport,
  FaCar,
} from "react-icons/fa";
import {
  MdVerifiedUser,
  MdHotel,
  MdGTranslate,
  MdDesignServices,
} from "react-icons/md";
import { HiMiniBuildingOffice } from "react-icons/hi2";
import { BsTranslate } from "react-icons/bs";
import { TbWorldCode } from "react-icons/tb";
import { useTranslation } from "react-i18next";
import { JSX } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

interface Service {
  title: string;
  subTitle: string;
  description: string;
  details: string[];
  icon: JSX.Element;
}
const ServiceCards = () => {
  const { t } = useTranslation("common");
  const services: Service[] = [
    {
      title: t("servicesList.companyRegistration.title"),
      subTitle: t("servicesList.companyRegistration.subTitle"),
      description: t("servicesList.companyRegistration.description"),
      details: t("servicesList.companyRegistration.details", {
        returnObjects: true,
      }) as string[],
      icon: <FaBuilding size={28} />,
    },
    {
      title: t("servicesList.complianceConsulting.title"),
      subTitle: t("servicesList.complianceConsulting.subTitle"),
      description: t("servicesList.complianceConsulting.description"),
      details: t("servicesList.complianceConsulting.details", {
        returnObjects: true,
      }) as string[],
      icon: <MdVerifiedUser size={28} />,
    },
    {
      title: t("servicesList.financialAccounting.title"),
      subTitle: t("servicesList.financialAccounting.subTitle"),
      description: t("servicesList.financialAccounting.description"),
      details: t("servicesList.financialAccounting.details", {
        returnObjects: true,
      }) as string[],
      icon: <FaChartLine size={28} />,
    },
    {
      title: t("servicesList.humanResources.title"),
      subTitle: t("servicesList.humanResources.subTitle"),
      description: t("servicesList.humanResources.description"),
      details: t("servicesList.humanResources.details", {
        returnObjects: true,
      }) as string[],
      icon: <FaUsers size={28} />,
    },
    {
      title: t("servicesList.visaWorkPermit.title"),
      subTitle: t("servicesList.visaWorkPermit.subTitle"),
      description: t("servicesList.visaWorkPermit.description"),
      details: t("servicesList.visaWorkPermit.details", {
        returnObjects: true,
      }) as string[],
      icon: <FaPassport size={28} />,
    },
    {
      title: t("servicesList.realEstateLeasing.title"),
      subTitle: t("servicesList.realEstateLeasing.subTitle"),
      description: t("servicesList.realEstateLeasing.description"),
      details: t("servicesList.realEstateLeasing.details", {
        returnObjects: true,
      }) as string[],
      icon: <HiMiniBuildingOffice size={28} />,
    },
    {
      title: t("servicesList.hotelReservation.title"),
      subTitle: t("servicesList.hotelReservation.subTitle"),
      description: t("servicesList.hotelReservation.description"),
      details: t("servicesList.hotelReservation.details", {
        returnObjects: true,
      }) as string[],
      icon: <MdHotel size={28} />,
    },
    {
      title: t("servicesList.premiumBusinessTranslation.title"),
      subTitle: t("servicesList.premiumBusinessTranslation.subTitle"),
      description: t("servicesList.premiumBusinessTranslation.description"),
      details: t("servicesList.premiumBusinessTranslation.details", {
        returnObjects: true,
      }) as string[],
      icon: <MdGTranslate size={28} />,
    },
    {
      title: t("servicesList.tourGuideTranslation.title"),
      subTitle: t("servicesList.tourGuideTranslation.subTitle"),
      description: t("servicesList.tourGuideTranslation.description"),
      details: t("servicesList.tourGuideTranslation.details", {
        returnObjects: true,
      }) as string[],
      icon: <BsTranslate size={28} />,
    },
    {
      title: t("servicesList.charterAirportTransfer.title"),
      subTitle: t("servicesList.charterAirportTransfer.subTitle"),
      description: t("servicesList.charterAirportTransfer.description"),
      details: t("servicesList.charterAirportTransfer.details", {
        returnObjects: true,
      }) as string[],
      icon: <FaCar size={28} />,
    },
    {
      title: t("servicesList.corporateBrandDesign.title"),
      subTitle: t("servicesList.corporateBrandDesign.subTitle"),
      description: t("servicesList.corporateBrandDesign.description"),
      details: t("servicesList.corporateBrandDesign.details", {
        returnObjects: true,
      }) as string[],
      icon: <MdDesignServices size={28} />,
    },
    {
      title: t("servicesList.websiteEcommerceDevelopment.title"),
      subTitle: t("servicesList.websiteEcommerceDevelopment.subTitle"),
      description: t("servicesList.websiteEcommerceDevelopment.description"),
      details: t("servicesList.websiteEcommerceDevelopment.details", {
        returnObjects: true,
      }) as string[],
      icon: <TbWorldCode size={28} />,
    },
  ];

  return (
    <div>
      <Row gutter={[16, 16]}>
        {services.map((service, index) => (
          <Col xs={24} sm={12} lg={8} key={index}>
            <Card
              title={
                <>
                  <Tippy
                    content={service.title}
                    trigger="mouseenter focus click"
                  >
                    <div className="flex items-center">
                      <div className="flex-shrink-0">{service.icon}</div>
                      <div className="ml-2 flex-grow whitespace-normal">
                        <span className="text-xl line-clamp-2 md:line-clamp-1">
                          {service.title}
                        </span>
                      </div>
                    </div>
                  </Tippy>
                </>
              }
              className={`custom-card ${
                index % 2 === 0
                  ? "bg-primary bg-opacity-10"
                  : "bg-white text-black"
              }`}
              style={{ minHeight: "270px" }}
              bordered={false}
            >
              <h3 className="text-lg font-semibold">{service.subTitle}</h3>
              <p>{service.description}</p>
              <ul className="list-disc pl-4">
                {Array.isArray(service.details) &&
                  service.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
              </ul>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ServiceCards;
