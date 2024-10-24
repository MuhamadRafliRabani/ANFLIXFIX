"use client";
import React, { useEffect, useState } from "react";
import Rekomend_anime from "@/app/Components/content/Rekomend_anime";
import Filter from "@/app/Components/ui/filter";
import useDebounce from "@/libs/useDebounce";
import { FetchAnime } from "@/utility/Api"; // Menggunakan reusable API
import Card from "@/app/Components/ui/card";
import { Pagginations } from "@/libs/pagginations";

export default function CatalogPage() {
  const [filters, setFilters] = useState({
    year: null,
    season: null,
    genres: [],
  });
  const [animes, setAnime] = useState([]);
  const { seeAnime } = Pagginations();

  const debouncedFilters = useDebounce(filters, 300);
  let urlAnime;

  if (debouncedFilters.year && debouncedFilters.season) {
    urlAnime = `/seasons/${debouncedFilters.year}/${debouncedFilters.season}`;
  } else {
    urlAnime = "/recommendations/anime";
  }

  const { data: animeList, isLoading, isError } = FetchAnime(urlAnime);

  useEffect(() => {
    if (animeList && urlAnime === "/recommendations/anime") {
      const datas = animeList?.data?.flatMap((animes) => animes.entry);
      console.log({ animeList });
      console.log({ datas });
      const datam = datas?.slice(0, seeAnime);

      setAnime(datam);
    }
  }, [animeList, urlAnime, seeAnime]);

  if (isLoading) return <div className="text-center">Loading...</div>;
  if (isError) return <div className="text-center">Failed to load data.</div>;

  const handleFilterChange = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  console.log(animes);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto py-10">
        <h1 className="mb-6 text-center text-3xl font-bold">Catalog</h1>
        <Filter filters={filters} onChange={handleFilterChange} />

        <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
          {animes.length !== 0 &&
            urlAnime === "/recommendations/anime" &&
            animes?.map((anime, i) => (
              <React.Fragment key={i}>
                <Card anime={anime} />
              </React.Fragment>
            ))}
          {animes.length !== 0 &&
            urlAnime !== "/recommendations/anime" &&
            animeList.data.map((anime, i) => (
              <React.Fragment key={i}>
                <Card anime={anime} />
              </React.Fragment>
            ))}
        </div>
      </div>
    </div>
  );
}
