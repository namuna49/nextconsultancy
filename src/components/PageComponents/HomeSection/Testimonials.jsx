"use client";
import React, { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import {
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
} from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Sadikshya Gyawali",
    country: "Australia",
    flag: "/ukflag.png",
    feedback:
      "The counseling team guided me throughout my university application. Their visa support and IELTS training were top-notch!",
    image: "/student1.jpg",
  },
  {
    id: 2,
    name: "Namuna Acharya",
    country: "USA",
    flag: "/usaflag.png",
    feedback:
      "I had a great experience with their PTE classes and visa process. They made my dream of studying in the USA come true!",
    image: "/student2.jpg",
  },
  {
    id: 3,
    name: "Dikshya Khanal",
    country: "Canada",
    flag: "/canadaflag.png",
    feedback:
      "Highly professional and supportive team! From mock interviews to documentation, everything was handled smoothly.",
    image: "/dikshya.jpg",
  },
  {
    id: 4,
    name: "Mamata lohohani",
    country: "Australia",
    flag: "/australiaaflag.png",
    feedback:
      "The guidance I received was exceptional. They helped me secure admission to my dream university with scholarship!",
    image: "/mamata.png",
  },
  {
    id: 5,
    name: "Sweta kharel",
    country: "UK",
    flag: "/ukflag.png",
    feedback:
      "Their expertise in visa processing and IELTS coaching was invaluable. I felt supported every step of the way.",
    image: "/sweta.png",
  },
];

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [Autoplay({ delay: 4000 })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative py-16 md:py-20 px-4 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center m">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Student <span className="text-blue-600">Testimonials</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our students who transformed their dreams into reality.
          </p>
          <div className="inline-flex items-center gap-2 mt-8 px-4 py-2 rounded-full bg-white border border-blue-200 shadow-sm mb-6">
            <FaStar className="text-yellow-500" />
            <span className="text-blue-800 text-sm  font-medium">
              Trusted by 1000+ Students
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="flex justify-end gap-3 mb-6">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 bg-white border border-blue-200 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all hover:scale-105 hover:bg-blue-50"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="text-blue-600 text-sm" />
            </button>
            <button
              onClick={scrollNext}
              className="w-10 h-10 bg-white border border-blue-200 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all hover:scale-105 hover:bg-blue-50"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="text-blue-600 text-sm" />
            </button>
          </div>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_calc(33.333%-1rem)] px-3"
                >
                  <div className="group relative h-full">
                    {/* Card */}
                    <div className="relative bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                      {/* Quote Icon - Fixed positioning */}
                      <div className="absolute top-4 left-4 w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                        <FaQuoteLeft className="text-white text-sm" />
                      </div>

                      {/* Rating Stars */}
                      <div className="flex justify-center mb-6 mt-2">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, starIndex) => (
                            <FaStar
                              key={starIndex}
                              className="text-yellow-500"
                            />
                          ))}
                        </div>
                      </div>

                      {/* Feedback Text */}
                      <div className="flex-grow mb-6">
                        <p className="text-gray-700 text-center text-sm leading-relaxed italic">
                          "{testimonial.feedback}"
                        </p>
                      </div>

                      {/* Student Profile */}
                      <div className="flex flex-col items-center gap-3">
                        <div className="relative">
                          {/* Profile Image */}
                          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                            <div className="w-full h-full relative">
                              <Image
                                src={testimonial.image}
                                alt={testimonial.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                          </div>

                          {/* Online Status Indicator */}
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                        </div>

                        {/* Student Info */}
                        <div className="text-center">
                          <h3 className="text-gray-900 font-semibold text-base mb-1">
                            {testimonial.name}
                          </h3>

                          {/* Country Flag Badge */}
                          <div className="flex items-center justify-center gap-2 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                            <div className="w-4 h-4 relative">
                              <Image
                                src={testimonial.flag}
                                alt={testimonial.country}
                                fill
                                className="object-cover rounded-full"
                              />
                            </div>
                            <span className="text-blue-700 text-xs font-medium">
                              {testimonial.country}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi && emblaApi.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === selectedIndex
                    ? "bg-blue-600 scale-125"
                    : "bg-blue-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white border border-blue-200 rounded-xl px-6 py-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white bg-blue-400"
                  ></div>
                ))}
              </div>
              <span className="text-gray-800 font-medium text-sm">
                Join 2000+ Successful Students
              </span>
            </div>
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all text-sm">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
