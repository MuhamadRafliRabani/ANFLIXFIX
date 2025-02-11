"use client";
import { useMemo, useState } from "react";
import Button from "./button";
import Card from "./cardAnime";
import Pagination from "@/libs/pagginations";
import { usePage } from "@/store/store";
import LoadingSkeleton from "../cardSkeleton";
import TitleHead from "./titleHead";

const ListAnimes = ({ icon, header, animes, isLoading }) => {
  const { setPage, page } = usePage();
  const [lastVisibleAnime, setLastVisibleAnime] = useState(24);

  const logicDataDashboard =
    header === "anime" || header === "manga" || header === "people";

  const filteredAnimes = useMemo(() => {
    if (header === "Rekomendation Anime") {
      return (
        animes?.data
          ?.flatMap((anime) => anime.entry)
          ?.slice(0, lastVisibleAnime) || []
      );
    }

    if (logicDataDashboard) {
      return animes;
    }

    return animes?.data || [];
  }, [header, animes, lastVisibleAnime]);

  const styleLessThenNine = "md:flex md:justify-center md:items-center ";
  const styleMoreThenNine =
    "md:grid md:grid-cols-[repeat(auto-fit,minmax(120px,1fr))] md:justify-items-center ";

  return (
    <div className="w-full min-w-full space-y-2 text-base font-medium text-white">
      <TitleHead header={header} icon={icon} />

      <div
        className={`flex flex-wrap justify-center gap-[9.6px] md:gap-x-6 md:gap-y-4 md:pe-[1rem] ${animes?.length <= 9 ? styleLessThenNine : styleMoreThenNine}`}
      >
        {animes?.length == 0 && (
          <div className="w-full text-center text-xl font-medium text-white">
            <h2>No data available</h2>
          </div>
        )}

        {!isLoading ? (
          filteredAnimes?.map((anime, index) => (
            <div
              className="h-fit w-fit flex-shrink-0 shadow-lg"
              key={anime?.mal_id || index}
            >
              <Card
                mal_id={anime?.mal_id}
                image={
                  logicDataDashboard
                    ? anime?.images
                    : anime?.images?.jpg?.large_image_url ||
                      anime?.images?.jpg?.image_url
                }
                title={anime?.title_english || anime?.title || anime?.name}
                year={anime?.year || null}
                score={anime?.score || null}
                type={icon ? "anime" : anime?.genres?.[0]?.type || "people"}
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
            action={() => setLastVisibleAnime((prev) => prev + 20)}
            text="Show more"
            width="w-full"
          />
        )}
      </div>
    </div>
  );
};

export default ListAnimes;
