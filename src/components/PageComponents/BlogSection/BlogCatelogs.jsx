"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaArrowRight, FaChevronDown } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    title: "Top Tips for Studying Abroad Successfully",
    description:
      "Discover essential tips for adjusting to a new academic environment, making friends, and thriving while studying abroad.",
    image: "/aa.png",
    date: "October 12, 2025",
    slug: "top-tips-for-studying-abroad-successfully",
    category: "Study Abroad",
  },
  {
    id: 2,
    title: "How to Choose the Right University for You",
    description:
      "From academic programs to campus life, learn how to find the perfect fit for your goals and lifestyle.",
    image: "/right.png",
    date: "September 28, 2025",
    slug: "how-to-choose-the-right-university-for-you",
    category: "University Selection",
  },
  {
    id: 3,
    title: "Scholarship Opportunities for International Students",
    description:
      "Explore the top scholarships available for international students in the USA, UK, Australia, and Canada.",
    image: "/scholarship.png",
    date: "August 30, 2025",
    slug: "scholarship-opportunities-for-international-students",
    category: "Scholarships",
  },
  {
    id: 4,
    title: "Top Tips to Ace Your IELTS Exam for Study Abroad",
    description:
      "Master the IELTS test with these practical strategies and proven preparation tips.",
    image: "/ielts.png",
    date: "October 12, 2025",
    slug: "top-tips-to-ace-your-ielts-exam",
    category: "IELTS",
  },
  {
    id: 5,
    title: "Choosing the Right Country for Your Studies",
    description:
      "Explore how to pick the perfect destination that fits your goals, lifestyle, and career plans.",
    image: "/right.png",
    date: "September 25, 2025",
    slug: "choosing-the-right-country-for-your-studies",
    category: "Study Abroad",
  },
  {
    id: 6,
    title: "How to Write a Winning SOP for University Admissions",
    description:
      "Your Statement of Purpose can make or break your application — here's how to make it shine.",
    image: "/mock.png",
    date: "August 18, 2025",
    slug: "how-to-write-a-winning-sop-for-university-admissions",
    category: "University Selection",
  },
  {
    id: 7,
    title: "Visa Interview Tips for US and Canada",
    description:
      "Essential tips and strategies to clear your study visa interviews confidently.",
    image: "/tips.png",
    date: "September 30, 2025",
    slug: "visa-interview-tips-for-us-and-canada",
    category: "Visa",
  },
];

const BlogCatelogs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories = ["All", ...new Set(blogs.map((b) => b.category))];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Blogs & Updates
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover insightful articles and tips for your study abroad journey
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
            />
          </div>

          <div className="relative w-full md:w-64">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-700 flex items-center justify-between"
            >
              <span>{selectedCategory}</span>
              <FaChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedCategory(category);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors duration-200 ${
                      selectedCategory === category
                        ? "bg-blue-100 text-blue-700 font-medium"
                        : "text-gray-700"
                    } ${index === 0 ? "rounded-t-lg" : ""} ${
                      index === categories.length - 1 ? "rounded-b-lg" : ""
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-gray-600">
            Showing {filteredBlogs.length} of {blogs.length} articles
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-200"
              >
                {/* Image Container */}
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <FaCalendarAlt className="w-4 h-4" />
                    <span>{blog.date}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {blog.description}
                  </p>

                  <Link
                    href={`/blog/${blog.slug}`}
                    className="inline-flex items-center gap-2 text-blue-900 font-semibold hover:text-blue-800 transition-colors duration-300 group/link"
                  >
                    Read More
                    <FaArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg
                  className="w-16 h-16 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="text-gray-500 text-lg mb-2">No blogs found</p>
              <p className="text-gray-400">
                Try adjusting your search or filter to find what you're looking
                for.
              </p>
            </div>
          )}
        </div>

        {filteredBlogs.length > 0 && (
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Showing {filteredBlogs.length} of {blogs.length} articles
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              View All Articles
            </button>
          </div>
        )}
      </div>

      {isDropdownOpen && (
        <div
          className="fixed inset-0 z-0"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </section>
  );
};

export default BlogCatelogs;
