import { ListOptions } from "@/data/listOptions";

const HeadContent = () => {
  return (
    <div className="w-full">
      <div className="embla w-full border-b border-second_color pb-2">
        <ul className="embla__container flex items-center gap-2 font-medium text-text_color">
          {ListOptions.map((List, i) => (
            <li
              key={i}
              className="embla__slide rounded-lg duration-500 hover:bg-second_color hover:px-2 hover:py-1 hover:text-white"
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
