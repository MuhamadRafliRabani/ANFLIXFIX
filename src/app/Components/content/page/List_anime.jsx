"use client";
import { FetchAnime } from "@/utility/Api";
import Carousel from "../../ui/crousell";

const List_anime = ({ jikan, header }) => {
  const { data, isLoading } = FetchAnime(jikan);

  return (
    <div className="w-screen p-3">
      <Carousel data={data?.data} header={header} isLoading={isLoading} />
    </div>
  );
};

export default List_anime;
