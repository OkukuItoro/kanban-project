"use client";
import { useState } from "react";
import Image from "next/image";

const NavBar = () => {
  const [search, setSearch] = useState("");
  return (
    <section className="flex_row items-center w-[100%] h-[88px] border-b-[1px] border-b-[#DBDBDB]">
      {/* Logo */}
      <div className="h-[100%] w-[17.4%] px-5 flex_row justify-between border-r-[1px] border-r-[#DBDBDB]">
        <div className="flex_row items-center">
          <Image
            src="/icons/logo.svg"
            width={24}
            height={24}
            alt="logo"
          ></Image>
          <h1 className="text-[20px] font-semibold ml-3">Project M.</h1>
        </div>
        <Image
          src="/icons/arrow-right.svg"
          width={20}
          height={20}
          alt="arrow"
        ></Image>
      </div>

      <div className="flex_row w-[82.6%] items-center justify-between px-[49px]">
        {/* Search Input */}
        <form className="flex_row items-center rounded-[6px] bg-[#F5F5F5] h-[44px] w-[34.2%] p-4">
          <Image src="/icons/search-normal.svg" width={22} height={22}></Image>
          <input
            className="ml-3 bg-inherit p-2 outline-none"
            type="text"
            placeholder="Search for anything..."
            value={search}
          />
        </form>

        <div>
          <div className="flex_row items-center">
            <div className="flex_row mr-12 gap-4">
              <Image
                src="/icons/calendar-2.svg"
                alt="calendar icon"
                width={24}
                height={24}
              ></Image>
              <Image
                src="/icons/message-question.svg"
                alt="message-question icon"
                width={24}
                height={24}
              ></Image>
              <Image
                src="/icons/notification.svg"
                alt="notification icon"
                width={24}
                height={24}
              ></Image>
            </div>

            <div className="flex_row items-center gap-7">
              <div>
                <h3 className="text-[#0D062D] text-[16px] ">Anima Agrawal</h3>
                <p className="text-[#787486] text-[14px]">U.P, India</p>
              </div>
              <div className="flex_row">
                <div className="h-[38px] w-[38px] bg-[url('/images/avatar.jpg')] bg-cover mr-3 rounded-full" />
                <Image
                  src="/icons/arrow-down.svg"
                  width={18}
                  height={18}
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
