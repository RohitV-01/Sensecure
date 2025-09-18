// import React, { useState } from "react";
// import sharedDocs from "../assets/SharedDocs.jpg";
// import uploadDocs from "../assets/Upload_docs.jpg";
// import mydocs from "../assets/MyDocs.jpg"
// import checkcircle from "../assets/check_circle.svg";
// import arrowCircle from "../assets/arrow_circle_right.svg";

// const EndToEndSecuritySection: React.FC = () => {
//   const [activeStep, setActiveStep] = useState(0);

//   const steps = [
//     {
//       title: "Upload & Encrypt Instantly",
//       points: [
//         "Upload files to encrypted cloud storage",
//         "Apply enterprise-grade encryption on the spot",
//         "Keep sensitive data safe from unauthorized access",
//       ],
//       img: uploadDocs,
//     },
//     {
//       title: "Define Roles & Permissions",
//       points: [
//         "Assign permissions at user or group level",
//         "Restrict downloads and printing",
//         "Set time-based access expiration",
//       ],
//       img: mydocs,
//     },
//     {
//       title: "Share with Confidence",
//       points: [
//         "Generate secure, access-controlled links",
//         "Enforce server-side authentication for every view",
//         "Prevent unauthorized forwarding or duplication",
//       ],
//       img: sharedDocs,
//     },
//     {
//       title: "Monitor Every Action",
//       points: [
//         "Monitor document opens and views",
//         "Track edits and downloads in real-time",
//         "Receive alerts for suspicious activity",
//       ],
//       img: uploadDocs,
//     },
//   ];

//   return (
//     <section className="m-auto w-full px-4 sm:px-6 lg:px-24 py-12 sm:py-16 bg-white flex flex-col items-center gap-10 sm:gap-14 lg:gap-16">
//       {/* Heading */}
//       <div className="text-center flex flex-col gap-3 sm:gap-4">
//         <div className="self-stretch text-center justify-start px-2">
//           <span className="block text-gray-800 text-3xl sm:text-4xl font-semibold font-['Nunito Sans'] leading-tight sm:leading-[52px] tracking-tight">End-to-End Security</span>
//           <span className="block text-slate-500 text-3xl sm:text-4xl font-semibold font-['Nunito Sans'] leading-tight sm:leading-[52px] tracking-tight">with Complete Control</span>
//         </div>
//         <div className="self-stretch text-center justify-start text-zinc-600 text-base sm:text-xl font-normal font-['Nunito Sans'] leading-relaxed tracking-tight px-2">
//           Encrypt, manage, and monitor every document from upload to revocation under one secure platform
//         </div>
//       </div>

//       {/* Step Tabs */}
//       <div className="m-auto w-full">
//         <div className="flex w-full items-stretch gap-2 sm:gap-3 lg:gap-4 px-2">
//           {["Upload & Secure", "Control Access", "Safe Sharing", "Track Actions"].map(
//             (step, i) => (
//               <React.Fragment key={i}>
//                 <button
//                   onClick={() => setActiveStep(i)}
//                   className={`flex-1 min-w-0 px-2 py-2 sm:px-4 sm:py-2.5 rounded-lg flex justify-center items-center 
//                       transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-gray-300
//                       ${
//                     activeStep === i
//                       ? "bg-gray-800 text-white"
//                       : "text-gray-800 "
//                   }`}
//                   aria-current={activeStep === i ? "step" : undefined}
//                 >
//                   <span className="truncate text-[11px] sm:text-sm lg:text-lg font-semibold font-['Nunito Sans'] leading-tight">
//                     {step}
//                   </span>
//                 </button>
//                 {i < 3 && (<div className="hidden" />)}
//               </React.Fragment>
//             )
//           )}
//         </div>
//       </div>

//       {/* Progress Bar */}
//       <div className="m-auto w-full h-2 sm:h-3 bg-slate-200 rounded-full relative">
//         <div
//           className="absolute top-0.5 h-1.5 sm:h-2.5 bg-slate-500 rounded-full transition-all duration-500"
//           style={{
//             left: "0",
//             width: `${(activeStep + 1) * 25}%`,
//           }}
//         ></div>
//       </div>

//       {/* Active Section */}
//       <div className="m-auto w-full flex flex-col lg:flex-row justify-between items-center gap-8 sm:gap-10 lg:gap-12 py-6">
//         {/* Left: Text */}
//         <div className="flex-1 flex flex-col gap-6">
//           <h3 className="text-gray-800 text-2xl sm:text-3xl lg:text-4xl font-bold font-['Nunito Sans'] leading-tight sm:leading-10 tracking-tight">
//             {steps[activeStep].title}
//           </h3>
//           <ul className="flex flex-col gap-3">
//             {steps[activeStep].points.map((text, i) => (
//                 <li key={i} className="flex items-center gap-3">
//                 <img src={checkcircle} alt="check" className="w-6 h-6" />
//                 <span className="text-gray-800 text-lg sm:text-xl lg:text-2xl font-normal font-['Nunito Sans'] leading-relaxed lg:leading-loose tracking-tight">
//                     {text}
//                 </span>
//                 </li>
//             ))}
//             </ul>
//             <button
//             type="button"
//             className="px-5 sm:px-6 py-2.5 sm:py-3 max-w-[174px] rounded-lg 
//                         outline outline-[1.2px] outline-gray-800 inline-flex 
//                         justify-center items-center text-gray-800 text-base sm:text-lg lg:text-2xl font-medium 
//                         font-['Nunito Sans'] leading-loose tracking-tight 
//                         hover:bg-gray-100 transition-colors duration-200 
//                         focus:outline-none active:scale-95"
//             >
//             Learn more
//             </button>
//         </div>

