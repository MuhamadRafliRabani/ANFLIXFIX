import Image from "next/image";
import Link from "next/link";
import LinkBtn from "../compt/button";
import { CaretDown, Heart, Play } from "@phosphor-icons/react";
import AddCollection from "./addCollection";

const CardDetail = ({
  anime_images,
  anime_title,
  anime_mal_id,
  anime_episodes,
  anime_rating,
  anime_status,
  anime_type,
  isOpen,
}) => {
  return (
    <div
      className={`hidden absolute top-8 left-0 right-0 w-80 h-80 z-[9999] lg:flex flex-col items-center bg-black bg-opacity-80 text-white font-semibold shadow-sm scale-0 main-transition translate-y-4 md:-left-[35%] md:right-[30%] ${
        isOpen === anime_mal_id ? "scale-100 translate-y-0" : ""
      }`}
    >
      <Link
        href={`/pages/Detail-anime/${anime_mal_id}`}
        className="w-full h-[50%] relative"
      >
        <Image
          src={anime_images}
          alt="img"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-t-lg"
        />
      </Link>
      <div className="w-full h-fit flex flex-col p-2">
        <h1 className="text-center text-lg  truncate w-full">{anime_title}</h1>
        <div className="w-full flex justify-start items-center py-1 space-x-2">
          <LinkBtn
            url={`/pages/Detail-anime/${anime_mal_id}`}
            icon={<Play />}
          />
          <AddCollection
            anime_images={anime_images}
            anime_title={anime_title}
            anime_mal_id={anime_mal_id}
            anime_episodes={anime_episodes}
            anime_rating={anime_rating}
            anime_status={anime_status}
            anime_type={anime_type}
          />
          <LinkBtn
            url={`/pages/detail-anime/${anime_mal_id}`}
            icon={<CaretDown />}
          />
        </div>
        <ul className="mt-2 flex justify-start items-center gap-2 w-full text-sm">
          <li className="text-green-500">{anime_status}</li>
          <button className="border p-1 truncate w-16">{anime_rating}</button>
          <li className="text-slate-500">
            {anime_episodes} <span>episodes</span>
          </li>
          <button className="border p-1">{anime_type}</button>
        </ul>
      </div>
    </div>
  );
};

export default CardDetail;
