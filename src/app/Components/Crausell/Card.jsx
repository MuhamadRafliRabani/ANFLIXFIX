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
import CardDetail from "../Card-Detail/CardDetail";
import Image from "next/image";

const Card = ({ animeCa }) => {
  return (
    <div className="flex justify-center items-center w-full z-20 relative">
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
            slidesPerView: 9,
            navigation: true,
          },
        }}
        className="px-4"
      >
        {animeCa?.map((anime) => {
          return (
            <SwiperSlide
              className="w-fit rounded-lg Card mx-auto flex flex-col justify-center items-center"
              key={anime.mal_id}
            >
              <Images
                anime_images={anime.images?.jpg.image_url}
                anime_title={anime.title}
                anime_mal_id={anime.mal_id}
                anime_episodes={anime.episodes}
                anime_rating={anime.rating}
                anime_status={anime.status}
                anime_type={anime.type}
              />
              <h5 className="mb-2 text-base text-white font-medium hover:text-[#E50914] hover:font-semibold w-full text-center">
                {anime.title}
              </h5>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Card;
