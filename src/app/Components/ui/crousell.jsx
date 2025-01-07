"use client";
import Card from "./cardAnime";
import useEmblaCarousel from "embla-carousel-react";
import MangaCard from "./cardManga";
import Guide from "../guide/guide";
import LoadingSkeleton from "../cardSkeleton";

const Carousel = ({ data, header, isLoading, icon, mangaCard }) => {
  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
    align: "start",
  });

  return (
    <div className="h-fit w-full space-y-2">
      <h3 className="flex w-full items-center text-xl font-bold tracking-wide text-white">
        {header} <span className="ms-2">{icon}</span>
      </h3>
      <div
        className="embla relative h-full w-full overflow-hidden"
        ref={emblaRef}
      >
        <Guide message="← Slide →" />
        <div className="embla__container flex w-full gap-2">
          {!isLoading ? (
            data?.map((anime, i) => (
              <div
                key={i}
                className={`embla__slide flex-shrink-0 flex-grow-0 ${mangaCard ? "h-52 max-w-sm" : "h-auto w-[30vw] min-w-[120px] max-w-[180px]"}`}
              >
                {mangaCard ? (
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
                    type={anime.genres[0]?.type}
                  />
                ) : (
                  <Card
                    mal_id={anime?.mal_id}
                    image={
                      anime?.images?.jpg.large_image_url ||
                      anime?.images?.webp.image_url
                    }
                    title={anime.title_english || anime.title}
                    year={anime.year}
                    score={anime.score}
                    type={anime.genres[0]?.type}
                  />
                )}
              </div>
            ))
          ) : (
            <>
              {mangaCard ? (
                <LoadingSkeleton crousell length={8} mangaCardSkeleton />
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
