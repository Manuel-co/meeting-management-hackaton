import React from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="container mx-auto my-10 px-4 sm:px-6 lg:px-16">
      <div className="py-10">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex flex-col gap-6 lg:gap-10 max-w-lg lg:max-w-md">
            <div className="text-4xl lg:text-6xl font-medium">
              <div className="text-[#5D5DFF]">Seamless</div>
              <div className="text-[#002267]">
                {" "}
                Meeting <br />
                Collaboration <br />
                for Teams
              </div>
            </div>
            <p className="text-[#002267] text-base lg:text-lg">
              Join thousands of satisfied users. Try MeetHub today!
            </p>
            <Link href="/meeting">
              <button className="btn p-2 bg-[#38ACFF] text-white rounded-full border-none h-10 hover:bg-[#2f8bcb]">
                Schedule your first Meeting
              </button>
            </Link>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/img/heroimage.png"
              alt="Hero"
              width={732}
              height={598}
              className="transition-transform ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;






// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// function Hero() {
//   return (
//     <div className="container mx-auto my-10">
//       <div className="px-16 py-10">
//         <div className="flex justify-between items-center">
//           <div className="flex flex-col gap-10">
//             <div className="text-6xl font-medium ">
//               <div className="text-[#5D5DFF]">Seamless</div>
//               <div className="text-[#002267]">
//                 {" "}
//                 Meeting <br />
//                 Collaboration <br />
//                 for Teams
//               </div>
//             </div>
//             <p className="text-[#002267] font-[22px]">
//               Join thousands of satisfied users. Try MeetHub today!
//             </p>
//             <Link href="/meeting">
//             <button className="btn p-2 bg-[#38ACFF] text-white rounded-full border-none h-10">
//               Schedule your first Meeting
//             </button>
//             </Link>
//           </div>
//           <Image src="/img/heroimage.png" alt="Hero" width="732" height="598" className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 ration-700" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;
