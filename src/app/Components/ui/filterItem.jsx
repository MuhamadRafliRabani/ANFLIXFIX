import FilterInput from "./filterInput";
import { useFilter } from "@/store/store";
import { Filters } from "@/data/dataFilter";
import { MagnifyingGlass, X } from "@phosphor-icons/react/dist/ssr";

const FilterComponent = ({ isOpen, setIsOpen }) => {
  const { filter, setFilter } = useFilter();

  const handleFilterChange = (key, value) => {
    setFilter(key, value);
  };

  const resetFilters = () => {
    Filters.forEach((filterOption) => setFilter(filterOption.Name, ""));
  };

  return (
    <div
      className={`absolute z-50 mx-auto w-full max-w-4xl space-y-3 rounded-lg bg-primary_color p-4 text-white transition-transform duration-300 ${
        isOpen ? "top-14 opacity-100" : "-top-full opacity-0"
      }`}
    >
      <div className="flex items-center justify-between">
        <h3>Filter by</h3>
        <button onClick={setIsOpen}>
          <X size={24} />
        </button>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Filters.map((filterOption) => (
          <FilterInput
            key={filterOption.Name}
            option={filterOption}
            onChange={handleFilterChange}
            selectedValue={filter[filterOption.Name]}
          />
        ))}
      </div>
      <div className="flex items-center justify-between">
        <button onClick={resetFilters}>
          <h3>Reset filter</h3>
        </button>
        <button onClick={handleFilterChange}>
          <h3 className="flex items-center justify-center space-x-1">
            <MagnifyingGlass size={20} /> <span>Search</span>
          </h3>
        </button>
      </div>
    </div>
  );
};

export default FilterComponent;
