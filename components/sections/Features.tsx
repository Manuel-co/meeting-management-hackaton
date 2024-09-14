import React from "react";
import Image from "next/image";

function Features() {
  return (
    <div className="container mx-auto my-10 px-4 sm:px-6 lg:px-16">
      <div className="py-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/img/ftimg.png"
              alt="Features"
              width={732}
              height={598}
              className="transition-transform duration-300 ease-in-out hover:scale-105 w-full h-auto"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div className="flex items-center text-[#002267] text-xl lg:text-2xl font-semibold gap-2">
              <Image src="/img/thumb.png" alt="Features Icon" width={28} height={25} />
              Features
            </div>

            <div className="text-3xl lg:text-4xl font-medium text-[#002267]">
              Where Scheduling <br className="hidden lg:block" />
              Meets Versatility
            </div>
            <p className="text-[#002267] text-lg lg:text-xl">
              Tools for seamless collaboration, efficient <br className="hidden lg:block" />
              planning, and successful virtual engagements <br className="hidden lg:block" />
              across diverse scenarios.
            </p>
            <div className="flex flex-col gap-6 lg:gap-8">
              <div className="flex items-center text-[#002267] text-lg lg:text-xl gap-3">
                <Image src="/img/vmeet.png" alt="Virtual Meeting" width={41} height={41} />
                Features Virtual Meeting
              </div>
              <div className="flex items-center text-[#002267] text-lg lg:text-xl gap-3">
                <Image src="/img/mail.png" alt="Email and Calendar" width={41} height={41} />
                Email and Calendar
              </div>
              <div className="flex items-center text-[#002267] text-lg lg:text-xl gap-3">
                <Image src="/img/chat.png" alt="Team Chat" width={41} height={41} />
                Team Chat
              </div>
              <div className="flex items-center text-[#002267] text-lg lg:text-xl gap-3">
                <Image src="/img/wboard.png" alt="Online Whiteboard" width={41} height={41} />
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


// import React from "react";
// import Image from "next/image";

// function Features() {
//   return (
//     <div className="container mx-auto my-10">
//       <div className="px-16 py-10">
//         <div className="flex justify-center gap-[45px]">
//           <Image
//             src="/img/ftimg.png"
//             alt="Hero"
//             width="732"
//             height="598"
//             className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 ration-700"
//           />
//           <div className="flex flex-col gap-8">
//             <div className="flex m-2 text-[#002267] text-[22px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 ration-700">
//               <Image src="/img/thumb.png" alt="Hero" width="28" height="25" />
//               Features
//             </div>

//             <div className="text-4xl font-medium ">
//               <div className="text-[#002267]">
//                 {" "}
//                 Where Scheduling <br />
//                 Meets Versatility
//               </div>
//             </div>
//             <p className="text-[#002267] font-[22px]">
//               Tools for seamless collaboration, efficient <br /> planning, and
//               successful virtual engagements <br /> across diverse scenarios.
//             </p>
//             <div className="flex flex-col gap-8	">
//               <div className="flex text-[#002267] text-[22px] gap-[8px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 ration-700">
//                 <Image src="/img/vmeet.png" alt="Hero" width="41" height="41" />
//                 Features Virtual Meeting
//               </div>
//               <div className="flex text-[#002267] text-[22px] gap-[8px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 ration-700">
//                 <Image src="/img/mail.png" alt="Hero" width="41" height="41" />
//                 Email and Calendary
//               </div>
//               <div className="flex text-[#002267] text-[22px] gap-[8px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 ration-700">
//                 <Image src="/img/chat.png" alt="Hero" width="41" height="41" />
//                 Team Chat
//               </div>
//               <div className="flex text-[#002267] text-[22px] gap-[8px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 ration-700">
//                 <Image
//                   src="/img/wboard.png"
//                   alt="Hero"
//                   width="41"
//                   height="41"
//                 />
//                 Online Whiteboard
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Features;
