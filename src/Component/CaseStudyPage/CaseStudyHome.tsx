
import NumberTicker from "../../Components/ui/number-ticker";

const CaseStudyHome: React.FC = () => {
    return (
        
        <div className="p-4 w-[90%] container mx-auto  ">
           
            {/* Main Content */}
            <div className="w-[95%] flex flex-col md:flex-row items-center justify-between p-2 mx-auto  bg-white-100 ">
                {/* Image Column */}
                <div className="flex justify-center order-1 lg:order-2">
                    <img
                        src="/assets/Frame 21.png"
                        alt="Description of the image"
                        className="rounded-lg shadow-lg max-w-full"
                    />
                </div>

                {/* Text Column */}
                <div className="md:w-1/2 mb-4 md:mb-0 md:pr-6 order-2 lg:order-1 mt-2 ">
                    <h1 className="text-xl lg:text-4xl font-bold ">
                        How cybersecurity solutions helped an insurance company
                    </h1>
                    <p className="text-gray-600 text-base md:text-xl mt-5">
                    Clarity gives you the blocks & components you need to create a truly professional website, landing page, or admin panel for your SaaS. Clarity gives you the blocks & components you need. Clarity gives you the blocks.
                    </p>

                    {/* Information Columns */}
                    <div className="flex justify-center mt-4 space-y-2 md:space-y-0 md:space-x-2">
                        {/* Software */}
                        <div className="flex flex-col items-center space-y-2 text-center md:flex-row md:space-y-0 md:space-x-2 ">
                            <img src="/assets/Server.png" alt="Server Icon" className="w-12 h-12" />
                            <div>
                                <h3 className="text-lg font-semibold text-[#064E3B] ">Software</h3>
                                <p className="text-gray-500 text-nowrap">Industry</p>
                            </div>
                        </div>

                        {/* Cybersecurity Solutions */}
                        <div className="flex flex-col items-center   text-center md:flex-row md:space-y-0 md:space-x-2 ">
                            <img src="/assets/user.png" alt="User Icon" className="w-12 h-12" />
                            <div>
                                <h3 className="text-lg w-[full] font-semibold text-[#064E3B] ">Cybersecurity Solutions</h3>
                                <p className="text-gray-500 text-nowrap">Service Provided</p>
                            </div>
                        </div>

                        {/* Company Size */}
                        <div className="flex flex-col items-center space-y-2 text-center md:flex-row md:space-y-0 md:space-x-2">
                            <img src="/assets/location.png" alt="Location Icon" className="w-12 h-12" />
                            <div>
                                <h3 className="text-lg font-semibold text-[#064E3B]">200-500</h3>
                                <p className="text-gray-500 text-nowrap">Company Size</p>
                            </div>
                        </div>
                    </div>


                    {/* Metrics Section */}
                    <div className="flex flex-nowrap flex-col md:flex-row gap-4 mt-8">
                        {/* Better Data Protection */}
                        <div className="w-full md:w-1/3 text-center">
                            <div className="text-2xl lg:text-3xl font-bold">
                                <NumberTicker value={76} className="number-ticker " /> %
                            </div>
                            <p className="text-gray-500 text-sm w-full font-semibold mt-2">
                                Better Data <br /> Protection
                            </p>
                        </div>

                        {/* Regulatory Compliance */}
                        <div className="w-full md:w-1/3 text-center">
                            <div className="text-2xl lg:text-3xl font-bold">
                                <NumberTicker value={50} className="number-ticker " /> %
                            </div>
                            <p className="text-gray-500 text-sm w-full font-semibold mt-2">
                                Improvement in<br />Regulatory Compliance
                            </p>
                        </div>

                        {/* Phishing Mitigation */}
                        <div className="w-full md:w-1/3 text-center">
                            <div className="text-2xl lg:text-3xl  font-bold">
                                <NumberTicker value={25} className="number-ticker " /> %
                            </div>
                            <p className="text-gray-500 text-sm w-full font-semibold mt-2">
                                Phishing<br />Mitigation
                            </p>
                        </div>
                    </div>
                </div>
                

                
            </div>
        </div>
    );
};

export default CaseStudyHome;
