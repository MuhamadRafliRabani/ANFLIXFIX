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
  };

  return (
    <section className="lg:container lg:mt-6">
      <div className="my-4 flex w-full items-center justify-between px-2 lg:px-6">
        <h1 className="pt-1 text-base font-bold text-white">Top anime</h1>
        <Link
          href={`/pages/See-all/${type}`}
          className="effect-btn border-b text-sm font-bold text-white disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          lihat semua
        </Link>
      </div>
      <div className="relative z-20 flex w-full items-center justify-center lg:container">
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
              <SwiperSlide
                className="Card mx-auto mb-2 flex w-fit cursor-pointer flex-col items-center justify-center rounded-lg lg:ps-2"
                key={data.mal_id}
              >
                <Link href={`/pages/detail-anime/${data.mal_id}`}>
                  <div
                    className="relative"
                    onMouseEnter={() => handleOpen(data.mal_id)}
                    onMouseLeave={() => handleOpen(null)}
                  >
                    <Images
                      anime_images={data.images?.jpg.image_url}
                      anime_title={data.title}
                      anime_mal_id={data.mal_id}
                      anime_episodes={data.episodes}
                      anime_rating={data.rating}
                      anime_status={data.status}
                      anime_type={data.type}
                    />
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

                <h5 className="text-center text-base font-medium text-white hover:font-semibold hover:text-primary">
                  {data.title}
                </h5>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SecondCarousel;
