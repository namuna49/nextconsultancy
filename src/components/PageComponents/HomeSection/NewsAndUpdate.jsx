"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const newsData = [
  {
    id: 1,
    title: "New IELTS Batch Starting Soon",
    date: "October 25, 2025",
    description:
      "Join our upcoming IELTS preparation batch with certified trainers and flexible timing options.",
    image: "/ie.jpg",
    slug: "ielts-batch-starting-soon",
  },
  {
    id: 2,
    title: "Visa Success Stories",
    date: "September 15, 2025",
    description:
      "Congratulations to our students who received their student visas to study abroad!",
    image: "/approve.jpg",
    slug: "visa-success-stories",
  },
  {
    id: 3,
    title: "University Partnership",
    date: "August 30, 2025",
    description:
      "We are proud to announce our new collaboration with top universities across the USA and Australia.",
    image: "/partner.jpg",
    slug: "university-partnership",
  },
];

const NewsAndUpdate = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
            News & Updates
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Stay updated with our latest news, success stories, and
            announcements.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news) => (
            <div
              key={news.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-blue-600 font-medium mb-2">
                  {news.date}
                </p>

                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
                  {news.title}
                </h3>

                <p className="text-gray-600 mb-6 line-clamp-3">
                  {news.description}
                </p>

                {/* Push link to bottom */}
                <div className="mt-auto">
                  <Link
                    href={`/news/${news.slug}`}
                    className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-900 transition"
                  >
                    Read More
                    <span className="ml-1 transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsAndUpdate;
