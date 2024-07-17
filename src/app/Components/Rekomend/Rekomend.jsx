"use client";
// import { getRekomendData } from "@/utility/Api";
import CardMain from "../Card/CardMain";
import { useEffect, useState } from "react";
import { getRekomendData } from "@/utility/Api";

const Rekomend = () => {
  const [seeData, setSeeData] = useState(32);
  const [dataAnime, setDataAnime] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchRekomendAnime = async () => {
    setIsLoading(true);
    try {
      const RekomendAnime = await getRekomendData("/recommendations/anime");

      const DataRekomend = RekomendAnime.slice(0, seeData);

      setDataAnime(DataRekomend);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRekomendAnime();
  }, [seeData]);

  const handleSeeMore = () => {
    setSeeData((prev) => prev + 12);
  };
  return (
    <section className="w-full lg:container ">
      {isLoading ? (
        <></>
      ) : (
        <CardMain data={dataAnime} title={"Rekomendasi Anime"} />
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
