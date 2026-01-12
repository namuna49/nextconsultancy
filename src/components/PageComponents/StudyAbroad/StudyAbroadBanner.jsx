"use client";
import React from "react";
import Image from "next/image";

const StudyAbroadBanner = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#003366] via-[#004b7c] to-[#0077b6] text-white overflow-hidden">
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-16 right-16 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl animate-bounce"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-blue-300/15 rounded-full blur-lg animate-pulse delay-1000"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div className="lg:w-1/2 w-full text-center lg:text-left space-y-6 lg:space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-ping"></span>
            <span className="text-sm font-semibold text-white/90">
              Global Education Partners
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-black leading-tight">
            Explore The World
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200 mt-2 lg:mt-3">
              Through Education
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-xl text-blue-100 font-light max-w-2xl mx-auto lg:mx-0 lg:max-w-md">
            Discover top universities, courses, and countries to pursue your
            higher education abroad with expert guidance and personalized
            support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
            <a
              href="#our-services"
              className="w-full sm:w-auto group bg-white text-[#0077b6] font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 text-center"
            >
              Start Your Journey
            </a>

            <a
              href="#universities"
              className="w-full sm:w-auto group border-2 border-white/80 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105 text-center"
            >
              View Universities
            </a>
          </div>
        </div>

        <div className="lg:w-1/2 w-full relative h-64 sm:h-80 md:h-96 lg:h-[450px] xl:h-[500px] mt-8 mb-8 lg:mt-0">
          <div className="absolute inset-0 rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/studyy.png"
              alt="Study Abroad Banner"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              priority
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-center">
        {[
          { number: "50+", label: "Countries" },
          { number: "1000+", label: "Universities" },
          { number: "10K+", label: "Students" },
          { number: "98%", label: "Success Rate" },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="space-y-2 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
          >
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              {stat.number}
            </div>
            <div className="text-sm sm:text-base text-blue-200 font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative w-full h-16 sm:h-20 lg:h-24"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-current text-white/20"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-current text-white/10"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-current text-white/5"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default StudyAbroadBanner;
