import AboutMain from "@/Components/AboutPage/AboutMain";

import Location from "@/Components/AboutPage/Location";
import Leaders from "@/Components/AboutPage/Leaders/Leaders";
import StatsSection from "@/Components/HeroPage/StatsSection";
import Benefits from "@/Components/HeroPage/benifits";
import Testimonial from "@/Components/HeroPage/Testimonial";
import CTA from "@/Components/HeroPage/CTA";
import Accomplish from "@/Components/HeroPage/Accomplish";



const About = () => {
  return (
    <>
      <AboutMain/> 
     <StatsSection/>
     <Benefits/>
     <Location/>
     <Leaders/>
     <Testimonial/>
     <CTA/>
     <Accomplish/>
    </>
  )
}

export default About