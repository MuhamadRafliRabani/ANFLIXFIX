"use client";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import DetailCardCrousell from "./Detail";
import Images from "./Image";

const Card = ({ animeCa }) => {
  return (
    <div className="flex justify-center items-center w-full swiper-container">
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        breakpoints={{
          480: {
            slidesPerView: 3,
            spaceBetween: 5,
            navigation: false,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 6,
            navigation: false,
          },
          992: {
            slidesPerView: 6,
            navigation: true,
          },
          1200: {
            slidesPerView: 7,
            navigation: true,
          },
        }}
        className="px-4"
      >
        {animeCa?.map((anime) => {
          return (
            <SwiperSlide className="w-fit rounded-lg Card mx-auto" key={anime.mal_id}>
              <Images id={anime.mal_id} imagese={anime?.images.jpg.image_url} />
              <DetailCardCrousell year={anime.year} anime_mal_id={anime?.mal_id} scores={anime.score} anime_images={anime.images?.jpg.image_url} anime_title={anime.title} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Card;
