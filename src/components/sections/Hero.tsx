import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="container mx-auto my-10">
      <div className="px-16 py-10">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-10">
            <p className="text-6xl font-medium ">
              <div className="text-[#5D5DFF]">Seamless</div>
              <div className="text-[#002267]">
                {" "}
                Meeting <br />
                Collaboration <br />
                for Teams
              </div>
            </p>
            <p className="text-[#002267] font-[22px]">
              Join thousands of satisfied users. Try MeetHub today!
            </p>
            <button className="btn bg-[#38ACFF] text-white rounded-full border-none h-10">
              Schedule your first Meeting
            </button>
          </div>
          <Image src="/img/heroimage.png" alt="Hero" width="732" height="598" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
