import React from "react";
import Image from "next/image";

function How() {
  return (
    <div className="container mx-auto my-10">
      <div className="px-16 py-10">
        <div className=" flex justify-center text-[#002267] text-[44px] font-[44px]">
          How It Works
        </div>
        <div className=" grid grid-cols-3 gap-4 ">
          <Image src="/img/how-1.png" alt="Logo" width="397" height="300" className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 ration-700"/>
          <Image src="/img/how-2.png" alt="Logo" width="397" height="300" className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 ration-700"/>
          <Image src="/img/how-3.png" alt="Logo" width="397" height="300" className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 ration-700"/>
        </div>
      </div>
    </div>
  );
}

export default How;
