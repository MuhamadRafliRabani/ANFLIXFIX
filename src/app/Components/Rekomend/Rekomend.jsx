"use client";
import CardMain from "../Card/CardMain";
import { useState } from "react";
import { FetchAnime } from "@/utility/Api";
import SkeletonCard from "../cardSkeleton";

const Rekomend = () => {
  const [seeData, setSeeData] = useState(24);

  const { data, isLoading } = FetchAnime("/recommendations/anime");
  console.log(data);

  let animeRekomed;
  if (data) {
    const datas = data?.data.flatMap((datas) => datas.entry);
    animeRekomed = datas?.slice(0, seeData);
  }

  const handleSeeMore = () => {
    setSeeData((prev) => prev + 12);
  };

  return (
    <section className="w-full lg:container">
      <CardMain
        data={animeRekomed}
        title={"Rekomendasi Anime"}
        isLoading={isLoading}
      />
      {seeData < 200 && (
        <button
          onClick={handleSeeMore}
          className="bg-primary py-2 w-1/2 mx-auto rounded-lg block mb-4 effect-btn"
        >
          See More
        </button>
      )}
    </section>
  );
};

export default Rekomend;
