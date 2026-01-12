"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const countries = [
  { id: 1, name: "Australia", image: "/Australia.png" },
  { id: 2, name: "USA", image: "/Usa.png" },
  { id: 3, name: "UK", image: "/uk.png" },
  { id: 4, name: "Canada", image: "/canada.png" },
  { id: 5, name: "New Zealand", image: "/newzeland.png" },
  { id: 6, name: "Germany", image: "/germany.png" },
  { id: 7, name: "France", image: "/france.png" },
  { id: 8, name: "Japan", image: "/japan.png" },
  { id: 9, name: "Switzerland", image: "/swizerland.png" },
  { id: 10, name: "Korea", image: "/korea.png" },
];

const WhereToGo = () => {
  const [visibleCount, setVisibleCount] = useState(5);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const toggleVisible = () => {
    if (visibleCount === countries.length) {
      setVisibleCount(5);
    } else {
      setVisibleCount(countries.length);
    }
  };

  return (
    <section
      id="where"
      ref={sectionRef}
      className="relative py-16 md:py-20 px-4 overflow-hidden bg-white"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-60 h-60 bg-blue-200/20 blur-[80px] rounded-full animate-float-slow"></div>
        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-cyan-200/20 blur-[90px] rounded-full animate-float-slower"></div>

        <div className="absolute inset-0 opacity-[0.03]">
          <div className="w-full h-full bg-[linear-gradient(rgba(0,102,166,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(0,102,166,0.3)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="overflow-hidden mb-6">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Your Global Education Journey{" "}
            <span className="bg-gradient-to-r from-[#0066A6] to-[#0099CC] bg-clip-text text-transparent">
              Starts Here
            </span>
          </h2>
        </div>

        {/* Animated Description */}
        <div className="overflow-hidden mb-12">
          <p
            className={`text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Explore the top countries and universities to achieve your academic
            dreams abroad with our expert guidance.
          </p>
        </div>

        {/* Enhanced Countries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
          {countries.slice(0, visibleCount).map((country, index) => (
            <div
              key={country.id}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${300 + index * 100}ms`,
              }}
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl -z-10"></div>

              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-white/60">
                <Image
                  src={country.image}
                  alt={country.name}
                  width={300}
                  height={200}
                  className="w-full h-48 md:h-52 lg:h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Country Name */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-lg md:text-xl font-bold text-center drop-shadow-lg">
                    {country.name}
                  </h3>
                </div>

                {/* Hover Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>

                {/* Flag Badge
                <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <div className="w-4 h-4 bg-gradient-to-r from-[#0066A6] to-[#0099CC] rounded-full"></div>
                </div> */}
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#0066A6] to-[#0099CC] opacity-0 group-hover:opacity-100 transition-all duration-500 p-[2px] -z-10">
                <div className="w-full h-full bg-white rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Load More Button */}
        <div
          className={`overflow-hidden transition-all duration-700 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button
            onClick={toggleVisible}
            className="group relative bg-gradient-to-r from-[#0066A6] to-[#0099CC] hover:from-[#005799] hover:to-[#0077AA] text-white font-semibold py-3 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
          >
            {/* Shine Effect */}
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>

            {/* Button Content */}
            <span className="relative flex items-center justify-center space-x-2">
              <span>
                {visibleCount === countries.length ? "Show Less" : "Load More"}
              </span>
              <svg
                className={`w-4 h-4 transform transition-transform duration-300 ${
                  visibleCount === countries.length
                    ? "rotate-180"
                    : "group-hover:translate-y-1"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>

            {/* Ripple Effect */}
            <span className="absolute inset-0 rounded-full bg-white/20 transform scale-0 group-hover:scale-100 transition-transform duration-500 opacity-0 group-hover:opacity-100"></span>
          </button>
        </div>

        {/* Bottom Stats */}
        <div
          className={`mt-8 pt-8 border-t border-gray-200/50 transition-all duration-700 delay-1200 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-gray-600 text-sm italic">
            Trusted by students across {countries.length}+ countries worldwide
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }
        @keyframes float-slower {
          0%,
          100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(15px) scale(1.03);
          }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float-slower 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default WhereToGo;
