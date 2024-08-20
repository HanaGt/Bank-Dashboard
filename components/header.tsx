import { FiSearch, FiSettings, FiBell } from 'react-icons/fi';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center py-4 px-6 bg-white shadow-md">
      <div className="flex justify-between items-center w-full md:w-auto">
        <h2 className="text-2xl text-blue-900 font-semibold">Overview</h2>
        <div className="w-12 h-12 md:hidden">
          <Image
            width={60}
            height={60}
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0 w-full md:w-auto">
        <div className="relative w-full md:w-auto">
          <input
            type="text"
            placeholder="Search for something"
            className="w-full md:w-64 text-blue-200 py-3 pl-10 pr-4 bg-gray-100 rounded-3xl focus:outline-none"
          />
          <span className="absolute left-3 top-4 text-blue-200">
            <FiSearch />
          </span>
        </div>
        <div className="hidden md:flex bg-gray-200 w-12 h-12 rounded-full items-center justify-center cursor-pointer">
          <FiSettings className="text-blue-200 w-6 h-6" />
        </div>
        <div className="relative hidden md:flex bg-gray-200 w-12 h-12 rounded-full items-center justify-center cursor-pointer">
          <FiBell className="text-blue-200 w-6 h-6" />
          <span className="absolute top-0 right-0 inline-flex items-center justify-center w-2 h-2 p-2 text-xs font-bold text-white bg-red-500 rounded-full">
            3
          </span>
        </div>
        <div className="hidden md:block w-12 h-12">
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