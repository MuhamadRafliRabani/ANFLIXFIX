import LoadingSkeleton from "../cardSkeleton";
import Guide from "../guide/guide";
import Card from "./cardAnime";
import { FetchAnime } from "@/utility/Api";

const Relations = ({ relations, score, idAnime }) => {
  const anime = relations?.flatMap((relation) => relation.entry) || [];

  const { data } = FetchAnime(`/anime/${idAnime}/pictures`);

  return (
    <div className="">
      <h3 className="-mt-2 w-full pb-2 text-xl font-bold tracking-wide text-white">
        Chronology
      </h3>
      <div className="relative w-full overflow-hidden">
        <Guide message="← Slide →" />
        <div className="scrollbar-hide flex w-full gap-4 overflow-auto">
          {relations ? (
            anime.map((item, i) => (
              <div
                key={i}
                className="relative w-[113px] min-w-0 flex-shrink-0 flex-grow-0 md:w-[140px]"
              >
                <Card
                  idAnime={idAnime}
                  image={
                    data?.data[i]?.jpg.large_image_url ||
                    data?.data[i]?.webp.large_image_url
                  }
                  title={item.name}
                  year={item.type}
                  score={score}
                  url={item.url}
                />
              </div>
            ))
          ) : (
            <LoadingSkeleton crousell length={5} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Relations;
