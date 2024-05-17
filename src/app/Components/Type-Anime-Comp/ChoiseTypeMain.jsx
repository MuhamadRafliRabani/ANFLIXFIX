"use client";
import { FilmReel, FilmStrip, MonitorPlay } from "@phosphor-icons/react";
import Nav from "@/app/Components/Child-Comp/Nav";

const ChoiseTypeMain = ({ onclickType }) => {
  return (
    <div className="container text-white w-full mb-2 ">
      <div className="flex justify-around items-center flex-wrap border-b w-full gap-4 pb-2">
        <div className=" cursor-pointer" onClick={() => onclickType("Semua")}>
          <Nav icon={<FilmReel size={32} />} text={"Semua"} />
        </div>
        <div className=" cursor-pointer" onClick={() => onclickType("Tv")}>
          <Nav icon={<MonitorPlay size={32} />} text={"Tv"} />
        </div>
        <div className=" cursor-pointer" onClick={() => onclickType("Movie")}>
          <Nav icon={<FilmReel size={32} />} text={"Movie"} />
        </div>
        <div className=" cursor-pointer" onClick={() => onclickType("Ova")}>
          <Nav icon={<FilmStrip size={32} />} text={"Ova"} />
        </div>
      </div>
    </div>
  );
};

export default ChoiseTypeMain;
