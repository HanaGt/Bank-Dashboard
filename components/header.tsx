import React from 'react';
import { FiSearch, FiSettings, FiBell } from 'react-icons/fi';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center py-4 px-6 bg-white shadow-md">
      <h2 className="text-2xl text-blue-900 font-semibold">Overview</h2>

      <div className="flex items-center space-x-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for something"
            className="w-64 text-blue-200 py-3 pl-10 pr-4 bg-gray-100 rounded-3xl focus:outline-none"
          />
          <span className="absolute left-3 top-4 text-blue-200 ">
            <FiSearch />
          </span>
        </div>
        <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer">
            <FiSettings className="text-blue-200 w-6 h-6" />
        </div>



        <div className="relative">
        <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer">
            <FiBell className="text-blue-200 w-6 h-6" />
            <span className="absolute top-0 right-0 inline-flex items-center justify-center w-2 h-2 p-2 text-xs font-bold text-white bg-red-500 rounded-full">
            3
          </span>
        </div>
          
        </div>
        <div className="w-12 h-12">
          <Image
            width={60}
            height={60}
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
