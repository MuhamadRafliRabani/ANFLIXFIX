import Link from "next/link";
import EpisodesSkeleton from "../skeleton/episodesSkeleton";
import TitleHead from "./titleHead";

export default function Episodes({ episodes, episodesLoading }) {
  if (episodes?.length == 0) {
    return (
      <>
        <TitleHead header="Episodes" />

        <p className="grid min-h-44 place-items-center text-center text-white md:text-lg lg:text-lg">
          no entry found
        </p>
      </>
    );
  }

  if (episodesLoading) return <EpisodesSkeleton />;

  return (
    <div>
      <TitleHead header="Episodes" />

      <div className="grid w-full grid-cols-[minmax(150px,_1fr)] gap-3.5 rounded-md px-1 sm:container md:container lg:container sm:grid-cols-2 sm:gap-4 sm:px-4 md:grid-cols-2 md:gap-4 md:p-4 lg:grid-cols-4 lg:gap-4 lg:px-4">
        {[...episodes]?.reverse().map((episode) => (
          <Link
            key={episode.id}
            href={episode.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="relative w-fit overflow-hidden rounded-lg shadow-lg">
              <img
                src={
                  episode.images.jpg.image_url ||
                  "https://placehold.co/800x400?text=Image+Undifined"
                }
                alt={episode.title}
                className="h-40 w-full object-contain"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-end bg-black/15 bg-opacity-50 p-2 duration-200 hover:bg-black/0 hover:backdrop-brightness-110">
                <p className="text-sm font-semibold text-white">
                  {episode.episode} - {episode.title}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
