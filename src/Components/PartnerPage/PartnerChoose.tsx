



/** @format */

import RetroGrid from "../ui/retro-grid";

const PartnerChoose = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <h1 className="flex items-center justify-center text-4xl font-bold sm:my-30">Why Choose Us?</h1>
        <RetroGrid />
      </div>
      <div className="relative flex flex-col md:flex-row gap-5 z-10 mt-14">
        <div className="flex flex-col items-center w-80 rounded-3xl shadow-lg p-6 text-center transform transition-transform bg-black">
          <div className="w-full">
            <img src="/image 30.png" alt="" className="w-72 h-48 rounded-t-lg" />
          </div>
          <div className="bg-black p-4 w-full hover:-translate-y-12 ease-in-out duration-300 rounded-b-2xl">
            <h1 className="text-lg font-semibold text-white mt-4">Fast MVP Development</h1>
            <p className="text-sm text-white mt-2 leading-6 ">
              We develop the prototypes and MVP for the ERP System within a few months and
              optimise the final product based on its performance metrics and your feedback.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center w-80 bg-black rounded-3xl shadow-lg p-6 text-center transform transition-transform">
          <div className="w-full">
            <img src="/image 30 (1).png" alt="" className="w-72 h-48 rounded-t-lg" />
          </div>
          <div className="bg-black p-4 w-full hover:-translate-y-12 ease-in-out duration-300 rounded-b-2xl">
            <h1 className="text-lg font-semibold text-white mt-4">Maintenance & Support</h1>
            <p className="text-sm text-white mt-2 leading-6">
              Our work does not end with delivery. We offer complete support and maintenance
              post the launch of the ERP systems to ensure their smooth functioning.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center w-80 bg-black
         rounded-3xl shadow-lg p-6 text-center transform transition-transform">
          <div className="w-full">
            <img src="/image 30 (2).png" alt="" className="w-72 h-48 rounded-t-lg" />
          </div>
          <div className="bg-black p-4 w-full hover:-translate-y-12 ease-in-out duration-300 rounded-b-2xl">
            <h1 className="text-lg font-semibold text-white mt-4">Smooth ERP Integration</h1>
            <p className="text-sm text-white mt-2 leading-6">
              We ensure smooth ERP integration with other business parts, including other ERPs,
              Salesforce, Office Suite, and IoT systems, for effective, seamless business
              operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerChoose;
