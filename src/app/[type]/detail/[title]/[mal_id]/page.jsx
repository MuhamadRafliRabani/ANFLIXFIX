"use client";

import Content from "@/app/Components/content/anime/content";
import HeadAnime from "@/app/Components/content/anime/head";
import HeadContent from "@/app/Components/content/anime/headContent";
import { useContent } from "@/store/store";
import { FetchAnime } from "@/utility/Get";
import { useEffect } from "react";

const Anime = ({ params }) => {
  const { type, mal_id } = params;
  const { setContent } = useContent();

  const isPerson = type === "people";

  const { data: personData, isLoading: isPersonLoading } = FetchAnime(
    `/${type}/${mal_id}/full`,
    null,
    isPerson,
  );

  const { data: animeData, isLoading: isAnimeLoading } = FetchAnime(
    `/${type}/${mal_id}/full`,
    null,
    !isPerson,
  );

  const { data: charactersData } = FetchAnime(
    `/${type}/${mal_id}/characters`,
    null,
    !isPerson,
  );

  const { data: staffData } = FetchAnime(
    type === "anime"
      ? `/${type}/${mal_id}/staff`
      : `/${type}/${mal_id}/external`,
    null,
    !isPerson,
  );

  const { data: reviewsData } = FetchAnime(
    `/${type}/${mal_id}/reviews`,
    null,
    !isPerson,
  );

  const { data: episodes, isLoading: episodesLoading } = FetchAnime(
    `https://api.jikan.moe/v4/anime/${mal_id}/videos/episodes`,
    null,
    !isPerson,
  );

  const { data: rekomendations, isLoading: rekomendationsLoading } = FetchAnime(
    `https://api.jikan.moe/v4/${type}/${mal_id}/recommendations`,
    null,
    !isPerson,
  );

  // Set default content tab
  useEffect(() => {
    setContent("Overview");
  }, [setContent]);

  const isLoading = isPerson ? isPersonLoading : isAnimeLoading;

  const data = isPerson ? personData?.data : animeData?.data;
  const characters = isPerson ? personData?.data?.voices : charactersData?.data;
  const staff = isPerson ? personData?.data?.anime : staffData?.data;
  const reviews = isPerson ? [] : reviewsData?.data;

  return (
    <section className="min-w-full px-2">
      <div className="mt-16 w-full space-y-5">
        <HeadAnime
          image={
            isPerson
              ? data?.images?.jpg?.image_url
              : data?.images?.webp?.large_image_url
          }
          title={
            isPerson
              ? data?.alternate_names?.[0] || data?.name
              : data?.title || data?.title_english
          }
          score={isPerson ? data?.favorites : data?.score}
          animeId={mal_id}
          status={isPerson ? data?.name : data?.status}
          trailer={type === "anime" ? data?.trailer?.embed_url : null}
          streaming={type === "anime" ? data?.streaming : []}
          isLoading={isLoading}
        />
        <HeadContent type={type} />
        <Content
          anime={data}
          episodes={episodes?.data}
          characters={characters}
          rekomendations={isPerson ? characters : rekomendations}
          rekomendationsLoading={rekomendationsLoading}
          staff={staff}
          reviews={reviews}
          isLoading={isLoading}
          episodesLoading={episodesLoading}
          type={type}
        />
      </div>
    </section>
  );
};

export default Anime;
