"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const events = [
  {
    id: 1,
    title: "Study Abroad Seminar 2025",
    slug: "study-abroad-seminar-2025",
    date: "November 20, 2025",
    description:
      "Join our interactive seminar to learn about studying in the USA, UK, and Australia. Meet counselors and alumni!",
    image: "/studyabroad.png",
  },
  {
    id: 2,
    title: "Mock IELTS Test Day",
    slug: "mock-ielts-test-day",
    date: "December 5, 2025",
    description:
      "Take a free mock IELTS test to evaluate your preparation and get personalized feedback from our trainers.",
    image: "/mock.png",
  },
  {
    id: 3,
    title: "University Fair 2025",
    slug: "university-fair-2025",
    date: "January 15, 2026",
    description:
      "Meet representatives from top universities and explore scholarship opportunities and programs.",
    image: "/uni.png",
  },
];

const Event = () => {
  return (
    <section className="py-20 bg-white px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-4">
          Upcoming Events
        </h2>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          Stay tuned for our latest events, workshops, and seminars designed to
          guide you on your study abroad journey.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white/90 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative w-full h-56">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-left">
                <p className="text-sm text-blue-600 font-medium mb-2">
                  {event.date}
                </p>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {event.description}
                </p>
                <Link
                  href={`/event/${event.slug}`}
                  className="inline-block text-white bg-gradient-to-r from-[#0066A6] to-[#0099CC] hover:from-[#005799] hover:to-[#0077AA] font-semibold py-2 px-4 rounded-full shadow hover:shadow-lg transition duration-300"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Event;
