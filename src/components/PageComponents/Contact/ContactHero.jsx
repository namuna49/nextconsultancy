"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const ContactHero = () => {
  return (
    <section
      className="
        relative isolate 
        bg-white 
        overflow-hidden 
        pt-24 md:pt-28
      "
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-white to-cyan-50" />

      {/* CONTENT WRAPPER */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-5 text-center lg:text-left">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-blue-100 text-blue-700">
              Expert Guidance Available
            </span>

            <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              Get in Touch <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Start Your Journey
              </span>
            </h1>

            <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              Ready to explore your study abroad options? Our experts are here
              to guide you from consultation to visa success.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Link
                href="#contact-form"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-7 py-3.5 rounded-xl font-semibold shadow-md hover:shadow-lg transition"
              >
                Contact Our Team
              </Link>

              <a
                href="mailto:info@nextconsultancy.com"
                className="border border-gray-300 px-7 py-3.5 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition"
              >
                Send Email
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full max-w-xl mx-auto lg:mx-0">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-white">
              <Image
                src="/contactt.png"
                alt="Education Consultants"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
