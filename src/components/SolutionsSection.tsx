// src/components/SolutionsSection.tsx
import React from "react";
import crossdevice from "../assets/crossDevice.jpg";
import Workflow from "../assets/Workflow.jpg";
import EasyIntegration from "../assets/EasyIntegration.jpg";

// Icons
import Cloud_lock from "../assets/cloud_lock.svg";
import airplay from "../assets/airplay.svg";
import approval_delegation from "../assets/approval_delegation.svg";
import policy from "../assets/policy.svg";
import change_circle from "../assets/change_circle.svg";
import ruleSetting from "../assets/rule_settings.svg";
import folder_code from "../assets/folder_code.svg";
import fileCopy from "../assets/file_copy.svg";
import add_to_drive from "../assets/add_to_drive.svg";

type FeatureItem = {
  icon: string;
  text: string;
};

type SolutionCardProps = {
  title: string;
  bgImage: string;
  features: FeatureItem[];
};

const SolutionCard: React.FC<SolutionCardProps> = ({ title, bgImage, features }) => {
  return (
    <div className="w-[381px] h-[376px] rounded-xl shadow-md outline outline-1 outline-slate-200 flex flex-col overflow-hidden">
      
      {/* Header with fixed size image */}
      <div
        className="w-[381px] h-[174px] flex items-center justify-center text-center text-white text-xl font-bold font-['Nunito Sans'] leading-snug tracking-tight"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {title}
      </div>

      {/* Features with fixed size */}
      <div className="w-[381px] h-[202px] p-6 bg-slate-50 flex flex-col gap-4">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <img src={feature.icon} alt="" className="w-6 h-6" />
            <p className="flex-1 text-slate-500 text-sm font-normal font-['Nunito Sans'] leading-tight tracking-tight">
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const SolutionsSection: React.FC = () => {
  return (
    <section className="self-stretch p-20 bg-white flex flex-col items-center gap-16">
      {/* Heading */}
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-gray-800 text-4xl font-bold font-['Nunito Sans'] leading-[52px] tracking-tight">
          Next-Level Security <br />
          <span className="text-slate-500">Meets Effortless Management</span>
        </h2>
        <p className="text-zinc-600 text-xl font-normal font-['Nunito Sans'] leading-relaxed tracking-tight">
          Sensecure is designed to deliver unmatched security, transparency, <br />
          and efficiency across all your document-sharing needs
        </p>
      </div>

      {/* Cards in a row */}
      <div className="w-full max-w-[1240px] flex flex-wrap justify-center lg:justify-between gap-6">
        <SolutionCard
          title="Easy Integration with Popular Platforms"
          bgImage={EasyIntegration}
          features={[
            { icon: add_to_drive, text: "Connect with Google Drive, Dropbox, OneDrive, and email" },
            { icon: fileCopy, text: "Share files securely within existing tools" },
            { icon: folder_code, text: "Use APIs for custom system integrations" },
          ]}
        />
        <SolutionCard
          title="Workflow-Friendly Automation"
          bgImage={Workflow}
          features={[
            { icon: change_circle, text: "Automate file encryption and sharing" },
            { icon: approval_delegation, text: "Sync permissions with identity systems" },
            { icon: policy, text: "Link audit logs to monitoring tools" },
          ]}
        />
        <SolutionCard
          title="Cross-Device, Cross-Platform Support"
          bgImage={crossdevice}
          features={[
            { icon: airplay, text: "Access from desktop, tablet, or mobile" },
            { icon: Cloud_lock, text: "Works on Windows, macOS, iOS, Android" },
            { icon: ruleSetting, text: "Real-time, cloud-based experience everywhere" },
          ]}
        />
      </div>
    </section>
  );
};

export default SolutionsSection;
