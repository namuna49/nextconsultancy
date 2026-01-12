"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const handleSubscribe = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      toast.error("Please enter a valid email address!");
      return;
    }
    toast.success("🎉 Subscribed successfully!");
    setEmail("");
  };
  return (
    <section className="py-16 px-6 bg-white ">
      <div className="container mx-auto text-center max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-extrabold mb-4 text-gray-900"
        >
          Stay Updated with Our Latest Blogs
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-700 text-base md:text-lg mb-8"
        >
          Subscribe to our newsletter and never miss an update on study abroad
          tips, exams, and scholarships.
        </motion.p>
        <motion.form
          onSubmit={handleSubscribe}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-3"
        >
          <input
            type="email"
            placeholder="Enter your email"
            aria-label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:flex-1 border border-gray-300 rounded-full py-3 px-5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0066A6] focus:border-transparent transition-all duration-200"
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-[#0066A6] hover:bg-[#005799] text-white font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg active:scale-95 transition duration-300"
          >
            Subscribe
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
