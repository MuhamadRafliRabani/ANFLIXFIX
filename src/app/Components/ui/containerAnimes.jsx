"use client";
import { useEffect, useMemo, useState } from "react";
import LoadingSkeleton from "../cardSkeleton";
import Button from "./button";
import Card from "./cardAnime";
import Pagination from "@/libs/pagginations";

const ContainerAnimes = ({ icon, header, animes, isLoading, pagination }) => {
  const [page, setPage] = useState(1);
  const [lastVisibleAnime, setLastVisibleAnime] = useState(24);
  const [dataRekomendationsAnime, setDataRekomendationsAnime] = useState([]);

  const handleDataRekomed = useMemo(() => {
    const flatedData = animes?.data?.flatMap((anime) => anime.entry) || [];
    return flatedData.slice(0, lastVisibleAnime);
  }, [lastVisibleAnime, animes]);

  useEffect(() => {
    setDataRekomendationsAnime(handleDataRekomed);
  }, [handleDataRekomed]);

  return (
    <div className="w-full space-y-2 text-base font-medium text-white">
      <h3 className="flex w-full items-center text-xl font-bold tracking-wide text-white">
        {header} <span className="ms-2">{icon}</span>
      </h3>
      <div className="flex h-auto w-full flex-wrap items-center justify-center gap-2">
        {!isLoading ? (
          dataRekomendationsAnime?.map((anime, i) => (
            <div className="h-auto w-auto flex-shrink-0" key={i}>
              <Card
                idAnime={anime?.mal_id}
                image={anime?.images?.jpg.large_image_url}
                title={anime.title_english || anime.title}
                year={anime.year}
                score={anime.score}
              />
            </div>
          ))
        ) : (
          <LoadingSkeleton length={20} animeCard />
        )}
      </div>

      <div className="flex w-full items-center justify-center">
        {pagination ? (
          <Pagination
            totalPages={animes?.pagination.last_visible_page}
            onPageChange={setPage}
          />
        ) : (
          <Button
            action={() => setLastVisibleAnime((prev) => prev + 16)}
            text="Show more"
            width="w-full"
          />
        )}
      </div>
    </div>
  );
};

export default ContainerAnimes;
