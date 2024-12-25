/** @format */

import NumberTicker from "../ui/number-ticker";

const GlobeSection = () => {
  return (
    <section className='flex flex-col md:flex-row items-center justify-between px-8 py-16 md:py-32 md:px-32'>
      <div className='order-1 mb-5 md:order-2 w-full'>
        <img
          src='/globe (2).png'
          alt='Globe'
          className='w-full max-w-[400px] mx-auto'
        />
      </div>

      <div className='order-2 md:order-none text-center md:text-left max-w-full md:max-w-[50%] mt-8 md:mt-0'>
        <h1 className='text-3xl md:text-4xl font-bold leading-tight text-black mb-4'>
          Unleash the full power of data
        </h1>
        <p className='text-lg text-gray-800 mb-8'>
          We guide global businesses through the challenges of developing
          purposeful technology that addresses their needs and advances their
          growth. We have established offices in India, the UAE, and the USA.
        </p>
        <div className='flex flex-col md:flex-row gap-4 md:gap-8 mb-8'>
          <div className='text-center'>
            <span className='block text-3xl text-purple-600 font-bold'>
              <NumberTicker value={60} className='text-purple-600' />+
            </span>
            <span>Integrations</span>
          </div>
          <div className='text-center'>
            <span className='block text-3xl text-purple-600 font-bold'>
              <NumberTicker value={600} className='text-purple-600' />%
            </span>
            <span>Return on Investment</span>
          </div>
          <div className='text-center'>
            <span className='block text-3xl text-purple-600 font-bold'>
              4K+
            </span>
            <span>Global Customers</span>
          </div>
        </div>
        <div className='flex flex-col md:flex-row items-center gap-4'>
          <span className='text-sm text-gray-800'>Featured in</span>
          <div className='flex justify-center'>
            <img
              src='/Logos.png'
              alt='DailyHunt'
              className='w-52 md:w-80 cursor-pointer'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobeSection;
