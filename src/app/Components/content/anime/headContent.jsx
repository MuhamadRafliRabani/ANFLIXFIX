import { ListOptions } from "@/data/listOptions";
import { useContent } from "@/store/store";

const HeadContent = () => {
  const { content, setContent } = useContent();

  return (
    <div className="w-full">
      <div className="embla w-full border-b border-second_color pb-2">
        <ul className="embla__container flex items-center gap-2 font-medium">
          {ListOptions.map((List, i) => (
            <li
              key={i}
              onClick={() => setContent(List.title)}
              className={`embla__slide rounded-md duration-500 hover:bg-second_color hover:px-2 hover:py-1 hover:text-white ${content == List.title ? "bg-second_color px-2 py-1 text-white" : "text-text_color"}`}
            >
              {List.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeadContent;
