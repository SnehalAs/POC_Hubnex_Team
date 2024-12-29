/** @format */

import PartnerHero from "@/Component/PartnerPage/PartnerHero";
import GlobeSection from "@/Component/PartnerPage/GlobeSection";
import BlogSection from "@/Component/PartnerPage/BlogSection";
import Howto from "@/Component/PartnerPage/Howto";
import PartnerNewsletter from "@/Component/PartnerPage/PartnerNewsletter";
import PartnerProgram from "@/Component/PartnerPage/PartnerProgram";
import PartnerTechnology from "@/Component/PartnerPage/PartnerTechnology";
import PartnerChoose from "@/Component/PartnerPage/PartnerChoose";
import PartnerSlider from "@/Component/PartnerPage/PartnerSlider";
import PartnerContact from "@/Component/PartnerPage/PartnerContact";

const PartnerPage = () => {
  return (
    <>
      <PartnerHero></PartnerHero>
      <PartnerTechnology></PartnerTechnology>
      <PartnerChoose></PartnerChoose>
      <GlobeSection></GlobeSection>
      <Howto></Howto>
      <PartnerProgram></PartnerProgram>
      <PartnerSlider></PartnerSlider>
      <PartnerNewsletter></PartnerNewsletter>
      <BlogSection></BlogSection> 
      <PartnerContact></PartnerContact>
    </>
  );
};

export default PartnerPage;
