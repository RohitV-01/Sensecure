// src/pages/Dashboard.tsx
import React from "react";
import Navbar from "../components/navbar";
import Footer from "components/Footer";
import { useEffect, useState } from "react";
import ContactModal from "components/ContactModal";
import HeroSection from "components/HeroSection";
import FeaturesSection from "components/FeaturesSection";
import SolutionsSection from "components/SolutionsSection";
import EndToEndSecuritySection from "components/EndToEndSecuritySection";
import CTASection from "../components/CTASection";

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
    <div className="m-auto min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Video Section */}
      <HeroSection />

      {/* Feature section  */}
      <FeaturesSection />

      {/* End to End Security Section  */}
      <EndToEndSecuritySection/>

      {/* Solution Section  */}
      <SolutionsSection/>
      
      <CTASection /> 

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



