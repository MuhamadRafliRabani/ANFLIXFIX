"use client";
import { Star, StarFour } from "@phosphor-icons/react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DetailCard = ({ anime }) => {
  return (
    <div className="text-center md:text-wrap md:flex md:flex-col md:justify-center md:items-center">
      {anime.title ? <h5 className="mb-2 text-base text-white w-full font-medium text-start">{anime.title}</h5> : <Skeleton className="mb-2 text-base text-white w-full font-medium text-start" />}
      {!anime.year ? null : (
        <div className="flex w-full gap-2 justify-between items-center text-sm px-4 md:text-xs">
          <p className="mb-3 md:mb-1 text-slate-400 font-medium md:font-normal">{anime.year || <Skeleton />}</p>
          <div className="flex items-center gap-1 font-semibold md:font-light">
            <p className="mb-3 md:mb-1 ">
              <Star className="text-red-500 text-lg bg-red-500 fill-current" />
            </p>
            <p className="mb-3 md:mb-1 ">👁</p>
            <p className="mb-3 md:mb-1 text-yellow-400 flex gap-1">
              <StarFour className="text-yellow-400 text-base fill-current" />
              {anime.score}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailCard;
