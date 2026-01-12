"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaGraduationCap,
  FaBriefcase,
  FaMoneyBillWave,
  FaPassport,
  FaCloudSun,
  FaStar,
  FaGlobeAmericas,
  FaUsers,
  FaCity,
  FaHeart,
  FaPlane,
  FaMapMarkerAlt,
  FaLeaf,
  FaTree,
  FaSnowflake,
  FaSun,
  FaWater,
} from "react-icons/fa";
import { FaRegHeart, FaTreeCity } from "react-icons/fa6";

/* ------------------ ENHANCED ANIMATIONS ------------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "circOut" } },
};

const slideRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "circOut" } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "backOut" },
  },
};

const popIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, type: "spring", stiffness: 200 },
  },
};

const floatAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.3,
    },
  },
};

/* ------------------ COUNTRY DATA ------------------ */
const countriesData = {
  "united-states": {
    name: "United States",
    flag: "/Usaa.png",
    heroDesc:
      "The USA offers world-leading education, innovation, and diverse living environments.",
    stats: {
      universities: "4,000+",
      students: "1.1M+",
      cities: "50+ Major Cities",
      rating: "9.2/10",
    },
    highlights: [
      { icon: <FaStar />, text: "Top-ranked universities" },
      { icon: <FaGlobeAmericas />, text: "Global networking" },
      { icon: <FaUsers />, text: "Diverse communities" },
      { icon: <FaCity />, text: "Innovation hubs" },
    ],
    sections: [
      {
        title: "Education System",
        icon: <FaGraduationCap />,
        color: "from-blue-500 to-purple-500",
        animation: slideLeft,
        points: [
          "Flexible academic structure with majors, minors, and electives.",
          "Strong research funding and lab-based learning.",
          "Globally ranked universities with modern facilities.",
        ],
      },
      {
        title: "Work & Career Opportunities",
        icon: <FaBriefcase />,
        color: "from-blue-500 to-purple-500",
        animation: fadeUp,
        points: [
          "20 hours/week on-campus work during studies.",
          "OPT and STEM OPT allow up to 3 years of post-study work.",
          "High demand for STEM and business graduates.",
        ],
      },
      {
        title: "Weather, Climate & Environment",
        icon: <FaCloudSun />,
        color: "from-blue-500 to-purple-500",
        animation: scaleIn,
        points: [
          "Wide climate variation: cold winters in the north, warm climates in the south.",
          "Four distinct seasons in most states.",
          "Clean campuses with strong sustainability efforts.",
        ],
      },
      {
        title: "Scholarships",
        icon: <FaMoneyBillWave />,
        color: "from-blue-500 to-purple-500",
        animation: slideRight,
        points: [
          "Fulbright Foreign Student Program",
          "Merit-based university scholarships",
          "Graduate assistantships",
        ],
      },
      {
        title: "Visa Process",
        icon: <FaPassport />,
        color: "from-blue-500 to-purple-500",
        animation: popIn,
        points: [
          "Get admission from a SEVP-approved university.",
          "Receive I-20 form.",
          "Pay SEVIS fee.",
          "Attend F-1 visa interview.",
        ],
      },
    ],
  },

  "united-kingdom": {
    name: "United Kingdom",
    flag: "/ukk.png",
    heroDesc:
      "The UK is known for academic excellence, cultural diversity, and a mild climate.",
    stats: {
      universities: "160+",
      students: "600K+",
      cities: "25+ Student Cities",
      rating: "9.0/10",
    },
    highlights: [
      { icon: <FaStar />, text: "Historical excellence" },
      { icon: <FaGlobeAmericas />, text: "Global recognition" },
      { icon: <FaUsers />, text: "Multicultural society" },
      { icon: <FaHeart />, text: "Rich heritage" },
    ],
    sections: [
      {
        title: "Academic Excellence",
        icon: <FaGraduationCap />,
        color: "from-blue-500 to-purple-500",
        animation: slideLeft,
        points: [
          "Globally respected universities and degrees.",
          "Shorter course duration saves time and money.",
          "Strong focus on academic quality.",
        ],
      },
      {
        title: "Post-Study Work",
        icon: <FaBriefcase />,
        color: "from-blue-500 to-purple-500",
        animation: fadeUp,
        points: [
          "20 hours/week part-time work allowed.",
          "2-year Graduate Route after completion.",
          "Growing job market for international graduates.",
        ],
      },
      {
        title: "Weather, Climate & Environment",
        icon: <FaCloudSun />,
        color: "from-blue-500 to-purple-500",
        animation: scaleIn,
        points: [
          "Mild and temperate climate throughout the year.",
          "Frequent rain and cloudy days.",
          "Green cities, clean air, and student-friendly urban spaces.",
        ],
      },
      {
        title: "Scholarships",
        icon: <FaMoneyBillWave />,
        color: "from-blue-500 to-purple-500",
        animation: slideRight,
        points: [
          "Chevening Scholarships",
          "Commonwealth Scholarships",
          "University bursaries",
        ],
      },
      {
        title: "Visa Process",
        icon: <FaPassport />,
        color: "from-blue-500 to-purple-500",
        animation: popIn,
        points: [
          "Receive CAS from university.",
          "Apply for Student Visa.",
          "Pay IHS & visa fees.",
          "Biometric appointment.",
        ],
      },
    ],
  },

  canada: {
    name: "Canada",
    flag: "/canadaa.png",
    heroDesc:
      "Canada combines world-class education with breathtaking nature, safety, and welcoming immigration policies.",
    stats: {
      universities: "100+",
      students: "642K+",
      cities: "30+ Student Cities",
      rating: "9.3/10",
    },
    highlights: [
      { icon: <FaTree />, text: "Stunning natural beauty" },
      { icon: <FaSnowflake />, text: "Winter wonderland" },
      { icon: <FaUsers />, text: "Multicultural society" },
      { icon: <FaHeart />, text: "Safe & welcoming" },
    ],
    sections: [
      {
        title: "Education Quality & Affordability",
        icon: <FaGraduationCap />,
        color: "from-red-500 to-white",
        animation: slideLeft,
        points: [
          "World-class public universities at affordable tuition fees.",
          "Co-op programs integrated with industry experience.",
          "Degrees recognized globally for their excellence.",
        ],
      },
      {
        title: "PR & Immigration Pathways",
        icon: <FaPassport />,
        color: "from-blue-500 to-red-500",
        animation: fadeUp,
        points: [
          "Post-Graduation Work Permit (PGWP) up to 3 years.",
          "Express Entry system with fast-track PR options.",
          "Provincial Nominee Programs (PNP) for students.",
        ],
      },
      {
        title: "Weather & Natural Environment",
        icon: <FaSnowflake />,
        color: "from-cyan-500 to-blue-600",
        animation: scaleIn,
        points: [
          "Four distinct seasons with beautiful autumn colors.",
          "Winter sports paradise with world-class skiing.",
          "Clean air, vast national parks, and stunning landscapes.",
        ],
      },
      {
        title: "Scholarships & Financial Aid",
        icon: <FaMoneyBillWave />,
        color: "from-green-600 to-emerald-500",
        animation: slideRight,
        points: [
          "Vanier Canada Graduate Scholarships",
          "Ontario Graduate Scholarship (OGS)",
          "University-specific entrance scholarships",
          "Research assistantships with funding",
        ],
      },
      {
        title: "Work Opportunities & Lifestyle",
        icon: <FaBriefcase />,
        color: "from-purple-500 to-pink-400",
        animation: popIn,
        points: [
          "Work 20 hours/week during studies, full-time during breaks.",
          "Strong job market in tech, healthcare, and engineering.",
          "High quality of life with excellent healthcare.",
          "Student-friendly cities with vibrant communities.",
        ],
      },
    ],
  },

  australia: {
    name: "Australia",
    flag: "/australiaaflag.png",
    heroDesc:
      "Australia offers sun-kissed beaches, world-class education, and a laid-back lifestyle with excellent career opportunities.",
    stats: {
      universities: "43+",
      students: "720K+",
      cities: "15+ Major Cities",
      rating: "8.9/10",
    },
    highlights: [
      { icon: <FaSun />, text: "Sunny climate year-round" },
      { icon: <FaWater />, text: "Beautiful beaches" },
      { icon: <FaGlobeAmericas />, text: "Global recognition" },
      { icon: <FaHeart />, text: "Work-life balance" },
    ],
    sections: [
      {
        title: "World-Class Education",
        icon: <FaGraduationCap />,
        color: "from-yellow-500 to-red-500",
        animation: slideLeft,
        points: [
          "8 universities in world's top 100 rankings.",
          "Practical, industry-focused curriculum.",
          "Strong research opportunities in diverse fields.",
        ],
      },
      {
        title: "Work Rights & Career Growth",
        icon: <FaBriefcase />,
        color: "from-blue-600 to-cyan-500",
        animation: fadeUp,
        points: [
          "Work up to 48 hours per fortnight during studies.",
          "Post-study work visa up to 4-6 years.",
          "Highest minimum wage for students globally.",
          "Strong demand in healthcare, engineering, and IT.",
        ],
      },
      {
        title: "Climate & Outdoor Lifestyle",
        icon: <FaSun />,
        color: "from-orange-500 to-yellow-400",
        animation: scaleIn,
        points: [
          "Warm climate with 300+ sunny days annually.",
          "World's best beaches and outdoor activities.",
          "Unique wildlife and natural wonders.",
          "Active, health-conscious culture.",
        ],
      },
      {
        title: "Scholarships & Support",
        icon: <FaMoneyBillWave />,
        color: "from-green-500 to-teal-400",
        animation: slideRight,
        points: [
          "Australia Awards Scholarships",
          "Destination Australia Program",
          "Research Training Program (RTP)",
          "University-specific merit scholarships",
        ],
      },
      {
        title: "Visa & Immigration Process",
        icon: <FaPassport />,
        color: "from-purple-600 to-indigo-500",
        animation: popIn,
        points: [
          "Receive Confirmation of Enrollment (CoE).",
          "Apply for Subclass 500 student visa.",
          "Genuine Temporary Entrant (GTE) requirement.",
          "Health insurance (OSHC) mandatory.",
        ],
      },
    ],
  },

  germany: {
    name: "Germany",
    flag: "/germanyy.png",
    heroDesc:
      "Germany offers tuition-free education at top universities, rich culture, and strong engineering opportunities in the heart of Europe.",
    stats: {
      universities: "400+",
      students: "350K+",
      cities: "50+ University Cities",
      rating: "9.1/10",
    },
    highlights: [
      { icon: <FaMoneyBillWave />, text: "Tuition-free education" },
      { icon: <FaGraduationCap />, text: "Engineering excellence" },
      { icon: <FaGlobeAmericas />, text: "European hub" },
      { icon: <FaLeaf />, text: "Green living" },
    ],
    sections: [
      {
        title: "Tuition-Free Excellence",
        icon: <FaMoneyBillWave />,
        color: "from-black to-red-500",
        animation: slideLeft,
        points: [
          "No tuition fees at public universities (except Baden-Württemberg).",
          "World-renowned for engineering and technical programs.",
          "Strong focus on research and innovation.",
        ],
      },
      {
        title: "Industry & Career Opportunities",
        icon: <FaBriefcase />,
        color: "from-yellow-500 to-red-500",
        animation: fadeUp,
        points: [
          "120 full days/240 half days work per year allowed.",
          "18-month job seeker visa after graduation.",
          "Home to global companies like BMW, Siemens, SAP.",
          "High demand for IT, engineering, and automotive professionals.",
        ],
      },
      {
        title: "Climate & Quality of Life",
        icon: <FaCloudSun />,
        color: "from-green-600 to-yellow-500",
        animation: scaleIn,
        points: [
          "Temperate climate with warm summers and cold winters.",
          "Efficient public transport and bike-friendly cities.",
          "Clean environment with advanced recycling systems.",
          "Central European location for easy travel.",
        ],
      },
      {
        title: "Scholarships & Funding",
        icon: <FaGraduationCap />,
        color: "from-blue-500 to-black",
        animation: slideRight,
        points: [
          "DAAD Scholarships (fully funded)",
          "Deutschlandstipendium",
          "Erasmus+ funding for EU students",
          "University-specific scholarships",
        ],
      },
      {
        title: "Visa & Residence Process",
        icon: <FaPassport />,
        color: "from-gray-800 to-yellow-500",
        animation: popIn,
        points: [
          "University admission letter required.",
          "Proof of financial resources (€11,208/year).",
          "Health insurance coverage mandatory.",
          "German language skills beneficial for integration.",
        ],
      },
    ],
  },

  france: {
    name: "France",
    flag: "/francee.png",
    heroDesc:
      "France offers affordable education, rich culture, exquisite cuisine, and European sophistication in a vibrant student-friendly environment.",
    stats: {
      universities: "3,500+",
      students: "370K+",
      cities: "40+ Student Cities",
      rating: "8.8/10",
    },
    highlights: [
      { icon: <FaRegHeart />, text: "Romantic culture" },
      { icon: <FaGraduationCap />, text: "Affordable education" },
      { icon: <FaTreeCity />, text: "Art & fashion hub" },
      { icon: <FaLeaf />, text: "Quality living" },
    ],
    sections: [
      {
        title: "Affordable World-Class Education",
        icon: <FaMoneyBillWave />,
        color: "from-blue-500 to-white to-red-500",
        animation: slideLeft,
        points: [
          "Low tuition fees: €170-€3,770 per year at public universities.",
          "Grandes Écoles for elite education in business and engineering.",
          "Strong programs in fashion, arts, and culinary studies.",
        ],
      },
      {
        title: "Work & Career in Europe",
        icon: <FaBriefcase />,
        color: "from-white to-red-500",
        animation: fadeUp,
        points: [
          "Work 964 hours per year (approx. 20 hours/week).",
          "APS visa allows 1-2 years post-study work.",
          "Strong startup ecosystem in Paris and Lyon.",
          "Gateway to European job market.",
        ],
      },
      {
        title: "Lifestyle & Environment",
        icon: <FaHeart />,
        color: "from-red-500 to-blue-500",
        animation: scaleIn,
        points: [
          "Mediterranean climate with sunny summers.",
          "World-renowned cuisine and café culture.",
          "Excellent public transportation and healthcare.",
          "Rich history, art, and cultural experiences.",
        ],
      },
      {
        title: "Scholarships & Financial Support",
        icon: <FaGraduationCap />,
        color: "from-blue-500 to-red-500",
        animation: slideRight,
        points: [
          "Eiffel Excellence Scholarship Program",
          "French Government Scholarships",
          "Erasmus+ Mundus Joint Masters",
          "Regional Council Scholarships",
        ],
      },
      {
        title: "Visa & Application Process",
        icon: <FaPassport />,
        color: "from-white to-blue-500 to-red-500",
        animation: popIn,
        points: [
          "Campus France registration for most programs.",
          "Long-stay student visa (VLS-TS) application.",
          "Proof of funds: €615/month for living expenses.",
          "Accommodation guarantee required.",
        ],
      },
    ],
  },
};

