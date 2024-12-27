import Navbar from "./Components/PartnerPage/navbar";
import Footer from "./Components/PartnerPage/Footer";
import PartnerPage from "./Pages/PartnerPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HeroPage from "./Pages/HeroPage";
import BlogPage from "./Pages/Blog";


export default function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/"  element={<HeroPage/>}/>
        <Route path='/partner' element={<PartnerPage />} />
        <Route path="/blog" element={<BlogPage/>}/>
      </Routes>
      <Footer/>
    </Router>



      
      
    </>
  );
}
