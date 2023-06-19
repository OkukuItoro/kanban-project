"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { sideBarLinks } from "@/constants";
import { projects } from "@/constants";
import Link from "next/link";

const SideBar = ({ sideBarState, handleSideBarState }) => {
  const [viewportWidth, setViewportWidth] = useState(0);

  const handleChange = () => {
    const newState = false;
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
    // SIDEBAR COMPONENT LAYOUT
    <section
      className={`${
        viewportWidth < 1024 ? (sideBarState ? "" : "hidden") : ""
      }  fixed pl-7 lg:pl-0 top-0 z-40 bg-[#ffff] w-[50%] lg:w-[17.4%] min-h-screen border-r-[1px] border-r-[#DBDBDB]`}
    >
      <div className="h-[88px] px-5 flex_row justify-between border-b-[1px] border-b-[#DBDBDB]">
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
          className="cursor-pointer"
          onClick={handleChange}
        ></Image>
      </div>

      {/* Links:  Home, messages, tasks, members, settings */}
      <div className="p-5 text-[#787486]">
        {sideBarLinks.map(({ name, icon }, i) => (
          <div
            key={i}
            className="flex_row items-center mb-5 cursor-pointer last-of-type:m-0"
          >
            <Image src={icon} width={24} height={24} alt={name}></Image>
            <p className="ml-3 text-[16px]">{name}</p>
          </div>
        ))}
      </div>

      {/* Border */}
      <div className="flex_row justify-center">
        <hr className=" h-[1px] bg-[#DBDBDB] w-[90%]" />
      </div>

      {/* Projects Title */}
      <div className="flex_row items-center justify-between mb-3 p-5 text-[12px] font-bold uppercase">
        <h2>my projects</h2>
        <Image
          src="/icons/add-square.svg"
          width={16}
          height={16}
          alt="add icon"
        ></Image>
      </div>

      {/* Projects Content */}
      <div className="p-2">
        {projects.map((project, i) => (
          // Project Link
          <Link href="/" key={i}>
            {/* Project bg */}
            <div
              className={`flex_row items-center justify-between rounded-[6px] w-[100%] h-[39px] p-3 cursor-pointer ${
                project == "Mobile App" ? "active_project" : ""
              }`}
            >
              <div className="flex_row items-center">
                {/* Project theme */}
                <div
                  className={`${
                    (project === "Mobile App" && "bg-[#7AC555]") ||
                    (project === "Website Redesign" && "bg-[#FFA500]") ||
                    (project === "Design System" && "bg-[#E4CCFD]") ||
                    (project === "Wireframes" && "bg-[#76A5EA]")
                  } h-[8px] w-[8px] rounded-full`}
                />

                {/* Project Title  */}
                {project == "Mobile App" ? (
                  <p className="text-[15px] text-[#0D062D] font-semibold ml-2">
                    {project}
                  </p>
                ) : (
                  <p className="text-[15px] text-[#787486] font-medium ml-2">
                    {project}
                  </p>
                )}
              </div>
              {/* Conditional Rendering: show three dots icon, if Mobile App Project is visited */}
              {project == "Mobile App" && (
                <Image
                  src="/icons/three-dots.svg"
                  width={16}
                  height={16}
                  alt="three dots icon"
                ></Image>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* Thoughts */}
      <div className="px-3 mt-[70px] mb-9">
        <div className="flex_col items-center justify-center w-[100%] bg-[#F5F5F5] h-[200px] px-4 mt-12 mb-9 rounded-[24px] text-center relative">
          {/* Icon */}
          <div className="absolute top-[-16%] left-[33%] flex_row items-center justify-center bg-[#F5F5F5] h-[66px] w-[66px] rounded-full">
            <Image
              src="/icons/lamp-on.svg"
              width={24}
              height={24}
              alt="lamp-on icon"
            ></Image>
            <div className="lamp_icon_bg absolute w-[45px] h-[45px] rounded-full" />
          </div>

          {/* Cta */}
          <div className="z-20 mt-4">
            <h2 className="text-[14px] text-black font-medium mb-1">
              Thoughts Time
            </h2>
            <p className="text-[12px] text-[#787486] font-normal mb-[8px]">
              We don’t have any notice for you, till then you can share your
              thoughts with your peers.
            </p>
            <button className="h-[40px] w-[100%] text-[14px] rounded-[4px] bg-white font-medium">
              Write a message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
