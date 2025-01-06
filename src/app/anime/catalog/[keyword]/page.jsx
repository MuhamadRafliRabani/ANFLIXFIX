"use client";

import { CaretDown, CaretUp } from "@phosphor-icons/react";
import { useFilter, usePage } from "@/store/store";
import { useCustomState } from "@/libs/useCustomState";
import FilterComponent from "@/app/Components/ui/filterItem";
import ContainerContent from "@/app/Components/ui/containerContent";

const CatalogPage = ({ params }) => {
  const { page } = usePage();
  console.log("🚀 ~ CatalogPage ~ page:", page);
  const { filter, setFilter } = useFilter();
  const [typeData, setTypeData] = useCustomState("anime");
  const [isFilterOpen, setIsFilterOpen] = useCustomState(false);

  const TitleAnime = decodeURI(params.keyword);

  const { Genre, Type, Rating, Year, Status, OrderBy, Sort } = filter;

  const generateEndpoint = () => {
    const baseParams = `type=${Type || ""}&rating=${Rating || ""}&year=${Year || ""}&order_by=${
      OrderBy?.toLowerCase() || "score"
    }&sort=${Sort?.toLowerCase() || "desc"}&status=${Status?.toLowerCase() || ""}&page=${parseInt(page) || 1}`;

    return TitleAnime === "series"
      ? `/${typeData}?genres=${Genre || ""}&${baseParams}`
      : `/${typeData}?q=${TitleAnime}&${baseParams}`;
  };

  const toggleFilterOpen = () => setIsFilterOpen((prev) => !prev);

  const handleTypeData = () => {
    setTypeData((prev) => (prev === "anime" ? "manga" : "anime"));
    setIsFilterOpen(false);
    setFilter({
      Genre: null,
      Type: null,
      Rating: null,
      Year: null,
      Status: null,
      OrderBy: "score",
      Sort: "desc",
    });
    window.scrollTo(0, 0);
  };

  return (
    <div className="relative min-h-screen text-white md:px-10">
      {/* Filter Component */}
      <FilterComponent
        isOpen={isFilterOpen}
        setIsOpen={toggleFilterOpen}
        action="searchAnime"
        typeData={typeData}
      />

      {/* Catalog Header */}
      <div className="container mb-4 mt-16 px-1">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">
            Catalog{" "}
            <span
              onClick={handleTypeData}
              className="border-slide cursor-pointer bg-gradient-to-b from-yellow-400 to-orange-400 bg-clip-text text-transparent"
            >
              {typeData}
            </span>
          </h1>

          <button
            className="border-slide flex cursor-pointer items-center gap-1 bg-transparent"
            onClick={toggleFilterOpen}
          >
            Sort by <CaretDown size={16} />
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
