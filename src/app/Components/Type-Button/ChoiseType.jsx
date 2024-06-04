"use client";
import { Fire, Plus, Star, TrendUp } from "@phosphor-icons/react";
import Nav from "../Child-Comp/Nav";
import { Swiper, SwiperSlide } from "swiper/react";
import { useCallback, useState } from "react";
import { usePath, useType } from "@/app/global/global_state/Collection_State";

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
    <div className="text-[#E50914] w-svw border-b lg:ps-64">
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
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
          <button
            className={`main-transition p-0 ${
              stylePicked === "Trend Up"
                ? "text-[#E50914] text-xl font-bold effect-btn"
                : "text-slate-300 text-base font-semibold"
            }`}
            onClick={(e) => getType("Trend Up", e)}
          >
            <Nav icon={<TrendUp size={20} />} text={"Trend Up"} />
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button
            className={`main-transition p-0 ${
              stylePicked === "This Season"
                ? "text-[#E50914] text-lg font-bold effect-btn"
                : "text-slate-300 text-base font-semibold"
            }`}
            onClick={(e) => getType("This Season", e)}
          >
            <Nav icon={<Star size={20} />} text={"This Season"} />
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button
            className={`main-transition p-0 ${
              stylePicked === "Season Coming"
                ? "text-[#E50914] text-lg font-bold effect-btn"
                : "text-slate-300 text-base font-semibold"
            }`}
            onClick={(e) => getType("Season Coming", e)}
          >
            <Nav icon={<Fire size={20} />} text={"Season Coming"} />
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button
            className={`main-transition p-0 ${
              stylePicked === "Top"
                ? "text-[#E50914] text-lg font-bold effect-btn"
                : "text-slate-300 text-base font-semibold"
            }`}
            onClick={(e) => getType("top", e)}
          >
            <Nav icon={<Plus size={20} />} text={"top"} />
          </button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Type;
