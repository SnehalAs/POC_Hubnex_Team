/** @format */

import { FaArrowRightLong } from "react-icons/fa6";

const PartnerProgram = () => {
  return (
    <section className="max-w-3xl mx-auto my-20 flex flex-col md:flex-row items-center md:items-start">
      <img
        src="/Partner-program.png"
        alt=""
        className="w-full max-w-xs md:max-w-sm h-auto mb-6 md:mb-0"
      />
      <div className="md:ml-20 w-full text-center md:text-left">
        <h1 className="text-3xl text-left font-bold md:font-semibold mb-4 ml-4 md:ml-0">
          Join our Preferred Partners Programme
        </h1>
        <p className="text-base md:text-[17px] leading-snug md:mb-28 mb-10 md:w-96 text-left sm:w-[90vw] sm:m-auto ml-4">
          We proudly offer exclusive benefits to our partners who have
          consistently shown trust in our platform and delivered outstanding
          work. These privileges are designed to ensure business stability and
          promise up to 3x returns to our partners.
        </p>
        <button className="bg-blue-600 text-white rounded-md h-11 px-6 flex items-center justify-center mx-auto md:mx-0 max-w-xs float-start ml-4">
          Connect Sales
          <FaArrowRightLong className="ml-2" />
        </button>
      </div>
    </section>
  );
};

export default PartnerProgram;
