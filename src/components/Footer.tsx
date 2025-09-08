// src/components/Footer.tsx
import React from "react";
import sensecurelogo from "../assets/Sensecure_Logo.png";
import icon from "../assets/Icons1.svg"

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-zinc-700 px-6 lg:px-20 py-12 flex flex-col gap-12">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-12">
        {/* Left: Logo + Info */}
        <div className="flex flex-col gap-6 max-w-lg">
          {/* Logo */}
          <div className="w-56 h-14 inline-flex justify-center items-center gap-1.5">
            <img src={sensecurelogo} alt=""/>
          </div>

          {/* Tagline */}
          <span className="self-stretch justify-start text-slate-50 text-xl font-normal font-['Nunito Sans'] leading-relaxed tracking-tight">Enterprise-grade document encryption and secure file sharing</span>

          {/* Contact Info */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 relative">
              <img src={icon} alt="" /> 
            </div>
            <span className="text-slate-50 text-lg sm:text-xl font-normal font-['Nunito Sans']">
              info@sensecure.ai
            </span>
          </div>
        </div>

        {/* Right: Links */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-20 items-start sm:items-end lg:items-start">
          <a
            href="#contact"
            className="text-slate-50 text-lg sm:text-xl font-normal font-['Nunito Sans'] hover:text-gray-300 transition"
          >
            Contact Us
          </a>
          <a
            href="#demo"
            className="text-slate-50 text-lg sm:text-xl font-normal font-['Nunito Sans'] hover:text-gray-300 transition"
          >
            Request Demo
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-slate-50 text-sm font-normal font-['Nunito Sans'] tracking-tight">
        ©2025 Sensecure. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
