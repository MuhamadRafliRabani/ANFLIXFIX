"use client";
import { useFilter } from "@/utility/store/store";
import { CaretDown } from "@phosphor-icons/react";
import { useState } from "react";

const FilterSelect = ({ filterArray }) => {
  const { filter, setFilter } = useFilter();
  console.log(filter);

  return (
    <div
      className={`grid h-fit w-full grid-cols-3 gap-3 overflow-ellipsis transition-all duration-700 ease-in-out md:grid-cols-1 md:gap-4 md:py-5`}
    >
      {filterArray.map((year, i) => (
        <label key={i} className="flex items-center space-x-2 truncate">
          <input
            type="checkbox"
            className="form-checkbox md:roun size-4 appearance-none rounded-sm border border-neutral-200 border-opacity-90 bg-transparent text-blue-600 transition duration-200 ease-in-out checked:border-transparent checked:bg-blue-600 md:rounded-md"
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
