"use client";
import DetailAnimeTable from "@/app/Components/Detail-Anime-Comp/DetailAnime";
import DetailImages from "@/app/Components/Detail-Anime-Comp/DetailImages";
import HeaderDetail from "@/app/Components/Detail-Anime-Comp/HeaderDetail";
import SynopsisDetail from "@/app/Components/Detail-Anime-Comp/SynopsisDetail";
import YoutubePlayer from "@/app/Components/Detail-Anime-Comp/YoutubePlayer";
import { FetchAnime } from "@/utility/Api";
import { useEffect, useState } from "react";

const page = async ({ params }) => {
  const idAnime = params.keyword;
  const [Data, setData] = useState([]);

  const GetDataAnime = async () => {
    const { data } = await FetchAnime(`/anime/${idAnime}`);

    setData(data.data);
  };
  useEffect(() => {
    GetDataAnime();
  }, []);

  return (
    <div className="pt-16 mx-1 md:mx-auto bg-black h-fit md:h-svh lg:pt-20 ">
      <HeaderDetail
        title={Data.title}
        title_japanese={Data.title_japanese}
        status={Data.status}
      />
      <div className="flex justify-center items-center  flex-col flex-wrap md:flex-row md:gap-2 lg:container lg:mx-auto ">
        <DetailImages imagesUrl={Data.images?.jpg.large_image_url} />
        <SynopsisDetail synopsis={Data.synopsis} />
        <DetailAnimeTable Data={Data} />
        <YoutubePlayer Data={Data?.trailer} />
      </div>
    </div>
  );
};

export default page;
