"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { VideoCamera } from "@phosphor-icons/react";

export default function page() {
  return (
    <div className="container mx-auto my-10">
      <div className="px-16 py-10">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-10">
            <Image
              src="/img/logo.png"
              alt="Hero"
              width="231"
              height="61"
              className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 ration-700"
            />
            <div className="text-6xl font-medium ">
              <div className="text-[#5D5DFF]">Meeting..Scheduling..</div>
              <div className="text-[#002267]">& Collaboration</div>
            </div>
            <p className="text-[#002267] font-[22px]">
              Schedule or start an instance interaction with fellow team mates
              now!
            </p>
            <div className="flex gap-4">
              <Link href="/new-meet">
                <button
                  type="submit"
                  className="text-white bg-[#38ACFF] rounded-[10px]  flex items-center gap-4 w-auto font-medium h-auto text-sm px-4 py-2"
                >
                  <VideoCamera size={28} />
                  Schedule your first Meeting
                </button>
              </Link>
              <div className="border-[5px] border-[#38ACFF] rounded-[10px] flex pl-2">
                <input
                  name="floating_password"
                  id="floating_password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="Enter a code or link here "
                  required
                />

                <button
                  type="submit"
                  className="text-white rounded-l-[10px] text-sm px-4 py-2 bg-[#38ACFF] "
                >
                  Join
                </button>
              </div>
            </div>
          </div>
          <Image
            src="/img/s-co.png"
            alt="Hero"
            width="544"
            height="529"
            className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 ration-700"
          />
        </div>
      </div>
    </div>
  );
}
