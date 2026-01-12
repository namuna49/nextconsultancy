"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const CourseCard = ({ title, description, image, href }) => {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden m-4 hover:shadow-2xl hover: scale-105 transition-all duration-300">
      <div className="relative h-64 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-3 text-gray-900">{title}</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        <Link
          href={href}
          className="inline-block bg-blue-600 text-white px-6 py-2. 5 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
