/** @format */

import { FaArrowRightLong } from "react-icons/fa6";

const PartnerContact = () => {
  return (
    <div className="mt-8 w-full">
      {/* Upper Section */}
      <div className="bg-gradient-to-r from-black via-gray-700 to-gray-600 max-w-[80vw] mx-auto h-40 text-white flex flex-col justify-center items-center rounded-lg">
        <h1 className="text-xl font-bold text-center md:text-3xl">
          See all that you can accomplish with Hubnex Labs
        </h1>
        <button className="mt-4 bg-gray-600 border border-white text-white rounded-md px-6 py-3 hover:bg-white hover:text-black transition-all flex gap-3">
          Connect sales  <FaArrowRightLong/>
        </button>
      </div>

      {/* Lower Section */}
      <div className="max-w-[80vw] mx-auto text-black flex items-center justify-between py-8 flex-col md:flex-row">
        <h1 className="text-3xl font-bold  text-center md:text-left md:mb-0 mb-4">
          Let’s grow 💪 <br />
          together with the faster ecosystem
        </h1>
        <button className="bg-black text-white rounded-full px-4 py-2 flex items-center gap-2 hover:bg-gray-800 transition-all">
          Contact Us <FaArrowRightLong />
        </button>
      </div>

      {/* Divider */}
      <div className="w-[80vw] mx-auto border-t border-gray-500"></div>
    </div>
  );
};

export default PartnerContact;

