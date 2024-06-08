"use client";
import Link from "next/link";
import Image from "next/image";
import CardDetail from "../Card-Detail/CardDetail";
import { useState } from "react";
import CardSkeleton from "@/app/global/cardSeleton";

function CardMain({ animeCM, title }) {
  const [isOpen, setIsOpen] = useState();
  const handleOpen = (anime_mal_id) => setIsOpen(anime_mal_id);
  return (
    <section className="mt-2 md:mt-0" id="Rekomend">
      <h1 className="text-white font-bold text-base px-2 mt-1 mb-4">{title}</h1>

      <div className="grid grid-cols-3 grid-rows-3 h-fit gap-2 px-1 lg:grid-cols-8 lg:gap-4 lg:container ">
        {!animeCM && <CardSkeleton cards={16} />}
        {animeCM?.map((anime, index) => {
          return (
            <div key={index} className="w-full rounded-lg shadow Card mx-auto">
              <Link
                href={`/pages/Detail-anime/${anime.mal_id}`}
                onMouseEnter={() => handleOpen(anime.mal_id)}
                onMouseLeave={() => handleOpen(anime.mal_id)}
              >
                {anime.images?.jpg.image_url ? (
                  <Image
                    width={180}
                    height={250}
                    src={anime.images?.jpg.image_url}
                    className="rounded-md hover:scale-105 md:mt-4 z-10 w-auto h-auto main-transition img-card"
                    alt={anime.title}
                  />
                ) : (
                  <Skeleton width={140} height={200} className="rounded-md" />
                )}
              </Link>
              {anime.title ? (
                <h5 className="my-1 text-base text-white w-full font-medium">
                  {anime.title}
                </h5>
              ) : (
                <Skeleton className="mb-2 text-base text-white w-full font-medium" />
              )}

              <CardDetail
                anime_episodes={anime.episodes}
                anime_images={anime.images?.jpg.image_url}
                anime_mal_id={anime.mal_id}
                anime_rating={anime.rating}
                anime_status={anime.status}
                anime_title={title}
                anime_type={anime.type}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CardMain;
