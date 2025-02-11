const EpisodesSkeleton = () => {
  return (
    <div className="grid w-full grid-cols-[minmax(150px,_1fr)] gap-3.5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="relative h-40 w-full animate-pulse rounded-lg bg-gray-200"
        >
          <div className="absolute inset-0 flex items-end rounded-lg bg-gray-200 p-2 opacity-40"></div>
        </div>
      ))}
    </div>
  );
};

export default EpisodesSkeleton;
