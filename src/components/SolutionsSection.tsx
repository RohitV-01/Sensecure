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
    <div className="w-full max-w-sm sm:max-w-md md:max-w-none rounded-xl shadow-md outline outline-1 outline-slate-200 flex flex-col overflow-hidden">
      {/* Header with responsive aspect ratio */}
      <div
        className="w-full aspect-[381/174] flex items-center justify-center text-center text-lg sm:text-xl font-bold font-['Nunito Sans'] leading-snug tracking-tight"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {title}
      </div>

      {/* Features area grows with content */}
      <div className="w-full p-5 sm:p-6 bg-slate-50 flex flex-col gap-3 sm:gap-4">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <img src={feature.icon} alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
            <p className="flex-1 text-slate-500 text-sm sm:text-base font-normal font-['Nunito Sans'] leading-tight tracking-tight">
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
    <section className="w-full px-6 sm:px-10 lg:px-20 py-12 sm:py-16 lg:py-20 bg-white flex flex-col items-center gap-10 sm:gap-14 lg:gap-16">
      {/* Heading */}
      <div className="flex flex-col items-center gap-3 sm:gap-4 text-center">
        <h2 className="text-gray-800 text-3xl sm:text-4xl font-bold font-['Nunito Sans'] leading-snug sm:leading-[52px] tracking-tight">
          Next-Level Security <br />
          <span className="text-slate-500">Meets Effortless Management</span>
        </h2>
        <p className="text-zinc-600 text-base sm:text-xl font-normal font-['Nunito Sans'] leading-relaxed tracking-tight">
          Sensecure is designed to deliver unmatched security, transparency, <br />
          and efficiency across all your document-sharing needs
        </p>
      </div>

      {/* Cards grid */}
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
