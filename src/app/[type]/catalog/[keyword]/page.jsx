"use client";

import { CaretDown, CaretUp } from "@phosphor-icons/react";
import { useFilter, usePage } from "@/store/store";
import FilterComponent from "@/app/Components/ui/filterItem";
import ContainerContent from "@/app/Components/ui/containerContent";
import { useRouter } from "next/navigation";
import { CaretUpDown } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useState } from "react";

const CatalogPage = ({ params }) => {
  // States and Stores
  const router = useRouter();
  const { keyword, type } = params;
  const { page, setPage } = usePage();
  const { filter, setFilter, resetFilter } = useFilter();
  const [selectedType, setSelectedType] = useState(type);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const { Genres, Type, Rating, Year, Status, OrderBy, Sort } = filter;

  const decodeKeyword = decodeURI(keyword);

  const generateEndpoint = () => {
    const baseParams = [
      `genres=${Genres || ""}`,
      `type=${Type || ""}`,
      `rating=${Rating || ""}`,
      `year=${Year || ""}`,
      `order_by=${OrderBy?.toLowerCase() || "score"}`,
      `sort=${Sort?.toLowerCase() || "desc"}`,
      `status=${Status?.toLowerCase() || ""}`,
      `page=${page || 1}`,
    ].join("&");

    const endPointSearch = `/${type}?q=${decodeKeyword}&${baseParams}`;
    const endPointSeries = `/${type}?&${baseParams}`;

    if (type === "people")
      return `/people?q=${decodeKeyword == "series" ? "" : decodeKeyword}&page=${page}`;

    return keyword === "series" ? endPointSeries : endPointSearch;
  };

  const toggleFilterOpen = () => setIsFilterOpen((prev) => !prev);

  const handleTypeDataSwitch = (selectedType) => {
    setSelectedType(selectedType);
    setPage(1);
    setIsFilterOpen(false);
    window.scrollTo(0, 0);
    router.push(
      `/${selectedType}/catalog/${decodeKeyword == "series" ? "series" : decodeKeyword}`,
    );
  };

  useEffect(() => {
    if (setFilter) {
      resetFilter({
        Genre: null,
        Type: null,
        Rating: null,
        Year: null,
        Status: null,
        Order_by: "score",
        Sort: "desc",
      });
    }
  }, []);

  return (
    <div className="relative min-h-screen text-white md:px-10">
      {/* Filter Component */}
      <FilterComponent
        isOpen={isFilterOpen}
        setIsOpen={toggleFilterOpen}
        typeData={type}
      />

      <div className="container mb-4 mt-16 px-1">
        <div className="flex items-center justify-between">
          <div className="relative flex w-fit items-center">
            <h1 className="text-xl font-bold">Catalog</h1>
            <select
              value={selectedType}
              onChange={(e) => handleTypeDataSwitch(e.target.value)}
              className="custom-select border-slide relative w-full min-w-[200px] cursor-pointer appearance-none bg-transparent ps-1.5 text-lg font-medium text-yellow-400 focus:outline-none md:min-w-[300px]"
            >
              <option
                value="anime"
                className="bg-primary_color text-sm md:text-lg"
              >
                anime
              </option>
              <option
                value="manga"
                className="bg-primary_color text-sm md:text-lg"
              >
                manga
              </option>
              <option
                value="people"
                className="bg-primary_color text-sm md:text-lg"
              >
                people
              </option>
            </select>
            <CaretUpDown
              size={16}
              className="absolute right-[40%] -z-10 md:right-[210px] md:top-[0.45rem]"
            />
          </div>

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
