import { StarFour } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const MangaCard = ({
  mal_id,
  images,
  title_english,
  status,
  rank,
  chapters,
  scored,
  members,
  genres,
}) => {
  return (
    <Link href={`/manga/detail/${title_english}/${mal_id}`}>
      <div className="flex h-full w-full items-center overflow-hidden rounded-lg border bg-second_color shadow-lg md:w-[100vw] md:max-w-sm">
        {/* Manga Image */}
        <img
          src={images.images?.jpg.large_image_url || images?.webp.image_url}
          alt={title_english || "N/A"}
          className="h-full w-2/5 rounded-br-lg rounded-tr-lg object-cover"
        />

        {/* Content Section */}
        <div className="h-full w-full space-y-2 p-2">
          {/* Status and Rank */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-red-400">{status || "N/A"}</p>
            <span className="text-gray-500">#{rank || "N/A"}</span>
          </div>

          {/* Chapters */}
          <p className="text-sm text-gray-700">{chapters || "N/A"} chapters</p>

          {/* Title */}
          <h3 className="w-2/3 truncate text-xl font-semibold text-white transition-all hover:text-yellow-400">
            {title_english || "N/A"}
          </h3>

          {/* Rating and Ranking */}
          <div className="flex items-center justify-between text-sm text-text_color">
            <span className="flex items-center">
              <StarFour
                weight="fill"
                size={16}
                className="mr-1 text-yellow-400"
              />
              {scored || "N/A"}
            </span>
            <span className="text-gray-500">{members || "N/A"} users</span>
          </div>

          {/* Genres */}
          <div className="flex flex-wrap gap-1.5">
            {genres?.map((genre, index) => (
              <span
                key={index}
                className="rounded-lg bg-white/20 px-2 py-1 text-xs text-white hover:bg-white/30 hover:text-yellow-400"
              >
                {genre.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MangaCard;
