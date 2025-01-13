import Link from "next/link";

const AnimeCard = ({
  mal_id,
  image,
  title = "Unknown Title",
  year = "N/A",
  score,
  type,
}) => {
  // Buat conditional class untuk ukuran berdasarkan header

  return (
    <Link
      href={`/${type}/detail/${title === "[Oshi no Ko]" ? "Oshi no Ko" : title}/${mal_id}`}
      className="h-fit w-auto"
    >
      <div
        className={`relative h-[100vh] max-h-[155px] w-[110.5px] md:h-[80vh] md:max-h-[180px] md:w-[50vw] md:min-w-[120px] md:max-w-[140px]`}
      >
        {/* Bagian Gambar */}
        <img
          src={image}
          alt={title}
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
              <span className="truncate text-xs text-gray-300">
                {year} {score && `· ${score}`}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AnimeCard;
