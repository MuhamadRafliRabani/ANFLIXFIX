"use client";
import Link from "next/link";
import Image from "next/image";
import CardDetail from "../Card-Detail/CardDetail";
import { useState } from "react";
import SkeletonCard from "../cardSkeleton";

function CardMain({ data, title, isLoading }) {
  const [isOpen, setIsOpen] = useState();
  const handleOpen = (anime_mal_id) => setIsOpen(anime_mal_id);

  return (
    <section className="mt-2 md:mt-0" id="Rekomend">
      <h1 className="mb-4 mt-1 px-2 text-base font-bold text-white">{title}</h1>

      <div className="grid h-fit grid-cols-3 gap-2 px-1 lg:grid-cols-8">
        {isLoading &&
          Array.from({ length: 12 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        {data?.map((anime, index) => {
          return (
            <div key={index} className="Card mx-auto w-full rounded-lg shadow">
              <Link
                href={`/pages/detail-anime/${anime.mal_id}`}
                onMouseEnter={() => handleOpen(anime.mal_id)}
                onMouseLeave={() => handleOpen(anime.mal_id)}
              >
                {anime.images?.jpg.image_url ? (
                  <Image
                    width={180}
                    height={250}
                    src={anime.images?.jpg.image_url}
                    className="main-transition img-card z-10 h-auto w-auto rounded-md hover:scale-105 md:mt-4"
                    alt={anime.title}
                  />
                ) : (
                  <Skeleton width={140} height={200} className="rounded-md" />
                )}
              </Link>
              {anime.title ? (
                <h5 className="my-1 w-full text-base font-medium text-white">
                  {anime.title}
                </h5>
              ) : (
                <Skeleton className="mb-2 w-full text-base font-medium text-white" />
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
