const BlogPageContent = () => {
  return (
    <div className="w-full flex justify-center my-4 ">
      <div className="w-11/12 flex flex-col">
        <div className="w-full flex flex-col justify-between items-start lg:mb-8 lg:ml-16">
          <div className="text-gray-500 font-normal text-lg">#Business</div>
          <div className="text-3xl font-semibold mt-2">
            What is Delivery Management and Why Does It Matter?
          </div>
          <div className="text-gray-500 font-normal text-lg mt-2">
            July 19, 2024 | By{" "}
            <span className="font-semibold">Author Name</span>
          </div>
        </div>

        <div className="w-full my-6">
          <img
            src="/assets/image%2020.png"
            alt="Blog Banner"
            className="w-[1500] rounded-lg lg:ml-16"
          />
        </div>

        <div className="w-full flex flex-wrap gap-8 mt-16 lg:ml-8 mb-16">
          <div className="flex-1 lg:max-w-[45%] lg:ml-8 ">
            <div className="text-4xl font-semibold text-gray-800 mb-2">
              Policy Details
            </div>
            <p className="text-gray-700 text-base leading-6">
              You shall also receive an alphanumerical/numerical identification
              number for tracking your grievances with the customer care. We
              assure You that ExMyB will make all reasonable endeavours to
              address the grievance made by You at the latest within 60 (Sixty)
              days from the date of receipt of the grievance.
            </p>

            <div className="text-4xl font-semibold text-gray-800 mt-6 mb-2">
              Governance Framework
            </div>
            <p className="text-gray-700 text-base leading-6">
              You shall also receive an alphanumerical/numerical identification
              number for tracking your grievances with the customer care. We
              assure You that ExMyB will make all reasonable endeavours to
              address the grievance made by You at the latest within 60 (Sixty)
              days from the date of receipt of the grievance.
            </p>
            <p className="text-gray-700 text-base leading-6 mt-4">
              A grievance will be treated as closed if You communicate Your
              acceptance of the response received from the customer care team or
              where,
              <span className="font-semibold text-gray-900">
                {" "}
                You fail to respond to the response received from the customer
                care team within 7 (Seven) days.
              </span>
              A grievance will be treated as closed if You communicate Your
              acceptance of the response received from the customer care team or
              where{" "}
              <span className="font-semibold text-gray-900">
                {" "}
                You fail to respond to the response received from the customer
                care team within 7 (Seven) days.
              </span>
              A grievance will be treated as closed if You communicate Your
              acceptance of the response received from the customer care team or
              where
              <span className="font-semibold text-gray-900">
                You fail to respond to the response received from the customer
                care team within 7 (Seven) days.
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-4 p-5 bg-gradient-to-b from-green-50 to-green-500 rounded-lg max-w-xs lg:ml-52">
            <div className="w-full">
              <img
                src="/assets/blogsbanner.svg"
                alt="Right Container Image"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="flex flex-col items-left gap-4 mt-20">
              <img
                src="/assets/white-logo.png"
                alt="Hubnex White Logo"
                className="w-8 h-8"
              />
              <div className="text-white text-sm font-normal">
                Work better, together
              </div>
              <div className="text-white font-bold  text-2xl text-left">
                Get Evaluate Your Business Score!
              </div>
              <button className="w-full h-12 bg-white text-green-700 font-semibold rounded-md flex justify-center items-center hover:bg-green-700 hover:text-white transition">
                Check Now!
                <span className="ml-2">
                  <img src="/assets/green-arrow.png" alt="Green Arrow" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPageContent;
