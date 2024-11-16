const Overview = ({ anime }) => {
  return (
    <div className="flex w-full flex-wrap items-center gap-4">
      <div className="">
        <h1 className="text-xl font-semibold text-white">Details</h1>
        <ul className="mt-2 flex items-center gap-2 text-sm text-text_color">
          <div className="space-y-2">
            <li className="flex items-center gap-4">
              <span className="min-w-14">Type :</span>
              <span className="flex-1 overflow-auto whitespace-nowrap text-white text-opacity-60 hover:text-white">
                {anime?.type}
              </span>
            </li>
            <li className="flex items-center gap-4">
              <span className="min-w-14">Episodes :</span>
              <span className="flex-1 overflow-auto whitespace-nowrap text-white text-opacity-60 hover:text-white">
                {anime?.episodes}
              </span>
            </li>
            <li className="flex items-center gap-4">
              <span className="min-w-14">Genres :</span>
              <span className="flex-1 overflow-auto whitespace-nowrap text-white text-opacity-60 hover:text-white">
                {anime?.Genres?.join(", ")}
              </span>
            </li>
            <li className="flex items-center gap-4">
              <span className="min-w-14">Year :</span>
              <span className="flex-1 overflow-auto whitespace-nowrap text-white text-opacity-60 hover:text-white">
                {anime?.year}
              </span>
            </li>
            <li className="flex items-center gap-4">
              <span className="min-w-14">Status :</span>
              <span className="flex-1 overflow-auto whitespace-nowrap text-white text-opacity-60 hover:text-white">
                {anime?.status}
              </span>
            </li>
          </div>
          <div className="space-y-2">
            <li className="flex items-center gap-4">
              <span className="min-w-14">Season :</span>
              <span className="flex-1 overflow-auto whitespace-nowrap text-white text-opacity-60 hover:text-white">
                {anime?.season}
              </span>
            </li>
            <li className="flex items-center gap-4">
              <span className="min-w-14">Studios :</span>
              <span className="flex-1 overflow-auto whitespace-nowrap text-white text-opacity-60 hover:text-white">
                {anime?.studios[0].name}
              </span>
            </li>
            <li className="flex items-center gap-4">
              <span className="min-w-14">Source :</span>
              <span className="flex-1 overflow-auto whitespace-nowrap text-white text-opacity-60 hover:text-white">
                {anime?.source}
              </span>
            </li>
            <li className="flex items-center gap-4">
              <span className="min-w-14">Rating :</span>
              <span className="flex-1 overflow-auto whitespace-nowrap text-white text-opacity-60 hover:text-white">
                {anime?.score}
              </span>
            </li>
            <li className="flex items-center gap-4">
              <span className="min-w-14">Duration :</span>
              <span className="flex-1 overflow-auto whitespace-nowrap text-white text-opacity-60 hover:text-white">
                {anime?.duration}
              </span>
            </li>
          </div>
        </ul>
      </div>
      <div className="space-y-2">
        <h1 className="text-xl font-semibold text-white">Description</h1>
        <p className="text-sm text-white text-opacity-60">{anime?.synopsis}</p>
      </div>
      <div className="">
        {/* <h1 className="text-xl font-semibold text-white">Special For you</h1> */}
      </div>
    </div>
  );
};

export default Overview;
