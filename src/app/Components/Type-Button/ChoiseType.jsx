"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Btn from "./btn";

const Type = () => {
  return (
    <div className="container">
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
          <Btn Type={"Trend Up"} />
        </SwiperSlide>
        <SwiperSlide>
          <Btn Type={"This Season"} />
        </SwiperSlide>
        <SwiperSlide>
          <Btn Type={"Season Coming"} />
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"pages/Dasboard/collec_page"}>
            <Btn Type={"Collection"} />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Type;
