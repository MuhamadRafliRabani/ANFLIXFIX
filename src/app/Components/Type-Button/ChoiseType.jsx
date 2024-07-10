"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useCallback, useState } from "react";
import { usePath, useType } from "@/utility/global_state/Collection_State";
import Link from "next/link";
import Btn from "./btn";

const Type = () => {
  const [stylePicked, setStylePicked] = useState("Trend Up");
  const setPath = usePath((state) => state.setPath);
  const setType = useType((state) => state.setType);
  const getType = useCallback(
    (type, e) => {
      e.preventDefault();
      switch (type) {
        case "Trend Up":
          setPath("/top/anime");
          setStylePicked("Trend Up");
          setType(type);
          break;
        case "This Season":
          setPath("/seasons/now");
          setStylePicked("This Season");
          setType(type);
          break;
        case "Season Coming":
          setPath("/seasons/upcoming");
          setStylePicked("Season Coming");
          setType(type);
          break;
        case "Top":
          setPath("/random/anime");
          setStylePicked("Top");
          setType(type);
          break;
        default:
          break;
      }
    },
    [setType]
  );

  return (
    <div className="text-[#E50914] w-full border-b ps-8 lg:ps-52 lg:container lg:mx-auto">
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 100,
          },
        }}
      >
        <SwiperSlide>
          <Btn
            text={"Trend Up"}
            type={"Trend Up"}
            getType={getType}
            stylePicked={stylePicked}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Btn
            text={"This Season"}
            type={"This Season"}
            getType={getType}
            stylePicked={stylePicked}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Btn
            text={"Season Coming"}
            type={"Season Coming"}
            getType={getType}
            stylePicked={stylePicked}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"pages/Dasboard/collec_page"}>
            <Btn
              text={"Collection"}
              type={"Collection"}
              getType={getType}
              stylePicked={stylePicked}
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Type;
