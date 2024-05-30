"use client";
import { getRekomendData } from "@/app/global/global-func/Api";
import CardMain from "../Card/CardMain";
import { useEffect, useState } from "react";
import CardSkeleton from "@/app/global/cardSeleton";

const Rekomend = () => {
  const [seeData, setSeeData] = useState(16);
  const [dataAnime, setDataAnime] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchApi = async () => {
    const RekomendAnime = await getRekomendData("/recommendations/anime", "entry");
    console.log(RekomendAnime);
    const DataRekomend = RekomendAnime.slice(0, seeData);
    setDataAnime(DataRekomend);
  };

  useEffect(() => {
    try {
      fetchApi();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [seeData]);

  const handleSeeMore = () => {
    setSeeData((prev) => prev + 12);
  };
  return (
    <section className="">
      {isLoading ? <CardSkeleton cards={16} /> : <CardMain animeCM={dataAnime} title={"Rekomendasi Anime"} />}
      {seeData < 200 && (
        <button className="bg-white py-2 w-1/2 mx-auto rounded-lg block my-4 effect-btn" onClick={() => handleSeeMore()}>
          See More
        </button>
      )}
    </section>
  );
};

export default Rekomend;
