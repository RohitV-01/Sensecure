
import React from "react";
import CTAbg from "../assets/CTAbg.png";

const CTASection: React.FC = () => {
  return (
    <section className="w-full bg-slate-50 px-6 lg:px-24 py-20 flex flex-col items-center text-center gap-6">
      {/* Border Wrapper */}
      <div className="w-full max-w-4xl border border-gray-200 rounded-xl p-10 shadow-sm"
      style={{backgroundImage:`url(${CTAbg})`,backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom",
      backgroundSize: "cover",}}>
        {/* Headline */}
        <h2 className="text-gray-800 text-3xl sm:text-4xl font-bold font-['Nunito Sans'] leading-snug tracking-tight">
          Ready to Secure Your Documents <br /> with{" "}
          <span className="text-slate-500">Sensecure?</span>
        </h2>

        {/* Description */}
        <p className="text-zinc-600 text-lg sm:text-xl max-w-2xl mx-auto mt-6 font-normal font-['Nunito Sans'] leading-relaxed tracking-tight">
          Discover how Sensecure can transform your organization’s file sharing
          and document management. <br /> Our team is here to guide you every
          step of the way.
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <button className="px-8 py-3 bg-gray-800 rounded-lg text-white text-lg sm:text-xl font-semibold font-['Nunito Sans'] hover:bg-gray-700 transition">
            Request a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;