const DetailAnimeTable = ({ dataAnime }) => {
  return (
    <table className="w-full font-medium ">
      <tbody>
        <tr className="flex gap-1 w-full m-1">
          <td className="bg-slate-200 border-slate-50 w-[30%] px-2 py-1 ">Studio</td>
          <td className="bg-slate-100 font-light border-slate-50 w-[70%] px-2 flex items-center">
            {dataAnime.studios.map((studio, index) => (
              <p key={index}>{studio.name}</p>
            ))}
          </td>
        </tr>
        <tr className="flex gap-1 w-full m-1">
          <td className="bg-slate-200 border-slate-50 w-[30%] px-2 py-1 ">Genre</td>
          <td className="bg-slate-100 font-light border-slate-50 w-[70%] px-2 flex items-center gap-1 ">
            {dataAnime.genres.map((genre, index) => (
              <p key={index}>{genre.name}</p>
            ))}
          </td>
        </tr>
        <tr className="flex gap-1 w-full m-1">
          <td className="bg-slate-200 border-slate-50 w-[30%] px-2 py-1 ">Episode</td>
          <td className="bg-slate-100 font-light border-slate-50 w-[70%] px-2 flex items-center">{dataAnime.episodes}</td>
        </tr>
        <tr className="flex gap-1 w-full m-1">
          <td className="bg-slate-200 border-slate-50 w-[30%] px-2 py-1 ">Rating</td>
          <td className="bg-slate-100 font-light border-slate-50 w-[70%] px-2 flex items-center">{dataAnime.rating}</td>
        </tr>
        <tr className="flex gap-1 w-full m-1">
          <td className="bg-slate-200 border-slate-50 w-[30%] px-2 py-1 ">Sumber</td>
          <td className="bg-slate-100 font-light border-slate-50 w-[70%] px-2 flex items-center">{dataAnime.source}</td>
        </tr>
        <tr className="flex gap-1 w-full m-1">
          <td className="bg-slate-200 border-slate-50 w-[30%] px-2 py-1 ">Year & Season</td>
          <td className="bg-slate-100 font-light border-slate-50 w-[70%] px-2 flex items-center">
            {dataAnime.year} | {dataAnime.season}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default DetailAnimeTable;
