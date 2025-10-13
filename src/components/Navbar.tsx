"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Area */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold">
              My Portfolio
            </Link>
          </div>

          {/* Desktop navbar links */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-gray-200">
              Home
            </Link>
            <Link href="#about" className="hover:text-gray-200">
              About
            </Link>
            <Link href="#projects" className="hover:text-gray-200">
              Projects
            </Link>
            <Link href="#contact" className="hover:text-gray-200">
              Contact
            </Link>
          </div>

          {/* Mobile device dropdown */}
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link href="/" className="block hover:text-gray-200">
            Home
          </Link>
          <Link href="#about" className="block hover:text-gray-200">
            About
          </Link>
          <Link href="#projects" className="block hover:text-gray-200">
            Projects
          </Link>
          <Link href="#contact" className="block hover:text-gray-200">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
