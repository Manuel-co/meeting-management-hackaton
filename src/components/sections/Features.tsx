import React from "react";
import Image from "next/image";

function Features() {
  return (
    <div className="container mx-auto my-10">
      <div className="px-16 py-10">
        <div className="flex justify-between gap-8">
          <Image src="/img/ftimg.png" alt="Hero" width="732" height="598" />
          <div className="flex flex-col gap-8">
            <div className="flex text-[#002267] text-[22px]">
              <Image src="/img/thumb.png" alt="Hero" width="28" height="25" />
              Features
            </div>

            <p className="text-4xl font-medium ">
              <div className="text-[#002267]">
                {" "}
                Where Scheduling <br />
                Meets Versatility
              </div>
            </p>
            <p className="text-[#002267] font-[22px]">
              Tools for seamless collaboration, efficient <br /> planning, and
              successful virtual engagements <br /> across diverse scenarios.
            </p>
            <div className="gap-8	">
              <div className="flex text-[#002267] text-[22px] gap-[8px]">
                <Image src="/img/vmeet.png" alt="Hero" width="41" height="41" />
                Features Virtual Meeting
              </div>
              <div className="flex text-[#002267] text-[22px] gap-[8px]">
                <Image src="/img/mail.png" alt="Hero" width="41" height="41" />
                Email and Calendary
              </div>
              <div className="flex text-[#002267] text-[22px] gap-[8px]">
                <Image src="/img/chat.png" alt="Hero" width="41" height="41" />
                Team Chat
              </div>
              <div className="flex text-[#002267] text-[22px] gap-[8px]">
                <Image
                  src="/img/wboard.png"
                  alt="Hero"
                  width="41"
                  height="41"
                />
                Online Whiteboard
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
