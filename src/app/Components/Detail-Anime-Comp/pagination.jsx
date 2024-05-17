const Pagination = ({ HandleNextPage, HandlePrevPage, page, lastpage }) => {
  return (
    <div className="flex justify-center gap-3 items-center w-full py-4 cursor-pointer">
      <div onClick={HandlePrevPage} className="effect-btn">
        <p>prev</p>
      </div>
      <div>
        <p>
          {page} dari {lastpage}
        </p>
      </div>
      <div onClick={HandleNextPage} className="effect-btn">
        <p>next</p>
      </div>
    </div>
  );
};

export default Pagination;
