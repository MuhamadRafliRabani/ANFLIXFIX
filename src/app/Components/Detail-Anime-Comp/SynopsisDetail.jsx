const SynopsisDetail = ({ synopsis }) => {
  return (
    <div className="text-white font-normal mb-2 md:w-[80%] px-2 md:px-0 md:mb-12">
      <h1 className="text-lg font-bold text-[#E50914] md:text-2xl">
        <span className="">Syno</span>psis
      </h1>
      <p className="leading-relaxed md:pt-2 text-sm md:text-base">{synopsis}</p>
    </div>
  );
};

export default SynopsisDetail;
