"use client";
import React from "react";
import {
  FaUserGraduate,
  FaGlobeAmericas,
  FaHandshake,
  FaChalkboardTeacher,
  FaStar,
} from "react-icons/fa";

const reasons = [
  {
    id: 1,
    icon: <FaUserGraduate className="text-3xl" />,
    title: "Experienced Counselors",
    description:
      "Our expert advisors have years of experience guiding students toward the right universities and programs.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    icon: <FaChalkboardTeacher className="text-3xl" />,
    title: "Top-Notch Training",
    description:
      "We provide professional IELTS, PTE, and TOEFL coaching to help students achieve their target scores.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    icon: <FaGlobeAmericas className="text-3xl" />,
    title: "Global Reach",
    description:
      "Partnered with universities in top countries — offering endless opportunities.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    icon: <FaHandshake className="text-3xl" />,
    title: "Personalized Support",
    description:
      "From choosing a course to visa documentation, we provide one-on-one guidance for every step.",
    gradient: "from-orange-500 to-red-500",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-16 px-6  overflow-hidden bg-white">
      {/* Subtle Background Lights */}
      <div className="absolute top-0 left-10 w-48 h-48 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-10 w-64 h-64 bg-cyan-200/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 container mx-auto">
        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-extrabold text-blue-900 mb-4">
            Why Choose <span className="text-[#0066A6]">NExt Consultancy</span>
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We don’t just counsel — we guide your future. Join thousands of
            students who have trusted us for their global education journey.
          </p>

          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-semibold text-[#0066A6] mt-5 border border-blue-100 shadow-sm">
            <FaStar className="text-yellow-500 text-base" />
            <span>Our Strengths</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="group relative bg-white/70 backdrop-blur-xl border border-white/50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${reason.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              <div
                className={`relative w-16 h-16 mx-auto mb-5 rounded-xl bg-gradient-to-r ${reason.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform`}
              >
                {reason.icon}
              </div>

              <div className="text-center space-y-2">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#0066A6] transition-colors">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-white/60 shadow-lg max-w-xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-600 mb-6">
              Start your study abroad process with expert guidance from the
              best.
            </p>
            <button className="bg-gradient-to-r from-[#0066A6] to-cyan-600 text-white py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
