'use client'

import React, { useState, useEffect, useRef } from 'react';
import { MdHome, MdMiscellaneousServices, MdSettings, MdBarChart } from "react-icons/md";
import { FaBars, FaMoneyBillTransfer, FaUser, FaCreditCard, FaHandHoldingDollar, FaLightbulb } from "react-icons/fa6";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  return (
    <div>
      <div className="md:hidden flex items-center p-4">
        <FaBars className="w-6 h-6 cursor-pointer" onClick={toggleSidebar} />
      </div>
      <div ref={sidebarRef} className={`md:block ${isOpen ? 'block fixed inset-0 w-full h-full bg-white z-50' : 'hidden'} md:static md:w-auto md:h-auto md:bg-transparent`}>
      <div className="p-6">
        <h1 className="text-2xl font-extrabold text-blue-900">BankDash.</h1>
      </div>
        <ul className="space-y-2 p-4">
          <li className="flex items-center text-gray-500 space-x-4 px-6 py-2 hover:text-blue-600 cursor-pointer">
            <MdHome className="text-inherit w-6 h-6" />
            <span className="text-inherit font-semibold">Home</span>
          </li>
          <li className="flex items-center text-gray-500 space-x-4 px-6 py-2 hover:text-blue-600 cursor-pointer">
            <FaMoneyBillTransfer className="text-inherit w-6 h-6" />
            <span className="text-inherit font-semibold">Transactions</span>
          </li>
          <li className="flex items-center text-gray-500 space-x-4 px-6 py-2 hover:text-blue-600 cursor-pointer">
            <FaUser className="text-inherit w-6 h-6" />
            <span className="text-inherit font-semibold">Accounts</span>
          </li>
          <li className="flex items-center text-gray-500 space-x-4 px-6 py-2 hover:text-blue-600 cursor-pointer">
            <MdBarChart className="text-inherit w-6 h-6" />
            <span className="text-inherit font-semibold">Investments</span>
          </li>
          <li className="flex items-center text-gray-500 space-x-4 px-6 py-2 hover:text-blue-600 cursor-pointer">
            <FaCreditCard className="text-inherit w-6 h-6" />
            <span className="text-inherit font-semibold">Credit Cards</span>
          </li>
          <li className="flex items-center text-gray-500 space-x-4 px-6 py-2 hover:text-blue-600 cursor-pointer">
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
      </div>
    </div>
  );
};

export default Sidebar;