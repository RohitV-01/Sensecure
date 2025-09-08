// src/components/HeroSection.tsx
import React from "react";
import heroImage from "../assets/HerosectionBG.jpg"; // Replace with actual image path
import admin_panel from "../assets/admin_panel_settings.svg";
import article_shortcut from "../assets/article_shortcut.svg";
import House_with_shield from "../assets/house_with_shield.svg";

const HeroSection: React.FC = () => {
  return (
    <section >
      <div className="w-full flex flex-col items-center gap-12 px-6 lg:px-24 py-24"
            style={{
            backgroundImage: `url(${heroImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover", // prevents stretching to fit
          }}>
      {/* Feature Bar */}
      <div className="flex flex-wrap justify-center items-center  lg:gap-9 px-8 py-2 bg-slate-50 rounded-full shadow-md border border-slate-300 lg:w-[498px] lg:max-h-{48px}">
        <div className="flex items-center gap-2">
          <img src={House_with_shield} alt="" />
          <span className="text-zinc-600 text-lg font-medium font-['Nunito Sans']">
            Secure
          </span>
        </div>
        <div className="h-6 border-l border-slate-300" />
        <div className="flex items-center gap-2">
          <img src={admin_panel} alt="" />
          <span className="text-zinc-600 text-lg font-medium font-['Nunito Sans']">
            Control
          </span>
        </div>
        <div className="h-6 border-l border-slate-300" />
        <div className="flex items-center gap-2">
          <img src={article_shortcut} alt="" />
          <span className="text-zinc-600 text-lg font-medium font-['Nunito Sans']">
            Share
          </span>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-center font-['Nunito Sans'] font-bold text-3xl sm:text-2xl lg:text-5xl leading-snug tracking-tight text-gray-800">
        Secure File Sharing & Document{" "}
        <span className="text-slate-500">Management for Enterprises</span>
      </h1>

      {/* Subtitle */}
      <p className="text-center text-zinc-600 text-base sm:text-lg lg:text-xl font-normal font-['Nunito Sans'] leading-relaxed tracking-tight max-w-3xl">
        Encrypt, control, and share documents seamlessly while ensuring
        compliance and data protection
      </p>

      {/* CTA Button */}
      <button className="px-8 py-3 bg-gray-800 rounded-lg text-white text-lg sm:text-xl font-semibold font-['Nunito Sans'] hover:bg-gray-700 transition">
        Request a Demo
      </button>
      </div>
      <div className="w-full flex flex-col items-center gap-12 px-6 lg:px-24 py-16">
          {/* Hero Image */}
      <img
        className="w-full max-w-5xl rounded-3xl"
        src="https://placehold.co/948x599"
        alt="Hero"
      />

      {/* Decorative Element */}
      <div className="w-24 h-24 relative">
        <div className="absolute inset-0 bg-black rounded-full opacity-10" />
        <div className="absolute inset-2 border-4 border-slate-500 rounded-full" />
        <div className="absolute left-8 top-8 w-7 h-8 bg-slate-500 rounded" />
      </div>

      </div>
      </section>
  );
};

export default HeroSection;

