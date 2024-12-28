import AboutMain from "@/Component/AboutPage/AboutMain";

import Location from "@/Component/AboutPage/Location";
import Leaders from "@/Component/AboutPage/Leaders/Leaders";
import StatsSection from "@/Component/HeroPage/StatsSection";
import Benefits from "@/Component/HeroPage/benifits";
import Testimonial from "@/Component/HeroPage/Testimonial";
import CTA from "@/Component/HeroPage/CTA";
import Accomplish from "@/Component/HeroPage/Accomplish";



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