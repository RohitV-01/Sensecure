// src/components/Navbar.tsx
import React from "react";
import SensecureLogo from "../assets/Sensecure_HorizontalLogo.jpg"

const Navbar: React.FC = () => {
  return (
    <nav className="w-full px-6 md:px-28 py-5 bg-white border-b border-slate-200 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center w-[224px] h-[56px] gap-2 cursor-pointer">
        <img src={SensecureLogo} alt="Logo" className="max-w-[224px] max-h-[56px]" />
      </div>

      {/* Right Section - Buttons */}
      <div className="flex items-center gap-4 md:gap-6">
        <button className="px-6 py-2 rounded-lg border border-gray-800 text-gray-800 text-base md:text-xl font-medium font-['Nunito Sans'] hover:bg-gray-100 transition">
          Login
        </button>
        <button className="px-6 py-2 bg-gray-800 rounded-lg text-white text-base md:text-xl font-semibold font-['Nunito Sans'] hover:bg-gray-700 transition">
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
