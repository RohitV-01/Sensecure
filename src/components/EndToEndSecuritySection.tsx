import React, { useState } from "react";
import sharedDocs from "../assets/SharedDocs.jpg";
import uploadDocs from "../assets/Upload_docs.jpg";
import mydocs from "../assets/MyDocs.jpg"
import checkcircle from "../assets/check_circle.svg";
import arrowCircle from "../assets/arrow_circle_right.svg";

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
    <section className="m-auto w-full px-6 lg:px-24 py-16 bg-white flex flex-col items-center gap-16">
      {/* Heading */}
      <div className="text-center flex flex-col gap-4">
      <div className="self-stretch text-center justify-start">
        <span className="text-gray-800 text-4xl font-semibold font-['Nunito Sans'] leading-[52px] tracking-tight">End-to-End Security <br/></span>
        <span className="text-slate-500 text-4xl font-semibold font-['Nunito Sans'] leading-[52px] tracking-tight">with Complete Control</span>
      </div>
      <div className="self-stretch text-center justify-start text-zinc-600 text-xl font-normal font-['Nunito Sans'] leading-relaxed tracking-tight">
        Encrypt, manage, and monitor every document from upload to
        <br/> revocation all under one secure platform</div>
      </div>

      {/* Step Tabs */}
      <div className="m-auto flex flex-wrap justify-center items-center gap-4 lg:gap-8">
        {["Upload & Secure", "Control Access", "Safe Sharing", "Track Actions"].map(
          (step, i) => (
            <React.Fragment key={i}>
              <button
                onClick={() => setActiveStep(i)}
                className={`px-6 py-3 rounded-lg flex justify-center items-center 
                    transition-colors focus:outline-none focus:ring-0 focus:ring-gray-500
                    ${
                  activeStep === i
                    ? "bg-gray-800 text-white"
                    : "text-gray-800 "
                }`}
              >
                <span className="text-2xl font-semibold font-['Nunito Sans']">
                  {step}
                </span>
              </button>
              {i < 3 && (
                <div className="w-8 h-8 flex items-center justify-center">
                  <img src={arrowCircle} alt="" />
                </div>
              )}
            </React.Fragment>
          )
        )}
      </div>

      {/* Progress Bar */}
      <div className="m-auto w-full  h-3 bg-slate-200 rounded-full relative">
        <div
          className="absolute top-0.5 h-2.5 bg-slate-500 rounded-full transition-all duration-500"
          style={{
            left: "0",
            width: `${(activeStep + 1) * 25}%`,
          }}
        ></div>
      </div>

      {/* Active Section */}
      <div className="m-auto w-full flex flex-col lg:flex-row justify-between items-center gap-12 py-6">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col gap-6">
          <h3 className="text-gray-800 text-4xl font-bold font-['Nunito Sans'] leading-10 tracking-tight">
            {steps[activeStep].title}
          </h3>
          <ul className="flex flex-col gap-3">
            {steps[activeStep].points.map((text, i) => (
                <li key={i} className="flex items-center gap-3">
                <img src={checkcircle} alt="check" className="w-6 h-6" />
                <span className="text-gray-800 text-2xl font-normal font-['Nunito Sans'] leading-loose tracking-tight">
                    {text}
                </span>
                </li>
            ))}
            </ul>
            <button
            type="button"
            className="px-6 py-3 max-w-[174px] max-h-[55px] rounded-lg 
                        outline outline-[1.2px] outline-gray-800 inline-flex 
                        justify-center items-center text-gray-800 text-2xl font-medium 
                        font-['Nunito Sans'] leading-loose tracking-tight 
                        hover:bg-gray-100 transition-colors duration-200 
                        focus:outline-none active:scale-95"
            >
            Learn more
            </button>
        </div>

        {/* Right: Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={steps[activeStep].img}
            alt={steps[activeStep].title}
          />
        </div>
      </div>
    </section>
  );
};

export default EndToEndSecuritySection;
