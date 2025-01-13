import { ListOptionLibrary, ListOptions } from "@/data/listOptions";
import { useContent } from "@/store/store";
import Guide from "../../guide/guide";

const handleShowOptions = (type) => {
  if (type === "Library") return ListOptionLibrary;

  return type === "anime"
    ? ListOptions
    : ListOptions.filter((option) => option.title !== "Staff");
};
const HeadContent = ({ type }) => {
  const { content, setContent } = useContent();

  return (
    <div className="w-full ps-1">
      <div className="relative w-full overflow-hidden border-b border-second_color pb-2">
        <Guide message="← Slide →" />
        <ul className="scrollbar-hide flex items-center gap-2 overflow-x-scroll font-medium">
          {handleShowOptions(type)?.map((List, i) => (
            <li
              key={i}
              onClick={() => setContent(List.title)}
              className={`rounded-md px-4 py-2 duration-500 hover:bg-second_color hover:text-white ${content == List.title ? "bg-second_color text-white" : "text-text_color"}`}
            >
              <p className="whitespace-nowrap">{List.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeadContent;
