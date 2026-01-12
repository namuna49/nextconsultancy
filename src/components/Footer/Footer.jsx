"use client";
import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#004b7c] to-[#0077b6] text-white py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-3">NExt consultancy</h3>
          <p className="text-sm text-gray-200 leading-relaxed">
            Your trusted partner for study abroad counseling, test preparation,
            and global university admissions.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-200">
            <li>
              <Link
                href="/"
                className="hover:text-white transition duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-white transition duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-white transition duration-200"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-white transition duration-200"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-white transition duration-200"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/studyabroad"
                className="hover:text-white transition duration-200"
              >
                Study Abroad
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-gray-200">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt /> <span>Yogikuti, Butwal, Nepal</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt /> <span>+977 9821985349</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope /> <span>info@edunext.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4 text-lg">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 mt-8 pt-4 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} NExtConsultancy. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
