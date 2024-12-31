/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { Modal, Image } from "antd";
import { FaWeixin } from "react-icons/fa";

export default function FloatingButtons() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="flex flex-col fixed bottom-48 left-4 space-y-4 z-[99]">
      <a
        href="https://zalo.me/0899398383"
        target="_blank"
        rel="noopener noreferrer"
        className="ripple bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none wiggle-pulse"
      >
        <img src="/assets/icons/zalo.png" alt="Zalo" className="w-6 h-6" />
      </a>
      <button
        onClick={showModal}
        className="ripple bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 focus:outline-none wiggle-pulse"
      >
        <FaWeixin className="w-6 h-6" />
      </button>
      <Modal
        title={<div className="text-center">WeChat QR Code</div>}
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="flex items-center justify-center"
      >
        <Image
          src="/assets/img/QR-code-WeChat.png"
          alt="WeChat QR Code"
          preview={false}
        />
      </Modal>
    </div>
  );
}
