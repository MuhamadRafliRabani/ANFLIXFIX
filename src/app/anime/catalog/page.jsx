"use client";
import { FetchAnime } from "@/utility/Api";
import { Pagginations } from "@/libs/pagginations";
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import { useFilter } from "@/store/store";
import ContainerAnimes from "@/app/Components/ui/containerAnimes";
import { useCustomState } from "@/libs/useCustomState";
import FilterComponent from "@/app/Components/ui/filterItem";
import Button from "@/app/Components/ui/button";
import { Sliders } from "@phosphor-icons/react/dist/ssr";

export default function CatalogPage() {
  const { filter } = useFilter();
  const [isFilterOpen, setIsFilterOpen] = useCustomState(false);

  const genre = filter.Genres && filter.Genres !== "none" ? filter.Genres : "";
  const type = filter.Type ? filter.Type : "";
  const rating = filter.Rating ? filter.Rating : "";
  const seasons = filter.Season ? filter.Season.toLowerCase() : "";
  const year = filter.Year ? filter.Year : "";
  const status = filter.Status ? filter.Status.toLowerCase() : "";
  const orderBy = filter.Order_by ? filter.Order_by.toLowerCase() : "score";
  const sort = filter.Sort ? filter.Sort.toLowerCase() : "desc";

  const {
    data: animes,
    isLoading,
    isError,
  } = FetchAnime(
    `https://api.jikan.moe/v4/anime?genres=${genre}&type=${type}&rating=${rating}&order_by=${orderBy}&sort=${sort}&status=${status}&season=${seasons}&year=${year}&page=${1}`,
  );

  if (isError) return <div className="text-center">Failed to load data.</div>;

  // console.log("🚀 ~ CatalogPage ~ globalState:", {
  //   genre,
  //   type,
  //   rating,
  //   seasons,
  //   year,
  //   status,
  //   orderBy,
  //   sort,
  // });

  console.log(animes);

  return (
    <div className="G relative min-h-screen bg-black text-white md:px-10">
      <FilterComponent
        isOpen={isFilterOpen}
        setIsOpen={() => setIsFilterOpen((prev) => !prev)}
      />
      <div className="mx-auto my-14">
        <div className="ms-auto flex h-fit w-full flex-shrink-0 flex-grow items-center justify-between px-6 py-4 tracking-wide">
          <h1 className="text-xl font-bold">Catalog</h1>

          <Button
            action={() => setIsFilterOpen((prev) => !prev)}
            icon={<Sliders size={20} />}
            text={"Sort by"}
            black
          />
        </div>

        <ContainerAnimes
          animes={animes?.data}
          header={""}
          isLoading={isLoading}
          handleSeeMore
          LastPage={animes?.pagination.items.count}
          page
        />
      </div>
    </div>
  );
}

const Icons = () => {
  return (
    <div className="mb-1 size-4 -space-y-1">
      <CaretUp size={12} weight="bold" />
      <CaretDown size={12} weight="bold" />
    </div>
  );
};
