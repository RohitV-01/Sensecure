// src/components/FeaturesSection.tsx
import React from "react";
import Rupees from "../assets/Rupees.jpg";
import Role from "../assets/Role.jpg";
import Scalable from "../assets/Scalable.jpg";
import audit from "../assets/audit.jpg";
import centralized from "../assets/centralized.jpg";
import encryption from "../assets/Encryption.jpg";

const features = [
  {
    title: "Advanced Encryption Standards",
    desc: "Safeguard files with enterprise-grade encryption that ensures only authorized users can view, edit, or share content",
    icon: <img src={encryption} alt="" />,
  },
  {
    title: "Centralized Dashboard",
    desc: "Monitor and manage all documents in real time through an intuitive, cloud-based control panel for efficiency",
    icon: <img src={centralized} alt="" />,
  },
  {
    title: "Audit Trails",
    desc: "Maintain full compliance with timestamped activity logs, offering complete visibility into every document action and event",
    icon: <img src={audit} alt="" />,
  },
  {
    title: "Role-Based Access",
    desc: "Assign precise permissions for teams or individuals, enabling secure collaboration while protecting sensitive information",
    icon: <img src={Role} alt="" />,
  },
  {
    title: "Scalable & Flexible",
    desc: "A platform built to expand effortlessly, supporting organizations of any size and adapting to evolving requirements",
    icon: <img src={Scalable} alt="" />,
  },
  {
    title: "Cost-Efficient",
    desc: "Deliver enterprise-level security at optimized costs, ensuring strong performance without compromising budget or resources",
    icon: <img src={Rupees} alt="" />,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="w-full bg-slate-50 px-6 lg:px-24 py-16 flex flex-col items-center gap-16">
      {/* Headline */}
      <div className="text-center flex flex-col gap-4 max-w-3xl">
        <h2 className="text-gray-800 text-3xl sm:text-4xl font-bold font-['Nunito Sans'] leading-snug tracking-tight">
          Next-Level Security <br />
          <span className="text-slate-500">Meets Effortless Management</span>
        </h2>
        <div className="self-stretch text-center justify-start text-zinc-600 text-xl font-normal font-['Nunito Sans'] leading-relaxed tracking-tight">Sensecure is designed to deliver unmatched security, transparency, <br/>and efficiency across all your document-sharing needs</div>
      </div>

      {/* Feature Grid */}
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 w-full">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="p-5 bg-slate-50 rounded-lg shadow-md border border-slate-200 flex flex-col gap-4"
          >
            <div className="w-10 h-10 bg-slate-200 rounded flex justify-center items-center">
              {feature.icon}
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="self-stretch justify-start text-gray-800 text-xl font-semibold font-['Nunito Sans'] leading-relaxed tracking-tight">
                {feature.title}
              </h3>
              <p className="self-stretch justify-start text-slate-500 text-base font-normal font-['Nunito Sans'] leading-tight tracking-tight">
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
