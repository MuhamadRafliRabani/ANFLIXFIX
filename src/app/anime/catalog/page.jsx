"use client";
import React, { useState } from "react";
import Card from "@/app/Components/ui/card";
import { FetchAnime } from "@/utility/Api";
import { Pagginations } from "@/libs/pagginations";
import Button from "@/app/Components/ui/button";
import LoadingSkeleton from "@/app/Components/cardSkeleton";
import Filter from "@/app/Components/ui/filter";
import { CaretDown } from "@phosphor-icons/react";
import { useFilter } from "@/store/store";
import ContainerAnimes from "@/app/Components/ui/containerAnimes";

export default function CatalogPage() {
  const { filter } = useFilter();
  const { handleSeeMore, page } = Pagginations();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleFilter = () => setIsOpen((prev) => !prev);

  const genre = filter.Genres !== null ? filter.Genres : "";
  const type = filter.Type !== null ? filter.Type : "";
  const rating = filter.Rating !== null ? filter.Rating : "";

  const {
    data: animes,
    isLoading,
    isError,
  } = FetchAnime(
    `https://api.jikan.moe/v4/anime?genres=${genre}&type=${type}&rating=&order_by=score&sort=desc&page=${page}`,
    // "https://api.jikan.moe/v4/anime?genres=&type=&rating=rx&order_by=score&sort=desc",
  );
  
  console.log("🚀 ~ CatalogPage ~ animes:", animes)

  if (isLoading) return <LoadingSkeleton length={20} />;
  if (isError) return <div className="text-center">Failed to load data.</div>;

  return (
    <div className="G relative min-h-screen bg-black text-white md:px-10">
      <div className="mx-auto py-14">
        <div className="ms-auto flex h-fit w-full flex-shrink-0 flex-grow items-center justify-between px-6 py-4 tracking-wide">
          <h1 className="text-xl font-bold">Catalog</h1>

          <button
            className="text-primary flex items-center justify-center gap-1 text-sm"
            onClick={handleToggleFilter}
          >
            Sort by <CaretDown size={16} />
          </button>
        </div>
        
      <ContainerAnimes
        animes={animes?.data}
        header={""}
        isLoading={isLoading}
        handleSeeMore={handleSeeMore}
        hasLastPage={animes?.pagination.has_next_page}
        page={page}
      />
      </div>
    </div>
  );
}
