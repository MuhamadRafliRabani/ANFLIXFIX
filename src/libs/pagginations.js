"use client";
import { useState } from "react";

export const Pagginations = () => {
  const [page, setPage] = useState(1);

  const handleSeeMore = () => {
    setPage((prev) => prev + 1);
  };
  return { page, handleSeeMore };
};
