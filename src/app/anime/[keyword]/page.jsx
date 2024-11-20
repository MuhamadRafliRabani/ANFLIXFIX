"use client";
import Content from "@/app/Components/content/anime/content";
import HeadAnime from "@/app/Components/content/anime/head";
import HeadContent from "@/app/Components/content/anime/headContent";
import { FetchAnime } from "@/utility/Api";

const Anime = ({ params }) => {
  const animeId = params.keyword;

  const { data: anime } = FetchAnime(`/anime/${animeId}/full`);
  const { data: Characters } = FetchAnime(`/anime/${animeId}/characters`);
  const { data: Staff } = FetchAnime(`/anime/${animeId}/staff`);

  return (
    <section className="w-screen px-4">
      <div className="mt-16 w-full space-y-5">
        <HeadAnime
          image={
            anime?.data.images?.webp?.large_image_url ||
            anime?.data.images?.jpg?.large_image_url
          }
          title={
            anime?.data.title ||
            anime?.data.title_english ||
            anime?.data?.title_synonyms
          }
          score={anime?.data.score}
          animeId={animeId}
          status={anime?.data.status}
        />
        <HeadContent />
        <Content
          anime={anime?.data}
          characters={Characters?.data}
          staff={Staff?.data}
        />
      </div>
    </section>
  );
};

export default Anime;
