"use client";
import ContainerAnimes from "@/app/Components/ui/containerAnimes";
import { Pagginations } from "@/libs/pagginations";
import { FetchAnime } from "@/utility/Api";
import { useState } from "react";

const page = ({ params }) => {
  const animeTitle = decodeURI(params.keyword);
  const {handleSeeMore,page} = Pagginations()

  const { data, isLoading } = FetchAnime(`/anime?q=${animeTitle}&page=${page}`);

 

  return (
    <div className="w-full pt-16">
      <ContainerAnimes
        animes={data?.data}
        header={`Search Anime :  ${animeTitle}`}
        isLoading={isLoading}
        handleSeeMore={handleSeeMore}
        hasLastPage={data?.pagination.has_next_page}
        page={page}
      />
    </div>
  );
};

export default page;
