import { FaClock, FaUserTie, FaHeadset, FaSmile } from "react-icons/fa";
import RetroGrid from "../../Components/ui/retro-grid";

const Benefits = () => {
  return (
    <div className="benefits-container px-4 py-8 md:px-8 md:py-12 bg-white text-center font-sans">
      <RetroGrid />

      <h1 className="benefits-title text-xl sm:text-2xl md:text-4xl font-bold text-black mb-14 mt-10 whitespace-nowrap overflow-x-auto">
        Benefits to Join Hubnex Labs
      </h1>

      <div className="benefits-row flex flex-wrap justify-center gap-4">
       
        <div className="benefit-card group bg-gray-100 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:-translate-y-2 w-full md:w-[300px]">
          <img
            src="/assets/ontimedelivery.svg"
            alt="On Time Delivery"
            className="card-image w-full h-auto rounded-lg hidden md:block"
          />
          <div className="card-content p-4 bg-black text-white rounded-lg text-left lg:h-[170px] transition-transform group-hover:-translate-y-2">
            <div className="flex justify-start mb-4 text-white-600 text-3xl group-hover:-translate-y-1 transition-transform">
              <FaClock />
            </div>
            <h3 className="text-xl mb-2 group-hover:-translate-y-1 transition-transform">
              On Time Delivery
            </h3>
            <p className="text-gray-400 text-sm group-hover:-translate-y-1 transition-transform">
              We deliver the quality you need on time.
            </p>
          </div>
        </div>

       
        <div className="benefit-card group bg-gray-100 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:-translate-y-2 w-full md:w-[300px]">
          <div className="card-content p-4 bg-black text-white rounded-lg text-left transition-transform group-hover:-translate-y-2">
            <div className="flex justify-start mb-4 text-white-600 text-3xl group-hover:-translate-y-1 transition-transform">
              <FaSmile />
            </div>
            <h3 className="text-xl mb-2 group-hover:-translate-y-1 transition-transform">
              Dedicated Project Manager
            </h3>
            <p className="text-gray-400 text-sm group-hover:-translate-y-1 transition-transform">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <img
            src="/assets/support.svg"
            alt="Project Manager"
            className="card-image w-full h-auto rounded-lg mt-4 hidden md:block"
          />
          <div className="card-content p-4 bg-black text-white rounded-lg mt-4 lg:h-[230px] text-left transition-transform group-hover:-translate-y-2">
            <div className="flex justify-start mb-4 text-white-600 text-3xl group-hover:-translate-y-1 transition-transform">
              <FaUserTie />
            </div>
            <h3 className="text-xl mb-2 group-hover:-translate-y-1 transition-transform">
              24 × 7 Round-the-clock Support
            </h3>
            <p className="text-gray-400 text-sm group-hover:-translate-y-1 transition-transform">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

      
        <div className="benefit-card group bg-gray-100 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:-translate-y-2 w-full md:w-[300px]">
          <img
            src="/assets/satisfaction.svg"
            alt="Customer Satisfaction"
            className="card-image w-full h-auto rounded-lg hidden md:block"
          />
          <div className="card-content p-4 bg-black text-white rounded-lg text-left lg:h-[250px] transition-transform group-hover:-translate-y-2">
            <div className="flex justify-start mb-4 text-white-600 text-3xl group-hover:-translate-y-1 transition-transform">
              <FaHeadset />
            </div>
            <h3 className="text-xl mb-2 group-hover:-translate-y-1 transition-transform">
              100% Customer Satisfaction
            </h3>
            <p className="text-gray-400 text-sm group-hover:-translate-y-1 transition-transform">
              Our top priority is ensuring every customer leaves with a smile.
            </p>
          </div>
          <div className="card-content p-4 bg-black text-white rounded-lg mt-4 text-left transition-transform group-hover:-translate-y-2">
            <div className="flex justify-start mb-4 text-white-600 text-3xl group-hover:-translate-y-1 transition-transform">
              <FaSmile />
            </div>
            <h3 className="text-xl mb-2 group-hover:-translate-y-1 transition-transform">
              Escrow Account
            </h3>
            <p className="text-gray-400 text-sm group-hover:-translate-y-1 transition-transform">
              Keeping your money safe with escrow services. Lorem ipsum lorem
              ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
