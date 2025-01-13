"use client";

import { CaretDown, CaretUp } from "@phosphor-icons/react";
import { useFilter, usePage } from "@/store/store";
import { useCustomState } from "@/libs/useCustomState";
import FilterComponent from "@/app/Components/ui/filterItem";
import ContainerContent from "@/app/Components/ui/containerContent";

const CatalogPage = ({ params }) => {
  // States and Stores
  const { page, setPage } = usePage();
  const { filter, setFilter } = useFilter();
  const { keyword, type } = params;

  const [typeData, setTypeData] = useCustomState(type);
  const [isFilterOpen, setIsFilterOpen] = useCustomState(false);

  const { Genres, Type, Rating, Year, Status, OrderBy, Sort } = filter;

  const decodeKeyword = decodeURI(keyword);

  const generateEndpoint = () => {
    const baseParams = [
      `type=${Type || ""}`,
      `rating=${Rating || ""}`,
      `year=${Year || ""}`,
      `order_by=${OrderBy?.toLowerCase() || "score"}`,
      `sort=${Sort?.toLowerCase() || "desc"}`,
      `status=${Status?.toLowerCase() || ""}`,
      `page=${page || 1}`,
    ].join("&");

    const endPointSearch = `/${typeData}?q=${decodeKeyword}&${baseParams}`;
    const endPointSeries = `/${typeData}?genres=${Genres || ""}&${baseParams}`;

    return keyword === "series" ? endPointSeries : endPointSearch;
  };

  const resetFilterState = () => {
    setFilter({
      Genre: null,
      Type: null,
      Rating: null,
      Year: null,
      Status: null,
      OrderBy: "score",
      Sort: "desc",
    });
  };

  const toggleFilterOpen = () => setIsFilterOpen((prev) => !prev);

  const handleTypeDataSwitch = () => {
    setTypeData((prev) => (prev === "anime" ? "manga" : "anime"));
    setPage(1);
    resetFilterState();
    setIsFilterOpen(false);
    window.scrollTo(0, 0);
  };

  // Render
  return (
    <div className="relative min-h-screen text-white md:px-10">
      {/* Filter Component */}
      <FilterComponent
        isOpen={isFilterOpen}
        setIsOpen={toggleFilterOpen}
        typeData={typeData}
      />

      {/* Catalog Header */}
      <div className="container mb-4 mt-16 px-1">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">
            Catalog{" "}
            <span
              onClick={handleTypeDataSwitch}
              className="border-slide cursor-pointer bg-gradient-to-b from-yellow-400 to-orange-400 bg-clip-text text-transparent"
            >
              {typeData}
            </span>
          </h1>

          <button
            className="border-slide flex cursor-pointer items-center gap-1 bg-transparent"
            onClick={toggleFilterOpen}
          >
            Sort by{" "}
            {isFilterOpen ? <CaretUp size={16} /> : <CaretDown size={16} />}
          </button>
        </div>

        {/* Content Container */}
        <ContainerContent
          endPoint={generateEndpoint()}
          typeContent="listCard"
        />
      </div>
    </div>
  );
};

export default CatalogPage;
