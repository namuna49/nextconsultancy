"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

const ServicesSteps = () => {
  const steps = [
    {
      number: "01",
      title: "Personalized Counseling",
      description:
        "Get matched with countries, universities and programs that suit your academic profile and ambitions.",
    },
    {
      number: "02",
      title: "Documents & Application",
      description:
        "We'll help you compile, write, and refine everything needed to apply.",
    },
    {
      number: "03",
      title: "Visa Guidance & Beyond",
      description:
        "We assist with visa interviews, financial prep, even your packing checklist.",
    },
  ];

  const outerOrbitRef = useRef(null);
  const innerOrbitRef = useRef(null);

  // Country data with flag images
  const outerCountries = [
    { name: "Canada", flagUrl: "https://flagcdn.com/w320/ca.png" },
    { name: "USA", flagUrl: "https://flagcdn.com/w320/us.png" },
    { name: "Bangladesh", flagUrl: "https://flagcdn.com/w320/bd.png" },
  ];

  const innerCountries = [
    { name: "India", flagUrl: "https://flagcdn.com/w320/in.png" },
    { name: "Australia", flagUrl: "https://flagcdn.com/w320/au.png" },
    { name: "Ukraine", flagUrl: "https://flagcdn.com/w320/ua.png" },
  ];

  return (
    <section className="py-20 bg-white px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Centered header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Visa Services to the{" "}
            <span className="text-[#0066A6]">Countries</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Professional visa assistance with a 98% success rate. We guide you
            through every step, from choosing the right program to arrival.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Service Steps */}
          <div>
            <div className="space-y-4 md:space-y-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  role="button"
                  tabIndex={0}
                  aria-label={`${step.title} — ${step.description}`}
                  className="group relative flex items-center gap-5 p-5 md:p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition transform duration-200 cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#0066A6]/20"
                >
                  {/* Number in Ring */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center border-2 border-[#0066A6] text-[#0066A6] font-semibold bg-white group-hover:bg-[#0066A6] group-hover:text-white transition-colors duration-200">
                    <span className="text-sm md:text-base">{step.number}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 truncate">
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-sm text-gray-600 mt-1 line-clamp-3">
                      {step.description}
                    </p>
                  </div>

                  {/* Hover Arrow */}
                  <div className="ml-4 flex items-center">
                    <div className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-200">
                      <div className="w-9 h-9 bg-[#0066A6] rounded-full flex items-center justify-center shadow text-white">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Rotating Subtle Oval Orbits with Countries */}
          <div className="relative h-[450px] lg:h-[500px] flex items-center justify-center">
            <style jsx>{`
              @keyframes rotateOuter {
                from {
                  transform: rotate(0deg);
                }
                to {
                  transform: rotate(360deg);
                }
              }

              @keyframes rotateInner {
                from {
                  transform: rotate(0deg);
                }
                to {
                  transform: rotate(-360deg);
                }
              }

              @keyframes floatPlane {
                0%,
                100% {
                  transform: translateY(0px) rotate(-45deg);
                }
                50% {
                  transform: translateY(-6px) rotate(-45deg);
                }
              }

              .outer-orbit-container {
                animation: rotateOuter 30s linear infinite;
              }

              .inner-orbit-container {
                animation: rotateInner 25s linear infinite;
              }

              .counter-rotate-outer {
                animation: rotateInner 30s linear infinite;
              }

              .counter-rotate-inner {
                animation: rotateOuter 25s linear infinite;
              }

              .airplane-float {
                animation: floatPlane 3s ease-in-out infinite;
              }

              /* Subtle oval orbit rings */
              .outer-orbit-ring {
                border: 2px solid rgba(0, 102, 166, 0.25);
                border-radius: 50%;
                width: 100%;
                height: 100%;
              }

              .inner-orbit-ring {
                border: 2px solid rgba(0, 102, 166, 0.25);
                border-radius: 50%;
                width: 100%;
                height: 100%;
              }
            `}</style>

            {/* Outer Orbit - Subtle Ellipse */}
            <div
              ref={outerOrbitRef}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 outer-orbit-container"
              style={{ width: "360px", height: "320px" }}
            >
              {/* Outer orbit oval ring */}
              <div className="absolute inset-0 outer-orbit-ring"></div>

              {/* Canada - Top */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 counter-rotate-outer">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-white hover:scale-110 transition-transform duration-300 cursor-pointer overflow-hidden">
                  <img
                    src={outerCountries[0].flagUrl}
                    alt={outerCountries[0].name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Bangladesh - Bottom */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 counter-rotate-outer">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-white hover:scale-110 transition-transform duration-300 cursor-pointer overflow-hidden">
                  <img
                    src={outerCountries[2].flagUrl}
                    alt={outerCountries[2].name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* USA - Right */}
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 counter-rotate-outer">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-white hover:scale-110 transition-transform duration-300 cursor-pointer overflow-hidden">
                  <img
                    src={outerCountries[1].flagUrl}
                    alt={outerCountries[1].name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* Inner Orbit - Subtle Ellipse */}
            <div
              ref={innerOrbitRef}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inner-orbit-container"
              style={{ width: "230px", height: "200px" }}
            >
              {/* Inner orbit oval ring */}
              <div className="absolute inset-0 inner-orbit-ring"></div>

              {/* India - Top */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 counter-rotate-inner">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg border-3 border-white hover:scale-110 transition-transform duration-300 cursor-pointer overflow-hidden">
                  <img
                    src={innerCountries[0].flagUrl}
                    alt={innerCountries[0].name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Australia - Bottom */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 counter-rotate-inner">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg border-3 border-white hover:scale-110 transition-transform duration-300 cursor-pointer overflow-hidden">
                  <img
                    src={innerCountries[1].flagUrl}
                    alt={innerCountries[1].name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Ukraine - Left */}
              <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 counter-rotate-inner">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg border-3 border-white hover:scale-110 transition-transform duration-300 cursor-pointer overflow-hidden">
                  <img
                    src={innerCountries[2].flagUrl}
                    alt={innerCountries[2].name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none z-10">
              <svg
                className="w-16 h-16 text-[#0066A6] airplane-float drop-shadow-lg"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Start Your Visa Journey Today
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our experts will guide you through every step of the process, from
              application to approval.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/contact"
                className="bg-[#0066A6] text-white px-8 py-3 rounded-full font-medium hover:bg-blue-900 transition-colors duration-300 inline-block"
              >
                Schedule Free Consultation →
              </a>

              <a
                href="/"
                className="bg-[#0066A6] text-white px-8 py-3 rounded-full font-medium hover:bg-blue-900 transition-colors duration-300 inline-block"
              >
                View Courses
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSteps;
