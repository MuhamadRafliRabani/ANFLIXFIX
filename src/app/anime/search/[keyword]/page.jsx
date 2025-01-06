"use client";
import ContainerAnimes from "@/app/Components/ui/containerAnimes";
import { FetchAnime } from "@/utility/Api";

const page = ({ params }) => {
  const animeTitle = decodeURI(params.keyword);

  const { data, isLoading } = FetchAnime(`/anime?q=${animeTitle}&page=${page}`);

  return (
    <div className="w-full pt-16">
      <ContainerAnimes
        animes={data?.data}
        header={`Search Anime :  ${animeTitle}`}
        isLoading={isLoading}
        page={page}
      />
    </div>
  );
};

export default page;
