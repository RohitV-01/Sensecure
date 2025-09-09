// src/components/HeroSection.tsx
import React from "react";
import heroImage from "../assets/HerosectionBG.jpg"; // Replace with actual image path
import admin_panel from "../assets/admin_panel_settings.svg";
import article_shortcut from "../assets/article_shortcut.svg";
import House_with_shield from "../assets/house_with_shield.svg";
import senseure_animation from "../assets/Sensecure_Animation.mp4";

const HeroSection: React.FC = () => {
  return (
    <section >
      <div className="w-full flex flex-col items-center gap-12 px-6 lg:px-24 pt-24"
            style={{
            backgroundImage: `url(${heroImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}>
        {/* Feature Bar */}
        <div className="flex flex-wrap justify-center items-center  lg:gap-9 px-8 py-2 bg-slate-50 rounded-full shadow-md border border-slate-300 w-[400px] lg:w-[498px] lg:max-h-{48px}">
          <div className="flex items-center gap-2">
            <img src={House_with_shield} alt="" className="gap-1" />
            <span className="text-zinc-600 text-lg font-medium font-['Nunito Sans']">
              Secure
            </span>
          </div>
          <div className="h-6 border-l border-slate-300" />
          <div className="flex items-center gap-2">
            <img src={admin_panel} alt="" className="gap-1" />
            <span className="text-zinc-600 text-lg font-medium font-['Nunito Sans']">
              Control
            </span>
          </div>
          <div className="h-6 border-l border-slate-300" />
          <div className="flex items-center gap-2">
            <img src={article_shortcut} alt="" className="gap-1"/>
            <span className="text-zinc-600 text-lg font-medium font-['Nunito Sans']">
              Share
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="self-stretch text-center justify-start"><span className="text-gray-800 text-4xl font-bold font-['Nunito Sans'] leading-[52px] tracking-tight">Secure File Sharing & Document <br/>Management </span><span className="text-slate-500 text-4xl font-bold font-['Nunito Sans'] leading-[52px] tracking-tight">for Enterprises</span></div>

        {/* Subtitle */}
        <div className="self-stretch text-center justify-start text-zinc-600 text-xl font-normal font-['Nunito Sans'] leading-relaxed tracking-tight">Encrypt, control, and share documents seamlessly while ensuring compliance and data protection</div>

        {/* CTA Button */}
        <button className="px-8 py-3 bg-gray-800 rounded-lg text-white text-lg sm:text-xl font-semibold font-['Nunito Sans'] hover:bg-gray-700 transition">
          Request a Demo
        </button>
      </div>
      <div className="m-auto w-full flex flex-col items-center px-6 lg:px-24 py-16">
          {/* Hero Image */}
          <video
          className="lg:w-[948px] lg:h-[599px] rounded-3xl object-cover 
             border-none outline-none m-0 p-0 block"
          src={senseure_animation}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{
            boxShadow: "none",
            outline: "none",
            border: "none",
            display: "block",
            backfaceVisibility: "hidden",
            transform: "translateZ(0)", 
          }}
        />
      </div>
      </section>
  );
};

export default HeroSection;

