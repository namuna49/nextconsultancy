"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ServiceBanner = () => {
  return (
    <section className="relative w-full overflow-hidden text-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00395f] via-[#005f8f] to-[#0096c7]" />

      {/* Background image */}
      <div className="absolute inset-0 relative w-full h-full">
        <Image
          src="/servicess.png"
          alt="Services Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Floating blobs */}
      <div className="absolute left-5 sm:left-10 top-5 sm:top-10 h-40 sm:h-72 w-40 sm:w-72 rounded-full bg-cyan-400/30 blur-3xl" />
      <div className="absolute right-5 sm:right-10 bottom-5 sm:bottom-10 h-40 sm:h-72 w-40 sm:w-72 rounded-full bg-blue-500/30 blur-3xl" />

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-[500px] sm:min-h-[600px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-white/20 bg-white/10 p-6 sm:p-10 shadow-2xl backdrop-blur-md max-w-4xl text-center"
        >
          <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Guiding You Towards
            <span className="block text-cyan-200">
              Global Education Success
            </span>
          </h1>

          <p className="mx-auto mb-6 sm:mb-10 max-w-2xl text-base sm:text-lg md:text-xl font-light text-gray-200/90">
            Explore our professional services — from language test preparation
            to personalized visa consulting — designed to make your study abroad
            journey smooth and successful.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="#our-services"
            className="inline-block rounded-full bg-white px-6 sm:px-10 py-3 sm:py-4 font-semibold text-[#0077b6] shadow-xl transition-all duration-300 hover:bg-gray-100 hover:shadow-2xl"
          >
            Explore Services
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceBanner;
