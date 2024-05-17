"use client";
import { useUser } from "@/app/Collection_State";
import { handleColection } from "@/app/global/global-func/func";
import { Play, Plus } from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";

const AddCollection = async ({ anime_mal_id, anime_images, anime_title }) => {
  const user = useUser((state) => state.user);
  const user_email = user?.email;
  const [response, setResponse] = useState();

  async function addCollect(anime_mal_id, user_email, anime_images, anime_title) {
    const data = { anime_mal_id, user_email, anime_images, anime_title };
    try {
      const Response = await handleColection(data);
      setResponse(Response);
    } catch (error) {
      return console.log("error", error);
    }
  }

  return (
    <div className="flex justtify-center items-center gap-2">
      <Link href={`pages/detail-anime/${anime_mal_id}`}>
        <button className="bg-[#E50914] hidden md:flex md:px-4 md:py-2 md:mt-2 rounded-full text-base hover:bg-[#FFFFFF] items-center gap-2 justify-center effect-btn disabled:bg-slate-300 disabled:cursor-not-allowed">
          <span>
            <Play size={14} />
          </span>{" "}
          Watch
        </button>
      </Link>
      {!user_email ? (
        <Link href={"/pages/Form/sign-in"}>
          <button
            onClick={addCollect}
            className="bg-black bg-opacity-80 hidden md:flex md:px-4 md:py-2 md:mt-2 rounded-full text-base hover:bg-[#FFFFFF] items-center gap-2 justify-center effect-btn disabled:bg-slate-300 disabled:cursor-not-allowed"
          >
            <span>
              <Plus size={14} />
            </span>
            Add List
          </button>
        </Link>
      ) : (
        <button
          onClick={addCollect}
          className="bg-black bg-opacity-80 hidden md:flex md:px-4 md:py-2 md:mt-2 rounded-full text-base hover:bg-[#FFFFFF] items-center gap-2 justify-center effect-btn disabled:bg-slate-300 disabled:cursor-not-allowed"
        >
          <span>
            <Plus size={14} />
          </span>{" "}
          Add List
        </button>
      )}
    </div>
  );
};

export default AddCollection;
