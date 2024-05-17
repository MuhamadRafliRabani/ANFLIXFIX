"use client";

import { useUser } from "@/app/Collection_State";
import { handleColection } from "@/app/global/global-func/func";
import { Heart, Eye } from "@phosphor-icons/react";
import Link from "next/link";

const AddColectBtn = async ({ anime_mal_id, anime_images, anime_title }) => {
  const user = useUser((state) => state.user);
  const user_email = user?.email;
  async function addCollect(anime_mal_id, user_email, anime_images, anime_title) {
    const data = { anime_mal_id, user_email, anime_images, anime_title };
    try {
      const Response = await handleColection(data);
      const result = Response;
    } catch (error) {
      return console.log("error", error);
    }
  }

  return (
    <>
      {!user_email ? (
        <Link href={"/form/sign-in"} className={`mb-3 font-light text-gray-500 md:mb-1 hover:text-[#E50914] `}>
          <Heart size={16} />
        </Link>
      ) : (
        <button onClick={addCollect} className={`mb-3 font-light text-gray-500 md:mb-1 hover:text-[#E50914] `}>
          <Heart size={16} />
        </button>
      )}
      <button className="mb-3 font-light text-gray-500 md:mb-1 hover:text-[#E50914]  ">
        <Eye size={16} />
      </button>
    </>
  );
};

export default AddColectBtn;
