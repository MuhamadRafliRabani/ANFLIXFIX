import React from "react";
import LoadingSkeleton from "../cardSkeleton";
import Card from "./card";
import Button from "./button";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import Pagination from "@/libs/pagginations";

const ContainerAnimes = ({
  animes,
  isLoading,
  header,
  LastPage,
  text,
  icon,
}) => {
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="w-full space-y-2 text-base font-medium text-white">
      <h3 className="flex w-full items-center text-xl font-bold tracking-wide text-white">
        {header} <span className="ms-2">{icon}</span>
      </h3>
      <div className="flex w-full flex-wrap items-center justify-center gap-3">
        {!isLoading ? (
          animes?.map((anime, i) => (
            <div className="h-fit w-fit flex-shrink-0" key={i}>
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
          <LoadingSkeleton length={20} />
        )}
      </div>

      <div
        className={`flex w-full items-center justify-center gap-5 pt-2 ${text ? "ms-2" : ""} `}
      >
        <Pagination totalPages={LastPage} />
      </div>
    </div>
  );
};

export default ContainerAnimes;
