"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const BlogBanner = () => {
  const bannerRef = useRef(null);
  const textRef = useRef(null);

  const [particles, setParticles] = useState([]);

  // Generate particles
  useEffect(() => {
    const randomParticles = [...Array(15)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${3 + Math.random() * 3}s`,
    }));
    setParticles(randomParticles);
  }, []);

  // Mouse parallax
  useEffect(() => {
    const banner = bannerRef.current;
    if (!banner) return;

    const handleMouseMove = (e) => {
      if (!textRef.current) return;

      const { left, top, width, height } = banner.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      textRef.current.style.transform = `translate(${x * 18}px, ${y * 18}px)`;
    };

    banner.addEventListener("mousemove", handleMouseMove);
    return () => banner.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={bannerRef}
      className="relative w-full min-h-[600px] flex items-center justify-center text-white overflow-hidden"
      style={{ position: "relative" }}
    >
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/aa.png"
          alt="Blog Banner"
          fill
          className="object-cover"
          priority
        />
        {/* overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Particles */}
      <div className="absolute inset-0">
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute h-2 w-2 rounded-full bg-white/30 animate-float"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div
        ref={textRef}
        className="relative z-10 max-w-5xl text-center transition-transform duration-100"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
          <span className="bg-gradient-to-r from-white via-cyan-300 to-white bg-clip-text text-transparent">
            Study Abroad
          </span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10">
          Insights, student stories, visa guidance & global education trends.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "Admission Tips",
            "Student Stories",
            "Country Guides",
            "Scholarships",
            "Visa Advice",
          ].map((item) => (
            <button
              key={item}
              className="bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full hover:bg-white/20 hover:scale-105 transition"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-16px);
            opacity: 1;
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default BlogBanner;
