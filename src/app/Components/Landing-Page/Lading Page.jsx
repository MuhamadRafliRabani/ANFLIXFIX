"use client";
import Top_Img from "@/data/Home_Img";
import Seasons_Now_Img from "@/data/Seasons_Now";
import Rekomend_Img from "@/data/rekomend_Img";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import AddCollection from "./addCollection";
import { Navigation } from "swiper/modules";

const Home_Page = ({ animeHo, type }) => {
  const [dataImg, setDataImg] = useState(Top_Img);
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
        // Optional: handle cases where type doesn't match any of the specified cases
        break;
    }
  }, [type]);

  return (
    <Swiper
      slidesPerView={1}
      navigation
      breakpoints={{
        480: {
          navigation: {
            enabled: false,
          },
        },
        640: {
          navigation: {
            enabled: false,
          },
        },
        768: {
          navigation: {
            enabled: true,
          },
        },
        1024: {
          navigation: {
            enabled: true,
          },
        },
      }}
      modules={[Navigation]}
    >
      {animeHo?.map((data, index) => (
        <SwiperSlide key={index}>
          <div className="relative h-fit">
            <div className="h-fit relative images md:h-svh md:static">
              <div className="relative md:static">
                <img
                  src={dataImg[index % dataImg.length].img}
                  className="object-cover object-center w-svw h-[280px] md:h-svh"
                />
                <div className="absolute inset-0 bg-gradient-to-t h-full from-black to-transparent z-10 -bottom-1"></div>
              </div>
              <div className="absolute left-0 top-0 right-0 -bottom-1 bg-black opacity-30"></div>
            </div>
            {/* buat layar hp pake items-end */}
            <div className="text-white flex items-end justify-between absolute z-20 inset-0 md:items-center md:mb-8 md:text-xl">
              <div className=" my-3 ps-1 md:w-4/5 md:mx-auto">
                <p className="hidden md:flex md:my-2 md:text-lg md:text-slate-50 ">
                  Duration: {data.duration}
                </p>
                <p className="hidden md:flex md:my-2">
                  ⭐ {data.score}
                  {data.genres.map((genre, Index) => (
                    <span className="ms-2" key={Index}>
                      {index > 0 ? `| ${genre.name}` : genre.name}
                    </span>
                  ))}
                </p>
                <h1 className="text-xl font-bold mb-4 md:text-3xl text-white">
                  {data.title}
                </h1>
                <p className="hidden md:flex md:w-11/12 md:leading-relaxed md:text-xl md:font-semibold">
                  {dataImg[index % dataImg.length].synopsis}
                </p>
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
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Home_Page;
