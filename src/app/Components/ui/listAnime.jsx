"use client";
import { useEffect, useMemo, useState } from "react";
import Button from "./button";
import Card from "./cardAnime";
import Pagination from "@/libs/pagginations";
import { usePage } from "@/store/store";
import LoadingSkeleton from "../cardSkeleton";
import TitleHead from "./titleHead";

const ListAnimes = ({ icon, header, animes, isLoading }) => {
  const { setPage, page } = usePage();
  const [lastVisibleAnime, setLastVisibleAnime] = useState(24);
  const [dataRekomendationsAnime, setDataRekomendationsAnime] = useState([]);

  const handleDataRekomed = useMemo(() => {
    if (header === "Rekomendation Anime") {
      const flatedData = animes?.data?.flatMap((anime) => anime.entry) || [];

      return flatedData.slice(0, lastVisibleAnime);
    }

    if (header === "Watching") return animes;

    return animes?.data;
  }, [lastVisibleAnime, animes]);

  useEffect(() => {
    setDataRekomendationsAnime(handleDataRekomed);
  }, [handleDataRekomed]);

  return (
    <div className="w-full min-w-full space-y-2 text-base font-medium text-white">
      <TitleHead header={header} icon={icon} />
      <div className="flex h-auto w-full flex-wrap justify-center gap-[8px] md:grid md:grid-cols-[repeat(auto-fit,minmax(120px,1fr))] md:gap-x-5 md:gap-y-3 md:pe-[1.80rem] md:ps-0">
        {!isLoading ? (
          dataRekomendationsAnime?.map((anime, i) => (
            <div className="h-fit w-fit flex-shrink-0 shadow-lg" key={i}>
              <Card
                mal_id={anime?.mal_id}
                image={
                  header === "Watching"
                    ? anime.images
                    : anime?.images?.jpg.large_image_url
                }
                title={anime.title_english || anime.title}
                year={anime.year}
                score={anime.score}
                type={icon ? "anime" : anime?.genres[0]?.type}
              />
            </div>
          ))
        ) : (
          <LoadingSkeleton length={20} animeCard />
        )}
      </div>

      <div className="flex w-full items-center justify-center">
        {header !== "Rekomendation Anime" ? (
          <Pagination
            totalPages={animes?.pagination?.last_visible_page}
            onPageChange={setPage}
            pageNow={page}
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

export default ListAnimes;
