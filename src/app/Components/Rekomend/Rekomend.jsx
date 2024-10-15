"use client";
import CardMain from "../Card/CardMain";
import { useState } from "react";
import { FetchAnime } from "@/utility/Api";
import Button from "../ui/button";

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
        <Button
          action={handleSeeMore}
          text={"Show More"}
          width={"w-1/2"}
          height={"auto"}
        />
      )}
    </section>
  );
};

export default Rekomend;
