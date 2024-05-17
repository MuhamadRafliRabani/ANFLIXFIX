"use client";
import { Fire, Plus, Star, TrendUp } from "@phosphor-icons/react";
import Nav from "../Child-Comp/Nav";
import { Swiper, SwiperSlide } from "swiper/react";

const Type = ({ onclickType, stylePicked }) => {
  return (
    <div className="md:container text-[#E50914] w-full border-b">
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
        }}
      >
        <SwiperSlide>
          <div
            className={`transition-all duration-300 p-0 
          ${stylePicked === "Trend Up" ? "text-[#E50914] text-xl font-bold effect-btn" : "text-slate-300 text-base font-semibold"} `}
            onClick={() => onclickType("Trend Up")}
          >
            <Nav icon={<TrendUp size={20} />} text={"Trend Up"} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`transition-all duration-300 p-0 
          ${stylePicked === "This Season" ? "text-[#E50914] text-lg font-bold effect-btn" : "text-slate-300 text-base font-semibold"}`}
            onClick={() => onclickType("This Season")}
          >
            <Nav icon={<Star size={20} />} text={"This Season"} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`transition-all duration-300 p-0 
          ${stylePicked === "Season Coming" ? "text-[#E50914] text-lg font-bold effect-btn" : "text-slate-300 text-base font-semibold"}`}
            onClick={() => onclickType("Season Coming")}
          >
            <Nav icon={<Fire size={20} />} text={"Season Coming"} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`transition-all duration-300 p-0 
          ${stylePicked === "Top" ? "text-[#E50914] text-lg font-bold effect-btn" : "text-slate-300 text-base font-semibold"}`}
            onClick={() => onclickType("top")}
          >
            <Nav icon={<Plus size={20} />} text={"top"} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Type;
