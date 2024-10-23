"use client";
import useEmblaCarousel from "embla-carousel-react";
import Card from "../ui/card";
import { FetchAnime } from "@/utility/Api";

const List_anime = ({ jikan, header }) => {
  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
    align: "start",
  });
  const { data } = FetchAnime(jikan);

  return (
    <div className="w-screen p-3">
      <div className="w-full space-y-2 text-base font-medium text-white">
        <h3 className="text-lg md:font-medium">{header}</h3>
        <div className="embla w-[90%] overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex gap-4 md:gap-4">
            {data?.data.map((anime, i) => (
              <div
                key={i}
                className="embla__slide w-[113px] min-w-0 flex-shrink-0 flex-grow-0 md:w-[150px]"
              >
                <Card anime={anime} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List_anime;
