"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  FaCalendarAlt,
  FaClock,
  FaArrowLeft,
  FaShareAlt,
  FaTag,
  FaBookmark,
  FaBookmark as FaBookmarkSolid,
} from "react-icons/fa";
import {
  FaXTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa6";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { FiChevronUp } from "react-icons/fi";

const SingleBlogPage = () => {
  const params = useParams();
  const slug = params.slug;
  const [isSaved, setIsSaved] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress } = useScroll();

  // Parallax effect for hero image
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // Scale effect for image on scroll
  const imageScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.05]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const blogData = {
    "top-tips-for-studying-abroad-successfully": {
      id: 1,
      title: "Top Tips for Studying Abroad Successfully",
      description:
        "Discover essential tips for adjusting to a new academic environment, making friends, and thriving while studying abroad.",
      image: "/aa.png",
      date: "October 12, 2025",
      author: "Sarah Johnson",
      authorRole: "Study Abroad Advisor",
      authorImage: "/author1.jpg",
      content: `
        <h2 class="text-3xl font-bold mt-12 mb-6 text-gray-900">Introduction</h2>
        <p class="text-gray-700 mb-6 leading-relaxed">Studying abroad is an exciting adventure that can transform your life. However, it also comes with its challenges. Here are some essential tips to help you succeed in your international education journey.</p>
        
        <blockquote class="border-l-4 border-blue-500 pl-6 my-8 italic text-gray-600 text-lg">
          "The world is a book, and those who do not travel read only a page."
        </blockquote>
        
        <h2 class="text-3xl font-bold mt-12 mb-6 text-gray-900">1. Prepare Academically</h2>
        <p class="text-gray-700 mb-6 leading-relaxed">Research the education system of your host country. Understand the grading system, teaching methods, and academic expectations. This will help you adapt quickly to your new learning environment.</p>
        
        <div class="bg-blue-50 rounded-xl p-6 my-8 border-l-4 border-blue-500">
          <h3 class="font-bold text-blue-800 mb-2">Pro Tip</h3>
          <p class="text-blue-700">Connect with alumni from your program before departure for insider insights.</p>
        </div>
        
        <h2 class="text-3xl font-bold mt-12 mb-6 text-gray-900">2. Embrace Cultural Differences</h2>
        <p class="text-gray-700 mb-6 leading-relaxed">Be open to new experiences and different ways of thinking. Engage with local students and participate in cultural activities to fully immerse yourself in the experience.</p>
        
        <h2 class="text-3xl font-bold mt-12 mb-6 text-gray-900">3. Manage Your Finances</h2>
        <p class="text-gray-700 mb-6 leading-relaxed">Create a budget and stick to it. Research cost of living in your host country and explore part-time work opportunities if your visa permits.</p>
        
        <h2 class="text-3xl font-bold mt-12 mb-6 text-gray-900">4. Build a Support Network</h2>
        <p class="text-gray-700 mb-6 leading-relaxed">Connect with other international students and join student organizations. Don't hesitate to seek help from university support services when needed.</p>
        
        <h2 class="text-3xl font-bold mt-12 mb-6 text-gray-900">Conclusion</h2>
        <p class="text-gray-700 mb-6 leading-relaxed">Studying abroad is a rewarding experience that will enhance your personal and professional growth. With proper preparation and the right mindset, you can make the most of this incredible opportunity.</p>
      `,
      tags: ["Study Tips", "Student Life", "Cultural Adaptation"],
      readTime: "5 min read",
      likes: 245,
      shares: 89,
    },
  };

  const blog = blogData[slug];

  if (!blog) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100"
      >
        <div className="text-center">
          <motion.h1
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="text-5xl font-bold text-gray-900 mb-6"
          >
            404
          </motion.h1>
          <p className="text-gray-600 mb-8 text-lg">
            The blog post you're looking for doesn't exist.
          </p>
          <Link href="/blog">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto"
            >
              <FaArrowLeft className="w-4 h-4" />
              Back to Blog
            </motion.button>
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Floating Save Button */}
      <motion.button
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsSaved(!isSaved)}
        className="fixed top-24 right-6 z-40 bg-white p-4 rounded-xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300"
      >
        {isSaved ? (
          <FaBookmarkSolid className="w-6 h-6 text-yellow-500" />
        ) : (
          <FaBookmark className="w-6 h-6 text-gray-400" />
        )}
      </motion.button>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 z-40 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-full shadow-2xl"
          >
            <FiChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        {/* Back Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="mb-12"
        >
          <Link href="/blog">
            <motion.div
              whileHover={{ x: -5 }}
              className="text-gray-600 hover:text-blue-600 transition-all duration-300 flex items-center gap-3 w-fit group"
            >
              <motion.div
                whileHover={{ rotate: -20 }}
                className="bg-white p-3 rounded-xl shadow-md group-hover:shadow-lg"
              >
                <FaArrowLeft className="w-4 h-4" />
              </motion.div>
              <span className="font-medium">Back to Blog</span>
            </motion.div>
          </Link>
        </motion.nav>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          {/* Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            {blog.tags.map((tag, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <FaTag className="w-3 h-3" />
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight"
          >
            {blog.title.split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index }}
                className="inline-block mr-4"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl"
          >
            {blog.description}
          </motion.p>

          {/* Author & Meta Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-6 bg-white rounded-2xl shadow-lg"
          >
            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative w-16 h-16 rounded-full overflow-hidden ring-4 ring-white shadow-lg"
              >
                <Image
                  src={blog.authorImage}
                  alt={blog.author}
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div>
                <p className="font-bold text-gray-900 text-lg">{blog.author}</p>
                <p className="text-gray-500">{blog.authorRole}</p>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 text-gray-600"
              >
                <div className="p-3 bg-blue-50 rounded-xl">
                  <FaCalendarAlt className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Published</p>
                  <p className="font-semibold">{blog.date}</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 text-gray-600"
              >
                <div className="p-3 bg-purple-50 rounded-xl">
                  <FaClock className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Reading time</p>
                  <p className="font-semibold">{blog.readTime}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.header>

        {/* Hero Image with Parallax */}
        <motion.div
          style={{ scale: imageScale, y: heroY }}
          className="mb-16 rounded-3xl overflow-hidden shadow-2xl relative"
        >
          <div className="relative w-full h-[600px]">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="relative"
        >
          {/* Decorative Element */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -left-24 top-0 w-48 h-48 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-20 blur-3xl"
          />

          <div
            className="blog-content relative z-10 prose prose-lg max-w-none text-gray-800"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </motion.div>

        {/* Share Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-20 pt-12 border-t border-gray-200"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaShareAlt className="w-8 h-8 text-blue-600" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Found this helpful?
                </h3>
              </div>
              <p className="text-gray-600">
                Share this article with fellow students who might benefit
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              {[
                { Icon: FaXTwitter, bg: "bg-gray-900", label: "Twitter" },
                { Icon: FaFacebookF, bg: "bg-blue-600", label: "Facebook" },
                { Icon: FaLinkedinIn, bg: "bg-blue-700", label: "LinkedIn" },
                { Icon: FaInstagram, bg: "bg-pink-600", label: "Instagram" },
                { Icon: FaWhatsapp, bg: "bg-green-500", label: "WhatsApp" },
              ].map(({ Icon, bg, label }, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    transition: { type: "spring", stiffness: 400 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * idx }}
                  className={`${bg} text-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center gap-2 min-w-[100px]`}
                >
                  <Icon className="w-6 h-6" />
                  <span className="text-xs font-medium">{label}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 flex items-center justify-center gap-12 text-gray-600"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-center cursor-pointer"
          >
            <div className="text-3xl font-bold text-blue-600">{blog.likes}</div>
            <div className="text-sm">Likes</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-center cursor-pointer"
          >
            <div className="text-3xl font-bold text-purple-600">
              {blog.shares}
            </div>
            <div className="text-sm">Shares</div>
          </motion.div>
        </motion.div>
      </article>
    </div>
  );
};

export default SingleBlogPage;
