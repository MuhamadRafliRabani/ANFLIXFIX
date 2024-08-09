const HeaderDetail = ({ title_japanese, status, title }) => {
  return (
    <div className="flex justify-center items-center flex-col w-full text-center px-0.5 text-white md:mb-6">
      <h1 className="text-2xl font-bold leading-snug md:mt-8 md:mb-2">{title}</h1>
      <span className="text-xs my-2">
        {title_japanese} | {status}
      </span>
    </div>
  );
};

export default HeaderDetail;
