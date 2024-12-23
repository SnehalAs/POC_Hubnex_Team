import React from "react";
import { MdDoubleArrow } from "react-icons/md";
import { FaPencil, FaFolderOpen, FaCheckDouble } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

const Howto = () => {
  return (
    <div className="py-12 px-6 bg-gray-100">
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl font-semibold pb-8">How to get boards with us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="flex flex-col items-center bg-white p-10 rounded-md shadow-md">
            <MdDoubleArrow className="w-6 h-6 text-gray-600" />
            <FaPencil className="w-6 h-6 text-gray-600" />
            <p className="text-sm font-medium text-gray-700 mt-4 border border-gray-400 rounded-full px-4 py-1">Step 1</p>
            <h3 className="text-lg font-bold mt-4">Free sign-up</h3>
            <p className="text-sm font-light text-center mt-2">
              Register on our Partner Dashboard and have your contact details verified instantly.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white p-10 rounded-md shadow-md">
            <MdDoubleArrow className="w-6 h-6 text-gray-600" />
            <CgProfile className="w-6 h-6 text-gray-600" />
            <p className="text-sm font-medium text-gray-700 mt-4 border border-gray-400 rounded-full px-4 py-1">Step 2</p>
            <h3 className="text-lg font-bold mt-4">Profile setup</h3>
            <p className="text-sm font-light text-center mt-2">
              Access your personalised dashboard to complete your profile.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white p-10 rounded-md shadow-md">
            <MdDoubleArrow className="w-6 h-6 text-gray-600" />
            <FaFolderOpen className="w-6 h-6 text-gray-600" />
            <p className="text-sm font-medium text-gray-700 mt-4 border border-gray-400 rounded-full px-4 py-1">Step 3</p>
            <h3 className="text-lg font-bold mt-4">Showcase your work</h3>
            <p className="text-sm font-light text-center mt-2">
              Upload your portfolio and past work examples to attract clients to your profile.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white p-10 rounded-md shadow-md">
            <MdDoubleArrow className="w-6 h-6 text-gray-600" />
            <FaCheckDouble className="w-6 h-6 text-gray-600" />
            <p className="text-sm font-medium text-gray-700 mt-4 border border-gray-400 rounded-full px-4 py-1">Step 4</p>
            <h3 className="text-lg font-bold mt-4">Start Working</h3>
            <p className="text-sm font-light text-center mt-2">
              Get verified by our team and easily manage your work through our Partner Dashboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howto;