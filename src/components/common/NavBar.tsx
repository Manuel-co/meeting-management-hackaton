"use client";

import { useState } from "react";
import Image from "next/image";
// import { X } from "lucide-react";
import Link from "next/link";

function NavBar() {
  return (
    <div className="container mx-auto text-2xl pt-10">
      <div className="flex justify-between items-center">
        <Image src="/img/logo.png" alt="Logo" width="100" height="20" />
        <div className="flex items-center gap-10 text-[#002267]">
            <p className="mr-5 ">How it works</p>
            <p className="mr-5">Testimonial</p>
            <p className="mr-5">Features</p>
        </div>
        <div className="flex">
            <button className="btn  text-[#38ACFF] border-none hover:text-blue-950 mr-5">Sign in</button>
            <button className="btn  text-[#38ACFF]  hover:text-blue-950 mr-5 border-2 border-[#38ACFF] rounded-[30px] "> Sign up</button>
        </div>

      </div>
    </div>
  );
}

export default NavBar;
