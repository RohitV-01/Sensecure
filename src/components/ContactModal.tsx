import React, { useState } from "react"; 
import { getUUID } from "../utils/getUUID";
import GIF from "../assets/GIF.png";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (contact: {
    name: string;
    email: string;
    organisation: string;
    phone?: string;
    additional?: string;
  }) => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ open, onClose, onSave }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organisation: "",
    phone: "",
    additional: "",
  });
  const [success, setSuccess] = useState(false); // ✅ track success state
  const [loading, setLoading] = useState(false); // optional loading state

  function buildData(formData: typeof form) {
    const formattedPhone = formData.phone
      ? formData.phone.startsWith("+") ? formData.phone : "+91" + formData.phone
      : undefined;

    return {
      answer: {
        n: formData.name,
        e: formData.email,
        o: formData.organisation,
        m: formData.additional,
        c: formattedPhone,
      },
      groupId: "23195170-209a-447f-af76-e924df1475cc",
      formId: "602aeb3e-9971-4775-b7ec-01efdb022dc7",
      hash: getUUID(),
      referer: "WEB",
    };
  }

  async function postForm(formData: any) {
    try {
      // const url = "https://tech.senpiper.com/api/core/form/answer/public";
      const url = "/api/core/form/answer/public";
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      return true;
    } catch (err) {
      console.error(`Error on POST: ${err}`);
      return false;
    }
  }

  const handleSubmit = async () => {
    setLoading(true);
    const payload = buildData(form);
    const successResponse = await postForm(payload);

    if (successResponse) {
      onSave(form);
      setForm({ name: "", email: "", organisation: "", phone: "", additional: "" });
      setSuccess(true); // ✅ show success animation
    }
    setLoading(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div
        className="relative bg-slate-50 rounded-3xl flex flex-col justify-between items-center 
        py-8 px-6 sm:px-10 md:px-12 w-full max-w-[85%] max-h-[95vh]"
      >
        {/* Close button */}
        {!success && (
          <button
            onClick={onClose}
            className="absolute top-2 right-5 text-gray-500 hover:text-gray-800 text-3xl"
          >
            ×
          </button>
        )}

        {!success ? (
          <>
            {/* Title */}
            <div className="text-center mb-4 px-2">
              <span className="text-gray-800 text-2xl sm:text-3xl font-semibold font-['IBM_Plex_Sans'] tracking-wide">
                Enter details and Book your <br className="hidden sm:block" />
              </span>
              <span className="block text-blue-900 text-2xl sm:text-3xl font-semibold font-['IBM_Plex_Sans'] tracking-wide">
                <span className="text-gray-800">demo with </span> Our Platform
              </span>
            </div>

            {/* Form Fields */}
            <div className="w-full flex flex-col justify-start items-center">
              {/* Row 1 */}
              <div className="px-2 sm:px-4 py-4 grid grid-cols-1 sm:grid-cols-2 gap-14 w-full">
                {/* Name */}
                <div className="flex flex-col gap-1">
                  <label className="text-zinc-700 text-base sm:text-lg font-medium font-['Nunito Sans']">
                    Enter Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 
                      text-gray-800 text-base sm:text-lg font-['Circular Std'] focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="..."
                  />
                </div>
                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label className="text-zinc-700 text-base sm:text-lg font-medium font-['Nunito Sans']">
                    Work Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 
                      text-gray-800 text-base sm:text-lg font-['Circular Std'] focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="..."
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="px-2 sm:px-4 py-4 grid grid-cols-1 sm:grid-cols-2 gap-14 w-full">
                {/* Organisation */}
                <div className="flex flex-col gap-1">
                  <label className="text-zinc-700 text-base sm:text-lg font-medium font-['Nunito Sans']">
                    Organisation Name
                  </label>
                  <input
                    type="text"
                    value={form.organisation}
                    onChange={(e) => setForm({ ...form, organisation: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 
                      text-gray-800 text-base sm:text-lg font-['Circular Std'] focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="..."
                  />
                </div>
                {/* Phone */}
                <div className="flex flex-col gap-1">
                  <label className="text-zinc-700 text-base sm:text-lg font-medium font-['Nunito Sans']">
                    Mobile No. (optional)
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 
                      text-gray-800 text-base sm:text-lg font-['Circular Std'] focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="..."
                  />
                </div>
              </div>

              {/* Additional Info */}
              <div className="w-full px-2 sm:px-4 py-4">
                <div className="flex flex-col gap-1">
                  <label className="text-zinc-700 text-base sm:text-lg font-medium font-['Nunito Sans']">
                    Additional Information
                  </label>
                  <textarea
                    value={form.additional}
                    onChange={(e) => setForm({ ...form, additional: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 
                      text-gray-800 text-base sm:text-lg font-['Circular Std'] focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="..."
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="w-full flex justify-center mt-3 sm:mt-4 px-2">
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full sm:w-auto px-6 py-3 bg-blue-900 rounded-lg text-white text-base sm:text-lg font-semibold 
                  hover:bg-blue-800 transition disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit Request"}
              </button>
            </div>
          </>
        ) : (
          // ✅ Success View
          <div className="flex max-w-full flex-col items-center justify-center gap-6 py-8 px-4 sm:px-6 md:px-8">
            <img
              src={GIF}
              alt="success"
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36"
            />
            <div className="w-full max-w-2xl text-center text-gray-800 text-2xl sm:text-3xl md:text-4xl font-bold font-['Nunito Sans'] leading-snug sm:leading-normal md:leading-tight tracking-tight">
              Demo Request Confirmed!
            </div>
            <div className="w-full text-center text-slate-500 text-base sm:text-lg md:text-xl font-normal font-['Nunito Sans'] leading-relaxed tracking-tight">
              Thank you for your interest. We've received your <br/>
              demo request and a member of our team will be in touch shortly to <br/>
              schedule a convenient time
            </div>

            <button
              onClick={() => { setSuccess(false); onClose(); }}
              className="mt-4 px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition text-base sm:text-lg"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
