import React from 'react'
import Image from "next/image";

function Footer() {
  return (


<footer className="bg-[#00194D] rounded-lg shadow  h-[218]">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <Image src="/img/logo.png" alt="Logo" width="100" height="20" />
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">How it works</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Testimonial</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Features</a>
                </li>
            </ul>
        </div>
        </div>
</footer>

  )
}

export default Footer