import SparklesText from "../../Components/ui/sparkles-text";
import NumberTicker from "../../Components/ui/number-ticker";
const PartnerHero = () => {
  return (
    <section className='flex flex-col items-center p-5 w-[85%] container mx-auto'>
      <div className='md:ml-4 flex text-gray-600 text-base w[85%] container mx-auto'>
        <a href='#' className='text-black'>
          Home
        </a>
        <span className='mx-2'>&gt;</span>
        <span>Partner Page</span>
      </div>

      <div className='flex flex-col md:flex-row max-w-[1200px] w-full justify-between mt-10'>
        {/* Image comes first on small screens */}
        <div className='flex-1 flex justify-center items-center order-1 md:order-2'>
          <img
            src='/partner-hero-img.png'
            alt='Partner network'
            className='w-66 h-66  object-cover'
          />
        </div>

        {/* Content comes below the image on small screens */}
        <div className='flex-1 pr-5 text-left order-2 md:order-1'>
          <SparklesText
            text='Join Your Partner Network'
            className='text-4xl md:text-6xl mt-4
            md:font-semibold font-medium leading-normal'
          />

          <p className='text-xl text-gray-700 my-5'>
            Clarity gives you the blocks & components you need to create a truly
            professional website, landing page, or admin panel for your SaaS.
            Clarity gives you the blocks & components you need. Clarity gives
            you the blocks.
          </p>

          <div className='flex gap-6 mt-5'>
            <button
              style={{ border: "1px solid black" }}
              className='md:px-6 md:py-2 rounded-md text-xl font-normal hover:bg-gray-200 transition p-2'
            >
              Contact Us &rarr;
            </button>
            <button className='px-8 py-3 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-700 transition'>
              Join Us &rarr;
            </button>
          </div>

          <div className='flex flex-col md:flex-row gap-10 mt-8'>
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <img
                  src='/Image.png'
                  alt='User 1'
                  className='w-30 h-10 rounded-full'
                />
              </div>
              <div className='ml-5'>
                <span className='block text-4xl md:text-3xl font-bold text-black'>
                  <NumberTicker value={5910} />+
                </span>
                <span className='text-lg text-gray-600'>
                  Companies are using & it’s growing every day
                </span>
              </div>
            </div>
            
            <div className='flex flex-col items-start text-center'>
              <span className='text-4xl font-bold md:text-3xl text-black m-auto'>
                4.5/5 <span className='text-blue-600 md:text-2xl'>★★★★★</span>
              </span>
              <span className='text-lg text-gray-600  '>
                Trusted by the top companies worldwide
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerHero;
