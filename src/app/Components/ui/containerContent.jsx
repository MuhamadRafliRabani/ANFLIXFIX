"use client";
import Carousel from "./crousell";
import { FetchAnime } from "@/utility/Api";
import ContainerAnimes from "./containerAnimes";

const ContainerContent = ({ endPoint, header, icon, typeContent }) => {
  const { data: animes, isLoading } = FetchAnime(endPoint);

  if (typeContent === "crousell") {
    return (
      <Carousel
        header={header}
        data={animes?.data}
        isLoading={isLoading}
        icon={icon}
        animeCard
      />
    );
  }

  if (typeContent === "listCard") {
    return (
      <ContainerAnimes
        animes={animes}
        header={header}
        icon={icon}
        isLoading={isLoading}
      />
    );
  }

  if (typeContent === "manga") {
    return (
      <Carousel
        header={header}
        data={animes?.data}
        isLoading={isLoading}
        icon={icon}
      />
    );
  }

  return null;
};

export default ContainerContent;
