import React from 'react';
import { MdHome , MdMiscellaneousServices , MdSettings , MdBarChart} from "react-icons/md";
import { FaMoneyBillTransfer , FaUser , FaCreditCard , FaHandHoldingDollar , FaLightbulb} from "react-icons/fa6";

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-screen bg-white shadow-md flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-extrabold text-blue-900">BankDash.</h1>
      </div>
      <nav className="mt-6">
        <ul className="space-y-4">
         <li className="flex items-center text-gray-500 space-x-4 px-6 py-2 cursor-pointer hover:text-blue-600">
            <MdHome className="text-inherit w-6 h-6" />
              <span className="text-inherit font-semibold">Dashboard</span> 
        </li>

        <li className="flex items-center  text-gray-500 space-x-4 px-6 py-2 cursor-pointer hover:text-blue-600">
            <FaMoneyBillTransfer className="text-inherit w-6 h-6" />
              <span className="text-inherit font-semibold">Transactions</span> 
        </li>
          <li className="flex items-center text-gray-500 space-x-4 px-6 py-2 hover:text-blue-600 cursor-pointer">
            <FaUser className="text-inherit w-6 h-6" />
            <span className="text-inherit font-semibold">Accounts</span>
          </li>
          <li className="flex items-center  text-gray-500 space-x-4 px-6 py-2 hover:text-blue-600 cursor-pointer">
            <MdBarChart className="text-inherit w-6 h-6" />
            <span className="text-inherit font-semibold">Investments</span>
          </li>
          <li className="flex items-center  text-gray-500 space-x-4 px-6 py-2 hover:text-blue-600 cursor-pointer">
            <FaCreditCard className="text-inherit w-6 h-6" />
            <span className="text-inherit font-semibold">Credit Cards</span>
          </li>
          <li className="flex items-center  text-gray-500 space-x-4 px-6 py-2 hover:text-blue-600 cursor-pointer">
            <FaHandHoldingDollar className="text-inherit w-6 h-6" />
            <span className="text-inherit font-semibold">Loans</span>
          </li>
          <li className="flex items-center  text-gray-500 space-x-4 px-6 py-2 hover:text-blue-600 cursor-pointer">
            <MdMiscellaneousServices className="text-inherit w-6 h-6" />
            <span className="text-inherit font-semibold">Services</span>
          </li>
          <li className="flex items-center  text-gray-500 space-x-4 px-6 py-2 hover:text-blue-600 cursor-pointer">
            <FaLightbulb className="text-inherit w-6 h-6" />
            <span className="text-inherit font-semibold">My Privileges</span>
          </li>
          <li className="flex items-center  text-gray-500 space-x-4 px-6 py-2 hover:text-blue-600 cursor-pointer">
            <MdSettings className="text-inherit w-6 h-6" />
            <span className="text-inherit font-semibold">Setting</span>
          </li>
        </ul>
      </nav>


      {/* Logout */}
      {/* <div className="mt-auto p-6">
        <div className="flex items-center space-x-4 cursor-pointer hover:bg-gray-100 py-2 px-6">
          <FiLogOut className="text-inherit w-6 h-6" />
          <span className="text-gray-700">Log Out</span>
        </div>
      </div> */}
    </div>
  );
};

export default Sidebar;
