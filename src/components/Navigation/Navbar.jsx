"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Services", href: "/services" },
    { name: "PopularCourses", href: "/popularcourses" },
    { name: "Study Abroad", href: "/studyabroad" },
    { name: "Contact", href: "/contact" },
  ];

  const popularCourses = [
    { name: "IELTS Preparation", href: "/popularcourse/ielts" },
    { name: "PTE Coaching", href: "/popularcourse/pte" },
    { name: "GMAT Training", href: "/popularcourse/gmat" },
    { name: "SAT/TOEFL Coaching", href: "/popularcourse/toefl" },
    { name: "GRE Training", href: "/popularcourse/gre" },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <Image
            src="/logo5.png"
            alt="Next Consultancy Logo"
            width={64}
            height={64}
            className="w-12 h-12 md:w-16 md:h-16 object-contain transition-transform duration-300 group-hover:scale-110"
            priority
          />
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold text-[#0066A6] tracking-wide">
              Next Consultancy
            </h1>
            <p className="text-xs text-gray-600">Education Abroad Experts</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 relative">
          {navLinks.map((link) =>
            link.name === "PopularCourses" ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 font-medium transition duration-300 ${
                    dropdownOpen
                      ? "text-[#0066A6]"
                      : "text-gray-700 hover:text-[#0066A6]"
                  }`}
                >
                  Popular Courses <MdArrowDropDown className="text-xl" />
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-3 bg-white border border-gray-100 rounded-2xl shadow-xl w-64 py-2 z-50"
                    >
                      {popularCourses.map((course) => (
                        <li key={course.href}>
                          <Link
                            href={course.href}
                            className="block px-5 py-3 text-gray-700 hover:bg-gray-100 hover:text-[#0066A6] transition rounded-lg"
                            onClick={() => setDropdownOpen(false)}
                          >
                            {course.name}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-medium transition duration-300 ${
                  pathname === link.href
                    ? "text-[#0066A6]"
                    : "text-gray-700 hover:text-[#0066A6]"
                }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-[#0066A6] transition-all duration-300 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
