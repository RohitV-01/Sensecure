// // src/components/HeroSection.tsx
// import React from "react";
// import heroImage from "../assets/HerosectionBG.jpg"; // Replace with actual image path
// import admin_panel from "../assets/admin_panel_settings.svg";
// import article_shortcut from "../assets/article_shortcut.svg";
// import House_with_shield from "../assets/house_with_shield.svg";
// import senseure_animation from "../assets/Sensecure_Animation.mp4";

// const HeroSection: React.FC = () => {
//   return (
//     <section>
//       <div className="w-full flex flex-col items-center gap-8 sm:gap-10 lg:gap-12 px-4 sm:px-6 lg:px-24 pt-16 sm:pt-20 lg:pt-24"
//             style={{
//             backgroundImage: `url(${heroImage})`,
//             backgroundRepeat: "no-repeat",
//             backgroundPosition: "bottom",
//             backgroundSize: "cover",
//           }}>
//         {/* Feature Bar */}
//         <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-5 lg:gap-9 px-3 sm:px-6 lg:px-8 py-2 bg-slate-50 rounded-full shadow-md border border-slate-300 w-full max-w-sm sm:max-w-md lg:max-w-lg">
//           <div className="flex items-center gap-2 whitespace-nowrap">
//             <img src={House_with_shield} alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
//             <span className="text-zinc-600 text-sm sm:text-lg font-medium font-['Nunito Sans']">Secure</span>
//           </div>
//           <div className="hidden sm:block h-6 border-l border-slate-300" />
//           <div className="flex items-center gap-2 whitespace-nowrap">
//             <img src={admin_panel} alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
//             <span className="text-zinc-600 text-sm sm:text-lg font-medium font-['Nunito Sans']">Control</span>
//           </div>
//           <div className="hidden sm:block h-6 border-l border-slate-300" />
//           <div className="flex items-center gap-2 whitespace-nowrap">
//             <img src={article_shortcut} alt="" className="w-5 h-5 sm:w-6 sm:h-6"/>
//             <span className="text-zinc-600 text-sm sm:text-lg font-medium font-['Nunito Sans']">Share</span>
//           </div>
//         </div>

//         {/* Title */}
//         <div className="self-stretch text-center justify-start px-2">
//           <span className="block text-gray-800 text-3xl sm:text-4xl font-bold font-['Nunito Sans'] leading-tight sm:leading-[52px] tracking-tight">Secure File Sharing & Document</span>
//           <span className="block text-gray-800 text-3xl sm:text-4xl font-bold font-['Nunito Sans'] leading-tight sm:leading-[52px] tracking-tight">Management <span className="text-slate-500">for Enterprises</span></span>
//         </div>

//         {/* Subtitle */}
//         <div className="self-stretch text-center justify-start text-zinc-600 text-base sm:text-xl font-normal font-['Nunito Sans'] leading-relaxed tracking-tight px-2">Encrypt, control, and share documents seamlessly while ensuring compliance and data protection</div>

//         {/* CTA Button */}
//         <button className="px-6 sm:px-8 py-3 bg-gray-800 rounded-lg text-white text-base sm:text-xl font-semibold font-['Nunito Sans'] hover:bg-gray-700 transition">
//           Request a Demo
//         </button>
//       </div>
//       <div className="m-auto w-full flex flex-col items-center px-4 sm:px-6 lg:px-24 py-10 sm:py-14 lg:py-16">
//           {/* Hero Image */}
//           <video
//           className="w-full max-w-4xl lg:max-w-5xl rounded-3xl object-cover border-none outline-none m-0 p-0 block"
//           src={senseure_animation}
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="auto"
//           style={{
//             boxShadow: "none",
//             outline: "none",
//             border: "none",
//             display: "block",
//             backfaceVisibility: "hidden",
//             transform: "translateZ(0)", 
//           }}
//         />
//       </div>
//       </section>
//   );
// };

// export default HeroSection;

// src/components/HeroSection.tsx
import React from "react";
import heroImage from "../assets/HerosectionBG.jpg"; 
import admin_panel from "../assets/admin_panel_settings.svg";
import article_shortcut from "../assets/article_shortcut.svg";
import House_with_shield from "../assets/house_with_shield.svg";
import senseure_animation from "../assets/Sensecure_Animation.mp4";

const HeroSection: React.FC = () => {
  return (
    <section>
      <div
        className="w-full flex flex-col items-center gap-6 sm:gap-10 lg:gap-14 px-4 sm:px-6 lg:px-24 pt-14 sm:pt-20 lg:pt-28"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      >
        {/* Feature Bar */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-5 lg:gap-8 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 bg-slate-50 rounded-full shadow-md border border-slate-300 w-full max-w-xs sm:max-w-md lg:max-w-lg">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <img src={House_with_shield} alt="Secure" className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
            <span className="text-zinc-600 text-xs sm:text-base lg:text-lg font-medium font-['Nunito Sans']">
              Secure
            </span>
          </div>
          <div className="hidden sm:block h-6 border-l border-slate-300" />
          <div className="flex items-center gap-2 whitespace-nowrap">
            <img src={admin_panel} alt="Control" className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
            <span className="text-zinc-600 text-xs sm:text-base lg:text-lg font-medium font-['Nunito Sans']">
              Control
            </span>
          </div>
          <div className="hidden sm:block h-6 border-l border-slate-300" />
          <div className="flex items-center gap-2 whitespace-nowrap">
            <img src={article_shortcut} alt="Share" className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
            <span className="text-zinc-600 text-xs sm:text-base lg:text-lg font-medium font-['Nunito Sans']">
              Share
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="self-stretch text-center px-2">
          <h1 className="block text-gray-800 text-2xl sm:text-4xl lg:text-5xl font-bold font-['Nunito Sans'] leading-snug sm:leading-tight lg:leading-[56px] tracking-tight">
            Secure File Sharing & Document
          </h1>
          <h1 className="block text-gray-800 text-2xl sm:text-4xl lg:text-5xl font-bold font-['Nunito Sans'] leading-snug sm:leading-tight lg:leading-[56px] tracking-tight">
            Management{" "}
            <span className="text-slate-500">for Enterprises</span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-zinc-600 text-sm sm:text-lg lg:text-xl font-normal font-['Nunito Sans'] leading-relaxed tracking-tight text-center max-w-2xl px-2">
          Encrypt, control, and share documents seamlessly while ensuring
          compliance and data protection
        </p>

        {/* CTA Button */}
        <button className="w-full sm:w-auto px-5 sm:px-7 lg:px-9 py-2.5 sm:py-3.5 lg:py-4 bg-gray-800 rounded-lg text-white text-sm sm:text-lg lg:text-xl font-semibold font-['Nunito Sans'] hover:bg-gray-700 transition">
          Request a Demo
        </button>
      </div>

      {/* Hero Animation */}
      <div className="m-auto w-full flex flex-col items-center px-4 sm:px-6 lg:px-24 py-10 sm:py-14 lg:py-16">
        <video
          className="w-full max-w-3xl sm:max-w-4xl lg:max-w-5xl rounded-2xl sm:rounded-3xl object-cover border-none outline-none"
          src={senseure_animation}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{
            boxShadow: "none",
            backfaceVisibility: "hidden",
            transform: "translateZ(0)",
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
