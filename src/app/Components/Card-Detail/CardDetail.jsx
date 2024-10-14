import Image from "next/image";
import Link from "next/link";
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
      className={`main-transition absolute left-0 right-0 top-8 z-[9999] hidden min-h-64 w-80 translate-y-4 scale-0 flex-col items-center bg-black bg-opacity-95 pb-2 font-semibold text-white opacity-0 shadow-sm md:-left-[35%] md:right-[30%] lg:flex ${
        isOpen === anime_mal_id ? "translate-y-0 scale-100 opacity-100" : ""
      }`}
    >
      <Link
        href={`/pages/detail-anime/${anime_mal_id}`}
        className="relative h-[45%] w-full"
      >
        <Image
          src={anime_images}
          alt="img"
          width={400}
          height={400}
          className="h-[150px] w-[400px] rounded-t-lg object-cover"
        />
      </Link>
      <div className="flex h-fit w-full flex-col p-2">
        <h1 className="w-full truncate text-center text-lg">{anime_title}</h1>
        <div className="flex w-full items-center justify-start space-x-2 py-1">
          <LinkBtn
            url={`/pages/detail-anime/${anime_mal_id}`}
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
        <ul className="mt-2 flex w-full items-center justify-start gap-2 text-sm">
          <li className="text-green-500">{anime_status}</li>
          <button className="w-16 truncate border p-1">{anime_rating}</button>
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
