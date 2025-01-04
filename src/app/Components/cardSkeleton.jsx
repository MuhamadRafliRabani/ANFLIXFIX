const LoadingSkeleton = ({ length, crousell }) => {
  const emptyArray = Array.from({ length });

  return (
    <div className="w-full space-y-2">
      <div
        className={`flex w-full overflow-x-auto ${crousell ? "gap-2" : "flex-wrap justify-center gap-2"}`}
      >
        {emptyArray.map((_, i) => (
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
        ))}
      </div>
    </div>
  );
};

export default LoadingSkeleton;
