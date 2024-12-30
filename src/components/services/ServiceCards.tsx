import { Card, Col, Row } from "antd";
import {
  FaBuilding,
  FaChartLine,
  FaUsers,
  FaPassport,
  FaHotel,
  FaGavel,
  FaLanguage,
} from "react-icons/fa";

const services = [
  {
    title: "Company registration services",
    subTitle: "Comprehensive Registration Solutions",
    description: "Assist in the entire process of company registration.",
    details: ["One-stop service", "Fast processing", "Compliance assurance"],
    icon: <FaBuilding size={20} />,
  },
  {
    title: "Compliance consulting services",
    subTitle: "Expert Legal Advice",
    description: "Provide interpretation of laws and regulations.",
    details: [
      "In-depth understanding of policies",
      "Regularly update regulations",
      "Risk prevention advice",
    ],
    icon: <FaGavel size={20} />,
  },
  {
    title: "Financial and accounting services",
    subTitle: "Professional Financial Management",
    description: "Comprehensive financial management.",
    details: [
      "High financial transparency",
      "Professional audit team",
      "Accurate tax reporting",
    ],
    icon: <FaChartLine size={20} />,
  },
  {
    title: "Human Resources Services",
    subTitle: "Efficient Team Building",
    description: "Efficient Team Building.",
    details: [
      "High-quality talent screening",
      "Flexible employment plan",
      "Reasonable cost control",
    ],
    icon: <FaUsers size={20} />,
  },
  {
    title: "Visa and work permit services",
    subTitle: "Quick Visa Processing",
    description: "Fast visa processing.",
    details: [
      "Efficient processing procedures",
      "Professional policy interpretation",
      "Ensure legal compliance",
    ],
    icon: <FaPassport size={20} />,
  },
  {
    title: "Real estate and office leasing",
    subTitle: "Prime Property Options",
    description: "Diverse property options.",
    details: [
      "Excellent location",
      "Flexible leasing options",
      "Professional market analysis",
    ],
    icon: <FaBuilding size={20} />,
  },
  {
    title: "Hotel reservation service",
    subTitle: "Premium Accommodations",
    description: "High-end business accommodation arrangement.",
    details: [
      "High-quality hotel resources",
      "Convenient booking process",
      "Professional customer service",
    ],
    icon: <FaHotel size={20} />,
  },
  {
    title: "Premium Business Translation Services",
    subTitle: "Accurate and Reliable Translations",
    description: "Professional Translation Guarantee.",
    details: [
      "Multi-lingual",
      "Understand industry terminology",
      "Improve communication efficiency",
    ],
    icon: <FaLanguage size={20} />,
  },
];

const ServiceCards = () => {
  return (
    <section className="my-10">
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
