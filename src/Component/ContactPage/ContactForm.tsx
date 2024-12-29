/** @format */

const ContactForm = () => {
    return (
      <section className="flex flex-col items-center justify-center p-4 md:flex-row">
        {/* Left Section */}
        <div className="md:block w-72 mb-8 md:mb-0 lg:mr-72 ">
          <img src="/public/Frame 583.png" alt="" className="w-full" />
        </div>
  
        {/* Form Section */}
        <form className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md md:mr-10">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">Let's Talk - Contact Our Experts</h1>
            <p className="text-sm text-gray-600">
              Tell us a little about yourself and your queries. Our Customer
              Experience Team will reach out to you within 24 hours.
            </p>
          </div>
  
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="block font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="businessName" className="block font-medium mb-1">
                Business Name
              </label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
  
          <div className="mt-4">
            <label htmlFor="businessEmail" className="block font-medium mb-1">
              Business Email
            </label>
            <input
              type="email"
              id="businessEmail"
              name="businessEmail"
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          <div className="mt-4">
            <label htmlFor="contactNumber" className="block font-medium mb-1">
              Contact Number
            </label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          <div className="mt-4">
            <label htmlFor="reason" className="block font-medium mb-1">
              Reason for Contact
            </label>
            <textarea
              id="reason"
              name="reason"
              rows={5}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
          </div>
  
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 mt-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </section>
    );
  };
  
  export default ContactForm;
  