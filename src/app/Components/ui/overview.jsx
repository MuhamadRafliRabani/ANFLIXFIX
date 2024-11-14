import { DetailOverview } from "@/data/detailOverview";

const Overview = ({ anime }) => {
  return (
    <div className="flex w-full flex-wrap items-center gap-4">
      <div className="">
        <h1 className="text-xl font-semibold text-white">Details</h1>
        <ul className="grid grid-cols-2 space-x-4 space-y-2 text-sm text-text_color">
          {DetailOverview.map((item, i) => (
            <li key={i} className="flex items-center gap-4">
              <span className="flex-1">{item.item} :</span>{" "}
              <span className="text-white text-opacity-60 hover:text-white">
                {anime?.type}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-2">
        <h1 className="text-xl font-semibold text-white">Description</h1>
        <p className="text-sm text-white text-opacity-60">{anime?.synopsis}</p>
      </div>
    </div>
  );
};

export default Overview;
