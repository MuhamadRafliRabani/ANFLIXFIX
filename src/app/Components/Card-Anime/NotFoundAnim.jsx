"use client";
import { Cat } from "@phosphor-icons/react";

const NotFoundAnim = () => {
  return (
    <div className="flex justify-center items-center flex-col text-white font-bold text-xl h-36 w-svw">
      <Cat size={32} />
      <p>Anime Tidak Tersedia</p>
    </div>
  );
};

export default NotFoundAnim;
