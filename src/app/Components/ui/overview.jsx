import DetailAnimeSkeleton from "../skeleton/detailAnimeSkeleton";

const Overview = ({ anime, isLoading, type }) => {
  if (isLoading) return <DetailAnimeSkeleton />;

  const handleCondition = (option1, option2) => {
    if (type === "anime") {
      return option1 || "N/A";
    } else if (type === "manga") {
      return option2 || "N/A";
    }
    return "N/A";
  };

  return (
    <div className="w-[100vw] max-w-screen-sm overflow-hidden">
      <div className="w-full">
        <h1 className="text-xl font-semibold text-white">Details</h1>
        <ul className="mt-2 flex items-center gap-2 text-sm text-text_color">
          <div className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="min-w-14">Type :</span>
              <span className="flex-1 overflow-auto whitespace-nowrap text-white text-opacity-60 hover:text-white">
                {anime?.type}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="min-w-14">
                {handleCondition("Episodes", "Rank")}:
              </span>
              <span className="flex-1 overflow-auto whitespace-nowrap text-white text-opacity-60 hover:text-white">
                {handleCondition(anime?.episodes, anime?.rank)}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="min-w-14">Genres :</span>
              <span className="max-w-[60%] flex-1 overflow-auto whitespace-nowrap text-white text-opacity-60 hover:text-white">
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
              <span className="min-w-14">Year :</span>
              <span className="flex-1 overflow-auto whitespace-nowrap text-white text-opacity-60 hover:text-white">
                {handleCondition(
                  type === "anime" ? anime?.year : "N/A",
                  type === "manga" ? anime?.published.prop?.from.year : "N/A",
                )}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="min-w-14">Status :</span>
              <span className="flex-1 overflow-auto whitespace-nowrap text-white text-opacity-60 hover:text-white">
                {anime?.status}
              </span>
            </li>
          </div>
          <div className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="min-w-14">
                {handleCondition("Season", "Members")} :
              </span>
              <span className="overflow-autow hitespace-nowrap flex-1 text-white text-opacity-60 hover:text-white">
                {handleCondition(anime?.season, anime?.members)}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="min-w-14">
                {handleCondition("Studios", "Chapters")}:
              </span>
              <span className="max-w-[45%] flex-1 overflow-auto whitespace-nowrap text-white text-opacity-60 hover:text-white">
                {handleCondition(
                  type === "anime" ? anime?.studios[0].name : "N/A",
                  type === "manga" ? anime?.chapters : "N/A",
                )}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="min-w-14">
                {handleCondition("Source", "Authors")} :{" "}
              </span>
              <span className="flex-1 overflow-auto whitespace-nowrap text-white text-opacity-60 hover:text-white">
                {handleCondition(
                  type === "anime" ? anime?.source : "N/A",
                  type === "manga" ? anime?.authors[0].name : "N/A",
                )}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="min-w-14">Rating :</span>
              <span className="flex-1 overflow-auto whitespace-nowrap text-white text-opacity-60 hover:text-white">
                {anime?.score}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="min-w-14">
                {handleCondition("Duration", "Volumes")}:
              </span>
              <span className="flex-1 overflow-auto whitespace-nowrap text-white text-opacity-60 hover:text-white">
                {handleCondition(anime?.duration, anime?.volumes)}
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
