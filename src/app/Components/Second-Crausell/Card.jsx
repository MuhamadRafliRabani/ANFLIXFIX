import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Images from "./Image";
import Link from "next/link";
import { useState } from "react";
import CardDetail from "../Card-Detail/CardDetail";

const SecondCarousel = ({ datas, type, isLoading }) => {
  const [isOpen, setIsOpen] = useState(null);

  const handleOpen = (animeMalId) => {
    setIsOpen(animeMalId);
    console.log(animeMalId);
  };

  return (
    <section className="lg:container lg:mt-6">
      <div className="w-full px-2 flex justify-between items-center my-4 lg:px-6">
        <h1 className="text-white font-bold text-base pt-1">Top anime</h1>
        <Link href={`/pages/See-all/${type}`} className="text-white font-bold text-sm border-b effect-btn disabled:bg-slate-300 disabled:cursor-not-allowed">
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
          {datas &&
            datas.map((data) => (
              <SwiperSlide className="w-fit rounded-lg Card mx-auto flex flex-col justify-center items-center lg:ps-2 mb-2 cursor-pointer" key={data.mal_id}>
                <Link href={`/pages/detail-anime/${data.mal_id}`}>
                  <div className="relative" onMouseEnter={() => handleOpen(data.mal_id)} onMouseLeave={() => handleOpen(null)}>
                    <Images anime_images={data.images?.jpg.image_url} anime_title={data.title} anime_mal_id={data.mal_id} anime_episodes={data.episodes} anime_rating={data.rating} anime_status={data.status} anime_type={data.type} />
                    <CardDetail
                      anime_images={data.images?.jpg.image_url}
                      anime_title={data.title}
                      anime_mal_id={data.mal_id}
                      anime_episodes={data.episodes}
                      anime_rating={data.rating}
                      anime_status={data.status}
                      anime_type={data.type}
                      isOpen={isOpen}
                      key={data.mal_id}
                    />
                  </div>
                </Link>

                <h5 className="text-base text-white font-medium hover:text-primary hover:font-semibold text-center">{data.title}</h5>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SecondCarousel;
