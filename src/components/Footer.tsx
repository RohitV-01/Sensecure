// src/components/Footer.tsx
import React, { useEffect, useState } from "react";
import sensecurelogo from "../assets/Sensecure_Logo.png";
import icon from "../assets/Icons1.svg"
import ContactModal from "./ContactModal";

const Footer: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const [isContactOpen, setIsContactOpen] = useState(false); 


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest("nav")) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
    <footer className="w-full bg-zinc-700 px-4 sm:px-6 lg:px-20 py-10 sm:py-12 flex flex-col gap-10 sm:gap-12">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-8 sm:gap-12">
        {/* Left: Logo + Info */}
        <div className="flex flex-col gap-5 sm:gap-6 max-w-lg">
          {/* Logo */}
          <div className="inline-flex justify-center items-center gap-1.5">
            <img src={sensecurelogo} alt="" className="h-10 sm:h-12 md:h-14 w-auto"/>
          </div>

          {/* Tagline */}
          <span className="self-stretch justify-start text-slate-50 text-base sm:text-lg lg:text-xl font-normal font-['Nunito Sans'] leading-relaxed tracking-tight">Enterprise-grade document encryption and secure file sharing</span>

          {/* Contact Info */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-6 h-6 relative">
              <img src={icon} alt="" /> 
            </div>
            <span className="text-slate-50 text-base sm:text-lg md:text-xl font-normal font-['Nunito Sans']">
              info@sensecure.ai
            </span>
          </div>
        </div>

        {/* Right: Links */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 lg:gap-20 items-start sm:items-end lg:items-start">
          <button
            onClick={() => setIsContactOpen(true)}
            className="text-slate-50 text-base sm:text-lg md:text-xl font-normal font-['Nunito Sans'] hover:text-gray-300 transition"
          >
            Contact Us
          </button>
          <button
          className="text-slate-50 text-base sm:text-lg md:text-xl font-normal font-['Nunito Sans'] 
                    hover:text-gray-300 transition 
                    focus:outline-none focus:ring-0 focus:ring-slate-300 rounded"
        >
          Request Demo
        </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-slate-50 text-xs sm:text-sm font-normal font-['Nunito Sans'] tracking-tight">
        ©2025 Sensecure. All rights reserved.
      </div>

      <ContactModal
    open={isContactOpen}
    onClose={() => setIsContactOpen(false)}
    onSave={(contact) => {
      console.log("Contact saved:", contact);
      // setIsContactOpen(false);
    }}
    />
    </footer>
    </>
  );
};

export default Footer;
