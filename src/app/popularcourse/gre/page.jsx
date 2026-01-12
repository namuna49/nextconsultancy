"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Users,
  Clock,
  Target,
  Award,
  TrendingUp,
  CheckCircle,
  Star,
  Calendar,
  MessageCircle,
  ArrowRight,
  BarChart,
  GraduationCap,
  FileText,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const HeroSection = () => {
  return (
    <div className="bg-white text-blue-900 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Master Your GRE Exam
            </h1>

            <p className="text-xl text-blue-900 mb-8 leading-relaxed">
              Expert coaching, personalized attention, and proven strategies.
              Join 600+ successful students who achieved their dream graduate
              school admission.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <button className="px-8 py-4 bg-purple-200 text-blue-900 font-bold rounded-lg hover:bg-purple-300 transition-all duration-300 flex items-center gap-2">
                Start Learning
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-purple-200 border-2 border-white text-blue-900 font-bold rounded-lg hover:bg-purple-300 hover:text-blue-900 transition-all duration-300">
                Download Syllabus
              </button>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-blue-900">325+</div>
                <div className="text-sm text-purple-500">Average Score</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900">600+</div>
                <div className="text-sm text-purple-500">Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900">96%</div>
                <div className="text-sm text-purple-500">Success Rate</div>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <img
                src="/gre.png"
                alt="GRE Training"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// ---------- Course Features ----------
const CourseFeatures = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "curriculum", label: "Curriculum" },
    { id: "schedule", label: "Schedule" },
  ];

  const content = {
    overview: [
      "Certified GRE instructors with proven track records",
      "Personalized learning plans based on diagnostic tests",
      "Official GRE-style practice materials and resources",
      "Weekly doubt-clearing and strategy sessions",
    ],
    curriculum: [
      "Verbal Reasoning - 35+ hours of intensive training",
      "Quantitative Reasoning - 35+ hours with problem-solving drills",
      "Analytical Writing - 15+ hours with essay feedback",
      "Test-Taking Strategies - 10+ hours of exam techniques",
    ],
    schedule: [
      "Morning Batch: 7:00 AM - 9:00 AM (Mon-Fri)",
      "Evening Batch: 6:30 PM - 8:30 PM (Mon-Fri)",
      "Weekend Batch: 10:00 AM - 1:00 PM (Sat-Sun)",
      "Online Classes: Flexible timing with recorded sessions",
    ],
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Course Details
          </h2>
          <p className="text-gray-600 text-lg">
            Everything you need to know about our GRE program
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-3 font-semibold rounded-lg transition-all ${
                activeTab === tab.id
                  ? "bg-blue-900 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl p-10 shadow-lg"
        >
          <ul className="space-y-5">
            {content[activeTab].map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700 text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

// ---------- Why Choose Us with Swipeable Cards ----------
const WhyChooseUs = ({ highlights }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const icons = [GraduationCap, Clock, BarChart, Users, FileText, Award];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = highlights.length - 1;
      if (nextIndex >= highlights.length) nextIndex = 0;
      return nextIndex;
    });
  };

  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Why Choose Our GRE Program?
          </h2>
          <p className="text-gray-600 text-lg">
            Comprehensive training designed for your graduate school success
          </p>
        </motion.div>

        {/* Swipeable Card Container */}
        <div className="relative h-[400px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full"
            >
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all cursor-grab active:cursor-grabbing">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-blue-900 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    {React.createElement(icons[currentIndex], {
                      className: "w-10 h-10 text-white",
                    })}
                  </div>

                  <h3 className="text-2xl font-bold text-blue-900 mb-4">
                    {highlights[currentIndex].title}
                  </h3>

                  <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                    {highlights[currentIndex].desc}
                  </p>

                  {/* Card Counter */}
                  <div className="mt-8 text-sm text-gray-500 font-semibold">
                    {currentIndex + 1} / {highlights.length}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 z-10 p-3 bg-blue-900 text-white rounded-full shadow-lg hover:bg-blue-800 transition-all hover:scale-110"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute right-0 z-10 p-3 bg-blue-900 text-white rounded-full shadow-lg hover:bg-blue-800 transition-all hover:scale-110"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {highlights.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`transition-all duration-300 rounded-full ${
                idx === currentIndex
                  ? "w-8 h-3 bg-blue-900"
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Swipe Hint */}
        <div className="text-center mt-6 text-sm text-gray-500">
          👆 Swipe or use arrows to navigate
        </div>
      </div>
    </div>
  );
};

// ---------- Stats Section ----------
const StatsSection = () => {
  const stats = [
    { number: "96%", label: "Success Rate", icon: TrendingUp },
    { number: "600+", label: "Students Trained", icon: Users },
    { number: "325+", label: "Average Score", icon: Target },
    { number: "100%", label: "University Acceptance", icon: Award },
  ];

  return (
    <div className="bg-blue-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <stat.icon className="w-10 h-10 mx-auto mb-3 text-yellow-500" />
              <div className="text-4xl font-bold text-yellow-500 mb-2">
                {stat.number}
              </div>
              <div className="text-blue-200">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ---------- Testimonials ----------
const Testimonials = () => {
  const testimonials = [
    {
      name: "Emily Watson",
      score: "330",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "The instructors helped me improve my verbal score significantly.  Highly recommend this program!",
      school: "MIT",
    },
    {
      name: "David Kumar",
      score: "328",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Excellent strategies for tackling quantitative problems. Got into my dream university!",
      school: "UC Berkeley",
    },
    {
      name: "Lisa Chen",
      score: "326",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      text: "The mock tests were invaluable.  I felt fully prepared on exam day.",
      school: "Stanford",
    },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Student Success Stories
          </h2>
          <p className="text-gray-600 text-lg">
            Read what our students have to say
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-blue-900">{item.name}</div>
                  <div className="text-sm text-gray-600">
                    Score: {item.score}
                  </div>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>

              <p className="text-gray-600 mb-4 italic">"{item.text}"</p>

              <div className="text-sm font-semibold text-blue-600">
                {item.school}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ---------- Main Component ----------
const GRE = () => {
  const highlights = [
    {
      title: "Expert GRE Trainers",
      desc: "Learn from certified GRE instructors with proven success results and years of teaching experience.",
    },
    {
      title: "Flexible Study Schedule",
      desc: "Choose from morning, evening, or weekend batches.  Access recorded sessions anytime.",
    },
    {
      title: "Full-Length Mock Tests",
      desc: "Regular mock exams designed to improve speed, accuracy, and build confidence.",
    },
    {
      title: "Concept Mastery",
      desc: "Strengthen vocabulary, reasoning, math skills, and analytical writing abilities.",
    },
    {
      title: "Premium Study Materials",
      desc: "Access high-quality notes, practice questions, and official-style GRE resources.",
    },
    {
      title: "One-on-One Support",
      desc: "Get personalized doubt-clearing sessions and detailed performance feedback.",
    },
  ];

  return (
    <div className="bg-white">
      <HeroSection />
      <StatsSection />
      <CourseFeatures />
      <WhyChooseUs highlights={highlights} />
      <Testimonials />
    </div>
  );
};

export default GRE;
