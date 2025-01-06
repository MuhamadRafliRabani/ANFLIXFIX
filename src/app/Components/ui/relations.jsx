import React from "react";
import Card from "./cardAnime";
import { FetchAnime } from "@/utility/Api";
import useEmblaCarousel from "embla-carousel-react";

const Relations = ({ relations, score, idAnime }) => {
  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
    align: "start",
  });
  const anime = relations?.flatMap((relation) => relation.entry) || [];

  const { data } = FetchAnime(`/anime/${idAnime}/pictures`);

  console.log(data);

  return (
    <div>
      <h3 className="text-xl font-semibold text-white">Chronology</h3>
      <div className="embla w-full overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex w-full gap-2 md:gap-3">
          {anime.map((item, i) => (
            <div
              key={i}
              className="embla__slide w-[113px] min-w-0 flex-shrink-0 flex-grow-0 md:w-[140px]"
            >
              <Card
                idAnime={idAnime}
                image={
                  data?.data[0].jpg.large_image_url ||
                  data?.data[0].webp.large_image_url
                }
                title={item.name}
                year={item.type}
                score={score}
                url={item.url}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Relations;
