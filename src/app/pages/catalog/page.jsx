"use client";
import React, { useState } from "react";
import Card from "@/app/Components/ui/card";
import { FetchAnime } from "@/utility/Api";
import { Pagginations } from "@/libs/pagginations";
import Button from "@/app/Components/ui/button";
import LoadingSkeleton from "@/app/Components/cardSkeleton";
import Filter from "@/app/Components/ui/filter";
import { CaretDown } from "@phosphor-icons/react";

export default function CatalogPage() {
  const { handleSeeMore, page } = Pagginations();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleFilter = () => setIsOpen((prev) => !prev);
  const {
    data: animes,
    isLoading,
    isError,
  } = FetchAnime(
    `https://api.jikan.moe/v4/anime?genres=&type=tv&order_by=score&sort=desc`,
  );

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
        <div className="flex h-full w-full flex-shrink-0 flex-grow-0 items-center">
          <Filter handleOpen={handleToggleFilter} isOpen={isOpen} />

          <div className="flex w-full flex-shrink-0 flex-grow flex-wrap content-center items-center justify-center gap-4 md:w-[90%] md:pe-4">
            {animes?.data.map((anime, i) => (
              <React.Fragment key={i}>
                <Card anime={anime} />
              </React.Fragment>
            ))}
          </div>
        </div>

        <Button width=" w-full" action={handleSeeMore} text="Show More" />
      </div>
    </div>
  );
}
