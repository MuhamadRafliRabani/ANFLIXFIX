import Link from "next/link";
import DetailCard from "./DetailCard";
import NotFoundAnim from "./NotFoundAnim";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CardMain({ animeCM, title }) {
  return (
    <div className="mt-2 ">
      <h1 className="text-white font-bold text-base pt-1">{title}</h1>

      <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-7 w-svw h-fit gap-4 ps-2 pe-2 md:pe-8">
        {animeCM?.length === 0 ? (
          <NotFoundAnim />
        ) : (
          animeCM?.map((anime, index) => {
            return (
              <div key={index} className="w-full rounded-lg shadow Card mx-auto">
                <Link href={`/pages/detail-anime/${anime.mal_id}`}>
                  {anime.images?.jpg.image_url ? (
                    <Image width={140} height={200} src={anime.images?.jpg.image_url} className="rounded-md hover:scale-105 md:mt-4 z-10 w-auto h-auto main-transition" alt={anime.title} />
                  ) : (
                    <Skeleton width={140} height={200} className="rounded-md" />
                  )}
                </Link>
                <DetailCard anime={anime} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default CardMain;
