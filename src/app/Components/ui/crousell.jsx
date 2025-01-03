"use client";
import LoadingSkeleton from "../cardSkeleton";
import Card from "./card";
import useEmblaCarousel from "embla-carousel-react";

const Carousel = ({ data, header, isLoading, icon }) => {
  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
    align: "start",
  });

  console.log(data);

  return (
    <div className="w-full space-y-2">
      <h3 className="flex w-full items-center text-xl font-bold tracking-wide text-white">
        {header} <span className="ms-2">{icon}</span>
      </h3>
      <div className="embla w-full overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex w-full gap-3 md:gap-3">
          {!isLoading ? (
            data?.map((anime, i) => (
              <div
                key={i}
                className="embla__slide w-fit min-w-0 flex-shrink-0 flex-grow-0"
              >
                <Card
                  idAnime={anime?.mal_id}
                  image={
                    anime?.images?.jpg.large_image_url ||
                    anime?.images?.webp.image_url
                  }
                  title={anime.title_english || anime.title}
                  year={anime.year}
                  score={anime.score}
                />
              </div>
            ))
          ) : (
            <LoadingSkeleton crousell length={8} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
