"use client";
import { useFilter } from "@/utility/store/store";

const FilterSelect = ({ filterArray, seeMore }) => {
  const { filter, setFilter } = useFilter();

  return (
    <div
      className={`grid h-fit w-full grid-cols-3 gap-3 overflow-ellipsis transition-all duration-700 ease-in-out md:grid-cols-1 md:gap-4 md:py-5 ${seeMore ? "max-h-fit" : "max-h-[150px]"}`}
    >
      {filterArray.map((year, i) => (
        <label
          key={i}
          className="flex items-center space-x-2 truncate whitespace-pre-line"
        >
          <input
            type="checkbox"
            className="form-checkbox md:roun size-4 appearance-none rounded-sm border border-white border-opacity-90 bg-transparent text-black transition duration-200 ease-in-out checked:border-transparent checked:bg-white md:rounded-[4px]"
            onClick={() => setFilter(year)}
            onChange={() => setFilter(year)}
            value={year}
            id="filter-input"
          />
          <span className="text-primary text-sm">{year}</span>
        </label>
      ))}
    </div>
  );
};

export default FilterSelect;
