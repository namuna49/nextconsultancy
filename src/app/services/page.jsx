import OurServices from "@/components/PageComponents/HomeSection/OurServices";
import ServiceBanner from "@/components/PageComponents/ServiceSection/ServiceBanner";
import ServicesFAQ from "@/components/PageComponents/ServiceSection/ServicesFAQ";
import ServicesSteps from "@/components/PageComponents/ServiceSection/ServicesSteps";
import React from "react";

const page = () => {
  return (
    <div>
      <ServiceBanner />
      <OurServices />
      <ServicesSteps />
    </div>
  );
};

export default page;
