import Link from "next/link";

const AnimeCard = ({ mal_id, image, title, year, score }) => {
  return (
    <Link href={`/anime/${mal_id}`} className="w-full">
      <div className="relative h-[60vh] max-h-[180px] min-h-44 w-[30vw] min-w-[120px] max-w-[140px]">
        {/* Bagian Gambar */}
        <img
          src={image}
          alt={title || "Anime Poster"}
          className="h-full w-full rounded-lg object-cover"
          loading="lazy"
        />

        {/* Bagian Overlay */}
        <div className="absolute inset-0 flex h-full items-end rounded-lg bg-gradient-to-t from-black/60 from-30% to-transparent to-50% p-1 hover:from-black/40">
          <div className="flex w-full flex-col text-sm text-white">
            {/* Judul */}
            <p className="truncate font-thin tracking-wide text-gray-50">
              {title}
            </p>

            {/* Tahun dan Skor */}
            {(year || score) && (
              <span className="text-xs text-gray-300">
                {year || "N/A"} {score ? `· ${score} ` : ". N/A"}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AnimeCard;
