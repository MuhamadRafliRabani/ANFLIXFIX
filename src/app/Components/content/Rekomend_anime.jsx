"use client";
import { FetchAnime } from "@/utility/Api";
import Card from "../ui/card";
import { useEffect, useState } from "react";
import Button from "../ui/button";

const Rekomend_anime = ({ jikan, header }) => {
  const { data } = FetchAnime(jikan);
  const [animes, setAnime] = useState([]);
  const [seeAnime, setSeeAnime] = useState(18);

  useEffect(() => {
    if (data) {
      const datas = data?.data?.flatMap((animes) => animes.entry);
      const datam = datas.slice(0, seeAnime);
      setAnime(datam);
    }
  }, [data, seeAnime]);

  const handleSeeMore = () => {
    setSeeAnime(seeAnime + 16);
  };

  return (
    <div className="w-full">
      <div className="w-full space-y-2 text-base font-medium text-white">
        <h3>{header}</h3>
        <div className="container ms-1 grid w-11/12 grid-cols-3 space-x-4 space-y-5 md:w-full md:grid-cols-8 md:space-x-4">
          {animes.map((anime, i) => (
            <div key={i}>
              <Card anime={anime} />
            </div>
          ))}
        </div>

        <div className="pt-2">
          <Button width="w-full" action={handleSeeMore} text="Show More" />
        </div>
      </div>
    </div>
  );
};

export default Rekomend_anime;
