import React from "react";
import { FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

const SocialSidebar: React.FC = () => {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/web-developer-abdul-shakoor/"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-[#0f1f24] p-3 rounded-full border border-gray-700 hover:border-blue-500 transition transform hover:scale-110"
      >
        <FaLinkedin className="text-blue-500 text-xl" />
      </a>

      {/* Upwork */}
      <a
        href="https://www.upwork.com/freelancers/~018b0769d2e1106355?mp_source=share"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-[#0f1f24] p-3 rounded-full border border-gray-700 hover:border-green-500 transition transform hover:scale-110"
      >
        <SiUpwork className="text-green-500 text-xl" />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/profile.php?id=61589073781885"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-[#0f1f24] p-3 rounded-full border border-gray-700 hover:border-blue-400 transition transform hover:scale-110"
      >
        <FaFacebook className="text-blue-400 text-xl" />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/923023001606?text=Hi%20Abdul%20Shakoor"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-green-600 p-3 rounded-full hover:bg-green-700 transition transform hover:scale-110"
      >
        <FaWhatsapp className="text-white text-xl" />
      </a>

    </div>
  );
};

export default SocialSidebar;