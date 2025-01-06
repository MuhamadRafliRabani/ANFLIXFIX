"use client";
import Carousel from "./crousell";
import { FetchAnime } from "@/utility/Api";
import ContainerAnimes from "./containerAnimes";

const ContainerContent = ({ endPoint, header, icon, typeContent }) => {
  const { data: animes, isLoading } = FetchAnime(endPoint);
  console.log("🚀 ~ ContainerContent ~ animes:", animes);

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
        mangaCard
      />
    );
  }

  return null;
};

export default ContainerContent;
