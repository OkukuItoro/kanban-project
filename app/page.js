"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
const ProjectList = dynamic(() => import("@/components/ProjectList"), {
  ssr: false,
});
import { useState } from "react";
import { initData } from "@/constants";
import { DragDropContext } from "react-beautiful-dnd";

const reOrderStageList = (sourceStageList, startIndex, endIndex) => {
  const newTaskIds = Array.from(sourceStageList.taskIds);
  const [removed] = newTaskIds.splice(startIndex, 1);
  newTaskIds.splice(endIndex, 0, removed);

  const newStageList = {
    ...sourceStageList,
    taskIds: newTaskIds,
  };
  return newStageList;
};

export default function Home() {
  const [data, setData] = useState(initData);

  const onDragEnd = (result) => {
    const { destination, source } = result;

    // Unkown Destination
    if (!destination) return;

    // User drags and drops back in same position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // user drops within the same column but in different position
    const sourceStageList = data.stages[source.droppableId];
    const destinationStageList = data.stages[destination.droppableId];

    if (sourceStageList.id === destinationStageList.id) {
      const newList = reOrderStageList(
        sourceStageList,
        source.index,
        destination.index
      );

      const newDataState = {
        ...data,
        columns: {
          ...data.stages,
          [newList.id]: newList,
        },
      };
      setData(newDataState);
      return;
    }

    // user moves from one stage list to another
  };

  // The Mobile App Page
  return (
    <section className="py-[6%] px-[45px] lg:p-[4.3%]">
      <section className="flex_row lg:w-[100%] flex-wrap items-center lg:justify-between mb-11">
        <div className="flex_row gap-4 mb-4 lg:m-0">
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

        <div className="flex_row w-[100%] lg:w-[auto] items-center gap-3">
          <div className="flex_row gap-2">
            <Image
              src="/icons/add-square-2.svg"
              width={18}
              height={18}
              alt="add icon"
            ></Image>
            <p>Invite</p>
          </div>
          <div className="flex_row ml-auto lg:ml-0">
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

        <div className="flex flex-col lg:flex lg:flex-row items-center gap-5">
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
            alt="list icon"
          ></Image>
          <Image
            className="hidden lg:block"
            src="/icons/grid.svg"
            width={21}
            height={21}
            alt="grid icon"
          ></Image>
        </div>
      </section>

      <section className="flex_row flex-wrap gap-4">
        <DragDropContext onDragEnd={onDragEnd}>
          {data.stageOrder.map((stageId) => {
            const stage = data.stages[stageId];
            const tasks = stage.tasksIds.map((taskId) => data.tasks[taskId]);

            return <ProjectList key={stage.id} stage={stage} tasks={tasks} />;
          })}
        </DragDropContext>
      </section>
    </section>
  );
}
