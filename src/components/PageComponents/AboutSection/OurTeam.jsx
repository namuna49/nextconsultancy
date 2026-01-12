"use client";
import React from "react";

const teamMembers = [
  {
    id: 1,
    name: "Namuna Acharya",
    role: "Founder & CEO",
    image: "/student2.jpg",
  },
  {
    id: 2,
    name: "Dikshya Khanal",
    role: "Academic Counselor",
    image: "/dikshya.jpg",
  },
  {
    id: 3,
    name: "Sadikshya Gyawali",
    role: "IELTS Instructor",
    image: "/student1.jpg",
  },
  {
    id: 4,
    name: "Sweta Kharel",
    role: "Visa Documentation Expert",
    image: "/sweta.png",
  },
  {
    id: 5,
    name: "Kopila Neupane",
    role: "PTE Trainer",
    image: "/kop.png",
  },
];

const OurTeam = () => {
  return (
    <section className="py-12 bg-white px-6">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-2xl md:text-4xl font-extrabold text-[#0066A6]">
          Meet Our Experts
        </h2>
        <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
          Our team of passionate professionals is dedicated to providing expert
          counseling, personalized test preparation, and smooth study-abroad
          experiences for every student.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-[#0077b6] font-medium">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
