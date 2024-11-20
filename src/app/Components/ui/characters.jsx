"use client";
import Card from "./card";
import useEmblaCarousel from "embla-carousel-react";

const Characters = ({ characters = [] }) => {
  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
    align: "start",
  });

  if (!characters.length) {
    return <p className="text-white">No characters available.</p>;
  }

  return (
    <div>
      <h3 className="text-xl font-semibold text-white">Characters</h3>

      <div className="embla w-full overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex w-full gap-2 md:gap-3">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Characters;
