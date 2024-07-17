import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Images from "./Image";
import Link from "next/link";
import { useState } from "react";
import CardDetail from "../Card-Detail/CardDetail";

const SecondCrausell = ({ data, path }) => {
  const [isOpen, setIsOpen] = useState();

  const handleOpen = (anime_mal_id) => {
    setIsOpen(anime_mal_id);
  };

  return (
    <section className="lg:container lg:mt-6">
      <div className="w-full px-2 flex justify-between items-center my-4 lg:px-6 ">
        <h1 className="text-white font-bold text-base pt-1">Top anime</h1>
        <Link
          href={`/pages/See-all/${path}`}
          className="text-white font-bold text-sm border-b effect-btn disabled:bg-slate-300 disabled:cursor-not-allowed"
        >
          lihat semua
        </Link>
      </div>
      <div className="flex justify-center items-center w-full z-20 relative lg:container">
        <Swiper
          spaceBetween={5}
          slidesPerView={3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation
          modules={[Autoplay, Navigation]}
          breakpoints={{
            480: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 6,
            },
            992: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 7,
            },
          }}
          className="px-4"
        >
          {data?.map((anime) => (
            <SwiperSlide
              className="w-fit rounded-lg Card mx-auto flex flex-col justify-center items-center lg:ps-2 mb-2 cursor-pointer"
              key={anime.mal_id}
            >
              <div
                className="relative "
                onMouseEnter={() => handleOpen(anime.mal_id)}
                onMouseLeave={() => handleOpen(null)}
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
                <CardDetail
                  anime_images={anime.images?.jpg.image_url}
                  anime_title={anime.title}
                  anime_mal_id={anime.mal_id}
                  anime_episodes={anime.episodes}
                  anime_rating={anime.rating}
                  anime_status={anime.status}
                  anime_type={anime.type}
                  isOpen={isOpen}
                  key={anime.mal_id}
                />
              </div>
              <h5 className="text-base text-white font-medium hover:text-primary hover:font-semibold text-center">
                {anime.title}
              </h5>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SecondCrausell;
