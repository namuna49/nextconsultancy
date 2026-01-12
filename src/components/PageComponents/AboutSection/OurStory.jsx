"use client";
import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const OurStory = () => {
  return (
    <section
      id="our-story"
      className="py-20 bg-white md:py-24 px-4 md:px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 w-full flex justify-center md:justify-start"
        >
          <div className="relative w-full max-w-lg aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/support.png"
              alt="Our Story"
              fill
              priority
              className="object-cover transition-transform duration-700 hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0066A6]/10 to-[#0099CC]/10"></div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="md:w-1/2 space-y-6 md:space-y-8 text-center md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start gap-3">
            <FaStar className="text-[#065285] text-xl md:text-2xl" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#06598d]">
              Who We Are
            </h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-black text-base md:text-lg leading-relaxed"
          >
            NExt began with a vision to make studying abroad transparent,
            accessible, and achievable for every student in Nepal. Our dedicated
            team of experts provides honest guidance, helping students choose
            the right universities, prepare documents, and navigate visa
            processes smoothly.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="text-black text-base md:text-lg leading-relaxed"
          >
            Over the years, we have guided hundreds of students to global
            universities, built strong partnerships with renowned institutions,
            and established ourselves as a trusted name in education consulting.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;
