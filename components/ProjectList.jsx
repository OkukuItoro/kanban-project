import { todos, onProgress, done } from "@/constants";
import ListCard from "./ListCard";

const ProjectList = ({ name }) => {
  // w-[354px]
  return (
    // PROJECT'S STAGE FOR ("TO DO", "ON PROGRESS", "DONE") @ FIGMA DESIGN
    <section className="bg-[#F5F5F5] w-[100%] lg:w-[32%] flex_col rounded-[16px] mb-12 lg:m-0 p-5 h-[fit-content]">
      {/* Container for Project's Stage Theme, Title and No. of items */}
      <section className="flex_row items-center gap-2 mb-5">
        {/* Theme */}
        {name == "To Do" && (
          <div className={`bg-[#5030e5] h-[8px] w-[8px] rounded-full`} />
        )}
        {name == "On Progress" && (
          <div className={`bg-[#FFA500] h-[8px] w-[8px] rounded-full`} />
        )}
        {name == "Done" && (
          <div className={`bg-[#76A5EA] h-[8px] w-[8px] rounded-full`} />
        )}

        {/* Title */}
        <h2 className="text-[#0D062D] text-[16px] font-medium">{name}</h2>

        {/* Number of items in each stage list */}
        <div
          className={`bg-[#E0E0E0] text-[#625F6D] text-[12px] h-[20px] w-[20px] flex_row items-center justify-center rounded-full`}
        >
          {name === "To Do" && todos.length}
          {name === "On Progress" && onProgress.length}
          {name === "Done" && done.length}
        </div>
      </section>

      {/* The Border */}
      {name == "To Do" && (
        <div className="rounded-lg border-[3px] border-[#5030e5]" />
      )}
      {name == "On Progress" && (
        <div className="rounded-lg border-[3px] border-[#FFA500]" />
      )}
      {name == "Done" && (
        <div className="rounded-lg border-[3px] border-[#8BC48A]" />
      )}

      {/* Todo Items */}
      {name == "To Do" &&
        todos.map(
          (
            {
              urgency,
              isComplete,
              title,
              desc,
              imgs,
              collaborators,
              comments,
              files,
            },
            i
          ) => (
            <ListCard
              key={i}
              urgency={urgency}
              isComplete={isComplete}
              title={title}
              desc={desc}
              imgs={imgs}
              collaborators={collaborators}
              comments={comments}
              files={files}
            />
          )
        )}

      {/* On Progress Items */}
      {name == "On Progress" &&
        onProgress.map(
          (
            {
              urgency,
              isComplete,
              title,
              desc,
              imgs,
              collaborators,
              comments,
              files,
            },
            i
          ) => (
            <ListCard
              key={i}
              urgency={urgency}
              isComplete={isComplete}
              title={title}
              desc={desc}
              imgs={imgs}
              collaborators={collaborators}
              comments={comments}
              files={files}
            />
          )
        )}

      {/* Done Items */}
      {name == "Done" &&
        done.map(
          (
            {
              urgency,
              isComplete,
              title,
              desc,
              imgs,
              collaborators,
              comments,
              files,
            },
            i
          ) => (
            <ListCard
              key={i}
              urgency={urgency}
              isComplete={isComplete}
              title={title}
              desc={desc}
              imgs={imgs}
              collaborators={collaborators}
              comments={comments}
              files={files}
            />
          )
        )}
    </section>
  );
};

export default ProjectList;
