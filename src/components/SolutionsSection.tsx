import React from "react";

type SolutionCardProps = {
  title: string;
  features: string[];
};

const SolutionCard: React.FC<SolutionCardProps> = ({ title, features }) => {
  return (
    <div className="w-96 min-h-[24rem] rounded-xl shadow-[0px_12px_12px_-6px_rgba(58,47,75,0.04)] 
                    shadow-[0px_6px_6px_-3px_rgba(58,47,75,0.04)] 
                    shadow-[0px_3px_3px_-1.5px_rgba(58,47,75,0.04)] 
                    shadow-[0px_1px_1px_-0.5px_rgba(58,47,75,0.04)] 
                    outline outline-1 outline-slate-200 
                    flex flex-col overflow-hidden">
      
      {/* Header */}
      <div className="px-6 py-14 bg-gradient-to-b from-black/40 via-black/60 to-black/70 
                      text-center text-white text-2xl font-bold font-['Nunito_Sans'] leading-loose tracking-tight">
        {title}
      </div>

      {/* Features */}
      <div className="flex-1 p-6 bg-slate-50 flex flex-col gap-5">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <div className="w-8 h-8 bg-zinc-300 rounded" />
            <div className="w-6 h-6 bg-slate-500" />
            <p className="flex-1 text-slate-500 text-base font-normal font-['Nunito_Sans'] leading-tight tracking-tight">
              {feature}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const SolutionsSection: React.FC = () => {
  return (
    <section className="self-stretch p-24 bg-white flex flex-col items-center gap-16">
      {/* Heading */}
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-gray-800 text-4xl font-bold font-['Nunito_Sans'] leading-[52px] tracking-tight">
          Next-Level Security <br />
          <span className="text-slate-500">Meets Effortless Management</span>
        </h2>
        <p className="text-zinc-600 text-xl font-normal font-['Nunito_Sans'] leading-relaxed tracking-tight">
          Sensecure is designed to deliver unmatched security, transparency, <br />
          and efficiency across all your document-sharing needs
        </p>
      </div>

      {/* Cards */}
      <div className="w-full max-w-[1240px] flex flex-wrap justify-center gap-12">
        <SolutionCard
          title="Easy Integration with Popular Platforms"
          features={[
            "Connect with Google Drive, Dropbox, OneDrive, and email",
            "Share files securely within existing tools",
            "Use APIs for custom system integrations",
          ]}
        />
        <SolutionCard
          title="Workflow-Friendly Automation"
          features={[
            "Automate file encryption and sharing",
            "Sync permissions with identity systems",
            "Link audit logs to monitoring tools",
          ]}
        />
        <SolutionCard
          title="Cross-Device, Cross-Platform Support"
          features={[
            "Access from desktop, tablet, or mobile",
            "Works on Windows, macOS, iOS, Android",
            "Real-time, cloud-based experience everywhere",
          ]}
        />
      </div>
    </section>
  );
};

export default SolutionsSection;
