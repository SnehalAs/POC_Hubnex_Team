import { IoIosArrowForward } from "react-icons/io";
import { FaStar, FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from "react";

const AboutMain = () => {
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(100);

  useEffect(() => {
    const counter = setInterval(() => {
      if (count < 5) {
        setCount((prev) => prev + 1);
      } else {
        clearInterval(counter);
      }
    }, 800);
    return () => clearInterval(counter);
  }, [count]);

  useEffect(() => {
    const counter2 = setInterval(() => {
      if (count2 < 920) {
        setCount2((prev) => prev + 1);
      } else {
        clearInterval(counter2);
      }
    }, 10);
    return () => clearInterval(counter2);
  }, [count2]);

  return (
    <div className="h-screen sm:h-[80vh]">
      <div className="flex items-center gap-2  pl-24 sm:pl-16 xs:pl-8">
        <a href="#" className="text-gray-600 text-sm font-normal">Home</a>
        <IoIosArrowForward />
        <a href="#" className="text-black text-sm font-semibold">About Us</a>
      </div>
      <div className="text-center py-16">
        <div className="text-container">
          <h1 className="text-5xl font-semibold leading-[59px] lg:w-[1250px] mx-auto px-4">
            We’re empowering businesses with the technology they need to lead
            change and innovate in a business landscape that waits for no one.
          </h1>
        </div>
        <div className="flex justify-center gap-5 py-8">
          <button className="flex items-center justify-center gap-2 w-[135px] h-[54px] border border-black rounded-md bg-white text-black text-sm font-semibold">
            Contact Us <FaArrowRight />
          </button>
          <button className="flex items-center justify-center gap-2 w-[110px] h-[55px] rounded-md bg-blue-600 text-white text-sm font-semibold">
            Join Us <FaArrowRight />
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-center py-10 gap-8 md:gap-24">
          <div className="w-full md:w-[320px] text-center">
            <h2 className="text-4xl font-semibold">
              <span>{count}</span>,<span>{count2}</span>+
            </h2>
            <p className="text-sm mt-2 text-gray-500">
              Companies are using & it’s growing everyday
            </p>
          </div>
          <div className="w-full md:w-[320px] text-center">
            <h2 className="text-4xl font-semibold flex justify-center items-center">
              4.5/5{" "}
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
            </h2>
            <p className="text-sm mt-2 text-gray-500">
              Trusted by the top companies worldwide
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMain;
