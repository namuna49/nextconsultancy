import StudyAbroadBanner from "@/components/PageComponents/StudyAbroad/StudyAbroadBanner";
import StudyAbroadServices from "@/components/PageComponents/StudyAbroad/StudyAbroadServices";
import Universities from "@/components/PageComponents/StudyAbroad/Universities";
import React from "react";

const page = () => {
  return (
    <div>
      <StudyAbroadBanner />
      <StudyAbroadServices />
      <Universities />
    </div>
  );
};

export default page;
