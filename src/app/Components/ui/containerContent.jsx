"use client";
import { FetchAnime } from "@/utility/Get";
import Carousel from "./crousell";
import ListAnimes from "./listAnime";

const ContainerContent = ({ endPoint, header, icon, typeContent }) => {
  const { data: animes, isLoading } = FetchAnime(endPoint);

  if (typeContent === "crousell") {
    return (
      <Carousel
        header={header}
        data={animes?.data}
        isLoading={isLoading}
        icon={icon}
      />
    );
  }

  if (typeContent === "listCard") {
    return (
      <ListAnimes
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
        mangaCard
      />
    );
  }

  return null;
};

export default ContainerContent;
