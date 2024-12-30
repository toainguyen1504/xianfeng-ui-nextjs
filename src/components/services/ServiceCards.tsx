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

const services = [
  {
    title: "Company registration services",
    subTitle: "Assist in the entire process of company registration",
    description:
      "Professionally handle Vietnam company registration to ensure legal and compliant operations.",
    details: ["One-stop service", "Fast processing", "Compliance assurance"],
    icon: <FaBuilding size={28} />,
  },
  {
    title: "Compliance consulting services",
    subTitle: "Provide interpretation of laws and regulations",
    description:
      "Provide the latest interpretation of Vietnamese laws, regulations and tax policies to ensure that enterprises are always compliant.",
    details: [
      "In-depth understanding of policies",
      "Regularly update regulations",
      "Risk prevention advice",
    ],
    icon: <MdVerifiedUser size={28} />,
  },
  {
    title: "Financial and accounting services",
    subTitle: "Comprehensive financial management",
    description:
      "Provide financial auditing, tax reporting and payroll management to ensure transparency and efficiency.",
    details: [
      "High financial transparency",
      "Professional audit team",
      "Accurate tax reporting",
    ],
    icon: <FaChartLine size={28} />,
  },
  {
    title: "Human resources services",
    subTitle: "Efficient team building",
    description:
      "Including recruitment, labor outsourcing, and salary management, it helps companies improve team efficiency.",
    details: [
      "High-quality talent screening",
      "Flexible employment plan",
      "Reasonable cost control",
    ],
    icon: <FaUsers size={28} />,
  },
  {
    title: "Visa and work permit services",
    subTitle: "Fast visa processing",
    description:
      "Provide foreign employees with quick visa and work permit processing services to solve legal employment issues.",
    details: [
      "Efficient processing procedures",
      "Professional policy interpretation",
      "Ensure legal compliance",
    ],
    icon: <FaPassport size={28} />,
  },
  {
    title: "Real estate and office leasing",
    subTitle: "Diverse property options",
    description:
      "Provide a variety of real estate and office leasing options to meet the different development needs of enterprises.",
    details: [
      "Excellent location",
      "Flexible leasing options",
      "Professional market analysis",
    ],
    icon: <HiMiniBuildingOffice size={28} />,
  },
  {
    title: "Hotel reservation service",
    subTitle: "High-end business accommodation arrangement",
    description:
      "Arrange reservations at the 81st floor luxury hotel to ensure your customers' comfortable experience.",
    details: [
      "High-quality hotel resources",
      "Convenient booking process",
      "Professional customer service",
    ],
    icon: <MdHotel size={28} />,
  },
  {
    title: "Premium business translation services",
    subTitle: "Professional translation guarantee",
    description:
      "Provide professional translation services for meetings, contracts, business negotiations, etc.",
    details: [
      "Multi-lingual",
      "Understand industry terminology",
      "Improve communication efficiency",
    ],
    icon: <MdGTranslate size={28} />,
  },
  {
    title: "High-level tour guide translation service",
    subTitle: "Cultural market dual support",
    description:
      "Providing tour guide translation services that support both tourism and business, helping customers better understand the Vietnamese market.",
    details: [
      "Extensive local knowledge",
      "Provide cultural interpretation",
      "Professional service experience",
    ],
    icon: <BsTranslate size={28} />,
  },
  {
    title: "Charter and airport transfer services",
    subTitle: "For safe and convenient travel",
    description:
      "Provide a variety of car models and reservation processes to ensure safe and convenient travel for customers.",
    details: [
      "Rich selection of models",
      "Thoughtful pick-up and drop-off service",
      "Ensure travel safety",
    ],
    icon: <FaCar size={28} />,
  },
  {
    title: "Corporate brand design",
    subTitle: "Builds brand image",
    description:
      "Provide brand logo and visual identification system (VIS) design to help companies build a strong brand image.",
    details: [
      "Creative design team",
      "Professional brand strategy",
      "Strengthen market competitiveness",
    ],
    icon: <MdDesignServices size={28} />,
  },
  {
    title: "Official website and cross-border e-commerce development",
    subTitle: "Customized website solutions",
    description:
      "Design and develop official websites and e-commerce platforms that meet corporate needs to enhance online presence.",
    details: [
      "User-friendly interface",
      "Multifunctional design",
      "Professional technical support",
    ],
    icon: <TbWorldCode size={28} />,
  },
];

const ServiceCards = () => {
  return (
    <section className="my-20">
      <Row gutter={[16, 16]}>
        {services.map((service, index) => (
          <Col xs={24} sm={12} lg={8} key={index}>
            <Card
              title={
                <div className="flex items-center">
                  <div className="flex-shrink-0">{service.icon}</div>
                  <div className="ml-2 flex-grow truncate">
                    <span className="text-xl ">{service.title}</span>
                  </div>
                </div>
              }
              className={
                index % 2 === 0
                  ? "bg-primary bg-opacity-10 custom-card"
                  : "bg-white text-black custom-card"
              }
              bordered={false}
            >
              <h3 className="text-lg font-semibold">{service.subTitle}</h3>
              <p>{service.description}</p>
              <ul className="list-disc pl-4">
                {service.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default ServiceCards;
