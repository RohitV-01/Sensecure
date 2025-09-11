// src/components/Navbar.tsx
import React, { useEffect, useState } from "react";
import SensecureLogo from "../assets/Sensecure_HorizontalLogo.jpg"
import ContactModal from "./ContactModal";

const Navbar: React.FC = () => {
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
    <nav className="w-full px-4 sm:px-6 md:px-10 lg:px-28 py-4 sm:py-5 bg-white border-b border-slate-200 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center gap-2 cursor-pointer max-w-[224px]">
        <img src={SensecureLogo} alt="Logo" className="h-10 sm:h-12 md:h-14 w-auto" />
      </div>

      {/* Right Section - Buttons */}
      <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
        <button className="px-4 sm:px-5 md:px-6 py-2 rounded-lg border border-gray-800 text-gray-800 text-sm sm:text-base md:text-xl font-medium font-['Nunito Sans'] hover:bg-gray-100 transition">
          Login
        </button>
        <button 
        onClick={() => setIsContactOpen(true)}
        className="px-4 sm:px-5 md:px-6 py-2 bg-gray-800 rounded-lg text-white text-sm sm:text-base md:text-xl font-semibold font-['Nunito Sans'] hover:bg-gray-700 transition">
          Contact Us
        </button>
      </div>
    </nav>

    
    <ContactModal
    open={isContactOpen}
    onClose={() => setIsContactOpen(false)}
    onSave={(contact) => {
      console.log("Contact saved:", contact);
      // setIsContactOpen(false);
    }}
    />
  </>
  );
};


export default Navbar;
