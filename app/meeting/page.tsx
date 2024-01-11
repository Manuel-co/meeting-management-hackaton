"use client";


import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { VideoCamera } from "@phosphor-icons/react";

export default function page() {
  return (
    <div className="container mx-auto my-10">
      <div className="px-16 py-10">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-10">
            <div className="text-6xl font-medium ">
            <Image src="/img/logo.png" alt="Hero" width="231" height="61" className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 ration-700" />
              <div className="text-[#5D5DFF]">Meeting..Scheduling..</div>
              <div className="text-[#5D5DFF]">& Collaboration</div>
              
            </div>
            <p className="text-[#002267] font-[22px]">
            Schedule or start an instance interaction with fellow team mates now!   
            </p>
            <div className='flex gap-4'>
            <Link href="/new-meet">
            <button className="flex justify-center content-center	 gap-2btn p-2 bg-[#38ACFF] text-white rounded-full border-none h-10">
            <VideoCamera size={28} color="#761e1e" />
              Schedule your first Meeting
            </button>
            </Link>
            <Link href="/meeting">
            <button className="flex justify-center content-center	 gap-2btn p-2 bg-[#38ACFF] text-white rounded-full border-none h-10">
        
              Schedule your first Meeting
            </button>
            </Link>
            </div>
          </div>
          <Image src="/img/s-co.png" alt="Hero" width="544" height="529" className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 ration-700" />
        </div>
      </div>
    </div>
  )
}
