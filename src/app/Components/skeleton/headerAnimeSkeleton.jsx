const HeaderAnimeSkeleton = () => {
  return (
    <div className="h-full w-full animate-pulse">
      <div className="flex h-48 w-full items-center md:h-56">
        {/* Placeholder for Image */}
        <div className="h-full w-1/3 rounded-md bg-gray-300 md:w-[13%]"></div>

        {/* Placeholder for Content */}
        <div className="flex h-full w-4/6 flex-col px-2 pt-6 md:w-2/5">
          {/* Title Placeholder */}
          <div className="mb-3 h-6 w-3/4 rounded bg-gray-300"></div>

          {/* Status and Score */}
          <div className="mt-1 flex items-center space-x-3">
            <div className="h-4 w-1/4 rounded bg-gray-300"></div>
            <div className="h-4 w-1/4 rounded bg-gray-300"></div>
          </div>

          {/* Buttons Placeholder */}
          <div className="mt-auto flex w-full space-x-2">
            <div className="h-8 w-20 rounded bg-gray-300"></div>
            <div className="h-8 w-20 rounded bg-gray-300"></div>
          </div>
        </div>

        <div className="mx-auto hidden h-full w-[30%] rounded bg-gray-300 md:inline-block"></div>
      </div>
    </div>
  );
};

export default HeaderAnimeSkeleton;
