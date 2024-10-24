"use client";
import { useState } from "react";

export const Pagginations = () => {
  const [seeAnime, setSeeAnime] = useState(18);

  const handleSeeMore = () => {
    setSeeAnime(seeAnime + 16);
  };
  return { seeAnime, handleSeeMore };
};
