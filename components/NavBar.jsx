"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const NavBar = ({ sideBarState, handleSideBarState }) => {
  const [search, setSearch] = useState("");
  const [viewportWidth, setViewportWidth] = useState(0);

  const handleChange = () => {
    const newState = true;
    handleSideBarState(newState);
  };

  function handleResize() {
    setViewportWidth(window.innerWidth);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="flex_row items-center w-[100%] lg:w-[82.4%] h-[88px] border-b-[1px] border-b-[#DBDBDB] lg:ml-auto">
      <div className="flex_row w-[100%] items-center justify-around lg:justify-between px-[20px] lg:px-[49px]">
        {viewportWidth < 1024 && (
          <div className="h-[88px] px-5 flex_row justify-between border-b-[1px] border-b-[#DBDBDB]">
            <Image
              src="/icons/logo.svg"
              width={24}
              height={24}
              alt="logo"
            ></Image>

            <Image
              src="/icons/arrow-right.svg"
              width={20}
              height={20}
              alt="arrow"
              className="cursor-pointer rotate-[180deg]"
              onClick={handleChange}
            ></Image>
          </div>
        )}

        {/* Search Input */}
        <form className="flex_row items-center rounded-[6px] bg-[#F5F5F5] h-[44px] w-[55%] lg:w-[417px] p-4">
          <Image
            src="/icons/search-normal.svg"
            width={22}
            height={22}
            alt="search icon"
          ></Image>
          <input
            className="ml-3 w-[90%] bg-inherit p-2 outline-none"
            type="text"
            placeholder="Search for anything..."
            value={search}
          />
        </form>

        <div>
          {/* Calendar, message, and notification Icons */}
          <div className="flex_row items-center">
            <div className="hidden lg:flex lg:flex-row m-0 lg:mr-12 gap-4">
              <Image
                src="/icons/calendar-2.svg"
                width={24}
                height={24}
                alt="calendar icon"
              ></Image>
              <Image
                src="/icons/message-question.svg"
                width={24}
                height={24}
                alt="message-question icon"
              ></Image>
              <Image
                src="/icons/notification.svg"
                width={24}
                height={24}
                alt="notification icon"
              ></Image>
            </div>

            <div className="flex_row items-center gap-7">
              <div className="hidden lg:block">
                <h3 className="text-[#0D062D] text-[16px] ">Anima Agrawal</h3>
                <p className="text-[#787486] text-[14px]">U.P, India</p>
              </div>
              <div className="flex_row">
                <div className="h-[38px] w-[38px] bg-[url('/images/avatar.jpg')] bg-cover mr-3 rounded-full" />
                <Image
                  src="/icons/arrow-down.svg"
                  width={18}
                  height={18}
                  alt="arrow down icon"
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
