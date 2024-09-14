
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeSlash } from "@phosphor-icons/react";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container mx-auto my-10 px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 lg:-ml-1">
        {/* Form Section */}
        <div className="lg:w-1/2 max-w-lg flex flex-col gap-8 bg-white rounded-xl p-8 lg:p-10 shadow-lg">
          <div className="flex justify-center font-medium text-center text-[#002267] mb-8">
            <Image
              src="/img/logo.png"
              alt="Logo"
              width="200"
              height="54"
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
            />
          </div>

          <div className="relative z-0 w-full mb-4 group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              First Name
            </label>
          </div>

          <div className="relative z-0 w-full mb-4 group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Last Name
            </label>
          </div>

          <div className="relative z-0 w-full mb-4 group flex">
            <input
              name="floating_password"
              id="floating_password"
              className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              type={showPassword ? "text" : "password"}
            />
            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>

            <button
              className="form-icon-btn"
              onClick={togglePassword}
            >
              {showPassword ? (
                <Eye className="form-icon__eye" color="#761e1e"/>
              ) : (
                <EyeSlash className="form-icon__eye" color="#761e1e" />
              )}
            </button>
          </div>

          <button className="btn bg-[#0C82EE] text-white rounded-full border-none h-10 mt-4">
            Sign Up
          </button>

          <div className="font-[18px] text-center text-black mt-4">
            Already have an account?{" "}
            <Link href="/signin">
              <div className="text-[#4d89ff] mx-2 inline">Sign In</div>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 hidden lg:block max-w-lg flex justify-center">
          <Image
            src="/img/login.png"
            alt="Login"
            width="400"
            height="350"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Mobile view */}
      <div className="lg:hidden flex flex-col items-center gap-8 mt-8">
        <Image
          src="/img/login.png"
          alt="Login"
          width="400"
          height="350"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default SignUp;


