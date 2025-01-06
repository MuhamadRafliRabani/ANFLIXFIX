const LoadingSkeleton = ({ length, crousell, animeCard }) => {
  const emptyArray = Array.from({ length });

  return (
    <div className="w-full space-y-2">
      <div
        className={`flex w-full overflow-x-auto ${crousell ? "gap-2" : "flex-wrap justify-center gap-2"}`}
      >
        {emptyArray.map((_, i) => (
          <>
            {animeCard ? (
              <div
                key={i}
                className="relative h-auto max-h-[150px] w-[108px] flex-shrink-0 animate-pulse overflow-hidden md:max-h-[300px] md:w-[135px]"
              >
                {/* Skeleton Image */}
                <div className="h-[150px] w-full rounded-lg bg-gray-300 md:h-[200px]"></div>

                {/* Skeleton Text */}
                <div className="absolute inset-0 mt-auto flex h-full w-full flex-col justify-end rounded-lg bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-transparent px-1 pb-2">
                  <div className="mb-1 h-4 w-3/4 rounded bg-gray-400"></div>{" "}
                  {/* Title */}
                  <div className="h-3 w-1/4 rounded bg-gray-400"></div>{" "}
                  {/* Year/Score */}
                </div>
              </div>
            ) : (
              <div className="flex h-52 w-[100vw] min-w-80 max-w-sm items-center overflow-hidden rounded-lg border bg-second_color shadow-lg">
                {/* Manga Image Skeleton */}
                <div className="h-full w-2/5 animate-pulse rounded-br-lg rounded-tr-lg bg-gray-400"></div>

                {/* Content Section Skeleton */}
                <div className="h-full w-full space-y-3 p-2">
                  {/* Status and Rank */}
                  <div className="flex items-center justify-between">
                    <div className="h-4 w-20 animate-pulse rounded bg-gray-400"></div>
                    <div className="h-4 w-10 animate-pulse rounded bg-gray-400"></div>
                  </div>

                  {/* Chapters */}
                  <div className="h-4 w-24 animate-pulse rounded bg-gray-400"></div>

                  {/* Title */}
                  <div className="h-6 w-2/3 animate-pulse rounded bg-gray-400"></div>

                  {/* Rating and Ranking */}
                  <div className="flex items-center justify-between">
                    <div className="h-4 w-16 animate-pulse rounded bg-gray-400"></div>
                    <div className="h-4 w-16 animate-pulse rounded bg-gray-400"></div>
                  </div>

                  {/* Genres */}
                  <div className="flex flex-wrap gap-1.5 pt-4">
                    {[...Array(7)].map((_, index) => (
                      <div
                        key={index}
                        className="h-5 w-12 animate-pulse rounded-lg bg-gray-400"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default LoadingSkeleton;
