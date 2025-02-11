import { useContent } from "@/store/store";
import dynamic from "next/dynamic";
import LoadingSkeleton from "../../cardSkeleton";
import Episodes from "../../ui/episodes";

const Overview = dynamic(() => import("@/app/Components/ui/overview"));

const Relations = dynamic(() => import("@/app/Components/ui/relations"), {
  loading: () => <LoadingSkeleton crousell length={5} />,
});

const Characters = dynamic(() => import("@/app/Components/ui/characters"), {
  loading: () => <LoadingSkeleton crousell length={5} />,
});

const Staff = dynamic(() => import("@/app/Components/ui/staff"), {
  loading: () => <LoadingSkeleton crousell length={5} />,
});

const Reviews = dynamic(() => import("@/app/Components/ui/reviews"), {
  loading: () => <LoadingSkeleton crousell length={5} />,
});

const Content = ({
  anime,
  episodes,
  characters,
  rekomendations,
  staff,
  reviews,
  isLoading,
  episodesLoading,
  rekomendationsLoading,
  type,
}) => {
  const { content } = useContent();

  switch (content) {
    case "Overview":
      return (
        <Overview
          anime={anime}
          isLoading={isLoading}
          type={type}
          rekomendations={rekomendations}
          rekomendationsLoading={rekomendationsLoading}
        />
      );

    case "Episodes":
      return <Episodes episodes={episodes} episodesLoading={episodesLoading} />;

    case "Relations":
      return (
        <Relations
          relations={type === "people" ? anime?.anime : anime?.relations}
          image={anime?.trailer?.images.medium_image_url}
          score={anime?.score}
          idAnime={anime?.mal_id}
          type={type}
        />
      );

    case "Characters":
      return <Characters characters={characters} type={type} />;

    case "Staff":
      return <Staff staff={staff} />;

    case "Reviews":
      return <Reviews reviews={reviews} />;

    default:
      return <Overview anime={anime} />;
  }
};

export default Content;
