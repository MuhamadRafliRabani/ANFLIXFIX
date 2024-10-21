"use client";
import { FetchAnime } from "@/utility/Api";
import Card from "../ui/card";

const Rekomend_anime = ({ jikan, header }) => {
  const { data } = FetchAnime(jikan);
  console.log(header, data);

  return (
    <div className="p-3">
      <div className="space-y-2 text-base font-medium text-white">
        <h3>{header}</h3>
        <div className="flex items-center justify-center space-x-3">
          {data?.data.map((anime, i) => (
            <div key={i} className="embla__slide">
              <Card anime={anime} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rekomend_anime;
