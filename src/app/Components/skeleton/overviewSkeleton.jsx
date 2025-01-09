const OverviewSkeleton = () => {
  return (
    <div className="inline-block w-full animate-pulse items-center gap-4 md:flex md:flex-wrap md:items-start">
      {/* Details Skeleton */}
      <div className="w-full md:w-[20%]">
        <h1 className="h-6 w-20 rounded bg-gray-300"></h1>
        <ul className="my-2 flex items-center gap-2 md:inline-block md:w-full md:space-y-2">
          <div className="w-full space-y-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <li key={i} className="flex items-center gap-4">
                <span className="h-4 w-12 min-w-14 rounded bg-gray-300 md:h-5"></span>
                <span className="h-4 flex-1 rounded bg-gray-300 md:h-5"></span>
              </li>
            ))}
          </div>
          <div className="w-full space-y-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <li key={i} className="flex items-center gap-4">
                <span className="h-4 w-12 min-w-14 rounded bg-gray-300 md:h-5"></span>
                <span className="h-4 flex-1 rounded bg-gray-300 md:h-5"></span>
              </li>
            ))}
          </div>
        </ul>
      </div>

      {/* Description Skeleton */}
      <div className="flex-1 space-y-2 pe-1 md:w-[70%] md:px-0">
        <h1 className="h-6 w-24 rounded bg-gray-300"></h1>
        <p className="h-20 rounded bg-gray-300 text-sm md:h-40"></p>
      </div>
    </div>
  );
};

export default OverviewSkeleton;
