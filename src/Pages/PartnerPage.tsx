/** @format */

import PartnerHero from "@/Components/PartnerPage/PartnerHero";
import GlobeSection from "@/Components/PartnerPage/GlobeSection";
import BlogSection from "@/Components/PartnerPage/BlogSection";
import Howto from "@/Components/PartnerPage/Howto";
import PartnerNewsletter from "@/Components/PartnerPage/PartnerNewsletter";
import PartnerProgram from "@/Components/PartnerPage/PartnerProgram";
import PartnerTechnology from "@/Components/PartnerPage/PartnerTechnology";
import PartnerChoose from "@/Components/PartnerPage/PartnerChoose";
import PartnerSlider from "@/Components/PartnerPage/PartnerSlider";
import PartnerContact from "@/Components/PartnerPage/PartnerContact";

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
      <BlogSection></BlogSection> */
      <PartnerContact></PartnerContact>
    </>
  );
};

export default PartnerPage;
