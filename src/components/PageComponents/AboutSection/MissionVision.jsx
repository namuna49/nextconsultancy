"use client";
import Image from "next/image";
import React from "react";
import { FaBullseye, FaEye } from "react-icons/fa";

const MissionVision = () => {
  return (
    <section className="py-14 bg-white px-6">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0066A6]">
          Our Mission & Vision
        </h2>
        <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
          We are committed to guiding students toward their dreams of studying
          abroad by providing honest advice, personalized mentorship, and
          lifelong support.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="flex-shrink-0 w-24 h-24 relative">
            <Image
              src="/mission.png"
              alt="Mission"
              fill
              className="object-cover rounded-full"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <FaBullseye className="text-[#0077b6] w-6 h-6" /> Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To empower students through quality counseling, test preparation,
              and end-to-end study abroad support — helping them unlock
              opportunities that shape their academic and professional futures.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="flex-shrink-0 w-24 h-24 relative">
            <Image
              src="/vision.png"
              alt="Vision"
              fill
              className="object-cover rounded-full"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <FaEye className="text-[#0077b6] w-6 h-6" /> Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To become Nepal’s most trusted education consultancy, recognized
              for ethical guidance, excellence in results, and our role in
              shaping globally competent individuals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
