import React from "react";
import LoadingSkeleton from "../cardSkeleton";
import Card from "./card";
import Button from "./button";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

const ContainerAnimes = ({
  animes,
  isLoading,
  handleSeeMore,
  header,
  hasLastPage,
  page,
  text,
}) => {
  {
    if (isLoading)
      return (
        <div className="flex w-full flex-shrink-0 flex-grow flex-wrap items-center justify-center gap-4 md:justify-start md:px-4">
          <LoadingSkeleton length={20} />
        </div>
      );
  }

  return (
    <div className="w-full space-y-2 text-base font-medium text-white">
      <h3 className="w-full ps-2 text-xl font-semibold text-white">{header}</h3>
      <div className="flex w-full flex-shrink-0 flex-grow flex-wrap items-center justify-center gap-3 md:justify-start md:px-4">
        {animes?.map((anime, i) => (
          <div className="w-fit h-fit" key={i}>
            <Card
              idAnime={anime?.mal_id}
              image={anime?.images?.jpg.large_image_url}
              title={anime.title_english || anime.title}
              year={anime.year}
              score={anime.score}
            />
          </div>
        ))}
      </div>

      <div
        className={`flex w-full items-center justify-center gap-5 pt-2 ${text ? "ms-2" : ""} `}
      >
        <Button
          width={text ? "w-full" : "w-fit"}
          action={() => handleSeeMore(-1)}
          icon={text || <CaretLeft size={16} />}
          black={text ? false : true}
        />
        <h3>{page}</h3>
        {hasLastPage && (
          <Button
            width="w-fit"
            action={() => handleSeeMore(1)}
            icon={<CaretRight size={16} />}
            black
          />
        )}
      </div>
    </div>
  );
};

export default ContainerAnimes;
