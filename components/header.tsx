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
            className="w-64 text-searchColor py-2 pl-10 pr-4 bg-gray-100 rounded-3xl focus:outline-none"
          />
          <span className="absolute left-3 top-2.5 text-gray-500 ">
            <FiSearch />
          </span>
        </div>
        <FiSettings className="text-gray-600 bg-customGray w-6 h-6 cursor-pointer" />

        <div className="relative">
          <FiBell className="text-gray-600 w-6 h-6 cursor-pointer" />
          <span className="absolute top-0 right-0 inline-flex items-center justify-center w-2 h-2 p-2 text-xs font-bold text-white bg-red-500 rounded-full">
            3
          </span>
        </div>
        <div className="w-10 h-10">
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
