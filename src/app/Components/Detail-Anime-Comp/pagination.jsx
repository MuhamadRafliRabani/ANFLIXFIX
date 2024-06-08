const Pagination = ({ HandleNextPage, HandlePrevPage, page, lastpage }) => {
  return (
    <div className="flex justify-center gap-3 items-center w-full py-4 cursor-pointer">
      <button
        onClick={HandlePrevPage}
        className="effect-btn bg-[#E50914] px-4 py-2 rounded-md flex justify-center items-center"
      >
        prev
      </button>
      <div>
        <p>
          {page} dari {lastpage}
        </p>
      </div>
      <button
        onClick={HandleNextPage}
        className="effect-btn bg-[#E50914] px-4 py-2 rounded-md flex justify-center items-center"
      >
        next
      </button>
    </div>
  );
};

export default Pagination;
