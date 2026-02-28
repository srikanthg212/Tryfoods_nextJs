"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);

  const items = [
    { name: "Home", underline: false },
    { name: "Menu", underline: true },
    { name: "Cart", underline: false },
    { name: "Gallery", underline: false },
    { name: "About Us", underline: false },
    { name: "Contact", underline: false },
  ];

  return (
    <header className="fixed w-full z-50 pt-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white/75 backdrop-blur-md border border-white/15 rounded-2xl shadow-lg">
          <div className="px-4 sm:px-6 py-4 flex justify-between items-center">
            <div className="flex items-center bg-white/40 backdrop-blur-sm px-3 py-2 rounded-lg">
              <Image 
                src="/logo.png" 
                alt="Tryfoods Logo" 
                width={312} 
                height={108}
                className="h-24 sm:h-28 w-auto"
                priority
              />
            </div>

            <nav className="hidden md:flex gap-6 lg:gap-8 items-center">
              {items.map((item) => (
                <Link
                  key={item.name}
                  href="#"
                  className={`relative text-[#2d5016] font-medium text-[15px] lg:text-[16px] transition-colors hover:text-[#4a7c2c] ${
                    item.underline ? 'border-b-2 border-[#2d5016] pb-1' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="relative">
              <button 
                onClick={() => setSearchOpen(!searchOpen)}
                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-white/40 backdrop-blur-sm hover:bg-white/60 transition-all"
              >
                <svg 
                  className="w-5 h-5 text-[#2d5016]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                  />
                </svg>
                {searchOpen && (
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-40 outline-none bg-transparent text-[#2d5016] placeholder:text-[#2d5016]/60"
                    autoFocus
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
