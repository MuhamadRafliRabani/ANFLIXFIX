"use client";
import useEmblaCarousel from "embla-carousel-react";
import Card from "../../ui/card";
import { FetchAnime } from "@/utility/Api";

const List_anime = ({ jikan, header }) => {
  const [emblaRef] = useEmblaCarousel();
  const { data } = FetchAnime(jikan);
  console.log(data);

  return (
    <div className="p-3">
      <div className="space-y-2 text-base font-medium text-white">
        <h3>{header}</h3>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {data?.data.map((anime, i) => (
              <div key={i} className="embla__slide">
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
