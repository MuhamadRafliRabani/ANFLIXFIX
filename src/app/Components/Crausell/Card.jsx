import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Images from "./Image";
import Link from "next/link";

const Card = ({ animeCa, title, path }) => {
  return (
    <section className="md:container md:mx-auto md:mt-4">
      <div className="w-full p-3 flex justify-between items-center mb-4 md:px-6 ">
        <h1 className="text-white font-bold text-base pt-1">{title}</h1>
        <Link
          href={"/"}
          className="text-white font-bold text-sm border-b effect-btn disabled:bg-slate-300 disabled:cursor-not-allowed"
        >
          lihat semua
        </Link>
      </div>
      <div className="flex justify-center items-center w-full z-20 relative md:container md:mx-auto">
        <Swiper
          spaceBetween={5}
          slidesPerView={3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
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
    </section>
  );
};

export default Card;
