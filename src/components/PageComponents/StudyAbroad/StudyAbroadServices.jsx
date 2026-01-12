"use client";
import React from "react";

const services = [
  {
    id: 1,
    title: "University Selection",
    description:
      "Get guidance to choose the best universities matching your profile and goals.",
  },
  {
    id: 2,
    title: "Visa Assistance",
    description:
      "Complete support throughout the visa application and approval process.",
  },
  {
    id: 3,
    title: "Test Preparation",
    description: "IELTS, PTE, GRE, GMAT, SAT coaching to achieve top scores.",
  },
  {
    id: 4,
    title: "Scholarship Guidance",
    description:
      "Discover scholarships and financial aid opportunities to fund your education.",
  },
];

const StudyAbroadServices = () => {
  return (
    <section
      className="
        relative 
        py-20 
        px-4 
        bg-white 
        text-gray-900 
        overflow-hidden
      "
    >
      {/* Soft background gradient (SAFE) */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50 pointer-events-none" />

      <div className="relative container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          <span className="bg-gradient-to-r from-[#0066A6] to-[#0099CC] bg-clip-text text-transparent">
            Our Study Abroad Support Services
          </span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-base md:text-lg mb-12 max-w-3xl mx-auto">
          We provide end-to-end support to help you prepare, apply, and succeed
          in studying abroad.
        </p>

        {/* Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="
                bg-white 
                border 
                border-gray-200 
                p-6 
                rounded-xl 
                shadow-md 
                hover:shadow-xl 
                hover:-translate-y-1 
                transition-all 
                duration-300
              "
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-[#0066A6] font-bold text-lg">
                  {service.title.charAt(0)}
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudyAbroadServices;
