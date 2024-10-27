"use client";
import { useFilter } from "@/utility/store/store";

const FilterSelect = ({ filterArray }) => {
  const { filter, setFilter } = useFilter();
  console.log(filter);

  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
      {filterArray.map((year, i) => (
        <label key={i} className="flex items-center space-x-2 truncate">
          <input
            type="checkbox"
            className="form-checkbox size-4 appearance-none rounded-sm border border-white border-opacity-90 bg-transparent text-blue-600 transition duration-200 ease-in-out checked:border-transparent checked:bg-blue-600"
            onClick={() => setFilter(year)}
            onChange={() => setFilter(year)}
            value={year}
          />
          <span className="text-white">{year}</span>
        </label>
      ))}
    </div>
  );
};

export default FilterSelect;
