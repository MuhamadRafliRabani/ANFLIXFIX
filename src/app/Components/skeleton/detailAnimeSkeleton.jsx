const DetailAnimeSkeleton = () => {
  return (
    <div className="flex w-full animate-pulse flex-wrap items-center gap-4">
      {/* Details Skeleton */}
      <div className="w-full">
        <h1 className="h-6 w-20 rounded bg-gray-300 text-xl font-semibold"></h1>
        <ul className="mt-2 flex items-center gap-2 text-sm">
          <div className="w-full space-y-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <li key={i} className="flex items-center gap-4">
                <span className="h-4 w-12 min-w-14 rounded bg-gray-300"></span>
                <span className="h-4 flex-1 rounded bg-gray-300"></span>
              </li>
            ))}
          </div>
          <div className="w-full space-y-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <li key={i} className="flex items-center gap-4">
                <span className="h-4 w-12 min-w-14 rounded bg-gray-300"></span>
                <span className="h-4 flex-1 rounded bg-gray-300"></span>
              </li>
            ))}
          </div>
        </ul>
      </div>

      {/* Description Skeleton */}
      <div className="w-full space-y-2">
        <h1 className="h-6 w-24 rounded bg-gray-300 text-xl font-semibold"></h1>
        <p className="h-20 rounded bg-gray-300 text-sm"></p>
      </div>

      {/* Optional Section Skeleton */}
      <div className="w-full">
        {/* Uncomment and add skeleton for additional sections if needed */}
        {/* <h1 className="text-xl font-semibold bg-gray-300 rounded h-6 w-32"></h1> */}
      </div>
    </div>
  );
};

export default DetailAnimeSkeleton;
