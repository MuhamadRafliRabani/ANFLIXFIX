"use client";
import Card from "./card";
import useEmblaCarousel from "embla-carousel-react";

const staff = ({ staff }) => {
  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
    align: "start",
  });

  return (
    <div>
      <h3 className="text-xl font-semibold text-white">Staff</h3>
      <div className="embla w-full overflow-hidden " ref={emblaRef}>
        <div className="embla__container flex w-full gap-2 md:gap-3">
          {staff &&
            staff?.map((item, i) => (
              <div
                key={i}
                className="embla__slide w-[113px] min-w-0 flex-shrink-0 flex-grow-0 md:w-[140px]"
              >
                <Card
                  idAnime={item.mal_id}
                  image={item?.person?.images?.jpg.image_url}
                  title={item?.person.name}
                  year={item.positions[0]}
                  url={item?.person.url}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default staff;
