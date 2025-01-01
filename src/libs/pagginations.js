"use client";
import { useState } from "react";

const Pagination = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Event Handlers
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Render Pagination Numbers
  const renderPages = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 || // Always show the first page
        i === totalPages || // Always show the last page
        (i >= currentPage - 1 && i <= currentPage + 1) // Show adjacent pages
      ) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`rounded px-3 py-1 ${
              currentPage === i ? "bg-orange-500 text-white" : "text-gray-300"
            }`}
          >
            {i}
          </button>,
        );
      } else if (
        (i === currentPage - 2 || i === currentPage + 2) &&
        pages[pages.length - 1] !== "..."
      ) {
        // Add ellipsis between ranges
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
      {/* Prev Button */}
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={`px-2 py-1 ${currentPage === 1 ? "text-gray-500" : "text-white"}`}
      >
        ←
      </button>

      {/* Pagination Numbers */}
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
