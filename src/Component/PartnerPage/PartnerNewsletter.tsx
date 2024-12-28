/** @format */

import { FaArrowRightLong } from "react-icons/fa6";

const PartnerNewsletter = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-pink-500 to-pink-300 h-28 px-4 lg:px-10 py-4 flex items-center mb-10">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-4 lg:ml-20">
          <div>
            <img src="/icons8-crown-48 1.png" alt="Crown" className="w-8" />
          </div>
          <div className="space-y-1">
            <p className="text-sm text-white">Work Better, together</p>
            <h1 className="md:text-lg text-sm lg:text-2xl text-left font-semibold text-white">
              Get Evaluate Your Business Score For Free
            </h1>
          </div>
        </div>
        <div>
          <button className="flex items-center bg-purple-700 text-white md:px-4 py-1 px-2 md:py-2 rounded-md hover:bg-purple-600 active:bg-purple-800 lg:mr-24">
            Check Now! <FaArrowRightLong className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartnerNewsletter;

