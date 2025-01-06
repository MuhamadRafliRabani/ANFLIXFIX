"use client";
import { useEffect, useState } from "react";
import LoadingSkeleton from "../cardSkeleton";
import Card from "./cardAnime";
import useEmblaCarousel from "embla-carousel-react";
import MangaCard from "./cardManga";

const Carousel = ({ data, header, isLoading, icon, animeCard }) => {
  console.log("🚀 ~ Carousel ~ data:", data);
  const [showGuide, setShowGuide] = useState(true);

  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
    align: "start",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGuide(false);
    }, 3000);

    // Cleanup timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-fit w-full space-y-2">
      <h3 className="flex w-full items-center text-xl font-bold tracking-wide text-white">
        {header} <span className="ms-2">{icon}</span>
      </h3>
      <div
        className="embla relative h-full w-full overflow-hidden"
        ref={emblaRef}
      >
        {showGuide && (
          <div className="absolute bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-black/50 p-2">
            <p className="animate-fadeInOut text-sm font-bold text-white">
              ← Slide →
            </p>
          </div>
        )}
        <div className="embla__container flex w-full gap-2">
          {!isLoading ? (
            data?.map((anime, i) => (
              <div
                key={i}
                className={`embla__slide flex-shrink-0 flex-grow-0 ${animeCard ? "h-auto w-[30vw] min-w-[120px] max-w-[180px]" : "h-52 max-w-sm"}`}
              >
                {animeCard ? (
                  <Card
                    mal_id={anime?.mal_id}
                    image={
                      anime?.images?.jpg.large_image_url ||
                      anime?.images?.webp.image_url
                    }
                    title={anime.title_english || anime.title}
                    year={anime.year}
                    score={anime.score}
                  />
                ) : (
                  <MangaCard
                    mal_id={anime?.mal_id}
                    image={
                      anime?.images?.jpg.large_image_url ||
                      anime?.images?.webp.image_url
                    }
                    title={anime.title_english || anime.title}
                    status={anime.status}
                    rank={anime.rank}
                    chapters={anime.chapters}
                    scored={anime.scored}
                    members={anime.members}
                    genres={anime.genres}
                  />
                )}
              </div>
            ))
          ) : (
            <>
              {animeCard ? (
                <LoadingSkeleton crousell length={8} animeCard />
              ) : (
                <LoadingSkeleton crousell length={8} />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
