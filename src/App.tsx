/** @format */
import PartnerHero from "./Components/PartnerPage/PartnerHero";
import GlobeSection from "./Components/PartnerPage/GlobeSection";
import PartnerTechnology from "./Components/PartnerPage/PartnerTechnology";
import PartnerChoose from "./Components/PartnerPage/PartnerChoose";
import Howto from "./Components/Howto/Howto";
import Navbar from "./HeroPage/navbar/navbar";
import PartnerProgram from "./Components/PartnerPage/PartnerProgram";

export default function App() {
  return (
    <>
    <Navbar></Navbar>
      <PartnerHero></PartnerHero>
      <GlobeSection></GlobeSection>
      <PartnerTechnology></PartnerTechnology>
      <PartnerChoose></PartnerChoose>
      <Howto></Howto>
      <PartnerProgram></PartnerProgram>
      

    </>
  );
}
