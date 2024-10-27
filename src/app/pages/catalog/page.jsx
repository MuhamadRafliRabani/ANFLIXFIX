"use client";
import React from "react";
import Card from "@/app/Components/ui/card";
import { FetchAnime } from "@/utility/Api";
import { Pagginations } from "@/libs/pagginations";
import Button from "@/app/Components/ui/button";
import LoadingSkeleton from "@/app/Components/cardSkeleton";
import Filter from "@/app/Components/ui/filter";

export default function CatalogPage() {
  const { handleSeeMore, page } = Pagginations();
  const {
    data: animes,
    isLoading,
    isError,
  } = FetchAnime(`/anime?genres=1&type=movie&order_by=score&sort=desc`);

  if (isLoading) return <LoadingSkeleton length={20} />;
  if (isError) return <div className="text-center">Failed to load data.</div>;

  console.log(animes);

  return (
    <div className="min-h-screen bg-black text-white">
      <h1 className="mb-6 text-center text-3xl font-bold">Catalog</h1>
      <div className="container mx-auto py-10">
        <div className="me-6 ms-auto h-fit w-full py-2">
          <Button black text="FILTERR" width="w-full" />
          <Filter />
        </div>
        <div className="flex w-full flex-shrink-0 flex-grow flex-wrap content-center items-center justify-center gap-4 md:w-full md:pe-4">
          {animes?.data.map((anime, i) => (
            <React.Fragment key={i}>
              <Card anime={anime} />
            </React.Fragment>
          ))}
        </div>

        <div className="pt-2">
          <Button width="w-full" action={handleSeeMore} text="Show More" />
        </div>
      </div>
    </div>
  );
}
