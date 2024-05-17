"use client";

import { useUser } from "@/app/Collection_State";
import { handleColection } from "@/app/global/global-func/func";

const { Plus } = require("@phosphor-icons/react");

const AddCollection = ({ anime_mal_id, anime_images, anime_title }) => {
  const user = useUser((state) => state.user);

  const user_email = user?.email;
  return (
    <button onclick={() => handleColection(anime_mal_id, user_email, anime_images, anime_title)}>
      <Plus className="h-9 w-8 absolute top-1 right-1 text-yellow z-40" />
    </button>
  );
};

export default AddCollection;
