import React from "react";

const UploadSection: React.FC = () => {
  return (
    <section className="self-stretch py-6 bg-white flex flex-wrap lg:flex-nowrap justify-start items-center gap-20">
      {/* Left content */}
      <div className="flex-1 flex flex-col justify-start items-start gap-12">
        <div className="flex flex-col gap-5">
          <h2 className="text-gray-800 text-4xl font-bold font-['Nunito_Sans'] leading-10 tracking-tight">
            Upload & Encrypt Instantly
          </h2>

          <div className="flex flex-col gap-3">
            {[
              "Upload files to encrypted cloud storage",
              "Apply enterprise-grade encryption on the spot",
              "Keep sensitive data safe from unauthorized access",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-8 h-8 flex justify-center items-center">
                  <div className="w-8 h-8 bg-zinc-300" />
                  <div className="w-6 h-6 bg-slate-500 absolute" />
                </div>
                <p className="text-gray-800 text-2xl font-normal font-['Nunito_Sans'] leading-loose tracking-tight">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <button className="px-6 py-3 rounded-lg outline outline-1 outline-gray-800 text-gray-800 text-2xl font-medium font-['Nunito_Sans'] leading-loose tracking-tight">
          Learn more
        </button>
      </div>

      {/* Right mock UI card */}
      <div className="w-full lg:w-[578px] rounded-xl shadow-md outline outline-1 outline-slate-200 flex flex-col">
        {/* Browser top bar mock */}
        <div className="w-full h-8 bg-slate-300 flex items-center gap-2 px-3">
          <div className="w-2 h-2 bg-red-500 rounded-full" />
          <div className="w-2 h-2 bg-orange-300 rounded-full" />
          <div className="w-2 h-2 bg-green-300 rounded-full" />
          <p className="ml-4 text-xs text-slate-400">http://sensecure.ai/</p>
        </div>

        {/* Mock content area */}
        <div className="flex flex-row">
          {/* Sidebar */}
          <div className="w-36 h-96 bg-slate-50 border-r border-stone-300 p-2 text-[8px] text-slate-600 font-['Roboto']">
            <p className="mb-2">Dashboard</p>
            <p className="mb-2">My Documents</p>
            <p className="mb-2">Shared Documents</p>
            <p className="mb-2 font-bold">Upload Documents</p>
          </div>

          {/* Upload panel */}
          <div className="flex-1 p-3 flex flex-col gap-2 text-[10px] text-slate-600 font-['Roboto']">
            <p className="text-blue-400 text-sm">Upload Documents</p>
            <div className="bg-slate-50 border p-2 rounded text-[8px]">
              Securely upload documents that will be encrypted and stored.
              <br />
              <span className="text-gray-500">
                Note: Access restricted to administrators
              </span>
            </div>

            {/* Mock input fields */}
            <div className="space-y-2 text-xs">
              <div className="border p-2 rounded text-slate-400">
                Document Name (Enter here)
              </div>
              <div className="border p-2 rounded text-slate-400">
                Expiration (Optional)
              </div>
              <div className="border p-2 rounded text-slate-400">
                Document Type (Select)
              </div>
            </div>

            {/* File upload box */}
            <div className="border rounded p-4 text-center text-[8px] text-slate-500 bg-gray-50">
              Drag & drop file here or click to add file
            </div>

            {/* Action button */}
            <button className="mt-2 px-4 py-2 bg-violet-500 text-white rounded text-sm">
              Upload and Encrypt Document
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadSection;
