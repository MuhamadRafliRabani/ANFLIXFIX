"use client";

import { handleColection } from "@/app/global/global-func/func";
import { useCollecSucsess, useUser } from "@/utility/store/store";
import { Heart, Eye } from "@phosphor-icons/react";
import Link from "next/link";
import toast from "react-hot-toast";

const AddColectBtn = ({
  anime_mal_id,
  anime_images,
  anime_title,
  anime_rating,
  anime_type,
  anime_status,
  anime_episodes,
}) => {
  const { user } = useUser();
  const { setSucsess } = useCollecSucsess();
  const user_email = user?.email;
  const { mutate, data, isError, isSuccess } = handleColection();

  const addCollect = async () => {
    const data = {
      anime_mal_id,
      user_email,
      anime_images,
      anime_title,
      anime_rating,
      anime_type,
      anime_status,
      anime_episodes,
    };

    mutate(data);
  };

  if (isError) {
    toast.error("gagal menambahkan anime");
  }

  if (isSuccess) {
    toast.success("succes menambahkan anime");
  }

  return (
    <>
      {!user_email ? (
        <Link
          href="/pages/Form/Sign-in"
          className="mb-3 font-light text-gray-500 md:mb-1 hover:text-[#E50914]"
        >
          <Heart size={16} />
        </Link>
      ) : (
        <button
          onClick={addCollect}
          className="mb-3 font-light text-gray-500 md:mb-1 hover:text-[#E50914]"
        >
          <Heart size={16} />
        </button>
      )}
      <button className="mb-3 font-light text-gray-500 md:mb-1 hover:text-[#E50914]">
        <Eye size={16} />
      </button>
    </>
  );
};

export default AddColectBtn;
