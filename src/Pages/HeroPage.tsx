/** @format */

import Accomplish from "@/Component/HeroPage/Accomplish";
import Benefits from "@/Component/HeroPage/benifits";
import BigEnough from "@/Component/HeroPage/BigEnough";
import BlogSection from "@/Component/HeroPage/BlogSection";
import CaseStudy from "@/Component/HeroPage/CaseStudy";
import CTA from "@/Component/HeroPage/CTA";
import HeroSection from "@/Component/HeroPage/herosection";
// import StatsSection from "@/Component/HeroPage/StatsSection";
import Testimonial from "@/Component/HeroPage/Testimonial";
import GlobeSection from "@/Component/PartnerPage/GlobeSection";

const HeroPage = () => {
  return (
    <>
        <HeroSection />
        <Benefits />
        {/* <StatsSection/> */}
        <GlobeSection></GlobeSection>
        <CaseStudy />
        <BigEnough />
        <Testimonial />
        <CTA />
        <BlogSection />
        <Accomplish />
      
    </>
  );
};
export default HeroPage;
