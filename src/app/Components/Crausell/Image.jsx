"use client";
import Link from "next/link";
import Image from "next/image";
import CardDetail from "../Card-Detail/CardDetail";
import { useState } from "react";

const Images = ({ anime_images, anime_title, anime_mal_id, anime_episodes, anime_rating, anime_status, anime_type }) => {
  const [isOpen, setIsOpen] = useState();

  const handleOpen = (anime_mal_id) => {
    setIsOpen(anime_mal_id);
  };
  return (
    <div className="relative" onMouseEnter={() => handleOpen(anime_mal_id)} onMouseLeave={() => handleOpen(null)}>
      <Link href={`/detail-anime/${anime_mal_id}`} className="mx-auto">
        {anime_images ? <Image src={anime_images} alt={anime_title} width={200} height={330} className="rounded-md" /> : <Skeleton width={200} height={330} />}
      </Link>
      <CardDetail anime_images={anime_images} anime_title={anime_title} anime_mal_id={anime_mal_id} anime_episodes={anime_episodes} anime_rating={anime_rating} anime_status={anime_status} anime_type={anime_type} isOpen={isOpen} />
    </div>
  );
};

export default Images;
