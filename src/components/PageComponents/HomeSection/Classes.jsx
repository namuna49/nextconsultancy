"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const classes = [
  {
    id: 1,
    title: " IELTS Preparation",
    description: "Get ready for IELTS with our expert trainers.",
    image: "/ielts.png",
    slug: "ielts",
  },
  {
    id: 2,
    title: "  PTE Coaching",
    description: "Achieve top PTE scores with focused practice.",
    image: "/pte.png",
    slug: "pte",
  },
  {
    id: 3,
    title: "GMAT Training",
    description:
      "Comprehensive GMAT preparation for your dream business school.",
    image: "/gmat.png",
    slug: "gmat",
  },
  {
    id: 4,
    title: "SAT/TOEFL Coaching",
    description: "Ace your SAT and TOEFL exams with confidence.",
    image: "/toefl.png",
    slug: "toefl",
  },
  {
    id: 5,
    title: "GRE Training",
    description: "Boost your GRE score with expert guidance.",
    image: "/gre.png",
    slug: "gre",
  },
  {
    id: 6,
    title: "University Application Support",
    description: "Guidance for smooth and successful university applications.",
    image: "/support.png",
    slug: "university-support",
  },
];

const Classes = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const [activeCard, setActiveCard] = useState(null);

  const toggleVisible = () => {
    setVisibleCount((prev) => (prev === classes.length ? 4 : classes.length));
  };

  const handleCardClick = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <section className="relative py-16 px-6 overflow-hidden bg-white">
      <div className="absolute -top-10 left-0 w-72 h-72  blur-[90px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80  blur-[110px] rounded-full"></div>

      <div className="relative z-10 container mx-auto text-center">
        {/* Header - 60% */}
        <div className="mb-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900">
            Our Courses & Classes
          </h2>
          <div className="w-20 h-1 mx-auto bg-blue-600 rounded-full mt-4"></div>
        </div>

        {/* Paragraph - 30% */}
        <div className="mb-12">
          <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto">
            Unlock your potential with premium, expert-led courses designed to
            help you excel in entrance exams and academic success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-6">
          {classes.slice(0, visibleCount).map((cls) => (
            <div
              key={cls.id}
              className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Background Image */}
              <div className="relative w-full h-48">
                <Image
                  src={cls.image}
                  alt={cls.title}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-40"
                />
              </div>

              {/* Static Title */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center z-20">
                <h3 className="text-lg font-bold text-white drop-shadow-lg">
                  {/* {cls.title} */}
                </h3>
              </div>

              {/* Hover Purple Overlay */}
              <div className="absolute inset-0 bg-blue-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Hover Content (Center) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-30">
                <h3 className="text-xl font-bold text-white mb-4 drop-shadow-xl">
                  {cls.title}
                </h3>

                <Link
                  href={`/popularcourse/${cls.slug}`}
                  className="px-6 py-2 border border-white rounded-full text-white font-semibold transition-all duration-300 hover:bg-white hover:text-[#6A1B9A]"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={toggleVisible}
          className="bg-linear-to-r from-[#0066A6] to-[#0099CC] text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 mt-4 text-sm"
        >
          {visibleCount === classes.length ? "Show Less" : "View More"}
        </button>
      </div>
    </section>
  );
};

export default Classes;
