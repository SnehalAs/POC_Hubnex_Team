import Navbar from "./Component/PartnerPage/navbar";
import Footer from "./Component/PartnerPage/Footer";
import PartnerPage from "./Pages/PartnerPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HeroPage from "./Pages/HeroPage";
import BlogPage from "./Pages/Blog";
import CaseStudyPage from "./Pages/CaseStudyPage";
import About from "./Pages/About";


export default function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/"  element={<HeroPage/>}/>
        <Route path="/caseStudy" element={<CaseStudyPage/>} />
        <Route path='/partner' element={<PartnerPage />} />
        <Route path="/aboutus" element={<About/>}/>
        <Route path="/blog" element={<BlogPage/>}/>
      </Routes>
      <Footer/>
    </Router>



      
      
    </>
  );
}
