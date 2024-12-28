
import NumberTicker from "../../Components/ui/number-ticker";

const CaseStudyHome: React.FC = () => {
    return (
        
        <div className="p-4 md:p-10 m-8">
            {/* Breadcrumb */}
            <div className="flex flex-wrap items-center space-x-2 md:space-x-4 p-4 bg-white-100">
                <div className="text-gray-600 cursor-pointer">Home <span className="ml-1">&gt;</span></div>
                <div className="text-gray-600 cursor-pointer">Blogs <span className="ml-1">&gt;</span></div>
                <p className="text-black-800 font-medium text-sm md:text-base">
                    How cybersecurity solution helped an insurance company
                </p>
            </div>

            {/* Main Content */}
            <div className="w-full flex flex-col md:flex-row items-center justify-between p-5 mx-auto  md:p-6 bg-white-100">
                {/* Image Column */}
                <div className="flex justify-center order-1 lg:order-2 mt-10 ">
                    <img
                        src="/public/assets/Frame 21.png"
                        alt="Description of the image"
                        className="rounded-lg shadow-lg max-w-full"
                    />
                </div>

                {/* Text Column */}
                <div className="md:w-1/2 mb-4 md:mb-0 md:pr-6 order-2 lg:order-1 mt-4 ">
                    <h1 className="text-xl lg:text-4xl font-bold ">
                        How cybersecurity solutions helped an insurance company
                    </h1>
                    <p className="text-gray-600 text-base md:text-xl mt-5">
                    Clarity gives you the blocks & components you need to create a truly professional website, landing page, or admin panel for your SaaS. Clarity gives you the blocks & components you need. Clarity gives you the blocks.
                    </p>

                    {/* Information Columns */}
                    <div className="flex flex-wrap justify-center mt-4 space-y-4 md:space-y-0 md:space-x-4">
                        {/* Software */}
                        <div className="flex flex-col items-center p-2 space-y-2 text-center md:flex-row md:space-y-0 md:space-x-2">
                            <img src="/public/assets/Server.png" alt="User Icon" className="w-12 h-12" />
                            <div>
                                <h2 className="text-lg font-semibold text-[#064E3B]">Software</h2>
                                <p className="text-gray-500 text-nowrap">Industry</p>
                            </div>
                        </div>

                        {/* Cybersecurity Solutions */}
                        <div className="flex flex-col items-center p-2 space-y-2 text-center md:flex-row md:space-y-0 md:space-x-2">
                            <img src="/public/assets/user.png" alt="User Icon" className="w-12 h-12" />
                            <div>
                                <h2 className="text-lg font-semibold text-[#064E3B]">Cybersecurity Solutions</h2>
                                <p className="text-gray-500 text-nowrap">Service Provided</p>
                            </div>
                        </div>

                        {/* Company Size */}
                        <div className="flex flex-col items-center p-2 space-y-2 text-center md:flex-row md:space-y-0 md:space-x-2">
                            <img src="/public/assets/location.png" alt="Location Icon" className="w-12 h-12" />
                            <div>
                                <h2 className="text-lg font-semibold text-[#064E3B]">200-500</h2>
                                <p className="text-gray-500 text-nowrap">Company Size</p>
                            </div>
                        </div>
                    </div>


                    {/* Metrics Section */}
                    <div className="flex flex-nowrap flex-col md:flex-row gap-4 mt-8">
                        {/* Better Data Protection */}
                        <div className="w-full md:w-1/3 text-center">
                            <div className="text-2xl lg:text-5xl text-[#064E3B] font-semibold">
                                <NumberTicker value={78.6} className="number-ticker text-[#064E3B]" /> %
                            </div>
                            <p className="text-gray-500 text-sm lg:text-lg mt-2">
                                Better<br />Data Protection
                            </p>
                        </div>

                        {/* Regulatory Compliance */}
                        <div className="w-full md:w-1/3 text-center">
                            <div className="text-2xl lg:text-5xl text-[#064E3B] font-semibold">
                                <NumberTicker value={50.6} className="number-ticker text-[#064E3B]" /> %
                            </div>
                            <p className="text-gray-500 text-sm lg:text-lg mt-2">
                                Improvement in<br />Regulatory Compliance
                            </p>
                        </div>

                        {/* Phishing Mitigation */}
                        <div className="w-full md:w-1/3 text-center">
                            <div className="text-2xl lg:text-5xl text-[#064E3B] font-semibold">
                                <NumberTicker value={25.6} className="number-ticker text-[#064E3B]" /> %
                            </div>
                            <p className="text-gray-500 text-sm lg:text-lg mt-2">
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
