import { Draggable, Droppable } from "react-beautiful-dnd";
import ListCard from "./ListCard";

const ProjectList = ({ stage, tasks }) => {
  // w-[354px]
  return (
    // PROJECT'S STAGE FOR ("TO DO", "ON PROGRESS", "DONE") @ FIGMA DESIGN
    <Droppable droppableId={stage.id}>
      {(droppableProvided, droppableSnapshot) => (
        <section
          ref={droppableProvided.innerRef}
          {...droppableProvided.droppableProps}
          className="bg-[#F5F5F5] w-[100%] md:w-[43%] lg:w-[32%] flex_col rounded-[16px] mb-12 lg:m-0 p-5 h-[fit-content]"
        >
          {/* Container for Project's Stage Theme, Title and No. of items */}
          <section className="flex_row items-center gap-2 mb-5">
            {/* Theme */}
            {stage.title == "To Do" && (
              <div className={`bg-[#5030e5] h-[8px] w-[8px] rounded-full`} />
            )}
            {stage.title == "On Progress" && (
              <div className={`bg-[#FFA500] h-[8px] w-[8px] rounded-full`} />
            )}
            {stage.title == "Done" && (
              <div className={`bg-[#76A5EA] h-[8px] w-[8px] rounded-full`} />
            )}

            {/* Title */}
            <h2 className="text-[#0D062D] text-[16px] font-medium">
              {stage.title}
            </h2>

            {/* Number of items in each stage list */}
            <div
              className={`bg-[#E0E0E0] text-[#625F6D] text-[12px] h-[20px] w-[20px] flex_row items-center justify-center rounded-full`}
            >
              {tasks.length}
            </div>
          </section>

          {/* The Border */}
          {stage.title == "To Do" && (
            <div className="rounded-lg h-[3px] bg-[#5030e5]" />
          )}
          {stage.title == "On Progress" && (
            <div className="rounded-lg h-[3px] bg-[#FFA500]" />
          )}
          {stage.title == "Done" && (
            <div className="rounded-lg h-[3px] bg-[#8BC48A]" />
          )}

          {/* Todo Items */}

          {tasks.map((task, i) => (
            <Draggable key={task.id} draggableId={`${task.id}`} index={i}>
              {(draggableProvided, draggableSnapshot) => (
                <div
                  ref={draggableProvided.innerRef}
                  {...draggableProvided.draggableProps}
                  {...draggableProvided.dragHandleProps}
                >
                  <ListCard task={task} />
                </div>
              )}
            </Draggable>
          ))}
        </section>
      )}
    </Droppable>
  );
};

export default ProjectList;
