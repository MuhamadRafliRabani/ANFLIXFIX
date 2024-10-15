"use client";
import { cn } from "@/libs/cn";
import useEmblaCarousel from "embla-carousel-react";
import Hero from "../content/Hero";

const Crousell = ({ content, className, data }) => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div
      className={cn("embla min-h-56 bg-primary_color", className)}
      ref={emblaRef}
    >
      <div className="embla__container h-full w-full">
        {data?.data.map((anime, index) => (
          <div
            key={index}
            className="embla__slide flex h-full items-center justify-center bg-fuchsia-400"
          >
            {content(anime, index)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Crousell;
