import LoadingSkeleton from "../cardSkeleton";
import OverviewSkeleton from "../skeleton/overviewSkeleton";
import TitleHead from "./titleHead";
import Card from "./cardAnime";
import Link from "next/link";
import { formatDate } from "@/libs/date";

const Overview = ({
  anime,
  isLoading,
  type,
  rekomendations,
  rekomendationsLoading,
}) => {
  if (isLoading) return <OverviewSkeleton />;

  const getAnimeDetail = (animeData, mangaData) =>
    type === "anime" ? animeData || "N/A" : mangaData || "N/A";

  const generateOverview = () => {
    if (type === "people") {
      return [
        { label: "Name", value: anime?.name },
        { label: "Given Name", value: anime?.given_name },
        { label: "Family Name", value: anime?.family_name },
        {
          label: "Alternate Names",
          value: anime?.alternate_names?.join(", ") || "N/A",
        },
        { label: "Birthday", value: formatDate(anime?.birthday) },
        { label: "Favorites", value: anime?.favorites },
        { label: "Website", value: anime?.website_url || "N/A" },
      ];
    }

    return [
      { label: "Type", value: anime?.type },
      {
        label: getAnimeDetail("Episodes", "Rank"),
        value: getAnimeDetail(anime?.episodes, anime?.rank),
      },
      {
        label: "Genres",
        value: anime?.genres?.map((genre) => genre.name).join(", ") || "N/A",
      },
      {
        label: "Year",
        value: getAnimeDetail(anime?.year, anime?.published?.prop?.from?.year),
      },
      { label: "Status", value: anime?.status },
      {
        label: getAnimeDetail("Season", "Members"),
        value: getAnimeDetail(anime?.season, anime?.members),
      },
      {
        label: getAnimeDetail("Studios", "Chapters"),
        value: getAnimeDetail(anime?.studios?.[0]?.name, anime?.chapters),
      },
      {
        label: getAnimeDetail("Source", "Authors"),
        value: getAnimeDetail(anime?.source, anime?.authors?.[0]?.name),
      },
      { label: "Rating", value: anime?.score },
      {
        label: getAnimeDetail("Duration", "Volumes"),
        value: getAnimeDetail(anime?.duration, anime?.volumes),
      },
    ];
  };

  const renderRekomendations = () => {
    if (rekomendationsLoading) return <LoadingSkeleton crousell length={8} />;

    const datas = type === "people" ? rekomendations : rekomendations?.data;
    if (!datas?.length)
      return (
        <p className="grid min-h-44 place-items-center text-center text-white md:min-h-72">
          No recommendations available
        </p>
      );

    return datas.map((item, i) => {
      const entry = type === "people" ? item.anime : item?.entry;
      return (
        <div
          className="-ms-1 h-fit w-fit flex-shrink-0 shadow-lg md:ms-0"
          key={i}
        >
          <Card
            mal_id={entry?.mal_id}
            image={entry?.images?.jpg?.large_image_url}
            title={entry?.title}
            type="anime"
          />
        </div>
      );
    });
  };

  return (
    <div className="flex w-full max-w-sm flex-wrap gap-4 pb-2 md:max-w-full md:flex-nowrap md:pb-4">
      {/* Anime Details Section */}
      <div className="w-full flex-1 px-1 md:w-[20%] md:flex-none">
        <div className="md:ps-2">
          <TitleHead header="Details" />
        </div>
        <ul className="my-2 space-y-2 text-sm text-white text-opacity-75 md:text-base">
          {generateOverview().map((item, i) => (
            <AnimeDetailItem key={i} label={item.label} value={item.value} />
          ))}
        </ul>
      </div>

      {/* Description & Recommendations */}
      <div className="w-full flex-1 space-y-2 px-1 pe-1 md:w-[70%] md:px-0">
        <TitleHead header="Description" />
        <p className="text-sm text-white text-opacity-75 md:text-base">
          {anime?.synopsis || anime?.about || "No description available"}
        </p>

        <div className="-ms-2 w-screen space-y-2 text-base font-medium text-white md:ms-0 md:w-full">
          <TitleHead header="Recommendations" />
          <div className="flex w-full flex-wrap justify-center gap-3 md:grid md:grid-cols-[repeat(auto-fit,minmax(120px,1fr))] md:gap-x-6 md:gap-y-4 md:pe-[1rem]">
            {renderRekomendations()}
          </div>
        </div>
      </div>
    </div>
  );
};

// Komponen Kecil untuk Detail Anime
const AnimeDetailItem = ({ label, value }) => (
  <li className="flex items-center gap-2 px-2 py-1 odd:bg-white/10 even:bg-white/5 md:py-0.5 md:odd:bg-transparent md:even:bg-transparent">
    <span className="min-w-14 md:min-w-20">{label}</span>
    <span className="flex-1 overflow-auto whitespace-nowrap text-[0.95rem] text-white">
      {value || "N/A"}
    </span>
  </li>
);

export default Overview;
