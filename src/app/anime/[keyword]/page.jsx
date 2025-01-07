"use client";
import Content from "@/app/Components/content/anime/content";
import HeadAnime from "@/app/Components/content/anime/head";
import HeadContent from "@/app/Components/content/anime/headContent";
import { useContent } from "@/store/store";
import { FetchAnime } from "@/utility/Api";
import { useEffect } from "react";

const Anime = ({ params }) => {
  const animeId = params.keyword;
  const { setContent } = useContent();

  const { data: anime, isLoading } = FetchAnime(`/anime/${animeId}/full`);
  const { data: Characters } = FetchAnime(`/anime/${animeId}/characters`);
  const { data: Staff } = FetchAnime(`/anime/${animeId}/staff`);
  const { data: reviews } = FetchAnime(`/anime/${animeId}/reviews`);

  useEffect(() => {
    setContent("Overview");
  }, []);

  return (
    <section className="min-w-full px-2">
      <div className="mt-16 w-full space-y-5">
        <HeadAnime
          image={
            anime?.data?.images.webp.large_image_url ||
            anime?.data?.images.jpg.large_image_url
          }
          title={
            anime?.data.title ||
            anime?.data.title_english ||
            anime?.data?.title_synonyms
          }
          score={anime?.data.score}
          animeId={animeId}
          status={anime?.data.status}
          isLoading={isLoading}
        />
        <HeadContent />
        <Content
          anime={anime?.data}
          characters={Characters?.data}
          staff={Staff?.data}
          reviews={reviews?.data}
          isLoading={isLoading}
        />
      </div>
    </section>
  );
};

export default Anime;
