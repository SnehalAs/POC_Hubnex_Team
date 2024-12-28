/** @format */

import PartnerMarquee from "./PartnerMarquee";
import "./Partner.css";

const PartnerTechnology = () => {
  return (
    <section className='bg-blue-600 p-8 mb-8'>
      <div className='flex items-center justify-around'>
        <h2 className='font-semibold text-3xl hidden md:block text-white mb-32'>
          <span>Technologies We Use!</span>
        </h2>
        <div className='technologies-marquee'>
          <PartnerMarquee />
        </div>
      </div>
    </section>
  );
};

export default PartnerTechnology;
