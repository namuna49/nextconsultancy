import Banner from "@/components/PageComponents/HomeSection/Banner";
import Classes from "@/components/PageComponents/HomeSection/Classes";
import Event from "@/components/PageComponents/HomeSection/Event";
import FAQ from "@/components/PageComponents/HomeSection/FAQ";
import Intro from "@/components/PageComponents/HomeSection/Intro";
import MileStone from "@/components/PageComponents/HomeSection/MileStone";
import NewsAndUpdate from "@/components/PageComponents/HomeSection/NewsAndUpdate";
import OurServices from "@/components/PageComponents/HomeSection/OurServices";
import Testimonials from "@/components/PageComponents/HomeSection/Testimonials";
 import WhereToGo from "@/components/PageComponents/HomeSection/WhereToGo";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Banner/>
    <Intro/>
    <MileStone/>
    <WhereToGo/>
    <Classes/>
    <OurServices/>
    <NewsAndUpdate/>
    <Event/>
    <Testimonials/>
    <FAQ/>

   </div>
  );
}
