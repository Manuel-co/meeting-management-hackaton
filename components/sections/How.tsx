import React from "react";
import Image from "next/image";

function How() {
  return (
    <div className="container mx-auto my-10 px-4 sm:px-6 lg:px-16">
      <div className="py-10">
        <div className="text-center text-[#002267] text-3xl sm:text-4xl lg:text-5xl font-semibold">
          How It Works
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <div className="transition-transform duration-300 ease-in-out hover:scale-105">
            <Image
              src="/img/how-1.png"
              alt="How It Works 1"
              width={397}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div className="transition-transform duration-300 ease-in-out hover:scale-105">
            <Image
              src="/img/how-2.png"
              alt="How It Works 2"
              width={397}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div className="transition-transform duration-300 ease-in-out hover:scale-105">
            <Image
              src="/img/how-3.png"
              alt="How It Works 3"
              width={397}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default How;


// import React from "react";
// import Image from "next/image";

// function How() {
//   return (
//     <div className="container mx-auto my-10">
//       <div className="px-16 py-10">
//         <div className=" flex justify-center text-[#002267] text-[44px] font-[44px]">
//           How It Works
//         </div>
//         <div className=" grid grid-cols-3 gap-4 ">
//           <Image src="/img/how-1.png" alt="Logo" width="397" height="300" className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 ration-700"/>
//           <Image src="/img/how-2.png" alt="Logo" width="397" height="300" className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 ration-700"/>
//           <Image src="/img/how-3.png" alt="Logo" width="397" height="300" className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 ration-700"/>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default How;
