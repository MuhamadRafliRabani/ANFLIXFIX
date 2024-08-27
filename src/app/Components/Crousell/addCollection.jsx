import { useEffect } from "react";
import { handleColection } from "@/utility/func";
import { useCollecSucsess, useUser } from "@/utility/store/store";
import { Play, Plus } from "@phosphor-icons/react";
import Link from "next/link";
import toast from "react-hot-toast";

const AddCollection = ({
  anime_mal_id,
  anime_images,
  anime_title,
  anime_rating,
  anime_type,
  anime_status,
  anime_episodes,
}) => {
  const { user } = useUser();
  const user_email = user?.email;
  const { setCollectSucsess } = useCollecSucsess();
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
    <div className="justtify-center flex items-center gap-2">
      <Link href={`pages/detail-anime/${anime_mal_id}`}>
        <button className="effect-btn hidden items-center justify-center gap-2 rounded-full bg-primary text-base md:mt-2 md:flex md:px-4 md:py-2">
          <span>
            <Play size={14} />
          </span>{" "}
          Watch
        </button>
      </Link>
      {!user_email ? (
        <Link href={"/pages/auth/sign-up"}>
          <button className="btn btn1 border border-white shadow-md hover:bg-transparent">
            <span>
              <Plus size={14} />
            </span>
            Add List
          </button>
        </Link>
      ) : (
        <button
          onClick={addCollect}
          className="btn btn- border-2 border-white active:shadow"
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
