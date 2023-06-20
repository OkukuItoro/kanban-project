import Image from "next/image";

const ListCard = ({ task }) => {
  const { urgency, status, title, desc, imgs, collaborators, comments, files } =
    task;
  return (
    // CARD COMPONENT
    <article className="bg-white p-4 mt-6 rounded-[16px]">
      {/* Container for Urgency/Status Tag and Options Icon */}
      <div className="flex_row justify-between">
        {/* Urgency/Status Tag */}
        {status == "Done" ? (
          <div className="tag_bg_done text-[#68B266] text-[12px] px-2 rounded-[4px]">
            Completed
          </div>
        ) : (
          <div className="tag_bg_not_done text-[#D58D49] text-[12px] px-2 rounded-[4px]">
            {urgency}
          </div>
        )}

        {/* Options Icon */}
        <Image
          src="/icons/three-dots.svg"
          width={16}
          height={16}
          alt="three dotd icon"
        ></Image>
      </div>

      {/* Project Title */}
      <h3 className="text-[#0D062D] text-[18px] mt-1 font-semibold">{title}</h3>
      {/* Project Description */}
      {desc && <p className="text-[#787486] text-[12px] mb-5">{desc}</p>}
      {/* Project Images */}
      {imgs && (
        <div className="flex_row w-[100%] mb-5">
          {imgs?.map((img, i) => {
            if (img === "onboarding")
              return (
                <Image
                  key={i}
                  src={`/images/${img}.png`}
                  width={281.68}
                  height={110}
                  className="rounded-[8px] w-[100%]"
                  alt="project image"
                ></Image>
              );

            if (img === "mobile-app-design")
              return (
                <Image
                  key={i}
                  src={`/images/${img}.png`}
                  width={274}
                  height={180}
                  className="rounded-[8px]"
                  alt="project image"
                ></Image>
              );

            if ((img === "mood-board-1", "mood-board-2"))
              return (
                <Image
                  key={i}
                  src={`/images/${img}.png`}
                  width={111}
                  height={59}
                  className="rounded-[8px] first-of-type:mr-3"
                  alt="project image"
                ></Image>
              );
          })}
        </div>
      )}

      {/* Container for Collaborators, Comments and Files */}
      <div className="flex_row items-center justify-between ml-2">
        {/* Collaborators */}
        <div className="flex_row">
          {collaborators?.map((member, i) => (
            <Image
              key={i}
              src={member}
              width={24}
              height={24}
              alt="team member"
              className="ml-[-6px]"
            ></Image>
          ))}
        </div>

        {/* Comments and Files */}
        <div className="flex_row gap-3">
          <div className="flex_row gap-[2.5px]">
            <Image
              src="/icons/message.svg"
              width={16}
              height={16}
              alt="message icon"
            ></Image>
            <p className="text-[10px] font-medium text-[#787486]">
              {comments} Comments
            </p>
          </div>
          <div className="flex_row gap-[2.5px]">
            <Image
              src="/icons/folder.svg"
              width={16}
              height={16}
              alt="folder icon"
            ></Image>
            <p className="text-[10px] font-medium text-[#787486]">
              {files} files
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ListCard;
