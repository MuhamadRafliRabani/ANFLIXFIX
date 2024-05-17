const HeaderDetail = ({ dataAnime }) => {
  return (
    <div className="flex justify-center items-center flex-col w-full m-0.5 text-center text-white md:mb-6">
      <h1 className="text-2xl font-bold md:mt-8 md:mb-2">{dataAnime.title}</h1>
      <span>
        {dataAnime.title_japanese} | {dataAnime.status}
      </span>
    </div>
  );
};

export default HeaderDetail;
