"use client";
import { useState } from "react";

const Pagination = ({ totalPages, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      onPageChange(page); // Return the page number via callback
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const renderPages = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 || // First page
        i === totalPages || // Last page
        (i >= currentPage - 1 && i <= currentPage + 1) // Adjacent pages
      ) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`rounded px-3 py-1 ${
              currentPage === i
                ? "rounded-md bg-second_color text-white"
                : "text-gray-300"
            }`}
          >
            {i}
          </button>,
        );
      } else if (
        (i === currentPage - 2 || i === currentPage + 2) &&
        pages[pages.length - 1] !== "..."
      ) {
        pages.push(
          <span key={i} className="px-2 text-gray-400">
            ...
          </span>,
        );
      }
    }
    return pages;
  };

  return (
    <div className="flex items-center space-x-2">
      {/* Previous Button */}
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={`px-2 py-1 ${currentPage === 1 ? "text-gray-500" : "text-white"}`}
      >
        ←
      </button>
      {/* Pages */}
      {renderPages()}
      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`px-2 py-1 ${
          currentPage === totalPages ? "text-gray-500" : "text-white"
        }`}
      >
        →
      </button>
    </div>
  );
};

export default Pagination;
