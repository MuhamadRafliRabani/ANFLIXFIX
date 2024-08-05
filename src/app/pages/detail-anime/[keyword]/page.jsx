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

  const { data } = FetchAnime(`/anime/${idAnime}`);
  console.log(data?.data);

  return (
    <div className="pt-16 mx-1 md:mx-auto bg-black h-fit md:h-svh lg:pt-20 ">
      <HeaderDetail
        title={data?.data.title}
        title_japanese={data?.data.title_japanese}
        status={data?.data.status}
      />
      <div className="flex justify-center items-center  flex-col flex-wrap md:flex-row md:gap-2 lg:container">
        <DetailImages imagesUrl={data?.data.images?.jpg.large_image_url} />
        <SynopsisDetail synopsis={data?.data.synopsis} />
        <DetailAnimeTable datas={data} />
        <YoutubePlayer Data={data?.data?.trailer} />
      </div>
    </div>
  );
};

export default page;
