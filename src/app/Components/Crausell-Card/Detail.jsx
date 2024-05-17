import AddColectBtn from "./AddColect";

const DetailCardCrousell = ({ year, scores, anime_mal_id, anime_images, anime_title }) => {
  return (
    <div className="text-start md:text-wrap md:pt-3 md:flex md:flex-col md:justify-center md:items-center">
      <div href="/">
        <h5 className="mb-2 text-base text-white w-full font-medium hover:text-[#E50914] hover:font-semibold">{anime_title}</h5>
      </div>
      <div className="w-full flex gap-2 justify-between text-sm items-center">
        <p className="mb-3 font-semibold text-gray-500 md:mb-1 hover:text-[#E50914]  ">{year}</p>
        <div className="flex justify-center items-center gap-2">
          <AddColectBtn anime_mal_id={anime_mal_id} anime_images={anime_images} anime_title={anime_title} />
          <p className="mb-3 font-semibold md:mb-1 text-yellow-400  ">{scores}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailCardCrousell;