//         {/* Right: Image */}
//         <div className="flex-1 flex justify-center w-full">
//           <img
//             src={steps[activeStep].img}
//             alt={steps[activeStep].title}
//             className="w-full max-w-md sm:max-w-lg lg:max-w-xl h-auto"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EndToEndSecuritySection;
import React, { useState } from "react";
import sharedDocs from "../assets/SharedDocs.jpg";
import uploadDocs from "../assets/Upload_docs.jpg";
import mydocs from "../assets/MyDocs.jpg";
import checkcircle from "../assets/check_circle.svg";

const EndToEndSecuritySection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Upload & Encrypt Instantly",
      points: [
        "Upload files to encrypted cloud storage",
        "Apply enterprise-grade encryption on the spot",
        "Keep sensitive data safe from unauthorized access",
      ],
      img: uploadDocs,
    },
    {
      title: "Define Roles & Permissions",
      points: [
        "Assign permissions at user or group level",
        "Restrict downloads and printing",
        "Set time-based access expiration",
      ],
      img: mydocs,
    },
    {
      title: "Share with Confidence",
      points: [
        "Generate secure, access-controlled links",
        "Enforce server-side authentication for every view",
        "Prevent unauthorized forwarding or duplication",
      ],
      img: sharedDocs,
    },
    {
      title: "Monitor Every Action",
      points: [
        "Monitor document opens and views",
        "Track edits and downloads in real-time",
        "Receive alerts for suspicious activity",
      ],
      img: uploadDocs,
    },
  ];

  return (
    <section className="m-auto w-full px-4 sm:px-6 lg:px-24 py-12 sm:py-16 bg-white flex flex-col items-center gap-8 sm:gap-14 lg:gap-16">
      {/* Heading */}
      <div className="text-center flex flex-col gap-3 sm:gap-4 px-2">
        <h2 className="text-gray-800 text-2xl sm:text-4xl lg:text-5xl font-bold font-['Nunito Sans'] leading-snug sm:leading-[52px] tracking-tight">
          End-to-End Security
        </h2>
        <h2 className="text-slate-500 text-2xl sm:text-4xl lg:text-5xl font-bold font-['Nunito Sans'] leading-snug sm:leading-[52px] tracking-tight">
          with Complete Control
        </h2>
        <p className="text-zinc-600 text-sm sm:text-lg lg:text-xl font-normal font-['Nunito Sans'] leading-relaxed tracking-tight max-w-3xl mx-auto">
          Encrypt, manage, and monitor every document from upload to revocation
          under one secure platform
        </p>
      </div>

      {/* Step Tabs */}
      <div className="m-auto w-full">
        <div className="flex w-full items-stretch gap-2 sm:gap-3 lg:gap-4 px-2">
          {["Upload & Secure", "Control Access", "Safe Sharing", "Track Actions"].map(
            (step, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`flex-1 min-w-0 px-2 py-2 sm:px-4 sm:py-2.5 lg:px-5 lg:py-3 
                  rounded-lg flex justify-center items-center 
                  transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-gray-300
                  ${
                    activeStep === i
                      ? "bg-gray-800 text-white"
                      : "text-gray-800 hover:bg-gray-100"
                  }`}
                aria-current={activeStep === i ? "step" : undefined}
              >
                <span className="truncate text-xs sm:text-sm lg:text-lg font-semibold font-['Nunito Sans']">
                  {step}
                </span>
              </button>
            )
          )}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="m-auto w-full h-2 sm:h-3 bg-slate-200 rounded-full relative">
        <div
          className="absolute top-0.5 h-1.5 sm:h-2.5 bg-slate-500 rounded-full transition-all duration-500"
          style={{
            left: "0",
            width: `${(activeStep + 1) * 25}%`,
          }}
        ></div>
      </div>

      {/* Active Section */}
      <div className="m-auto w-full flex flex-col lg:flex-row justify-between items-center gap-8 sm:gap-10 lg:gap-12 py-6">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">
          <h3 className="text-gray-800 text-xl sm:text-3xl lg:text-4xl font-bold font-['Nunito Sans'] leading-tight sm:leading-10 tracking-tight">
            {steps[activeStep].title}
          </h3>
          <ul className="flex flex-col gap-3">
            {steps[activeStep].points.map((text, i) => (
              <li key={i} className="flex items-start sm:items-center gap-2 sm:gap-3">
                <img src={checkcircle} alt="check" className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                <span className="text-gray-800 text-sm sm:text-lg lg:text-xl font-normal font-['Nunito Sans'] leading-relaxed lg:leading-loose tracking-tight">
                  {text}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-2 sm:mt-4">
            <button
              type="button"
              className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 
                rounded-lg outline outline-[1.2px] outline-gray-800 
                text-gray-800 text-sm sm:text-lg lg:text-xl font-medium font-['Nunito Sans'] 
                hover:bg-gray-100 transition-colors duration-200 focus:outline-none active:scale-95"
            >
              Learn more
            </button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1 flex justify-center w-full">
          <img
            src={steps[activeStep].img}
            alt={steps[activeStep].title}
            className="w-full max-w-sm sm:max-w-md lg:max-w-xl h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default EndToEndSecuritySection;
