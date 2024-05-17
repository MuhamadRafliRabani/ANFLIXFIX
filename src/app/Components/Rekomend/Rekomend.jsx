"use client";
import { getRekomendData } from "@/app/global/global-func/Apis";
import CardMain from "../Card-Anime/CardMain";
import { useEffect, useState } from "react";

const Rekomend = () => {
  const [seeData, setSeeData] = useState(16);
  const [dataAnime, setDataAnime] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const RekomendAnime = await getRekomendData("/recommendations/anime", "entry");
      const DataRekomend = RekomendAnime.slice(0, seeData);
      setDataAnime(DataRekomend);
    };
    fetchApi();
  }, [seeData]);
  const handleSeeMore = () => {
    setSeeData((prev) => prev + 12);
  };
  console.log(dataAnime);
  return (
    <div className="">
      <CardMain animeCM={dataAnime} title={"Rekomendasi Anime"} />
      {seeData < 200 && (
        <button className="bg-white py-2 w-1/2 mx-auto rounded-lg block my-4 effect-btn" onClick={() => handleSeeMore()}>
          See More
        </button>
      )}
    </div>
  );
};

export default Rekomend;
