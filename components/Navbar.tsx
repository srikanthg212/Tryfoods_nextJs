"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const items = [
    "Home",
    "Menu",
    "Cart",
    "Gallery",
    "About Us",
    "Contact",
  ];

  return (
    <header className="fixed w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm border-b border-green-100/20">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="Tryfoods Logo" 
            width={180} 
            height={60}
            className="h-14 w-auto"
            priority
          />
        </div>

        <nav className="hidden md:flex gap-8 text-[#2d5016] font-medium text-[15px]">
          {items.map((item) => (
            <Link
              key={item}
              href="#"
              className="relative group transition-colors hover:text-[#6b9b37]"
            >
              {item}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#6b9b37] transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <button className="hidden md:block">
          <svg 
            className="w-6 h-6 text-[#2d5016]" 
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
        </button>
      </div>
    </header>
  );
}
