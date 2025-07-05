import React, { useState } from 'react';
import {
  LayoutDashboard, BookOpen, Receipt, Table2, Clock, Settings, LogOut, ChevronLeft, ChevronRight, UserRound, Cookie
} from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const menu = [
    { name: 'Dashboard', icon: <LayoutDashboard />, path: '/dashboard' },
    { name: 'Menu', icon: <BookOpen />, path: '/menu' },
    { name: 'Orders', icon: <Receipt />, path: '/orders' },
    { name: 'Table', icon: <Table2 />, path: '/table' },
    { name: 'Accounting', icon: <Clock />, path: '/accounting' },
    { name: 'Settings', icon: <Settings />, path: '/settings' },
  ];

  return (
    <div className={`relative h-screen bg-white shadow-md transition-all duration-300 flex flex-col justify-between ${isOpen ? 'w-64' : 'w-15'}`}>
      <div className={`flex items-center h-13 ${isOpen ? 'pl-5' : 'justify-center'}`}>
        <h2 className={`text-lg font-semibold me-1 ${isOpen ? 'block' : 'hidden'}`}>Restaurant </h2>
        <Cookie size={30} className={`text-yellow-500 block`} />

      </div>
      {/* Menü listesi */}
      <ul className="flex-1 px-2 mt-1 space-y-1">
        {menu.map((item, index) => (
          <li
            key={index}
            className={`flex items-center gap-4 p-3 rounded-lg hover:bg-yellow-100 transition ${item.name === 'Orders' ? 'bg-yellow-300 font-semibold text-black' : 'text-gray-700'}`}
          >
            {item.icon}
            {isOpen && <span>{item.name}</span>}
          </li>
        ))}
      </ul>

      {/* çıkış */}
      <div className={`p-4 flex text-red-400 ${isOpen ? 'pl-5 gap-2' : 'justify-center'}`}>
        <LogOut size={20} className=" mb-2" /> {isOpen && <span className="text-sm  font-medium">Logout</span>}
      </div>

      {/* Toggle Button: Sidebar'ın sağ kenarında */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute h-10 top-1/2 right-0 translate-x-1/2 bg-white border rounded-sm shadow-md p-1 z-50 hover:bg-gray-100"
      >
        {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
      </button>
    </div>
  );
}
