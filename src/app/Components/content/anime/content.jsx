import { useContent } from "@/store/store";
import dynamic from "next/dynamic";
import LoadingSkeleton from "../../cardSkeleton";

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

const Content = ({ anime, characters, staff, reviews, isLoading, type }) => {
  const { content } = useContent();

  switch (content) {
    case "Overview":
      return <Overview anime={anime} isLoading={isLoading} type={type} />;
    case "Relations":
      return (
        <Relations
          relations={anime?.relations}
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
