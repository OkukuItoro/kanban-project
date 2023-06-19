import Image from "next/image";
import ProjectList from "@/components/ProjectList";

export default function Home() {
  // The Mobile App Page
  return (
    <section className="py-[6%] px-[45px] lg:p-[4.3%]">
      <section className="flex_col lg:flex_row items-center lg:justify-between mb-11">
        <div className="flex_row w-[100%] gap-4 mb-4 lg:m-0">
          <h1 className="text-[30px] lg:text-[46px] text-[#0D062D] font-semibold">
            Mobile App
          </h1>
          <div className="flex_row gap-2 ml-auto lg:ml-0">
            <Image
              src="/icons/arrow-square-up.svg"
              width={30}
              height={30}
              alt="edit icon"
            ></Image>
            <Image
              src="/icons/link.svg"
              width={30}
              height={30}
              alt="link icon"
            ></Image>
          </div>
        </div>

        <div className="flex_row items-center gap-3">
          <div className="flex_row gap-2">
            <Image
              src="/icons/add-square-2.svg"
              width={18}
              height={18}
              alt="add icon"
            ></Image>
            <p>Invite</p>
          </div>
          <div className="flex_row">
            <Image
              src="/images/team-member-1.png"
              width={38}
              height={38}
              alt="team member 1"
            ></Image>
            <Image
              src="/images/team-member-2.png"
              width={38}
              height={38}
              alt="team member 2"
              className="ml-[-6px]"
            ></Image>
            <Image
              src="/images/team-member-3.png"
              width={38}
              height={38}
              alt="team member 3"
              className="ml-[-6px]"
            ></Image>
            <Image
              src="/images/team-member-4.png"
              width={38}
              height={38}
              alt="team member 4"
              className="ml-[-6px]"
            ></Image>
            <div className="w-[38px] h-[38px] flex_row items-center justify-center ml-[-6px] bg-[#F4D7DA] border-[1.5px] border-white rounded-full text-[#D25B68] text-[15px] font-medium">
              +2
            </div>
          </div>
        </div>
      </section>

      <section className="flex_row items-center justify-between mb-10">
        <div className="flex_row gap-3 text-[#787486]">
          <div className="flex_row items-center justify-evenly w-[122px] h-[40px] rounded-[6px] border-[1px] border-[#787486]">
            <Image
              src="/icons/filter.svg"
              width={16}
              height={16}
              alt="filter"
            ></Image>
            <p>Filter</p>
            <Image
              src="/icons/arrow-down.svg"
              width={16}
              height={16}
              alt="arrow down"
            ></Image>
          </div>
          <div className="flex_row items-center justify-evenly w-[122px] h-[40px] rounded-[6px] border-[1px] border-[#787486]">
            <Image
              src="/icons/calendar.svg"
              width={16}
              height={16}
              alt="calendar"
            ></Image>
            <p>Today</p>
            <Image
              src="/icons/arrow-down.svg"
              width={16}
              height={16}
              alt="arrow down"
            ></Image>
          </div>
        </div>

        <div className="flex_row items-center gap-5">
          <div className="flex_row items-center justify-evenly w-[97px] h-[40px] rounded-[6px] border-[1px] border-[#787486] text-[#787486]">
            <Image
              src="/icons/profile-2users.svg"
              width={16}
              height={16}
              alt="calendar"
            ></Image>
            <p>Share</p>
          </div>

          <div className="hidden lg:block border-[1px] h-[28px] bg-[#787486]" />

          <Image
            className="hidden lg:block"
            src="/icons/list.svg"
            width={40}
            height={40}
          ></Image>
          <Image
            className="hidden lg:block"
            src="/icons/grid.svg"
            width={21}
            height={21}
          ></Image>
        </div>
      </section>

      <section className="flex_row flex-wrap gap-4">
        <ProjectList name="To Do" />
        <ProjectList name="On Progress" />
        <ProjectList name="Done" />
      </section>
    </section>
  );
}
