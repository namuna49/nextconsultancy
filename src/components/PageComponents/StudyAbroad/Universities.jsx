"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaSearch, FaCheck, FaUniversity } from "react-icons/fa";

const Universities = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All");

  const countries = [
    {
      name: "United States",
      flag: "/Usa.png",
      universities: 250,
      description:
        "Home to Ivy League and top research institutions with world-class education.",
      popularUniversities: ["Harvard University", "Stanford University", "MIT"],
      slug: "united-states",
    },
    {
      name: "United Kingdom",
      flag: "/ukflag.png",
      universities: 150,
      description:
        "Renowned for historic universities and academic excellence.",
      popularUniversities: [
        "University of Oxford",
        "University of Cambridge",
        "Imperial College London",
      ],
      slug: "united-kingdom",
    },
    {
      name: "Canada",
      flag: "/canadaflag.png",
      universities: 120,
      description:
        "High-quality education with excellent post-study work opportunities.",
      popularUniversities: [
        "University of Toronto",
        "University of British Columbia",
        "McGill University",
      ],
      slug: "canada",
    },
    {
      name: "Australia",
      flag: "/australiaaflag.png",
      universities: 100,
      description:
        "World-class education system with exceptional lifestyle quality.",
      popularUniversities: [
        "University of Melbourne",
        "Australian National University",
        "University of Sydney",
      ],
      slug: "australia",
    },
    {
      name: "Germany",
      flag: "/germanyflag.png",
      universities: 80,
      description: "Tuition-free education at prestigious public universities.",
      popularUniversities: [
        "Technical University of Munich",
        "Heidelberg University",
        "LMU Munich",
      ],
      slug: "germany",
    },
    {
      name: "France",
      flag: "/franceflag.png",
      universities: 70,
      description: "Rich cultural heritage with affordable higher education.",
      popularUniversities: [
        "Sorbonne University",
        "École Polytechnique",
        "PSL University",
      ],
      slug: "france",
    },
  ];

  const filteredCountries = countries.filter((country) => {
    const matchesSearch =
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry =
      selectedCountry === "All" || country.name === selectedCountry;
    return matchesSearch && matchesCountry;
  });

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#f8f9fa] px-6 py-3 rounded-lg text-lg font-medium mb-6 border border-[#e9ecef]">
            <FaUniversity className="w-5 h-5 text-[#2c5aa0]" />
            <span className="text-[#495057]">
              Global Education Destinations
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#212529] mb-6">
            Explore <span className="text-[#2c5aa0]">World-Class</span>{" "}
            Universities
          </h1>

          <p className="text-xl text-[#6c757d] max-w-3xl mx-auto">
            Discover premier universities across the globe and find your perfect
            academic destination
          </p>
        </div>

        {/* Search & Filter */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            <div className="relative flex-1">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6c757d]" />
              <input
                type="text"
                placeholder="Search countries or universities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-6 py-4 border border-[#dee2e6] rounded-lg
                bg-white text-[#495057] placeholder-[#6c757d]
                shadow-sm transition-all duration-200
                focus:outline-none focus:border-[#2c5aa0]
                focus:ring-2 focus:ring-[#2c5aa0]/30"
              />
            </div>

            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="px-6 py-4 border border-[#dee2e6] rounded-lg
              bg-white text-[#495057] cursor-pointer
              shadow-sm transition-all duration-200
              focus:outline-none focus:border-[#2c5aa0]
              focus:ring-2 focus:ring-[#2c5aa0]/30"
            >
              <option value="All">All Countries</option>
              {countries.map((country) => (
                <option key={country.name} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {filteredCountries.map((country) => (
            <div
              key={country.name}
              className="bg-white border border-[#e9ecef] rounded-xl shadow-md
              hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex gap-4 mb-6">
                  <div className="w-16 h-16 relative rounded-lg overflow-hidden border shadow">
                    <Image
                      src={country.flag}
                      alt={country.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#212529] mb-2">
                      {country.name}
                    </h3>
                    <span className="inline-flex items-center gap-2 bg-[#e7f1ff] text-[#2c5aa0] px-3 py-1 rounded-full text-sm font-semibold">
                      <FaUniversity className="w-3 h-3" />
                      {country.universities}+ Universities
                    </span>
                  </div>
                </div>

                <p className="text-[#495057] mb-6">{country.description}</p>

                <ul className="space-y-3 mb-6">
                  {country.popularUniversities.map((uni, i) => (
                    <li key={i} className="flex items-center text-[#495057]">
                      <FaCheck className="text-[#28a745] mr-3" />
                      {uni}
                    </li>
                  ))}
                </ul>

                {/* CTA Button FIXED */}
                <Link
                  href={`/studyabroad/${country.slug}`}
                  className="inline-flex items-center justify-center gap-3 w-full
                  bg-[#2c5aa0] hover:bg-[#0a3f90] text-white font-semibold
                  py-3.5 px-6 rounded-lg shadow-md hover:shadow-lg
                  transition-all duration-200
                  focus:outline-none focus:ring-0
                  focus-visible:ring-2 focus-visible:ring-[#2c5aa0] focus-visible:ring-offset-2
                  active:scale-[0.98]"
                >
                  Explore Universities
                  <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#1e3a8a] to-[#2c5aa0] rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Academic Journey?
          </h2>
          <p className="text-[#e9ecef] text-xl mb-10">
            Get expert guidance from our experienced counselors
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/contact"
              className="border-2 border-white text-white font-bold py-4 px-10 rounded-lg
              hover:bg-white hover:text-[#2c5aa0] transition-all
              focus:outline-none focus-visible:ring-2 focus-visible:ring-white
              active:scale-[0.98]"
            >
              Speak with Advisor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Universities;
