
// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// function NavBar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div className="container mx-auto px-4 py-6">
//       <div className="flex items-center justify-between">
//         <Image
//           src="/img/logo.png"
//           alt="Logo"
//           width={100}
//           height={20}
//           className="transition-transform duration-300 ease-in-out hover:scale-105"
//         />
//         <button
//           className="lg:hidden p-2 text-[#002267] focus:outline-none"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-expanded={isMenuOpen}
//           aria-controls="mobile-menu"
//         >
//           {isMenuOpen ? (
//             <span className="text-3xl">&times;</span> // Close Icon
//           ) : (
//             <span className="text-3xl">&#9776;</span> // Hamburger Icon
//           )}
//         </button>
//         <nav
//           id="mobile-menu"
//           className={`fixed inset-0 bg-white lg:bg-transparent lg:static lg:flex lg:flex-row lg:items-center lg:gap-10 lg:opacity-100 transition-transform duration-300 ease-in-out ${
//             isMenuOpen ? 'translate-x-0' : 'translate-x-full'
//           } lg:translate-x-0`}
//         >
//           <div className="lg:hidden flex justify-end p-4">
//             <button
//               className="text-3xl text-[#002267] focus:outline-none"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               &times;
//             </button>
//           </div>
//           <div className="flex flex-col lg:flex-row lg:items-center lg:gap-10 lg:mr-10 p-4 lg:p-0 text-[#002267]">
//             <a href="#" className="py-2 lg:py-0 hover:text-blue-600">How it works</a>
//             <a href="#" className="py-2 lg:py-0 hover:text-blue-600">Testimonial</a>
//             <a href="#" className="py-2 lg:py-0 hover:text-blue-600">Features</a>
//           </div>
//           <div className="flex flex-col lg:flex-row lg:items-center lg:gap-10 p-4 lg:p-0">
//             <Link href="/signin">
//               <button className="btn text-[#38ACFF] border-none hover:text-blue-950 py-2 lg:py-0">
//                 Sign in
//               </button>
//             </Link>
//             <Link href="/signup">
//               <button className="btn text-[#38ACFF] border-none hover:text-blue-950 py-2 lg:py-0">
//                 Sign up
//               </button>
//             </Link>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// }

// export default NavBar;

// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// function NavBar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div className="container mx-auto px-4 py-6">
//       <div className="flex items-center justify-between">
//         <Image
//           src="/img/logo.png"
//           alt="Logo"
//           width={100}
//           height={20}
//           className="transition-transform duration-300 ease-in-out hover:scale-105"
//         />
//         <button
//           className="lg:hidden p-2 text-[#002267] focus:outline-none"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-expanded={isMenuOpen}
//           aria-controls="mobile-menu"
//         >
//           {isMenuOpen ? (
//             <span className="text-3xl">&times;</span> // Close Icon
//           ) : (
//             <span className="text-3xl">&#9776;</span> // Hamburger Icon
//           )}
//         </button>
//         <nav
//           id="mobile-menu"
//           className={`fixed inset-0 bg-white lg:bg-transparent lg:static lg:flex lg:flex-row lg:items-center lg:gap-10 lg:opacity-100 transition-transform duration-300 ease-in-out ${
//             isMenuOpen ? 'translate-x-0' : 'translate-x-full'
//           } lg:translate-x-0`}
//         >
//           <div className="flex flex-col lg:flex-row lg:items-center lg:gap-10 lg:mr-10 p-4 lg:p-0 text-[#002267]">
//             <a href="#" className="py-2 lg:py-0 hover:text-blue-600">How it works</a>
//             <a href="#" className="py-2 lg:py-0 hover:text-blue-600">Testimonial</a>
//             <a href="#" className="py-2 lg:py-0 hover:text-blue-600">Features</a>
//           </div>
//           <div className="flex flex-col lg:flex-row lg:items-center lg:gap-10 p-4 lg:p-0">
//             <Link href="/signin">
//               <button className="btn text-[#38ACFF] border-none hover:text-blue-950 py-2 lg:py-0">
//                 Sign in
//               </button>
//             </Link>
//             <Link href="/signup">
//               <button className="btn text-[#38ACFF] border-none hover:text-blue-950 py-2 lg:py-0">
//                 Sign up
//               </button>
//             </Link>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// }

// export default NavBar;






// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// function NavBar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div className="container mx-auto px-4 py-6">
//       <div className="flex items-center justify-between">
//         <Image
//           src="/img/logo.png"
//           alt="Logo"
//           width={100}
//           height={20}
//           className="transition-transform duration-300 ease-in-out hover:scale-105"
//         />
//         <button
//           className="lg:hidden p-2 text-[#002267] focus:outline-none"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-expanded={isMenuOpen}
//           aria-controls="mobile-menu"
//         >
//           <span className="text-3xl">&#9776;</span> {/* Hamburger Icon */}
//         </button>
//         <nav
//           id="mobile-menu"
//           className={`fixed inset-0 bg-white lg:bg-transparent lg:static lg:flex lg:flex-row lg:items-center lg:gap-10 lg:opacity-100 transition-transform duration-300 ease-in-out ${
//             isMenuOpen ? 'translate-x-0' : '-translate-x-full'
//           }`}
//         >
//           <div className="flex flex-col lg:flex-row lg:items-center lg:gap-10 lg:mr-10 p-4 lg:p-0 text-[#002267]">
//             <a href="#" className="py-2 lg:py-0 hover:text-blue-600">How it works</a>
//             <a href="#" className="py-2 lg:py-0 hover:text-blue-600">Testimonial</a>
//             <a href="#" className="py-2 lg:py-0 hover:text-blue-600">Features</a>
//           </div>
//           <div className="flex flex-col lg:flex-row lg:items-center lg:gap-10 p-4 lg:p-0">
//             <Link href="/signin">
//               <button className="btn text-[#38ACFF] border-none hover:text-blue-950 py-2 lg:py-0">
//                 Sign in
//               </button>
//             </Link>
//             <Link href="/signup">
//               <button className="btn text-[#38ACFF] border-none hover:text-blue-950 py-2 lg:py-0">
//                 Sign up
//               </button>
//             </Link>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// }

// export default NavBar;


// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// function NavBar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   console.log(isMenuOpen);

//   return (
//     <div className="container mx-auto px-4 py-6 text-2xl">
//       <div className="flex justify-between items-center">
//         <Image
//           src="/img/logo.png"
//           alt="Logo"
//           width="100"
//           height="20"
//           className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
//         />
//         <button
//           className="block lg:hidden p-2 text-[#002267] focus:outline-none"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           {/* Mobile Menu Icon (can use an icon library like Lucide or FontAwesome) */}
//           <span className="text-3xl">&#9776;</span> {/* Hamburger Icon */}
//         </button>
//         <div
//           className={`flex flex-col lg:flex-row lg:items-center lg:gap-10 lg:static fixed top-0 left-0 w-full lg:w-auto bg-white lg:bg-transparent lg:flex lg:opacity-100 transition-opacity duration-300 ease-in-out ${
//             isMenuOpen ? 'opacity-100' : 'opacity-0 lg:opacity-100'
//           }`}
//         >
//           <div className="flex flex-col lg:flex-row lg:items-center lg:gap-10 text-[#002267] lg:mr-10">
//             <a href="#" className="my-2 lg:my-0">How it works</a>
//             <a href="#" className="my-2 lg:my-0">Testimonial</a>
//             <a href="#" className="my-2 lg:my-0">Features</a>
//           </div>
//           <div className="flex flex-col lg:flex-row lg:items-center lg:gap-10">
//             <Link href="/signin">
//               <button className="btn text-[#38ACFF] border-none hover:text-blue-950 my-2 lg:my-0">
//                 Sign in
//               </button>
//             </Link>
//             <Link href="/signup">
//               <button className="btn text-[#38ACFF] border-none hover:text-blue-950 my-2 lg:my-0">
//                 Sign up
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NavBar;


// "use client";

// import { useState } from "react";
// import Image from "next/image";
// // import { X } from "lucide-react";
// import Link from "next/link";

// function NavBar() {
//   return (
//     <div className="container mx-auto text-2xl pt-10">
//       <div className="flex justify-between items-center">
//         <Image src="/img/logo.png" alt="Logo" width="100" height="20"  className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 ration-700"/>
//         <div className="flex items-center gap-10 text-[#002267]">
//           <a href="#" className="mr-5 ">How it works</a>
//           <a href="#" className="mr-5">Testimonial</a>
//           <a href="#" className="mr-5">Features</a>
//         </div>
//         <div className="flex">
//         <Link href="/signin"> 
//           <button className="btn  text-[#38ACFF] border-none hover:text-blue-950 mr-5">
//             Sign in
//           </button>
//           </Link>
//           <Link href="/signup"> 
//           <button className="btn  text-[#38ACFF] border-none hover:text-blue-950 mr-5">
//             {" "}
//             Sign up
//           </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NavBar;
