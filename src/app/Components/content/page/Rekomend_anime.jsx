"use client";
import { FetchAnime } from "@/utility/Api";
import React, { useEffect, useState } from "react";
import LoadingSkeleton from "../../cardSkeleton";
import Card from "../../ui/card";
import Button from "../../ui/button";

const Rekomend_anime = ({ jikan, header }) => {
  const { data, isLoading } = FetchAnime(jikan);
  const [animes, setAnime] = useState([]);
  const [seeAnime, setSeeAnime] = useState(24);

  useEffect(() => {
    if (data) {
      const datas = data?.data?.flatMap((animes) => animes.entry);
      const datam = datas.slice(0, seeAnime);
      setAnime(datam);
    }
  }, [data, seeAnime]);

  const handleSeeMore = () => {
    setSeeAnime((prev) => prev + 20);
  };

  return (
    <div className="w-full">
      <div className="w-full space-y-2 text-base font-medium text-white">
        <h3>{header}</h3>
        <div className="flex w-full flex-shrink-0 flex-grow flex-wrap items-center gap-4 md:px-4">
          {animes.map((anime, i) => (
            <React.Fragment key={i}>
              <Card anime={anime} />
            </React.Fragment>
          ))}
          {isLoading && <LoadingSkeleton length={20} />}
        </div>

        <div className="pt-2">
          <Button width="w-full" action={handleSeeMore} text="Show More" />
        </div>
      </div>
    </div>
  );
};

export default Rekomend_anime;
