// src/pages/Contact.tsx
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 xl:py-20">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-zinc-700 mb-4 sm:mb-6 font-['IBM_Plex_Sans']">
              Get in Touch
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-['IBM_Plex_Sans']">
              Connect with our data analytics experts to explore solutions, request demos, or discuss your project needs.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 xl:p-12">
            <form className="space-y-4 sm:space-y-6 lg:space-y-8">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2 font-['IBM_Plex_Sans']">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-['IBM_Plex_Sans']"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2 font-['IBM_Plex_Sans']">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-['IBM_Plex_Sans']"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 font-['IBM_Plex_Sans']">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-['IBM_Plex_Sans']"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2 font-['IBM_Plex_Sans']">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-['IBM_Plex_Sans']"
                  placeholder="Enter your company name"
                />
              </div>

              {/* Service Interest */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2 font-['IBM_Plex_Sans']">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-['IBM_Plex_Sans']"
                >
                  <option value="">Select a service</option>
                  <option value="predictive-analytics">Predictive Analytics</option>
                  <option value="data-ecosystem">Data Ecosystem</option>
                  <option value="domain-expertise">Domain Expertise</option>
                  <option value="security-compliance">Security & Compliance</option>
                  <option value="consultation">Consultation</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 font-['IBM_Plex_Sans']">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical transition-colors font-['IBM_Plex_Sans']"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-blue-900 text-white text-base sm:text-lg font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-md hover:bg-blue-800 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-['IBM_Plex_Sans']"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-zinc-700 mb-6 sm:mb-8 font-['IBM_Plex_Sans']">
              Other Ways to Reach Us
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md">
                <h3 className="text-base sm:text-lg font-semibold text-blue-900 mb-2 font-['IBM_Plex_Sans']">Email</h3>
                <p className="text-sm sm:text-base text-gray-600 font-['IBM_Plex_Sans']">info@senpiper.com</p>
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md">
                <h3 className="text-base sm:text-lg font-semibold text-blue-900 mb-2 font-['IBM_Plex_Sans']">Phone</h3>
                <p className="text-sm sm:text-base text-gray-600 font-['IBM_Plex_Sans']">+1 (555) 123-4567</p>
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md sm:col-span-2 lg:col-span-1">
                <h3 className="text-base sm:text-lg font-semibold text-blue-900 mb-2 font-['IBM_Plex_Sans']">Office Hours</h3>
                <p className="text-sm sm:text-base text-gray-600 font-['IBM_Plex_Sans']">Mon-Fri: 9:00 AM - 6:00 PM EST</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
