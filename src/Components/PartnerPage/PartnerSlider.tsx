/** @format */
import React, { useRef } from "react";

const PartnerSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  let isDragging = false;
  let startX: number, scrollLeft: number;

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return; // Only proceed if left mouse button is pressed
    isDragging = true;
    startX = e.pageX - (sliderRef.current?.offsetLeft || 0);
    scrollLeft = sliderRef.current?.scrollLeft || 0;
  };

  const handleMouseLeave = () => {
    isDragging = false;
  };
 
  const handleMouseUp = () => {
    isDragging = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="my-10">
      <div className="mt-20 text-center mb-[-4rem] ">
        <p className="text-lg font-semibold mb-4 text-blue-800">3940+ Happy Hubnex Labs Users</p>
        <h1 className="text-2xl md:font-bold font-semibold">Driving results for leaders across the globe</h1>
      </div>
      <div
        className="flex overflow-x-auto max-w-[70vw] mx-auto mt-20 cursor-grab scroll-smooth snap-x snap-mandatory scrollbar-hide min-w-96"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {[
          {
            imgSrc: "/slack_BG.png",
            title: "Driving results for leaders across the globe",
            description:
              "“With Landingfolio, the design team can now build design which identifies employees’ career aspirations and goals and from which we approach managers and check to see what is happening.”",
            company: "Slack",
            role: "Product Company",
          },
          {
            imgSrc: "/facebookimg.png",
            title: "Driving results for leaders across the globe",
            description:
              "“With Landingfolio, the design team can now build design which identifies employees’ career aspirations and goals and from which we approach managers and check to see what is happening.”",
            company: "Facebook",
            role: "Product Company",
          },
          {
            imgSrc: "/googleimg.png",
            title: "Driving results for leaders across the globe",
            description:
              "“With Landingfolio, the design team can now build design which identifies employees’ career aspirations and goals and from which we approach managers and check to see what is happening.”",
            company: "Google",
            role: "Product Company",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="min-w-full max-w-full h-[400px] mx-auto rounded-lg flex items-center justify-center snap-center "
          >
            <div className="flex flex-col lg:flex-row items-center lg:space-x-8 mt-10 p-10  ">
              <img
                src={item.imgSrc}
                alt={item.company}
                className="md:w-[300px] md:h-[200px] object-contain rounded-lg w-[200px] h-[100px] sm:mt-10"
              />
              <div className="text-left">
                <h1 className="md:text-4xl text-2xl font-semibold mb-4 text-left">{item.title}</h1>
                <p className="my-7 text-lg font-medium text-gray-600">{item.description}</p>
                <h1 className="text-2xl md:font-semibold text-left">{item.company}</h1>
                <p>{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerSlider;
