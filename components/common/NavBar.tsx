"use client";

import { useState } from "react";
import Image from "next/image";
// import { X } from "lucide-react";
import Link from "next/link";

function NavBar() {
  return (
    <div className="container mx-auto text-2xl pt-10">
      <div className="flex justify-between items-center">
        <Image src="/img/logo.png" alt="Logo" width="100" height="20"  className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 ration-700"/>
        <div className="flex items-center gap-10 text-[#002267]">
          <a href="#" className="mr-5 ">How it works</a>
          <a href="#" className="mr-5">Testimonial</a>
          <a href="#" className="mr-5">Features</a>
        </div>
        <div className="flex">
        <Link href="/signin"> 
          <button className="btn  text-[#38ACFF] border-none hover:text-blue-950 mr-5">
            Sign in
          </button>
          </Link>
          <Link href="/signup"> 
          <button className="btn  text-[#38ACFF] border-none hover:text-blue-950 mr-5">
            {" "}
            Sign up
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
