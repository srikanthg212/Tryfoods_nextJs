"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const items = [
    { name: "Home", underline: false },
    { name: "Menu", underline: true },
    { name: "Cart", underline: false },
    { name: "Gallery", underline: false },
    { name: "About Us", underline: false },
    { name: "Contact", underline: false },
  ];

  return (
    <header className="fixed w-full z-50 bg-white/60 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="Tryfoods Logo" 
            width={200} 
            height={70}
            className="h-16 w-auto"
            priority
          />
        </div>

        <nav className="hidden md:flex gap-8 items-center">
          {items.map((item) => (
            <Link
              key={item.name}
              href="#"
              className={`relative text-[#2d5016] font-medium text-[16px] transition-colors hover:text-[#4a7c2c] ${
                item.underline ? 'border-b-2 border-[#2d5016] pb-1' : ''
              }`}
            >
              {item.name}
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
