"use client";

import { useState } from "react";

const Pagination = ({ totalPages, onPageChange, pageNow }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      onPageChange(page); // Memanggil callback dengan nomor halaman
    }
  };

  const handleNext = () => {
    handlePageChange(currentPage + 1);
  };

  const handlePrev = () => {
    handlePageChange(currentPage - 1);
  };

  const renderPages = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 || // Halaman pertama
        i === totalPages || // Halaman terakhir
        (i >= currentPage - 1 && i <= currentPage + 1) // Halaman di sekitar halaman saat ini
      ) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`rounded px-3 py-1 ${
              currentPage === i && pageNow == i
                ? "bg-second_color text-white"
                : "bg-transparent text-gray-300"
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
      {/* Tombol Sebelumnya */}
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={`px-2 py-1 ${
          currentPage === 1 ? "text-gray-500" : "text-white"
        }`}
      >
        ←
      </button>
      {/* Render Angka Halaman */}
      {renderPages()}
      {/* Tombol Selanjutnya */}
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
