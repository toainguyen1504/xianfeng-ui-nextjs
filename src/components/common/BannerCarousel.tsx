"use client";
import React from "react";
import { Carousel, Row, Col, Typography, Image } from "antd";

const { Title, Paragraph } = Typography;

const BannerCarousel: React.FC = () => {
  return (
    <section className="py-6 my-10">
      <Carousel autoplay>
        <div>
          <Row gutter={16} align="middle">
            <Col xs={24} md={16} lg={16}>
              <div className="p-8">
                <Title level={1} className="text-primary">
                  <span className="font-extrabold">Pioneer</span> Vietnam
                  Enterprise Landing Expert
                </Title>
                <Paragraph className="text-lg mt-4">
                  Pioneer has a local team in Vietnam, providing comprehensive
                  one-stop services including company registration, finance,
                  law, recruitment, etc., combined with global security
                  technology to ensure the smooth operation and development of
                  enterprises.
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} md={8} lg={8}>
              <div
                className="flex justify-center rounded-xl px-8 pt-8"
                style={{ backgroundColor: "#DCE2C8" }}
              >
                <div className="overflow-hidden flex flex-col items-center text-center text-3xl">
                  <strong>Vietnam</strong>
                  <Paragraph className="text-xl">
                    Local service in Vietnam, global security guarantee.
                  </Paragraph>
                  <Image
                    src="/assets/img/home/banner-right.webp"
                    alt="Vietnam Local Service"
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
      </Carousel>
    </section>
  );
};

export default BannerCarousel;
