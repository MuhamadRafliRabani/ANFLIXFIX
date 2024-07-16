"use client";
// import { getRekomendData } from "@/utility/Api";
import CardMain from "../Card/CardMain";
import { useEffect, useState } from "react";
import CardSkeleton from "@/app/global/cardSeleton";

const Rekomend = () => {
  const [seeData, setSeeData] = useState(32);
  const [dataAnime, setDataAnime] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchApi = async () => {
    try {
      const RekomendAnime = await getRekomendData(
        "/recommendations/anime",
        "entry"
      );
      console.log(RekomendAnime);
      const DataRekomend = RekomendAnime.slice(0, seeData);
      setDataAnime(DataRekomend);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, [seeData]);

  const handleSeeMore = () => {
    setSeeData((prev) => prev + 12);
  };
  return (
    <section className="w-full lg:container lg:mx-auto">
      {isLoading ? (
        <CardSkeleton cards={16} />
      ) : (
        <CardMain animeCM={dataAnime} title={"Rekomendasi Anime"} />
      )}
      {seeData < 200 && (
        <button
          className="bg-primary py-2 w-1/2 mx-auto rounded-lg block mb-4 effect-btn"
          onClick={() => handleSeeMore()}
        >
          See More
        </button>
      )}
    </section>
  );
};

export default Rekomend;
