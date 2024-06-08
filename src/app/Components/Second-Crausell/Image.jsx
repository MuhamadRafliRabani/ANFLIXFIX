"use client";
import Link from "next/link";
import Image from "next/image";

const Images = ({ anime_images, anime_title, anime_mal_id }) => {
  return (
    <Image
      src={anime_images}
      alt={anime_title}
      width={200}
      height={330}
      className="rounded-md"
    />
  );
};

export default Images;