/* ------------------ FLOATING SHAPES BACKGROUND ------------------ */
const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10"
          style={{
            width: Math.random() * 60 + 30,
            height: Math.random() * 60 + 30,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 80 - 40, 0],
            x: [0, Math.random() * 80 - 40, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

/* ------------------ STATS CARD COMPONENT ------------------ */
const StatsCard = ({ icon, value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ scale: 1.03, y: -3 }}
    className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-md border border-white/20"
  >
    <div className="text-2xl text-blue-600 mb-1">{icon}</div>
    <div className="text-xl font-bold text-gray-800">{value}</div>
    <div className="text-gray-600 text-sm">{label}</div>
  </motion.div>
);

/* ------------------ HIGHLIGHT CHIP ------------------ */
const HighlightChip = ({ icon, text, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    whileHover={{ scale: 1.05 }}
    className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20"
  >
    <span className="text-yellow-300">{icon}</span>
    <span className="text-white text-sm font-medium">{text}</span>
  </motion.div>
);

/* ------------------ PAGE ------------------ */
const SingleUniPage = () => {
  const { slug } = useParams();
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const country = countriesData[slug];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!country)
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100"
      >
        <div className="text-center">
          <motion.h1
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-4xl font-bold text-gray-800 mb-4"
          >
            Country not found
          </motion.h1>
          <Link
            href="/studyabroad"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
          >
            <FaArrowLeft /> Return to Countries
          </Link>
        </div>
      </motion.div>
    );

  return (
    <div className="bg-gradient-to-b from-blue-50 to-purple-50 min-h-screen overflow-hidden relative">
      <FloatingShapes />

      {/* HERO */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative h-[500px] md:h-[600px] overflow-hidden"
      >
        <motion.div animate={floatAnimation} className="absolute inset-0">
          <Image
            src={country.flag}
            alt={country.name}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20" />

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight text-white">
              Study in{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {country.name}
              </span>
            </h1>
            <p className="max-w-3xl text-lg md:text-xl text-gray-200 font-light leading-relaxed">
              {country.heroDesc}
            </p>
          </motion.div>

          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {country.highlights.map((highlight, idx) => (
              <HighlightChip key={idx} {...highlight} index={idx} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* STATS */}
      <motion.div className="max-w-6xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatsCard
            icon={<FaGraduationCap />}
            value={country.stats.universities}
            label="Universities"
            delay={0.1}
          />
          <StatsCard
            icon={<FaUsers />}
            value={country.stats.students}
            label="International Students"
            delay={0.2}
          />
          <StatsCard
            icon={<FaMapMarkerAlt />}
            value={country.stats.cities}
            label="Student Cities"
            delay={0.3}
          />
          <StatsCard
            icon={<FaStar />}
            value={country.stats.rating}
            label="Student Satisfaction"
            delay={0.4}
          />
        </div>
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-16 relative">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link
            href="/studyabroad"
            className="inline-flex items-center gap-3 px-5 py-2 bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-white/20"
          >
            <FaArrowLeft className="text-blue-600" />
            <span className="font-semibold text-gray-700">
              Explore Other Destinations
            </span>
          </Link>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={stagger}
          className="space-y-12"
        >
          {country.sections.map((section, i) => (
            <motion.div
              key={i}
              variants={section.animation}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-md p-6 md:p-8"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="inline-flex p-3 rounded-xl mb-4 bg-blue-500 text-white shadow-md"
              >
                <div className="text-xl">{section.icon}</div>
              </motion.div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {section.title}
              </h2>

              <ul className="space-y-3">
                {section.points.map((point, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    whileHover={{ x: 3 }}
                    className="flex items-start gap-3 p-2 rounded hover:bg-blue-50 transition-all duration-200"
                  >
                    <FaCheckCircle className="text-blue-500 mt-1" />
                    <span className="text-gray-700 text-base">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SingleUniPage;
