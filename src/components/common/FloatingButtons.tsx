/* eslint-disable @next/next/no-img-element */
import { FaWeixin } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <div className="flex flex-col fixed bottom-48 left-4 space-y-4 z-[99]">
      <a
        href="https://zalo.me/0899398383"
        target="_blank"
        rel="noopener noreferrer"
        className="ripple bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none wiggle-pulse"
      >
        <img src="zalo.png" alt="Zalo" className="w-8 h-8" />
      </a>
      <a
        href="https://wechat.com/link-to-your-wechat"
        target="_blank"
        rel="noopener noreferrer"
        className="ripple bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 focus:outline-none wiggle-pulse"
      >
        <FaWeixin className="w-8 h-8" />
      </a>
    </div>
  );
}
