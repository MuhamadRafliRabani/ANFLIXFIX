"use client";
import { FetchAnime } from "@/utility/Api";
import React, { useEffect, useState } from "react";
import ContainerAnimes from "../../ui/containerAnimes";

const Rekomend_anime = ({ jikan, header, icon }) => {
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
      <ContainerAnimes
        animes={animes}
        handleSeeMore={handleSeeMore}
        header={header}
        icon={icon}
        isLoading={isLoading}
        text={"Show More"}
      />
    </div>
  );
};

export default Rekomend_anime;
