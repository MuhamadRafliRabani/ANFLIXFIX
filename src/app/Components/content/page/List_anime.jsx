"use client";
import { FetchAnime } from "@/utility/Api";
import Carousel from "../../ui/crousell";

const List_anime = ({ jikan, header, icon }) => {
  const { data, isLoading } = FetchAnime(jikan);

  return (
    <div className="">
      <Carousel
        data={data?.data}
        header={header}
        icon={icon}
        isLoading={isLoading}
      />
    </div>
  );
};

export default List_anime;
