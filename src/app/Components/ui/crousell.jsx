"use client";
import Card from "./card";
import useEmblaCarousel from "embla-carousel-react";

const Carousel = ({ data, header }) => {
  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
    align: "start",
  });

  return (
    <div className="w-full space-y-2">
      <h3 className="w-full text-xl font-semibold text-white">{header}</h3>
      <div className="embla w-full overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex w-full gap-2 md:gap-3">
          {data &&
            data?.map((anime, i) => (
              <div
                key={i}
                className="embla__slide w-[113px] min-w-0 flex-shrink-0 flex-grow-0 md:w-[140px]"
              >
                <Card
                  idAnime={anime?.mal_id}
                  image={anime?.images?.jpg.large_image_url}
                  title={anime.title_english || anime.title}
                  year={anime.year}
                  score={anime.score}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
