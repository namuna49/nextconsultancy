"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

function Banner() {
  const bannerRef = useRef(null);
  const textRef = useRef(null);

  // FIX: Store particles in state
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const randomParticles = [...Array(15)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${3 + Math.random() * 4}s`,
    }));
    setParticles(randomParticles);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!bannerRef.current) return;

      const { left, top, width, height } =
        bannerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      if (textRef.current) {
        textRef.current.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
      }
    };

    const banner = bannerRef.current;
    if (banner) {
      banner.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (banner) {
        banner.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <section
      ref={bannerRef}
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url('/hero.png')",
      }}
    >
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 bg-black/40">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 animate-pulse-slow"></div>

        {/* FIXED Floating Particles */}
        <div className="absolute inset-0">
          {particles.map((p, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
              style={{
                left: p.left,
                top: p.top,
                animationDelay: p.delay,
                animationDuration: p.duration,
              }}
            />
          ))}
        </div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[size:50px_50px] animate-grid-move"></div>
        </div>
      </div>

      {/* Main Content */}
      <div
        ref={textRef}
        className="relative z-10 text-center px-6 md:px-0 max-w-4xl transition-transform duration-100 ease-out"
      >
        {/* Title */}
        <div className="overflow-hidden">
          <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-2 text-white leading-snug animate-slide-up">
            <span className="inline-block animate-gradient-text bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent bg-[length:200%_auto]">
              Your Trusted Consultancy Partner
            </span>
          </h1>
        </div>

        {/* Description */}
        <div className="overflow-hidden">
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-white font-medium leading-relaxed animate-slide-up delay-200">
            Guiding students towards their dream education abroad with expertise
            and care.
          </p>
        </div>

        {/* Button */}
        <div className="overflow-hidden mt-6">
          <Link
            href="#where"
            className="inline-block bg-linear-to-r from-[#0066A6] to-[#0099CC] hover:from-[#005799] hover:to-[#0077AA] text-white font-semibold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 animate-slide-up delay-400 group relative overflow-hidden"
          >
            <span className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
            <span className="relative flex items-center justify-center ">
              Get Started
              <svg
                className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </Link>
        </div>

        {/* Scroll Indicator
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-scroll"></div>
          </div>
        </div> */}
      </div>

      {/* Animated Border Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0066A6] to-transparent animate-shimmer"></div>

      {/* Keyframes */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-20px);
            opacity: 1;
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

export default Banner;
