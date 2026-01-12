"use client";
import React from "react";

const AboutBanner = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/about.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 sm:px-8 lg:px-10 max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
          Empowering Students to Explore{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            the World
          </span>{" "}
          Through Education
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-10 leading-relaxed font-light drop-shadow-md max-w-3xl mx-auto">
          At Next Consultancy, we help students achieve their dreams of studying
          abroad with expert guidance, honest advice, and global opportunities
          that transform lives.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#our-story"
            className="bg-gradient-to-r from-[#0066A6] to-[#0099CC] hover:from-[#005799] hover:to-[#0077AA] text-white font-semibold py-3.5 px-8 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-white/10"
          >
            Discover Our Story
          </a>

          <a
            href="#services"
            className="border-2 border-white text-white hover:bg-white hover:text-[#0066A6] font-semibold py-3.5 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Our Services
          </a>
        </div>
      </div>

      {/* Decorative bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-linear-to-t from-black/30 to-transparent"></div>
    </section>
  );
};

export default AboutBanner;
