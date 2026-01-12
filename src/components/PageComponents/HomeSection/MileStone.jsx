"use client";

import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const milestones = [
  { id: 1, number: 500, title: "Students Guided", suffix: "+" },
  { id: 2, number: 10, title: "Years of Experience", suffix: "+" },
  { id: 3, number: 50, title: "Partner Universities", suffix: "+" },
  { id: 4, number: 1000, title: "Visa Applications", suffix: "+" },
];

const MileStone = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsClient(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  // Predefined particle positions
  const particlePositions = [
    { left: 20, top: 18, delay: 0.7, duration: 5.5 },
    { left: 98, top: 30, delay: 4.0, duration: 5.5 },
    { left: 48, top: 70, delay: 3.9, duration: 4.1 },
    { left: 75, top: 12, delay: 1.9, duration: 5.1 },
    { left: 77, top: 8, delay: 1.4, duration: 4.2 },
    { left: 78, top: 60, delay: 1.8, duration: 3.4 },
    { left: 91, top: 34, delay: 1.7, duration: 4.4 },
    { left: 34, top: 41, delay: 3.6, duration: 4.3 },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-20 px-4 overflow-hidden bg-white"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-16 w-40 h-40 blur-[70px] rounded-full animate-float-slow"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 blur-[80px] rounded-full animate-float-slower"></div>

        {/* Additional floating elements */}
        <div className="absolute top-1/3 right-1/4 w-32 h-32 blur-[60px] rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-28 h-28 blur-[50px] rounded-full animate-bounce-slow"></div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="w-full h-full bg-[linear-gradient(rgba(0,102,166,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(0,102,166,0.3)_1px,transparent_1px)] bg-[size:40px_40px] animate-grid-move"></div>
        </div>

        {/* Floating particles - Only render on client */}
        {isClient && (
          <>
            {particlePositions.map((pos, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float-particle"
                style={{
                  left: `${pos.left}%`,
                  top: `${pos.top}%`,
                  animationDelay: `${pos.delay}s`,
                  animationDuration: `${pos.duration}s`,
                }}
              />
            ))}
          </>
        )}
      </div>

      <div className="relative z-10 mx-auto text-center max-w-6xl">
        {/* Animated Header */}
        <div className="overflow-hidden mb-4">
          <h4
            className={`text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 transition-all duration-700 ${
              hasAnimated
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Leading Educational Consultancy in Nepal
          </h4>
        </div>

        {/* Animated Description */}
        <div className="overflow-hidden mb-12">
          <p
            className={`text-gray-700 text-base md:text-lg max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
              hasAnimated
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Guiding students towards academic success with expert counseling,
            test preparation, scholarships, and complete application support.
          </p>
        </div>

        {/* Enhanced Milestones Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {milestones.map((item, index) => (
            <div
              key={item.id}
              className={`group relative bg-white/80 backdrop-blur-lg border border-white/60 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center transition-all duration-700 ${
                hasAnimated
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${300 + index * 100}ms`,
              }}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-500 p-[1px]">
                <div className="w-full h-full bg-white rounded-2xl"></div>
              </div>

              <div className="relative z-10">
                {/* Animated Number */}
                <div className="mb-3">
                  <span className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-[#0066A6] to-[#0099CC] bg-clip-text text-transparent">
                    {hasAnimated && isClient && (
                      <CountUp
                        end={item.number}
                        duration={2.5}
                        delay={index * 0.2}
                        separator=","
                      />
                    )}
                    {!isClient && `${item.number}`}
                    {item.suffix}
                  </span>
                </div>

                {/* Title */}
                <p className="text-gray-800 font-semibold text-sm md:text-base text-center mb-3">
                  {item.title}
                </p>

                {/* Animated underline */}
                <div className="w-12 h-1 bg-gradient-to-r from-[#0066A6] to-[#0099CC] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>

                {/* Floating dots pattern */}
                <div className="absolute -top-2 -right-2 w-4 h-4">
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
                </div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4">
                  <div
                    className="w-1 h-1 bg-cyan-400 rounded-full animate-ping"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
              </div>

              {/* Hover shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* Animated bottom border */}
        <div
          className={`mt-12 pt-8 border-t border-gray-200/50 relative transition-all duration-700 delay-1000 ${
            hasAnimated ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#0066A6] to-transparent animate-shimmer"></div>
          <p className="text-gray-600 text-sm italic">
            Trusted by thousands of students and parents nationwide
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
            transform: translateY(-15px) scale(1.05);
          }
        }
        @keyframes float-slower {
          0%,
          100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(10px) scale(1.03);
          }
        }
        @keyframes float-particle {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          33% {
            transform: translateY(-15px) translateX(8px);
            opacity: 0.6;
          }
          66% {
            transform: translateY(8px) translateX(-12px);
            opacity: 0.4;
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.2;
          }
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(40px, 40px);
          }
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float-slower 8s ease-in-out infinite;
        }
        .animate-float-particle {
          animation: float-particle 5s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 5s ease-in-out infinite;
        }
        .animate-grid-move {
          animation: grid-move 20s linear infinite;
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
    </section>
  );
};

export default MileStone;
