import { FaStar, FaArrowRight } from "react-icons/fa";
import SparklesText from "../../Components/ui/sparkles-text";
import NumberTicker from "../../Components/ui/number-ticker";

const HeroSection = () => {
  const formattedValue = 5910;

  return (
    <div className="bg-white md:w-[90%] w-full container mx-auto">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
    <div className="grid gap-12 lg:grid-cols-2 items-start">
      {/* Left Section */}
      <div className="flex flex-col space-y-8 order-2 lg:order-1 md:w-[85%] w-full container mx-auto ">
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight">
            <SparklesText
              text="SaaS Growth With Weekly Tips."
              className="text-2xl sm:text-2xl md:text-4xl lg:text-6xl text-left sm:whitespace-normal whitespace-nowrap overflow-hidden"
            />
          </h1>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
            Clarity gives you the blocks & components you need to create a
            truly professional website, landing page, or admin panel for
            your SaaS. Clarity gives you the blocks & components you need.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          <button className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-100 text-sm sm:text-base">
            Contact Us <FaArrowRight />
          </button>
          <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm sm:text-base">
            Join Us <FaArrowRight />
          </button>
        </div>

        {/* Stats Section */}
        <div className="flex items-center justify-between gap-2">
          {/* Company Stats */}
          <div className="flex  items-start space-x-2 ">
            <div className="flex -space-x-3">
              <img
                src="/assets/person1.svg"
                alt="Avatar 1"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white"
              />
              <img
                src="/assets/person2.svg"
                alt="Avatar 2"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white"
              />
              <img
                src="/assets/person3.svg"
                alt="Avatar 3"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white"
              />
            </div>
            <div className=" ml-14">
              <div className="text-2xl sm:text-3xl font-bold ml-10">
                <NumberTicker value={formattedValue} />+
              </div>
              <p className="text-xs sm:text-sm text-gray-600 ml-10">
                Companies are using & it's growing every day
              </p>
            </div>
          </div>

          <div className="w-px bg-gray-300 h-12 hidden md:block"></div>

          {/* Ratings */}
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center">
              <span className="text-2xl sm:text-4xl font-bold text-gray-800">
                4.5/5
              </span>
              <span className="flex ml-2 gap-1">
                {[...Array(5)].map((_, index) => (
                  <span key={index} className="text-blue-600">
                    <FaStar />
                  </span>
                ))}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600">
              Trusted by the top companies worldwide
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex justify-center lg:justify-end order-1 lg:order-2">
        <img
          className="rounded-lg shadow-lg w-[90%] md:w-[85%] max-w-lg object-cover"
          src="/assets/hero (1).png"
          alt="Hero"
        />
      </div>
    </div>
  </div>

  {/* Scrolling Section */}
  <div className="">
    <div className="text-center mb-12">
      <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-600">
        Join 4,000+ companies already growing
      </p>
    </div>

    <div className="overflow-hidden">
      <div className="flex gap-8 animate-marquee">
        <img
          src="/assets/companylogo1.svg"
          alt="Logo 1"
          className="w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 object-contain"
        />
        <img
          src="/assets/companylogo2.svg"
          alt="Logo 2"
          className="w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 object-contain"
        />
        <img
          src="/assets/companylogo3.svg"
          alt="Logo 3"
          className="w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 object-contain"
        />
        <img
          src="/assets/companylogo4.svg"
          alt="Logo 4"
          className="w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 object-contain"
        />
      </div>
    </div>
  </div>

  <style>
    {`
      @keyframes marquee {
        0% {
          transform: translateX(100%);
        }
        100% {
          transform: translateX(-100%);
        }
      }
      .animate-marquee {
        animation: marquee 20s linear infinite;
      }
    `}
  </style>
</div>

  );
};

export default HeroSection;
