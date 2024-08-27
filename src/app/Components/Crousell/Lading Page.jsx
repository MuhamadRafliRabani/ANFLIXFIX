"use client";
import Top_Img from "@/data/Home_Img";
import Seasons_Now_Img from "@/data/Seasons_Now";
import Rekomend_Img from "@/data/rekomend_Img";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import AddCollection from "./addCollection";
import { Autoplay, EffectCreative, Navigation } from "swiper/modules";
import "swiper/css/effect-fade";
import Link from "next/link";
import LandingSkeleton from "../skeleton";

const Home_Page = ({ datas, type, isLoading }) => {
  const [dataImg, setDataImg] = useState(Top_Img);
  console.log(datas);

  useEffect(() => {
    switch (type) {
      case "Trend Up":
        setDataImg(Top_Img);
        break;
      case "This Season":
      case "Top":
        setDataImg(Seasons_Now_Img);
        break;
      case "Season Coming":
        setDataImg(Rekomend_Img);
        break;
      default:
        setDataImg(Top_Img);
        break;
    }
  }, [type]);

  return (
    <Swiper
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      grabCursor={true}
      effect={"creative"}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -600],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
      modules={[Navigation, Autoplay, EffectCreative]}
    >
      {datas &&
        datas?.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[280px] md:h-svh">
              {isLoading && <LandingSkeleton />}
              <div className="images relative h-full md:static">
                <img
                  src={dataImg[index % dataImg.length].img}
                  className="h-full w-svw object-cover object-center brightness-[0.7] md:brightness-50"
                />
                <div className="absolute inset-0 bottom-0 z-10 h-full bg-gradient-to-t from-[#0E0E0E] to-transparent md:-bottom-1"></div>
              </div>
              <div className="absolute inset-0 z-20 mx-auto flex flex-col items-start justify-end text-white md:mb-8 md:w-4/5 md:items-start md:justify-center md:text-xl">
                <div className="hidden space-y-2 md:block">
                  <p className="md:text-lg md:text-slate-50">
                    Duration: {data.duration}
                  </p>
                  <p className="flex items-center space-x-2">
                    ⭐ {data.score}
                    {data.genres.map((genre, I) => (
                      <span className="ms-2" key={I}>
                        {I > 0 ? `| ${genre.name}` : genre.name}
                      </span>
                    ))}
                  </p>
                  <Link
                    href={`/pages/detail-anime/${data.mal_id}`}
                    className="-mb-2 block text-4xl font-bold text-white"
                  >
                    {data.title}
                  </Link>
                  <p className="w-1/2 text-lg font-medium leading-relaxed text-gray-300">
                    {dataImg[index % dataImg.length].synopsis}
                  </p>
                </div>
                <div className="">
                  <AddCollection
                    anime_images={data.images?.jpg.image_url}
                    anime_title={data.title}
                    anime_mal_id={data.mal_id}
                    anime_episodes={data.episodes}
                    anime_rating={data.rating}
                    anime_status={data.status}
                    anime_type={data.type}
                  />
                </div>
                <Link
                  href={`/pages/detail-anime/${data.mal_id}`}
                  className="mx-4 mb-4 block text-lg font-semibold text-white md:hidden"
                >
                  {data.title}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Home_Page;
