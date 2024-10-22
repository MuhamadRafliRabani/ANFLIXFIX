import Image from "next/image";

const Card = ({ anime }) => {
  return (
    <div className="relative h-auto max-h-[150px] w-auto max-w-[130px] md:max-h-[170px]">
      <Image
        className="card h-[150px] w-full rounded-lg object-cover md:h-[170px]"
        src={anime?.images?.jpg.image_url}
        alt="poster"
        width={113}
        height={150}
      />
      <div className="absolute inset-0 mt-auto text-xs text-[rgb(225,225,225)]">
        <div className="flex h-full w-full flex-col justify-end rounded-lg bg-gradient-to-t from-[rgba(0,0,0,0.1)] to-transparent px-1 pb-2">
          <p className="truncate whitespace-nowrap text-white">
            {anime.title_english || anime.title}
          </p>
          {anime.year && (
            <span className="text-[.65rem]">
              {anime.year}, {anime.score}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
