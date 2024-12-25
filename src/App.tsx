// import PartnerHero from "./Components/PartnerHero"
// import GlobeSection from "./Components/GlobeSection"

// import Howto from "./Components/Howto/Howto";
// import Leaders from "./Components/Leaders/Leaders";
import Benefits from "./HeroPage/benifits/benifits";
import BigEnough from "./HeroPage/BigEnough/BigEnough";
import BlogSection from "./HeroPage/BlogSection/BlogSection";
import CaseStudy from "./HeroPage/CaseStudy/CaseStudy";
import CTA from "./HeroPage/CTA/CTA";
import Footer from "./HeroPage/Footer/Footer";
import HeroSection from "./HeroPage/herosection/herosection";
import Navbar from "./HeroPage/navbar/navbar";
import StatsSection from "./HeroPage/StatsSection/StatsSection";
import Testimonial from "./HeroPage/Testimonial/Testimonial";


export default function App() {
  return (
   <>
   {/* <Howto/> */}
   {/* <Leaders/> */}
    <Navbar/>
    <HeroSection/>
    <Benefits/>
    <StatsSection/>
    <CaseStudy/>
    <BigEnough/>
    <Testimonial/>
    <CTA/>
   <BlogSection/>
   <Footer/>
   
   </>
  )
}