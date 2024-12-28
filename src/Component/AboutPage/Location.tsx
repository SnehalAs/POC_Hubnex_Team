
import location from "../../../public/Contact-bg.png";
import india from "../../../public/India.png";
import uae from "../../../public/icons8-uae-48 (1) 1.png";
import usa from "../../../public/icons8-us-48 1.png";
import indo from "../../../public/icons8-indonesia-48 1.png";
import { IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

const Location = () => {
  return (
    <div className="py-12 px-4 md:px-20 mt-4">
      <div className="flex flex-col-reverse md:flex-row items-center md:h-[800px]">
       
        <div className="w-full md:w-1/2 flex flex-col items-start space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold mt-4">Our Locations</h1>
          <div className="flex justify-center items-center space-x-3 flex-wrap">
            <div className="w-20 h-20 md:w-36 md:h-36 flex flex-col items-center justify-center bg-white shadow-lg rounded-lg">
              <img src={india} alt="India" className="w-8 md:w-16" />
              <h3 className="text-sm md:text-base font-semibold">IND</h3>
            </div>
            <div className="w-20 h-20 md:w-36 md:h-36 flex flex-col items-center justify-center bg-gray-100 shadow-lg rounded-lg">
              <img src={uae} alt="UAE" className="w-8 md:w-16" />
              <h3 className="text-sm md:text-base font-semibold">UAE</h3>
            </div>
            <div className="w-20 h-20 md:w-36 md:h-36 flex flex-col items-center justify-center bg-gray-100 shadow-lg rounded-lg">
              <img src={usa} alt="USA" className="w-8 md:w-16" />
              <h3 className="text-sm md:text-base font-semibold">USA</h3>
            </div>
            <div className="w-20 h-20 md:w-36 md:h-36 flex flex-col items-center justify-center bg-gray-100 shadow-lg rounded-lg">
              <img src={indo} alt="Indonesia" className="w-8 md:w-16" />
              <h3 className="text-sm md:text-base font-semibold">INDO</h3>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            {['Gurugram', 'Bangalore', 'Pune', 'Lucknow'].map((city) => (
              <h2
                key={city}
                className="text-base md:text-lg font-semibold hover:text-blue-500 hover:underline cursor-pointer"
              >
                {city}
              </h2>
            ))}
          </div>

          <div className="space-y-2 text-gray-600">
            <h2 className="flex items-center text-sm md:text-lg">
              <IoLocationOutline className="mr-2" />
              Etihad Airways Centre, Al Rahah, Al Muneera, Abu Dhabi, UAE
            </h2>
            <h2 className="flex items-center text-sm md:text-lg">
              <CiMail className="mr-2" />
              hello@hubnex.in
            </h2>
            <h2 className="flex items-center text-sm md:text-lg">
              <IoCallOutline className="mr-2" />
              +91 1223432544
            </h2>
          </div>

          <button className="flex items-center bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
            Contact Us <FaArrowRight className="ml-2" />
          </button>
        </div>

    
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={location}
            alt="Location"
            className="w-full md:w-[90%] h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Location;
