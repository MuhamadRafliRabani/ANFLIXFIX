"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import Card from "./cardAnime";
import MangaCard from "./cardManga";
import Guide from "../guide/guide";
import LoadingSkeleton from "../cardSkeleton";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import TitleHead from "./titleHead";

const Carousel = ({ data, header, isLoading, icon, mangaCard }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: true,
    align: "start",
    slidesToScroll: mangaCard ? 1 : 3,
  });

  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const updateScrollStatus = useCallback(() => {
    if (!emblaApi) return;

    setIsAtStart(!emblaApi.canScrollPrev());
    setIsAtEnd(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    updateScrollStatus();

    emblaApi.on("select", updateScrollStatus);
    emblaApi.on("reInit", updateScrollStatus);
  }, [emblaApi, updateScrollStatus]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const renderSlide = (anime, i) => (
    <div
      key={i}
      className={`embla__slide w-fit flex-shrink-0 ${
        mangaCard
          ? "h-52 max-w-sm"
          : "h-auto w-[30vw] min-w-[120px] max-w-[180px]"
      }`}
    >
      {mangaCard ? (
        <MangaCard {...anime} />
      ) : (
        <Card
          mal_id={anime?.mal_id}
          image={
            anime?.images?.jpg.large_image_url || anime?.images?.webp.image_url
          }
          title={anime.title_english || anime.title}
          year={anime.year}
          score={anime.score}
          type={anime.genres[0]?.type}
        />
      )}
    </div>
  );

  return (
    <div className="h-fit w-full space-y-2">
      <TitleHead header={header} icon={icon} />
      <div className="embla relative h-full w-full overflow-hidden">
        <div className="embla__viewport" ref={emblaRef}>
          <Guide message="← Slide →" />
          <div className="embla__container flex w-full gap-2 shadow-lg md:gap-3.5">
            {!isLoading ? (
              data?.map(renderSlide)
            ) : (
              <LoadingSkeleton
                crousell
                length={10}
                mangaCardSkeleton={mangaCard}
              />
            )}
          </div>
        </div>
        <button
          className={`embla__prev absolute left-0 top-1/2 w-fit rounded-full bg-white p-1 ${
            isAtStart ? "cursor-not-allowed opacity-50" : ""
          }`}
          onClick={scrollPrev}
          disabled={isAtStart}
        >
          <ArrowLeft size={16} />
        </button>
        <button
          className={`embla__next absolute right-1 top-1/2 w-fit rounded-full bg-white p-1 md:right-4 ${
            isAtEnd ? "cursor-not-allowed opacity-50" : ""
          }`}
          onClick={scrollNext}
          disabled={isAtEnd}
        >
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
