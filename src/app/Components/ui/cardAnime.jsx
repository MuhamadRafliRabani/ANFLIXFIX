import { userSessions } from "@/libs/auth-session";
import { handleAddAnimeToLibrary } from "@/libs/handleAddAnimeToLibs";
import { toSnakeCase } from "@/libs/snakeCase";
import { useAddLibraryMutation } from "@/utility/Post";
import { Eye, BookmarkSimple, ThumbsUp } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const AnimeCard = ({ mal_id, image, title, year, score, type }) => {
  const { user } = userSessions();
  const { mutate } = useAddLibraryMutation();
  const email = user?.email;

  const data = {
    mal_id,
    images: image,
    title,
    year,
    score,
    email,
    type,
  };

  return (
    <Link
      href={`/${type}/detail/${title === "[Oshi no Ko]" ? "Oshi no Ko" : toSnakeCase(title)}/${mal_id}`}
      className="h-fit w-auto"
    >
      <div
        className={`card-anime group relative h-[100vh] max-h-[155px] w-[110.5px] overflow-hidden md:h-[80vh] md:max-h-[180px] md:w-[50vw] md:min-w-[120px] md:max-w-[140px]`}
      >
        {/* Bagian Gambar */}
        <img
          src={image}
          alt={title}
          className="h-full w-full rounded-lg object-cover"
          loading="lazy"
          onError={(e) =>
            (e.target.src = "https://placehold.co/400x500?text=Image+Undefined")
          }
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

            {/* Tombol */}
            <span className="z-[100] hidden h-auto w-full translate-y-full items-center gap-2 text-xs text-gray-300 transition-all group-hover:flex group-hover:translate-y-0">
              <Eye
                size={24}
                onClick={(e) =>
                  handleAddAnimeToLibrary(e, "watching", data, mutate)
                }
                className="size-6 rounded-full border border-white bg-transparent p-0.5 text-white"
              />
              <ThumbsUp
                size={24}
                onClick={(e) =>
                  handleAddAnimeToLibrary(e, "favorites", data, mutate)
                }
                className="size-6 rounded-full border border-white bg-transparent p-0.5 text-white"
              />
              <BookmarkSimple
                size={24}
                onClick={(e) =>
                  handleAddAnimeToLibrary(e, "collections", data, mutate)
                }
                className="size-6 rounded-full border border-white bg-transparent p-0.5 text-white"
              />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AnimeCard;
