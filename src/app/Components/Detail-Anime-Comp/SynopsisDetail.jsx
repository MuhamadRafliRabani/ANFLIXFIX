const SynopsisDetail = ({ dataAnime }) => {
  return (
    <div className="text-white font-semibold md:w-[80%] px-2 md:mb-12">
      <h1 className="text-xl font-bold">Synopsis</h1>
      <p className="leading-relaxed text-slate-400 text-base md:pt-2">{dataAnime.synopsis}</p>
    </div>
  );
};

export default SynopsisDetail;
