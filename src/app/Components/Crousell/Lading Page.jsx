"use client";
import Top_Img from "@/data/Home_Img";
import useEmblaCarousel from "embla-carousel-react";
import { useState } from "react";

const Home_Page = ({ datas, type, isLoading }) => {
  const [emblaRef] = useEmblaCarousel();
  const [dataImg, setDataImg] = useState(Top_Img);

  return (
    <div className="main__crousell">
      <div className="hero__crousell min-h-56" ref={emblaRef}>
        <div className="hero__crousell__container w-full">
          <div className="embla__slide flex items-center justify-center">
            Slide 1
          </div>
          <div className="embla__slide flex items-center justify-center">
            Slide 2
          </div>
          <div className="embla__slide flex items-center justify-center">
            Slide 3
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_Page;
