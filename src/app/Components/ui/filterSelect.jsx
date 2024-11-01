"use client";
import { useFilter } from "@/utility/store/store";
import { useState } from "react";

const FilterSelect = ({ items, seeMore }) => {
  const { setFilter } = useFilter();

  const updateFilter = (filterKey, value) => {
    setFilter(filterKey, value);
  };

  console.log(items.Name);

  return (
    <div
      className={`grid h-fit w-full grid-cols-3 gap-3 overflow-ellipsis transition-all duration-700 ease-in-out md:grid-cols-1 md:gap-4 md:py-5 ${seeMore ? "max-h-fit" : "max-h-[150px]"}`}
    >
      {items?.content.map((item, i) => (
        <label
          key={i}
          className="flex items-center space-x-2 truncate whitespace-pre-line"
        >
          <input
            type="checkbox"
            className="form-checkbox md:roun size-4 appearance-none rounded-sm border border-white border-opacity-90 bg-transparent text-black transition duration-200 ease-in-out checked:border-transparent checked:bg-white md:rounded-[4px]"
            onChange={() =>
              updateFilter(items.Name, items.Name == "Genres" ? i + 1 : item)
            }
            id="filter-input"
          />
          <span className="text-primary text-sm">{item}</span>
        </label>
      ))}
    </div>
  );
};

export default FilterSelect;
