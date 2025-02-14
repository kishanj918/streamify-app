"use client";
import React, { useState } from "react";
import Link from "next/link";
import routes from "./navbar.routes";
import { usePathname } from "next/navigation";
import LogoutButton from "./LogoutButton";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 items-center justify-between flex">
        <div className="flex h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/overview" className="text-2xl font-bold text-blue-600">
              Streamify
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center ml-8">
            {routes.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className={`relative ${
                  path === item.path ? "text-blue-600" : "text-gray-700"
                } hover:text-blue-600 font-medium transition duration-300 group $}`}
              >
                {item.label}
                {path === item.path ? (
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 w-full"></span>
                ) : (
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="hidden md:flex">
          <LogoutButton />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          {routes.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className={`block px-4 py-2  hover:bg-gray-100 ${
                path === item.path ? "text-blue-600" : "text-gray-700"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="my-2 ml-4">
            <LogoutButton />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
