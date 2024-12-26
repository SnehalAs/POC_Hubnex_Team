import Accomplish from "@/Components/HeroPage/Accomplish";
import Benefits from "@/Components/HeroPage/benifits";
import BigEnough from "@/Components/HeroPage/BigEnough";
import BlogSection from "@/Components/HeroPage/BlogSection";
import CaseStudy from "@/Components/HeroPage/CaseStudy";
import CTA from "@/Components/HeroPage/CTA";
import HeroSection from "@/Components/HeroPage/herosection";
import StatsSection from "@/Components/HeroPage/StatsSection";
import Testimonial from "@/Components/HeroPage/Testimonial";


const HeroPage =() =>{
    return(
        <>
        
         <HeroSection/>
         <Benefits/>
         <StatsSection/>
         <CaseStudy/>
         <BigEnough/>
         <Testimonial/>
         <CTA/>
         <BlogSection/>
         <Accomplish/>
        

         </>
    )
}
export default HeroPage;