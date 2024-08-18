import React from 'react';
import { FiHome, FiCreditCard, FiDollarSign, FiUser, FiSettings, FiBriefcase, FiPieChart, FiLogOut } from 'react-icons/fi';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-screen bg-white shadow-md flex flex-col">
      {/* Logo */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-blue-600">BankDash.</h1>
      </div>

      {/* Navigation Links */}
      <nav className="mt-6">
        <ul className="space-y-4">
          <li className="flex items-center space-x-4 px-6 py-2 hover:bg-gray-100 cursor-pointer">
            <FiHome className="text-gray-600 w-5 h-5" />
            <span className="text-gray-700">Dashboard</span>
          </li>
          <li className="flex items-center space-x-4 px-6 py-2 hover:bg-gray-100 cursor-pointer">
            <FiDollarSign className="text-gray-600 w-5 h-5" />
            <span className="text-gray-700">Transactions</span>
          </li>
          <li className="flex items-center space-x-4 px-6 py-2 hover:bg-gray-100 cursor-pointer">
            <FiUser className="text-gray-600 w-5 h-5" />
            <span className="text-gray-700">Accounts</span>
          </li>
          <li className="flex items-center space-x-4 px-6 py-2 hover:bg-gray-100 cursor-pointer">
            <FiBriefcase className="text-gray-600 w-5 h-5" />
            <span className="text-gray-700">Investments</span>
          </li>
          <li className="flex items-center space-x-4 px-6 py-2 hover:bg-gray-100 cursor-pointer">
            <FiCreditCard className="text-gray-600 w-5 h-5" />
            <span className="text-gray-700">Credit Cards</span>
          </li>
          <li className="flex items-center space-x-4 px-6 py-2 hover:bg-gray-100 cursor-pointer">
            <FiPieChart className="text-gray-600 w-5 h-5" />
            <span className="text-gray-700">Loans</span>
          </li>
          <li className="flex items-center space-x-4 px-6 py-2 hover:bg-gray-100 cursor-pointer">
            <FiSettings className="text-gray-600 w-5 h-5" />
            <span className="text-gray-700">Services</span>
          </li>
          <li className="flex items-center space-x-4 px-6 py-2 hover:bg-gray-100 cursor-pointer">
            <FiSettings className="text-gray-600 w-5 h-5" />
            <span className="text-gray-700">My Privileges</span>
          </li>
          <li className="flex items-center space-x-4 px-6 py-2 hover:bg-gray-100 cursor-pointer">
            <FiSettings className="text-gray-600 w-5 h-5" />
            <span className="text-gray-700">Setting</span>
          </li>
        </ul>
      </nav>


      {/* Logout */}
      {/* <div className="mt-auto p-6">
        <div className="flex items-center space-x-4 cursor-pointer hover:bg-gray-100 py-2 px-6">
          <FiLogOut className="text-gray-600 w-5 h-5" />
          <span className="text-gray-700">Log Out</span>
        </div>
      </div> */}
    </div>
  );
};

export default Sidebar;
