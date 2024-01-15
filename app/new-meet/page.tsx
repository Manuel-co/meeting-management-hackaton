"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  BellRinging,
  TextB,
  TextItalic,
  TextUnderline,
  TextStrikethrough,
} from "@phosphor-icons/react";

export default function page() {
  return (
    <div className="container mx-auto my-10">
      <div className="px-16 py-10">
        <div className="flex justify-between items-start">
          <div className=" flex flex-col gap-8 w-[50%] ">
            <input
              type="text"
              name="floating_email"
              id="floating_email"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border rounded-[10px] "
              placeholder="Add title here"
              required
            />
            <div className="flex relative">
              <input
                type="text"
                name="floating_email"
                id="floating_email"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border rounded-[10px] "
                placeholder="Add Location"
                required
              />
              <div className="absolute top-1/2 transform -translate-y-1/2 left-3 rounded-[10px] ">
                <MapPin size={28} color="#002267" />
              </div>
            </div>

            <div className="flex  gap-4 ">
              <div className="border text-black w-[500px] justify-between flex rounded-[10px] relative">
                <label htmlFor="Notification" className="flex items-center">
                  <BellRinging size={28} color="#002267" className="mr-2" />
                  Email Notification
                </label>
                <select
                  id="Notification"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[10px] "
                >
                  <option value="On">On</option>
                  <option value="Off">Off</option>
                </select>
              </div>

              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[10px] w-[3rem]  h=[3rem]"
              >
                <option selected>5</option>
                <option value="US">15</option>
                <option value="CA">30</option>
                <option value="FR">1 Hr</option>
              </select>

              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[10px] w-[478px] h-[3rem] "
              >
                <option value="MINS">Minutes</option>
                <option value="HRS">Hours</option>
              </select>
            </div>

            <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 ">
              <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
                <label htmlFor="editor" className="sr-only">
                  Publish post
                </label>
                <textarea
                  id="editor"
                  className="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:outline-none dark:text-white dark:placeholder-gray-400"
                  placeholder="Add description..."
                  required
                ></textarea>
              </div>
              <div className="flex  justify-between  border-b dark:border-gray-600">
                <div className="flex flex-wrap  justify-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
                    <button
                      type="button"
                      className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                    >
                      <TextB size={28} color="#002267" />
                      <span className="sr-only">Attach file</span>
                    </button>
                    <button
                      type="button"
                      className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <TextItalic size={28} color="#002267" />
                      <span className="sr-only">Embed map</span>
                    </button>
                    <button
                      type="button"
                      className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <TextUnderline size={28} color="#002267" />
                      <span className="sr-only">Upload image</span>
                    </button>
                    <button
                      type="button"
                      className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <TextStrikethrough size={28} color="#002267" />
                      <span className="sr-only">Format code</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[40%]">
            <div className=" p-4">
              <div className="text-[#002267] text-[28px] font-bold flex justify-between">
                Guest Invite
                <Image
                  src="/img/logo.png"
                  alt="Hero"
                  width="103"
                  height="29"
                  className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 ration-700"
                />
              </div>
            </div>
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-[10px] bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Add guest mail"
              required
            />
            <div className="my-12">
              <div className="text-[22px] text-[#002267]">Guest Permission</div>
              <hr className="h-px  bg-gray-200 border-2 dark:bg-gray-700 rounded"></hr>

              <div className="flex flex-col gap-6  text-[#002267] pt-2">
                <div className="">
                  <label className="cursor-pointer label flex gap-[8px]">
                    <span className="label-text">Modify event</span>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-accent"
                    />
                  </label>
                </div>

                <div className="">
                  <label className="cursor-pointer label flex gap-[8px]">
                    <span className="label-text">Invite others</span>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-accent"
                    />
                  </label>
                </div>

                <div className="">
                  <label className="cursor-pointer label flex gap-[8px]">
                    <span className="label-text">See guest list</span>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-accent"
                    />
                  </label>
                </div>
              </div>
            </div>

            <button className="btn bg-[#38ACFF] w-[161px] h-[62px] rounded-[10px] ">
              Save meeting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
