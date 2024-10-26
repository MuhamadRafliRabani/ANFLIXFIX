import React from "react";

const LoadingSkeleton = ({ length }) => {
  const emtyArray = Array.from({ length });

  return (
    <div className="flex w-full flex-shrink-0 flex-grow flex-wrap content-center items-center justify-start gap-4 md:justify-center md:pe-4">
      {emtyArray.map((_, i) => (
        <div className="min-w-[150px] animate-pulse overflow-hidden">
          <div className="relative h-auto max-h-[150px] w-auto max-w-full md:max-h-[300px]">
            {/* Skeleton Image */}
            <div className="h-[150px] w-[105px] rounded-lg bg-gray-300 md:h-[200px] md:w-[135px]"></div>
            <div className="absolute inset-0 mt-auto text-xs text-[rgb(225,225,225)]">
              <div className="flex h-full w-full flex-col justify-end rounded-lg bg-gradient-to-t from-[rgba(0,0,0,0.1)] to-transparent px-1 pb-2">
                {/* Skeleton Title */}
                <div className="mb-2 h-4 w-3/4 rounded bg-gray-400"></div>
                {/* Skeleton Year and Score */}
                <div className="h-3 w-1/4 rounded bg-gray-400"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;
