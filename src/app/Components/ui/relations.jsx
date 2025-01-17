import { FetchAnime } from "@/utility/Get";
import Guide from "../guide/guide";
import Card from "./cardAnime";

const Relations = ({ relations, score, idAnime, type }) => {
  const anime =
    type == "people"
      ? relations
      : relations?.flatMap((relation) => relation.entry) || [];

  const { data } = FetchAnime(`/${type}/${idAnime}/pictures`);

  return (
    <div className="">
      <h3 className="-mt-2 w-full pb-2 text-xl font-bold tracking-wide text-white">
        Chronology
      </h3>
      <div className="relative w-full overflow-hidden">
        <Guide message="← Slide →" />
        <div className="scrollbar-hide flex w-full gap-4 overflow-auto">
          {relations?.length != 0 ? (
            anime.map((item, i) => (
              <div
                key={i}
                className="relative w-[113px] min-w-0 flex-shrink-0 flex-grow-0 md:w-[140px]"
              >
                <Card
                  idAnime={idAnime}
                  image={
                    type == "people"
                      ? item?.anime.images.jpg.large_image_url
                      : data?.data[i]?.jpg.large_image_url ||
                        data?.data[i]?.webp.large_image_url
                  }
                  title={type == "people" ? item?.anime.title : item.name}
                  year={type == "people" ? item.position : item.type}
                  score={score}
                  url={item.url}
                />
              </div>
            ))
          ) : (
            <h3 className="w-full pb-2 text-center tracking-wide text-white">
              No Relations
            </h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default Relations;
