import AddColectBtn from "./AddColect";

const DetailCardCrousell = ({ anime_images, anime_title, anime_mal_id, anime_episodes, anime_rating, anime_status, anime_type }) => {
  return (
    <div className="text-start md:text-wrap md:pt-3 md:flex md:flex-col md:justify-center md:items-center">
      <div href="/"></div>
      <div className="w-full flex gap-2 justify-between text-sm items-center">
        <p className="mb-3 font-semibold text-gray-500 md:mb-1 hover:text-[#E50914]  ">{anime_rating}</p>
        <div className="flex justify-center items-center gap-2">
          <AddColectBtn anime_mal_id={anime_mal_id} anime_images={anime_images} anime_title={anime_title} anime_rating={anime_rating} anime_type={anime_type} anime_status={anime_status} anime_episodes={anime_episodes} />
          <p className="mb-3 font-semibold md:mb-1 text-yellow-400  ">{anime_episodes}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailCardCrousell;
