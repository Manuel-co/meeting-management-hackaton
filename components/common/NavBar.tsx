"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between">
        <Image
          src="/img/logo.png"
          alt="Logo"
          width={100}
          height={20}
          className="transition-transform duration-300 ease-in-out hover:scale-105"
        />
        <button
          className="lg:hidden p-2 text-[#002267] focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? (
            <span className="text-3xl">&times;</span> // Close Icon
          ) : (
            <span className="text-3xl">&#9776;</span> // Hamburger Icon
          )}
        </button>
        <nav
          id="mobile-menu"
          className={`fixed top-0 right-0 bg-white lg:bg-transparent lg:static lg:flex lg:flex-row lg:items-center lg:gap-10 lg:opacity-100 transition-transform duration-300 ease-in-out ${
            isMenuOpen
              ? 'translate-x-0 w-3/4 h-full flex flex-col justify-start p-4'
              : 'translate-x-full'
          } lg:translate-x-0 lg:h-auto lg:w-auto lg:flex lg:overflow-visible`}
        >
          <div className="lg:hidden flex justify-end w-full p-4">
            <button
              className="text-3xl text-[#002267] focus:outline-none"
              onClick={() => setIsMenuOpen(false)}
            >
              &times;
            </button>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-10 lg:mr-10 text-[#002267]">
            <a href="#" className="py-1 lg:py-0 hover:text-blue-600">How it works</a>
            <a href="#" className="py-1 lg:py-0 hover:text-blue-600">Testimonial</a>
            <a href="#" className="py-1 lg:py-0 hover:text-blue-600">Features</a>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-10 p-4 lg:p-0">
            <Link href="/signin">
              <button className="btn text-[#38ACFF] border-none hover:text-blue-950 py-1 lg:py-0">
                Sign in
              </button>
            </Link>
            <Link href="/signup">
              <button className="btn text-[#38ACFF] border-none hover:text-blue-950 py-1 lg:py-0">
                Sign up
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
