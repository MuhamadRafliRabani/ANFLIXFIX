import { useContent } from "@/store/store";
import dynamic from "next/dynamic";

const Overview = dynamic(() => import("../../ui/overview"));
const Relations = dynamic(() => import("../../ui/relations"));
const Characters = dynamic(() => import("../../ui/characters"));
const Staff = dynamic(() => import("../../ui/staff"));
const Reviews = dynamic(() => import("../../ui/reviews"));

const Content = ({ anime, characters, staff }) => {
  const { content } = useContent();

  switch (content) {
    case "Overview":
      return <Overview anime={anime} />;
    case "Relations":
      return (
        <Relations
          relations={anime?.relations}
          image={anime?.trailer?.images.medium_image_url}
          score={anime?.score}
          idAnime={anime?.mal_id}
        />
      );
    case "Characters":
      return <Characters characters={characters} />;
    case "Staff":
      return <Staff staff={staff} />;
    case "Reviews":
      return <Reviews />;
    default:
      return <Overview anime={anime} />;
  }
};

export default Content;
