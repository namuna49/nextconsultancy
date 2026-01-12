import AboutBanner from "@/components/PageComponents/AboutSection/AboutBanner";
import MissionVision from "@/components/PageComponents/AboutSection/MissionVision";
import OurStory from "@/components/PageComponents/AboutSection/OurStory";
import OurTeam from "@/components/PageComponents/AboutSection/OurTeam";
import WhyChooseUs from "@/components/PageComponents/AboutSection/WhyChooseUs";
import Testimonials from "@/components/PageComponents/HomeSection/Testimonials";
import React from "react";

function page() {
  return (
    <div className="w-full">
      <AboutBanner />
      <OurStory />
      <MissionVision />
      <OurTeam />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
}

export default page;
