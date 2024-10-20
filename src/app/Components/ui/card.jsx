import Image from "next/image";

const Card = ({ anime }) => {
  return (
    <div className="relative h-fit max-h-[180px] w-fit max-w-[115px]">
      <Image
        className="card rounded-lg"
        src={anime?.images.jpg.image_url}
        alt="poster"
        width={110}
        height={180}
      />
      <div className="absolute inset-0 mt-auto text-xs text-[rgb(225,225,225)]">
        <div className="flex h-full w-full flex-col justify-end rounded-lg bg-gradient-to-t from-[rgba(0,0,0,0.1)] to-transparent px-1 pb-2">
          <p className="truncate whitespace-nowrap text-white">
            {anime.title_english}
          </p>
          <span className="text-[.65rem]">
            {anime.year}, {anime.score}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
