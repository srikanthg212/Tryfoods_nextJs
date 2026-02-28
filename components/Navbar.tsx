"use client";

import Link from "next/link";

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
    <header className="fixed w-full z-50 bg-white/70 backdrop-blur-lg shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-800">
          try<span className="text-green-600">.foods</span>
        </h1>

        <nav className="hidden md:flex gap-8 text-green-800 font-medium">
          {items.map((item) => (
            <Link
              key={item}
              href="#"
              className="relative group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-green-600 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
