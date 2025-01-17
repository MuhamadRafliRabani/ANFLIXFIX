import FilterInput from "./filterInput";
import { useFilter } from "@/store/store";
import { FiltersAnime, FiltersManga } from "@/data/dataFilter";
import { X } from "@phosphor-icons/react/dist/ssr";

const FilterComponent = ({ isOpen, setIsOpen, typeData }) => {
  const { filter, setFilter } = useFilter();

  const dataListFilter = typeData === "anime" ? FiltersAnime : FiltersManga;

  const handleFilterChange = (key, value) => {
    setFilter(key, value);
    console.log(key, value);
  };

  return (
    <div
      className={`absolute top-9 z-50 mx-auto w-full space-y-3 rounded-lg bg-primary_color/95 px-4 py-2 text-white transition-transform duration-300 md:left-5 md:max-w-fit ${
        isOpen ? "top-0 opacity-100" : "-top-full hidden opacity-0"
      }`}
    >
      <div className="flex items-center justify-between">
        <h3>Filter by</h3>
        <button onClick={setIsOpen}>
          <X size={24} />
        </button>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {dataListFilter.map((filterOption, i) => (
          <div key={i}>
            <FilterInput
              options={filterOption}
              onChange={handleFilterChange}
              selectedValue={filter[filterOption.name]}
              isOpen={isOpen}
            />
          </div>
        ))}
      </div>
      {/* <div className="flex items-center justify-between">
        <button onClick={resetFilters}>
          <h3>Reset filter</h3>
        </button>
        <button onClick={handleFilterChange}>
          <h3 className="flex items-center justify-center space-x-1">
            <MagnifyingGlass size={20} /> <span>Search</span>
          </h3>
        </button>
      </div> */}
    </div>
  );
};

export default FilterComponent;
