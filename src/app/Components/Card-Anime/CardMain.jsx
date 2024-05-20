import Link from "next/link";
import DetailCard from "./DetailCard";
import NotFoundAnim from "./NotFoundAnim";
import Image from "next/image";

function CardMain({ animeCM, title }) {
  return (
    <div className="mt-2 ">
      <h1 className="text-white font-bold text-base pt-1">{title}</h1>

      <div className="grid grid-cols-3 grid-rows-3 md:grid-cols-6 w-svw h-fit gap-4 ps-2 pe-2 md:pe-8">
        {animeCM?.length === 0 ? (
          <NotFoundAnim />
        ) : (
          animeCM?.map((anime) => {
            return (
              <div className="w-full rounded-lg shadow Card mx-auto">
                <Link href={`/pages/detail-anime/${anime.mal_id}`}>
                  <div href="#" className="h-fit w-[165] mt-4 mx-0.5 relative">
                    <Image width={165} height={260} src={anime.images.jpg.image_url} className="rounded-md hover:scale-105 md:mt-4 z-10 w-auto h-auto main-transition" alt={anime.title} />
                  </div>
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
