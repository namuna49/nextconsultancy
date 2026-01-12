import BlogBanner from "@/components/PageComponents/BlogSection/BlogBanner";
import BlogCatelogs from "@/components/PageComponents/BlogSection/BlogCatelogs";
import NewsletterSignup from "@/components/PageComponents/BlogSection/NewsLetterSignUp";
import React from "react";

const page = () => {
  return (
    <div className="w-full ">
      <BlogBanner />
      <BlogCatelogs />
      <NewsletterSignup />
    </div>
  );
};

export default page;
