"use client";
import Content from "@/app/Components/content/anime/content";
import HeadAnime from "@/app/Components/content/anime/head";
import HeadContent from "@/app/Components/content/anime/headContent";
import { useContent } from "@/store/store";
import { FetchAnime } from "@/utility/Api";
import { useEffect } from "react";

const Anime = ({ params }) => {
  const { type, mal_id } = params;
  const { setContent } = useContent();

  const { data: anime, isLoading } = FetchAnime(`/${type}/${mal_id}/full`);
  const { data: Characters } = FetchAnime(`/${type}/${mal_id}/characters`);
  const { data: Staff } = FetchAnime(
    type === "anime"
      ? `/${type}/${mal_id}/staff`
      : `/${type}/${mal_id}/external`,
  );
  const { data: reviews } = FetchAnime(`/${type}/${mal_id}/reviews`);

  useEffect(() => {
    setContent("Overview");
  }, []);

  return (
    <section className="min-w-full px-2">
      <div className="mt-16 w-full space-y-5">
        <HeadAnime
          image={anime?.data?.images.webp.large_image_url}
          title={anime?.data.title || anime?.data.title_english}
          score={anime?.data.score}
          animeId={mal_id}
          status={anime?.data.status}
          trailer={type === "anime" ? anime?.data.trailer.embed_url : null}
          isLoading={isLoading}
        />
        <HeadContent type={type} />
        <Content
          anime={anime?.data}
          characters={Characters?.data}
          staff={Staff?.data}
          reviews={reviews?.data}
          isLoading={isLoading}
          type={type}
        />
      </div>
    </section>
  );
};

export default Anime;
