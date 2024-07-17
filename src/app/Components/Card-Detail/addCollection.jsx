import { handleColection } from "@/utility/func";

import { Plus } from "@phosphor-icons/react";
import Link from "next/link";
import { useCollecSucsess, useUser } from "@/utility/store/store";

const AddCollection = ({
  anime_images,
  anime_title,
  anime_mal_id,
  anime_episodes,
  anime_rating,
  anime_status,
  anime_type,
}) => {
  const { user } = useUser();
  const { setCollectSucsess } = useCollecSucsess();

  const SendCollect = async () => {
    const data = {
      anime_images,
      user_email: user?.email,
      anime_title,
      anime_mal_id,
      anime_episodes,
      anime_rating,
      anime_status,
      anime_type,
    };

    try {
      const handle = await handleColection(data);
      const result = await handle;
      setCollectSucsess(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {user ? (
        <button
          onClick={SendCollect}
          className="border-white rounded-full border-2 hover:bg-slate-300 hover:text-[#E50914] w-8 h-8 p-0.5 flex justify-center items-center"
        >
          <Plus size={16} />
        </button>
      ) : (
        <Link
          href={"/pages/Form/Sign-up"}
          className="border-white rounded-full border-2 hover:bg-slate-300 hover:text-[#E50914] w-8 h-8 p-0.5 flex justify-center items-center"
        >
          <Plus size={16} />
        </Link>
      )}
    </>
  );
};

export default AddCollection;
