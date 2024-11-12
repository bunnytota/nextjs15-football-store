// TemporaryDrawer.js
import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Link from 'next/link';

const TemporaryDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownItemClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div>
      {/* Updated Menu Button */}
      <button
        className="cursor-pointer text-black bg-[#f8b57ce6] min-w-[50px] p-2.5 transition-transform duration-400 ease-in-out hover:bg-[rgb(254,120,71)] rounded-full flex justify-center items-center border-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={24} />
      </button>

      {/* Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-100"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer Content */}
      <div
        className={`fixed top-0 left-[-250px] w-[250px] h-full bg-white shadow-md z-1000 transition-left duration-300 ease-in-out ${
          isOpen ? 'left-0' : ''
        }`}
      >
        <nav className="flex flex-col p-5">
          <Link href="/">
            <button
              onClick={() => setIsOpen(false)}
              className="border-none bg-none text-left text-base cursor-pointer transition-colors duration-200 hover:bg-[#f8b57ce6] px-5 py-3"
            >
              Home
            </button>
          </Link>

          <div className="w-full">
            <button
              className="w-full border-none bg-none text-left text-base cursor-pointer flex justify-between items-center transition-colors duration-200 hover:bg-[#f8b57ce6] px-5 py-3"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Categories
              <span
                className={`transition-transform duration-300 ease-in-out ${
                  isDropdownOpen ? 'rotate-180' : ''
                }`}
              >
                ▼
              </span>
            </button>

            <div
              className={`max-h-0 overflow-hidden transition-max-height duration-300 ease-in-out ${
                isDropdownOpen ? 'max-h-[200px]' : ''
              }`}
            >
              <Link href="/type/clubs">
                <button
                  onClick={() => setIsOpen(false)}
                  className="border-none bg-none text-left text-sm cursor-pointer w-full transition-colors duration-200 hover:bg-[rgb(254,120,71)] px-10 py-3"
                >
                  Club
                </button>
              </Link>
              <Link href="/type/international">
                <button
                  onClick={() => setIsOpen(false)}
                  className="border-none bg-none text-left text-sm cursor-pointer w-full transition-colors duration-200 hover:bg-[rgb(254,120,71)] px-10 py-3"
                >
                  International
                </button>
              </Link>
              <Link href="/type/retro">
                <button
                  onClick={() => setIsOpen(false)}
                  className="border-none bg-none text-left text-sm cursor-pointer w-full transition-colors duration-200 hover:bg-[rgb(254,120,71)] px-10 py-3"
                >
                  Retro
                </button>
              </Link>
              <Link href="/type/allproducts">
                <button
                  onClick={() => setIsOpen(false)}
                  className="border-none bg-none text-left text-sm cursor-pointer w-full transition-colors duration-200 hover:bg-[rgb(254,120,71)] px-10 py-3"
                >
                  All Products
                </button>
              </Link>
            </div>
          </div>

          <Link href="/privacy-policy">
            <button
              onClick={() => setIsOpen(false)}
              className="border-none bg-none text-left text-base cursor-pointer transition-colors duration-200 hover:bg-[#f8b57ce6] px-5 py-3"
            >
              Privacy Policy
            </button>
          </Link>
          <Link href="/contact-us">
            <button
              onClick={() => setIsOpen(false)}
              className="border-none bg-none text-left text-base cursor-pointer transition-colors duration-200 hover:bg-[#f8b57ce6] px-5 py-3"
            >
              Contact Us
            </button>
          </Link>
          <Link href="/our-services">
            <button
              onClick={() => setIsOpen(false)}
              className="border-none bg-none text-left text-base cursor-pointer transition-colors duration-200 hover:bg-[#f8b57ce6] px-5 py-3"
            >
              Our Services
            </button>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default TemporaryDrawer;