"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import PreviewBrochure from "./PreviewBrochure";

export default function OurServices() {
  const [activeStep, setActiveStep] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const steps = [
    {
      number: "01",
      title: "Personalized Counseling",
      description:
        "We analyze your academic profile and career goals to match you with the perfect universities and programs worldwide.",
      details: [
        "Comprehensive profile assessment",
        "University & program matching",
        "Scholarship opportunity evaluation",
        "Career pathway planning",
      ],
    },
    {
      number: "02",
      title: "Application Management",
      description:
        "Our experts guide you through every document, essay, and application requirement with precision and attention to detail.",
      details: [
        "Document preparation & verification",
        "SOP and essay refinement",
        "Application submission",
        "Interview preparation",
      ],
    },
    {
      number: "03",
      title: "Visa & Pre-Departure",
      description:
        "Complete support from visa documentation to pre-departure briefings, ensuring a smooth transition to your new academic journey.",
      details: [
        "Visa documentation support",
        "Financial proof preparation",
        "Accommodation assistance",
        "Pre-departure orientation",
      ],
    },
  ];

  const brochureSrc = "/downloads/study-abroad-brochure.pdf";

  const downloadBrochure = () => {
    setIsDownloading(true);
    const link = document.createElement("a");
    link.href = brochureSrc;
    link.download = "Study_Abroad_Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setIsDownloading(false), 900);
  };

  return (
    <section className="w-full relative py-16 md:py-24 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold text-[#0066A6] uppercase tracking-widest">
            Process
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-4 mb-3 leading-tight">
            Three Steps to Your
            <span className="text-[#0066A6]"> International Education</span>
          </h2>

          <p className="text-slate-700 max-w-2xl mx-auto">
            A structured, transparent process designed for success at every
            stage of your study abroad journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="w-full bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Process Overview
                  </h3>
                  <p className="text-sm text-slate-500">
                    Select a step to see details and estimated timings.
                  </p>
                </div>
                <div className="text-sm text-slate-500">3 steps</div>
              </div>

              <div className="space-y-4">
                {steps.map((step, idx) => {
                  const active = idx === activeStep;
                  return (
                    <button
                      key={step.number}
                      onClick={() => setActiveStep(idx)}
                      className={`w-full group flex items-center gap-4 p-3 rounded-lg transition-all text-left ${
                        active
                          ? "bg-gradient-to-r from-[#E6F5FF] to-white ring-1 ring-[#0066A6]/20 shadow-sm"
                          : "hover:bg-gray-50"
                      }`}
                      aria-current={active ? "step" : undefined}
                    >
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center font-semibold text-sm ${
                          active
                            ? "bg-[#0066A6] text-white shadow"
                            : "bg-blue-50 text-[#0066A6]"
                        }`}
                      >
                        {step.number}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div
                          className={`font-medium ${
                            active ? "text-slate-900" : "text-slate-800"
                          }`}
                        >
                          {step.title}
                        </div>
                        <div className="text-sm text-slate-500 truncate">
                          {step.description}
                        </div>
                      </div>

                      <div
                        className={`opacity-0 group-hover:opacity-100 transition-opacity ${
                          active ? "opacity-100" : ""
                        }`}
                      >
                        <svg
                          className={`w-5 h-5 ${
                            active ? "text-[#0066A6]" : "text-slate-300"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 w-full bg-gradient-to-r from-[#0066A6] to-[#0099CC] text-white rounded-2xl p-5 shadow-md">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-bold">
                  ✈️
                </div>
                <div>
                  <div className="text-sm font-semibold">Getting Started</div>
                  <div className="text-xs opacity-90">
                    Free consultation & eligibility check
                  </div>
                </div>
              </div>

              <div className="mt-4 text-sm">
                <strong>Estimated time:</strong> <span>2–4 weeks</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28 }}
              className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#0066A6] text-white text-lg font-bold shadow-md">
                    {steps[activeStep].number}
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                      {steps[activeStep].title}
                    </h3>
                    <p className="text-sm text-slate-500 mt-1 max-w-xl">
                      {steps[activeStep].description}
                    </p>
                  </div>
                </div>

                <div className="hidden md:flex flex-col items-end">
                  <div className="text-sm text-slate-500">Progress</div>
                  <div className="mt-2 w-40">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#0066A6] to-[#0099CC]"
                        animate={{
                          width: `${((activeStep + 1) / steps.length) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid md:grid-cols-2 gap-4">
                {steps[activeStep].details.map((d, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg"
                  >
                    <div className="w-2.5 h-2.5 bg-[#0066A6] rounded-full mt-2" />
                    <div className="text-slate-700">{d}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="text-slate-600">
                  <span className="font-medium text-slate-800">Timeline:</span>{" "}
                  Typical completion <strong>2–4 weeks</strong>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                    disabled={activeStep === 0}
                    className="px-4 py-2 rounded-md text-sm bg-white border border-gray-200 hover:bg-gray-50 disabled:opacity-40"
                  >
                    ← Previous
                  </button>

                  <button
                    onClick={() =>
                      setActiveStep(Math.min(steps.length - 1, activeStep + 1))
                    }
                    disabled={activeStep === steps.length - 1}
                    className="px-4 py-2 rounded-md text-sm bg-[#0066A6] text-white hover:bg-[#005585] shadow"
                  >
                    Next →
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Brochure CTA */}
            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h4 className="text-xl font-semibold text-slate-900">
                    Download Our Brochure
                  </h4>
                  <p className="text-slate-600 mt-1 max-w-xl">
                    Detailed service guide, university partnerships, success
                    stories and more — ready to download.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPreviewOpen(true)}
                    className="px-4 py-2 rounded-md border border-[#0066A6] text-[#0066A6] hover:bg-[#F0FAFF]"
                  >
                    Preview
                  </button>

                  <button
                    onClick={downloadBrochure}
                    disabled={isDownloading}
                    className="px-4 py-2 rounded-md bg-gradient-to-r from-[#0066A6] to-[#0099CC] text-white shadow"
                  >
                    {isDownloading ? "Downloading..." : "Download PDF"}
                  </button>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 bg-slate-50 rounded-lg text-sm text-slate-700">
                  <strong>Partnerships:</strong> Top universities across UK,
                  CAN, USA, AUS
                </div>
                <div className="p-3 bg-slate-50 rounded-lg text-sm text-slate-700">
                  <strong>Success rate:</strong> 98% application success
                </div>
                <div className="p-3 bg-slate-50 rounded-lg text-sm text-slate-700">
                  <strong>Support:</strong> Visa, accommodation & pre-departure
                </div>
              </div>
            </div>
          </div>
        </div>

        <PreviewBrochure
          src={brochureSrc}
          isOpen={isPreviewOpen}
          onClose={() => setIsPreviewOpen(false)}
          title="Study Abroad Brochure"
        />
      </div>
    </section>
  );
}
