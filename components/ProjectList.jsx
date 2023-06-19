import ListCard from "./ListCard";

const ProjectList = ({ name, data }) => {
  const list = data.filter((todo) => todo.status == name);

  const handleDragStart = (event) => {
    event.dataTransfer.setData("text/plain", data);
  };
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
          {list.length}
        </div>
      </section>

      {/* The Border */}
      {name == "To Do" && <div className="rounded-lg h-[3px] bg-[#5030e5]" />}
      {name == "On Progress" && (
        <div className="rounded-lg h-[3px] bg-[#FFA500]" />
      )}
      {name == "Done" && <div className="rounded-lg h-[3px] bg-[#8BC48A]" />}

      {/* Todo Items */}
      {data.map((todo, i) => {
        if (todo.status === name)
          return (
            <ListCard
              draggable
              onDragStart={handleDragStart}
              todo={todo}
              key={todo.id}
            />
          );
      })}
    </section>
  );
};

export default ProjectList;
