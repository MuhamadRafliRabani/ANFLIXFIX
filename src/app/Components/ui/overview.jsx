import OverviewSkeleton from "../skeleton/overviewSkeleton";

const Overview = ({ anime, isLoading, type }) => {
  if (isLoading) return <OverviewSkeleton />;

  const handleCondition = (option1, option2) => {
    if (type === "anime") {
      return option1 || "N/A";
    } else if (type === "manga") {
      return option2 || "N/A";
    }
    return "N/A";
  };

  return (
    <div className="flex w-[95vw] max-w-sm flex-wrap gap-4 overflow-hidden px-1 md:w-full md:max-w-full md:flex-nowrap">
      <div className="w-full flex-1 md:w-[20%] md:flex-none">
        <h1 className="text-xl font-semibold text-white md:text-2xl md:tracking-wide">
          Details
        </h1>
        <ul className="my-2 flex items-center gap-2 text-sm text-white text-opacity-75 md:inline-block md:w-full md:gap-0 md:text-base">
          <div className="space-y-2">
            <li className="flex items-center gap-2 hover:bg-white/10">
              <span className="min-w-14 md:min-w-20">Type</span>
              <span className="flex-1 overflow-auto whitespace-nowrap text-[0.95rem] text-white">
                {anime?.type}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="min-w-14 md:min-w-20">
                {handleCondition("Episodes", "Rank")}:
              </span>
              <span className="flex-1 overflow-auto whitespace-nowrap text-[0.95rem] text-white">
                {handleCondition(anime?.episodes, anime?.rank)}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="min-w-14 md:min-w-20">Genres</span>
              <span className="max-w-[60%] flex-1 overflow-auto whitespace-nowrap text-[0.95rem] text-white md:overflow-visible md:whitespace-normal">
                {anime?.genres?.map((genre, i) => (
                  <span key={i}>
                    {i + 1 != anime?.genres.length
                      ? `${genre?.name}, `
                      : genre?.name}
                  </span>
                ))}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="min-w-14 md:min-w-20">Year</span>
              <span className="flex-1 overflow-auto whitespace-nowrap text-[0.95rem] text-white">
                {handleCondition(
                  type === "anime" ? anime?.year : "N/A",
                  type === "manga" ? anime?.published.prop?.from.year : "N/A",
                )}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="min-w-14 md:min-w-20">Status</span>
              <span className="flex-1 overflow-auto whitespace-nowrap text-[0.95rem] text-white">
                {anime?.status}
              </span>
            </li>
          </div>
          <div className="space-y-2 md:mt-2">
            <li className="flex items-center gap-2">
              <span className="min-w-14 md:min-w-20">
                {handleCondition("Season", "Members")}
              </span>
              <span className="overflow-autow hitespace-nowrap flex-1 text-[0.95rem] text-white">
                {handleCondition(anime?.season, anime?.members)}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="min-w-14 md:min-w-20">
                {handleCondition("Studios", "Chapters")}
              </span>
              <span className="max-w-[45%] flex-1 overflow-auto whitespace-nowrap text-[0.95rem] text-white md:overflow-visible md:whitespace-normal">
                {handleCondition(
                  type === "anime" ? anime?.studios[0].name : "N/A",
                  type === "manga" ? anime?.chapters : "N/A",
                )}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="min-w-14 md:min-w-20">
                {handleCondition("Source", "Authors")}
              </span>
              <span className="flex-1 overflow-auto whitespace-nowrap text-[0.9rem] text-white">
                {handleCondition(
                  type === "anime" ? anime?.source : "N/A",
                  type === "manga" ? anime?.authors[0].name : "N/A",
                )}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="min-w-14 md:min-w-20">Rating</span>
              <span className="flex-1 overflow-auto whitespace-nowrap text-[0.95rem] text-white">
                {anime?.score}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="min-w-14 md:min-w-20">
                {handleCondition("Duration", "Volumes")}
              </span>
              <span className="flex-1 overflow-auto whitespace-nowrap text-[0.95rem] text-white">
                {handleCondition(anime?.duration, anime?.volumes)}
              </span>
            </li>
          </div>
        </ul>
      </div>
      <div className="w-full flex-1 space-y-2 pe-1 md:w-[70%] md:px-0">
        <h1 className="text-xl font-semibold text-white md:text-2xl md:tracking-wide">
          Description
        </h1>
        <p className="text-sm text-white text-opacity-75 md:text-base">
          {anime?.synopsis}
        </p>
      </div>
    </div>
  );
};

export default Overview;
