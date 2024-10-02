import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const Slide = () => {
  return (
    <Swiper
      pagination={{ dynamicBullets: true }}
      modules={[Pagination]}
      className="h-full min-h-full w-full max-w-xl"
    >
      <SwiperSlide>
        <Image
          src="/image-auth-1.jpg"
          width={700}
          height={600}
          className="h-full w-full rounded-lg brightness-75"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/image-auth-2.jpg"
          width={700}
          height={600}
          className="h-full w-full rounded-lg brightness-75"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/image-auth-3.jpg"
          width={700}
          height={600}
          className="h-full w-full rounded-lg brightness-75"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/image-auth-4.jpg"
          width={700}
          height={600}
          className="h-full w-full rounded-lg brightness-75"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slide;
