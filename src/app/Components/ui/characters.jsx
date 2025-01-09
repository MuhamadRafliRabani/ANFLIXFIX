"use client";
import { useState, useCallback, useEffect } from "react";
import Card from "./cardAnime";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";

const Characters = ({ characters, type }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: true,
    align: "start",
    slidesToScroll: 3,
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

  return (
    <div className="w-full">
      <h3 className="-mt-2 pb-2 text-xl font-semibold text-white">
        Characters
      </h3>

      <div className="embla relative w-full overflow-hidden">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container flex w-full gap-4">
            {characters?.map((anime, i) => (
              <div
                key={i}
                className="embla__slide group relative w-[113px] min-w-0 flex-shrink-0 flex-grow-0 md:w-[140px]"
              >
                <Card
                  idAnime={anime.mal_id}
                  image={
                    anime?.character?.images.webp.image_url ||
                    anime?.character?.images.jpg.image_url
                  }
                  title={anime?.character.name}
                  year={anime.role}
                />
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {type === "anime" && (
                    <Card
                      idAnime={anime.mal_id}
                      image={
                        anime?.voice_actors[0]?.person?.images.jpg.image_url ||
                        "/placeholder.png"
                      }
                      title={anime?.voice_actors[0]?.person.name}
                      year="seiyu / voice actors"
                      url={anime?.voice_actors[0]?.person.url}
                    />
                  )}
                </div>
              </div>
            ))}
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

export default Characters;
