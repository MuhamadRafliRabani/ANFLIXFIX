import Image from "next/image";
import Link from "next/link";

const Card = ({ idAnime, image, title, year, score, url }) => {
  return (
    <Link href={url ? url : `/anime/${idAnime}`}>
      <div className="relative h-auto max-h-[150px] w-auto max-w-full md:max-h-[300px]">
      <img
          className="card aspect-[9/16] h-[150px] w-[105px] rounded-lg object-contain md:h-[200px] md:w-[135px]"
          src={image}
          alt="poster"
          loading="lazy"
        />
        <div className="absolute inset-0 mt-auto text-xs text-[rgb(225,225,225)]">
          <div className="flex h-full w-full flex-col justify-end rounded-lg bg-gradient-to-t from-[rgba(0,0,0,0.1)] to-transparent px-1 pb-2">
            <p className="truncate overflow-ellipsis whitespace-nowrap tracking-wide text-white">
              {title}
            </p>
            {year && (
              <span className="text-[.65rem]">
                {year} {score}
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
