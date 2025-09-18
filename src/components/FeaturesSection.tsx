// // src/components/FeaturesSection.tsx
// import React from "react";
// import Rupees from "../assets/Rupees.jpg";
// import Role from "../assets/Role.jpg";
// import Scalable from "../assets/Scalable.jpg";
// import audit from "../assets/audit.jpg";
// import centralized from "../assets/centralized.jpg";
// import encryption from "../assets/Encryption.jpg";

// const features = [
//   {
//     title: "Advanced Encryption Standards",
//     desc: "Safeguard files with enterprise-grade encryption that ensures only authorized users can view, edit, or share content",
//     icon: <img src={encryption} alt="" />,
//   },
//   {
//     title: "Centralized Dashboard",
//     desc: "Monitor and manage all documents in real time through an intuitive, cloud-based control panel for efficiency",
//     icon: <img src={centralized} alt="" />,
//   },
//   {
//     title: "Audit Trails",
//     desc: "Maintain full compliance with timestamped activity logs, offering complete visibility into every document action and event",
//     icon: <img src={audit} alt="" />,
//   },
//   {
//     title: "Role-Based Access",
//     desc: "Assign precise permissions for teams or individuals, enabling secure collaboration while protecting sensitive information",
//     icon: <img src={Role} alt="" />,
//   },
//   {
//     title: "Scalable & Flexible",
//     desc: "A platform built to expand effortlessly, supporting organizations of any size and adapting to evolving requirements",
//     icon: <img src={Scalable} alt="" />,
//   },
//   {
//     title: "Cost-Efficient",
//     desc: "Deliver enterprise-level security at optimized costs, ensuring strong performance without compromising budget or resources",
//     icon: <img src={Rupees} alt="" />,
//   },
// ];

// const FeaturesSection: React.FC = () => {
//   return (
//     <section className="w-full bg-slate-50 px-6 lg:px-24 py-16 flex flex-col items-center gap-16">
//       {/* Headline */}
//       <div className="text-center flex flex-col gap-4 max-w-3xl">
//         <h2 className="text-gray-800 text-3xl sm:text-4xl font-bold font-['Nunito Sans'] leading-snug tracking-tight">
//           Next-Level Security <br />
//           <span className="text-slate-500">Meets Effortless Management</span>
//         </h2>
//         <div className="self-stretch text-center justify-start text-zinc-600 text-xl font-normal font-['Nunito Sans'] leading-relaxed tracking-tight">Sensecure is designed to deliver unmatched security, transparency, <br/>and efficiency across all your document-sharing needs</div>
//       </div>

//       {/* Feature Grid */}
//       <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 w-full">
//         {features.map((feature, idx) => (
//           <div
//             key={idx}
//             className="p-5 bg-slate-50 rounded-lg shadow-md border border-slate-200 flex flex-col gap-4"
//           >
//             <div className="w-10 h-10 bg-slate-200 rounded flex justify-center items-center">
//               {feature.icon}
//             </div>
//             <div className="flex flex-col gap-2">
//               <h3 className="self-stretch justify-start text-gray-800 text-xl font-semibold font-['Nunito Sans'] leading-relaxed tracking-tight">
//                 {feature.title}
//               </h3>
//               <p className="self-stretch justify-start text-slate-500 text-base font-normal font-['Nunito Sans'] leading-tight tracking-tight">
//                 {feature.desc}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;



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
    icon: <img src={encryption} alt="Encryption" className="w-8 h-8 sm:w-10 sm:h-10" />,
  },
  {
    title: "Centralized Dashboard",
    desc: "Monitor and manage all documents in real time through an intuitive, cloud-based control panel for efficiency",
    icon: <img src={centralized} alt="Centralized Dashboard" className="w-8 h-8 sm:w-10 sm:h-10" />,
  },
  {
    title: "Audit Trails",
    desc: "Maintain full compliance with timestamped activity logs, offering complete visibility into every document action and event",
    icon: <img src={audit} alt="Audit" className="w-8 h-8 sm:w-10 sm:h-10" />,
  },
  {
    title: "Role-Based Access",
    desc: "Assign precise permissions for teams or individuals, enabling secure collaboration while protecting sensitive information",
    icon: <img src={Role} alt="Role" className="w-8 h-8 sm:w-10 sm:h-10" />,
  },
  {
    title: "Scalable & Flexible",
    desc: "A platform built to expand effortlessly, supporting organizations of any size and adapting to evolving requirements",
    icon: <img src={Scalable} alt="Scalable" className="w-8 h-8 sm:w-10 sm:h-10" />,
  },
  {
    title: "Cost-Efficient",
    desc: "Deliver enterprise-level security at optimized costs, ensuring strong performance without compromising budget or resources",
    icon: <img src={Rupees} alt="Cost Efficient" className="w-8 h-8 sm:w-10 sm:h-10" />,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="w-full bg-slate-50 px-4 sm:px-6 lg:px-24 py-12 sm:py-16 lg:py-20 flex flex-col items-center gap-12 sm:gap-16">
      {/* Headline */}
      <div className="text-center flex flex-col gap-3 sm:gap-4 max-w-3xl px-2">
        <h2 className="text-gray-800 text-2xl sm:text-4xl lg:text-5xl font-bold font-['Nunito Sans'] leading-snug sm:leading-normal tracking-tight">
          Next-Level Security <br className="hidden sm:block" />
          <span className="text-slate-500">Meets Effortless Management</span>
        </h2>
        <p className="text-zinc-600 text-sm sm:text-lg lg:text-xl font-normal font-['Nunito Sans'] leading-relaxed tracking-tight">
          Sensecure is designed to deliver unmatched security, transparency,{" "}
          and efficiency across all your document-sharing needs
        </p>
      </div>

      {/* Feature Grid */}
      <div className="grid gap-6 sm:gap-8 lg:gap-12 sm:grid-cols-2 lg:grid-cols-3 w-full">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="p-4 sm:p-6 lg:p-8 bg-white rounded-xl shadow-md border border-slate-200 flex flex-col gap-4 hover:shadow-lg transition-shadow"
          >
            {/* Icon */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-100 rounded-lg flex justify-center items-center">
              {feature.icon}
            </div>

            {/* Title & Description */}
            <div className="flex flex-col gap-2">
              <h3 className="text-gray-800 text-lg sm:text-xl lg:text-2xl font-semibold font-['Nunito Sans'] leading-snug tracking-tight">
                {feature.title}
              </h3>
              <p className="text-slate-500 text-sm sm:text-base lg:text-lg font-normal font-['Nunito Sans'] leading-relaxed tracking-tight">
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
