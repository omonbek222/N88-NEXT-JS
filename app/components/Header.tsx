'use client';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <div className="flex items-center gap-4">
        <IoMenuOutline className="text-2xl" />
        <img src="/logo.svg" alt="Domosbor" className="h-6" />
      </div>
      <div className="text-sm text-gray-700">
        <FaPhoneAlt className="inline mr-2" /> 8 (800) 301-50-51
      </div>
    </header>
  );
}
