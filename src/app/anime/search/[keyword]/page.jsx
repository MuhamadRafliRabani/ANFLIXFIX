"use client";
import ContainerAnimes from "@/app/Components/ui/containerAnimes";
import { FetchAnime } from "@/utility/Api";
import { useState } from "react";

const page = ({ params }) => {
  const animeTitle = decodeURI(params.keyword);
  const [page, setPage] = useState(1);

  const { data, isLoading } = FetchAnime(`/anime?q=${animeTitle}&page=${page}`);

  const handlePageChange = (props) => {
    setPage((prev) => prev + props);
  };

  return (
    <div className="w-full pt-16">
      <ContainerAnimes
        animes={data?.data}
        header={`Search Anime :  ${animeTitle}`}
        isLoading={isLoading}
        handleSeeMore={handlePageChange}
        hasLastPage={data?.pagination.has_next_page}
        page={page}
      />
    </div>
  );
};

export default page;
