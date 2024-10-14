"use client";

import Images from "./Image";
import Link from "next/link";
import CardDetail from "../Card-Detail/CardDetail";

const SecondCarousel = ({ datas, type, isLoading }) => {
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
      <div className="relative z-20 flex w-full items-center justify-center lg:container"></div>
    </section>
  );
};

export default SecondCarousel;
