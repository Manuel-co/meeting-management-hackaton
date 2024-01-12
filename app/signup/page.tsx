/* eslint-disable react/jsx-no-duplicate-props */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeSlash } from "@phosphor-icons/react";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="container mx-auto my-10">
      <div className="px-16 py-10">
        <div className="flex justify-center items-center ">
          <Image src="/img/login.png" alt="Hero" width="435" height="400" />
          <div className="flex flex-col gap-10 mx-12  bg-white rounded-xl p-12">
            <div className="flex justify-center font-medium text-center text-[#002267]">
              <Image
                src="/img/logo.png"
                alt="Hero"
                width="230"
                height="61"
                className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 ration-700"
              />
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                First Name
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_last_name"
                id="floating_last_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Last Name
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Email address
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group flex">
              <input
                name="floating_password"
                id="floating_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                type={showPassword ? "text" : "password"}
              />
              <label
                htmlFor="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password
              </label>

              <button
                className="form-icon-btn"
                onClick={togglePassword}
              >
                {showPassword ? (
                  <Eye className="form-icon__eye"  color="#761e1e"/>
                ) : (
                  <EyeSlash className="form-icon__eye" color="#761e1e" />
                )}
              </button>
            </div>
            <button className="btn bg-[#0C82EE] text-white rounded-full border-none h-10">
              Sign Up
            </button>

            <div className=" font-[22px] text-center flex justify-center text-black">
              Already have an account?{" "}
              <Link href="/signup">
                <div className="text-[#4d89ff] mx-2">Sign In</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
