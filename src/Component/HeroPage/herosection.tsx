import { FaStar, FaArrowRight } from "react-icons/fa";
import SparklesText from "../../Components/ui/sparkles-text";
import NumberTicker from "../../Components/ui/number-ticker";

const HeroSection = () => {
  const formattedValue = 5910;

  return (
    <div className="bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div className="flex flex-col space-y-8 order-2 lg:order-1">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold">
                <SparklesText
                  text="SaaS Growth With Weekly Tips."
                  className="text-2xl sm:text-2xl md:text-4xl lg:text-6xl text-left sm:whitespace-normal whitespace-nowrap overflow-hidden"
                />
              </h1>
              <p className="text-gray-600 text-base lg:text-lg">
                Clarity gives you the blocks & components you need to create a
                truly professional website, landing page, or admin panel for
                your SaaS. Clarity gives you the blocks & components you need.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-100 text-base">
                Contact Us <FaArrowRight />
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-base">
                Join Us <FaArrowRight />
              </button>
            </div>

            <div className="flex items-center justify-between gap-2 md:gap-4 flex-wrap md:flex-nowrap">
              <div className="flex items-start ">
                <div className="flex -space-x-3 min-w-fit">
                  <img
                    src="/assets/person1.svg"
                    alt="Avatar 1"
                    className="w-12 h-12 rounded-full border-2 border-white relative z-30"
                  />
                  <img
                    src="/assets/person2.svg"
                    alt="Avatar 2"
                    className="w-12 h-12 rounded-full border-2 border-white relative z-20"
                  />
                  <img
                    src="/assets/person3.svg"
                    alt="Avatar 3"
                    className="w-12 h-12 rounded-full border-2 border-white relative z-10"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-3xl font-bold">
                    <NumberTicker value={formattedValue} />+
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Companies are using & it's growing every day
                  </p>
                </div>
              </div>

              <div className="w-px bg-gray-300 h-16 hidden md:block"></div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center">
                  <span className="text-4xl font-bold text-gray-800">
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
                <p className="text-sm text-gray-600">
                  Trusted by the top companies worldwide
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <img
              className="rounded-lg shadow-lg w-full max-w-2xl object-cover"
              src="/assets/hero (1).png"
              alt="Hero"
            />
          </div>
        </div>
      </div>

      <div className="mt-24 mb-16">
        <div className="text-center mb-12">
          <p className="text-xl lg:text-2xl font-bold text-gray-600">
            Join 4,000+ companies already growing
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="flex gap-8 animate-marquee">
            <img
              src="/assets/companylogo1.svg"
              alt="Logo 1"
              className="w-32 h-32 object-contain"
            />
            <img
              src="/assets/companylogo2.svg"
              alt="Logo 2"
              className="w-32 h-32 object-contain"
            />
            <img
              src="/assets/companylogo3.svg"
              alt="Logo 3"
              className="w-32 h-32 object-contain"
            />
            <img
              src="/assets/companylogo4.svg"
              alt="Logo 4"
              className="w-32 h-32 object-contain"
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
