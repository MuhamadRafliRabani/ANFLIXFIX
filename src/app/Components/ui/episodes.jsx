import Link from "next/link";

export default function Episodes({ episodes }) {
  if (episodes?.length == 0) {
    return (
      <p className="text-center text-white md:text-lg lg:text-lg">
        no entry found
      </p>
    );
  }

  return (
    <div className="grid w-fit grid-cols-[minmax(150px,_1fr)] gap-3.5 px-1 sm:gap-4 sm:px-4 md:grid-cols-2 md:gap-4 md:p-4 lg:grid-cols-4 lg:gap-4 lg:px-4">
      {episodes.map((episode) => (
        <Link
          key={episode.id}
          href={episode.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="w relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={episode.images.jpg.image_url}
              alt={episode.title}
              className="h-40 w-full object-contain"
            />
            <div className="absolute inset-0 flex items-end bg-black/35 bg-opacity-50 p-2 duration-200 hover:bg-black/10">
              <p className="text-sm font-semibold text-white">
                {episode.episode} - {episode.title}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
