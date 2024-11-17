"use client";
import Card from "./card";
import useEmblaCarousel from "embla-carousel-react";

const Characters = ({ characters }) => {
  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
    align: "start",
  });

  return (
    <div>
      <h3 className="text-xl font-semibold text-white">Characters</h3>
      <div className="embla w-full overflow-hidden " ref={emblaRef}>
        <div className="embla__container flex w-full gap-2 md:gap-3">
          {characters &&
            characters?.map((item, i) => (
              <div
                key={i}
                className="embla__slide w-[113px] min-w-0 flex-shrink-0 flex-grow-0 md:w-[140px]"
              >
                <Card
                  idAnime={item.mal_id}
                  image={item?.character?.images?.webp.image_url}
                  title={item?.character.name}
                  year={item.role}
                  url={item?.character.url}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Characters;
