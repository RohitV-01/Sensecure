// src/pages/Dashboard.tsx
// import React from "react";
import Navbar from "../components/navbar";
import Footer from "components/Footer";
import { useEffect, useState } from "react";
import ContactModal from "components/ContactModal";
import HeroSection from "components/HeroSection";

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false); // ✅ modal state


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest("nav")) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Video Section */}
      <HeroSection />

      {/* Contact CTA Section */}
      <div className="w-full px-4 sm:px-6 md:px-16 lg:px-36 py-12 sm:py-16 lg:py-20 bg-slate-50 flex flex-col items-center gap-8 sm:gap-12">
        <div className="max-w-4xl text-center flex flex-col gap-4 sm:gap-6 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-zinc-700 tracking-wide font-['IBM_Plex_Sans'] leading-tight">
            Get in Touch with Senpiper
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 font-['Nunito Sans'] leading-relaxed">
            Connect with our data analytics experts to explore solutions, request demos, or discuss your project needs
          </p>
        </div>
        <button
          type="button"
          className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-900 rounded-md text-white text-base sm:text-lg font-semibold font-['Open Sans'] hover:bg-blue-800 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          onClick={() => setIsContactOpen(true)}
        >
          Connect Us
        </button>
      </div>

      <Footer />
    </div>   
    {/*  Contact Modal with required props */}
      <ContactModal
        open={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        onSave={(contact) => {
          console.log("Contact saved:", contact);
          // setIsContactOpen(false);
        }}
      />
    </>
  );
};

export default Dashboard;
