"use client";


import Link from "next/link";
import { useState } from "react";

export default function NavBar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="flex justify-between bg-black text-black px-10 py-10 w-full">
      <Link href="/pages/home">
        <p className="text-white">On The Go Logo</p>
      </Link>
      <div className="relative">
        <button onClick={toggleMenu} className="inline-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width={40}
            height={40}
            className="fill-current bg-white p-1 rounded-md"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-60 bg-white rounded-md shadow-lg py-1">
            <Link href="/pages/home" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">HOME</Link>
            <Link href="/pages/get-quote" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">GET A QUOTE</Link>
            <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">SERVICES</Link>
            <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">SECTORS</Link>
            <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">FREE VIDEO MARKETING PLAN</Link>
            <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">ABOUT US</Link>
            <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">CAREERS</Link>
            <Link href="/pages/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">LOG IN/ SIGN UP</Link>
            <button className="border-2 rounded-md text-left ml-5 mt-8 mb-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">CONTACT US</button>
          </div>
        )}
      </div>
    </div>
    </>
  );
}