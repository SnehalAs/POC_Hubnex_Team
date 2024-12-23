import "./Leaders.css";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Leaders = () => {
  return (
    <div className="Leaders">
       <div className="heading-leader">
       <h1>Meet the leaders driving it all</h1>
       <h3>Spearheading a team of 250+ Xpanders committed to delivering exceptional tech solutions</h3>
        </div> 
        <div className="leader-cards">
            <div className="leader-card">
                <div className="leader-img">
                    {/* <img src={leader} alt="" /> */}
                </div>
                <div className="leader-text">
                    <h1>Ranveer Singh</h1>
                    <h4>CEO & Founder</h4>
                    <p>Yatra sought to optimise and improve verticals to facilitate greater cooperation with its partners, boost customer experience, and streamline operations.verticals to facilitate greater cooperation with its partners, boost customer experience.</p>
                    <h3>Follow on LinkedIn<GoArrowUpRight /></h3>
                </div>
            </div>
            <div className="leader-card leader-card2">
                <div className="leader-img">
                {/* <img src={leader} alt="" /> */}
                </div>
                <div className="leader-text">
                    <h1>Ranveer Singh</h1>
                    <h4>CEO & Founder</h4>
                    <p>Yatra sought to optimise and improve verticals to facilitate greater cooperation with its partners, boost customer experience, and streamline operations.verticals to facilitate greater cooperation with its partners, boost customer experience.</p>
                    <h3>Follow on LinkedIn<GoArrowUpRight /></h3>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default Leaders