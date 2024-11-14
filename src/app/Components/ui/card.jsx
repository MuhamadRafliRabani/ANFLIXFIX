import Image from "next/image";
import Link from "next/link";

const Card = ({ anime }) => {
  return (
    <Link href={`/anime/${anime.mal_id}`}>
      <div className="relative h-auto max-h-[150px] w-auto max-w-full md:max-h-[300px]">
        <Image
          className="card h-[150px] w-[105px] rounded-lg object-cover md:h-[200px] md:w-[135px]"
          src={anime?.images?.jpg.large_image_url}
          alt="poster"
          width={113}
          height={150}
        />
        <div className="absolute inset-0 mt-auto text-xs text-[rgb(225,225,225)]">
          <div className="flex h-full w-full flex-col justify-end rounded-lg bg-gradient-to-t from-[rgba(0,0,0,0.1)] to-transparent px-1 pb-2">
            <p className="truncate whitespace-nowrap tracking-wide text-white">
              {anime.title_english || anime.title}
            </p>
            {anime.year && (
              <span className="text-[.65rem]">
                {anime.year}, {anime.score}
              </span>
            )}
            {/* {anime.genres.map((anime) => (
              <span key={anime.mal_id} className="mx-1 text-[.75rem]">
                {anime.name}
              </span>
            ))} */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
