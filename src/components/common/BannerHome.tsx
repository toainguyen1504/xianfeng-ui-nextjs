"use client";
import React from "react";
import { Row, Col, Typography, Image } from "antd";
import { useTranslation } from "next-i18next";

const { Title, Paragraph } = Typography;

const BannerHome: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <div className="py-6 my-10">
      <div>
        <div>
          <Row gutter={16} align="middle">
            <Col xs={24} md={16} lg={16}>
              <div className="p-8">
                <Title level={1} className="text-primary">
                  <span className="font-extrabold text-primary mr-2">
                    {t("bannerHome.title")}
                  </span>
                  {t("bannerHome.subTitle")}
                </Title>
                <Paragraph className="text-lg mt-4">
                  {t("bannerHome.desc")}
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} md={8} lg={8}>
              <div
                className="flex justify-center rounded-xl px-8 pt-8"
                style={{ backgroundColor: "#DCE2C8" }}
              >
                <div className="overflow-hidden flex flex-col items-center text-center text-3xl">
                  <strong>{t("bannerHome.rightTitle")}</strong>

                  <Paragraph className="text-xl">
                    {t("bannerHome.rightDesc")}
                  </Paragraph>
                  <Image
                    src="/assets/img/home/banner-right.webp"
                    alt="VietNam"
                    width={170}
                    // height={300}
                    preview={false}
                    style={{ marginTop: "5px" }}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
        {/* Add slide */}
      </div>
    </div>
  );
};

export default BannerHome;
