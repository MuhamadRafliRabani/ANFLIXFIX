import { handleColection } from "@/utility/func";
import { Plus } from "@phosphor-icons/react";
import Link from "next/link";
import toast from "react-hot-toast";
import { userSessions } from "@/libs/auth-session";

const AddCollection = ({
  anime_images,
  anime_title,
  anime_mal_id,
  anime_episodes,
  anime_rating,
  anime_status,
  anime_type,
}) => {
  const { user } = userSessions();
  const { mutate, data, isError, isSuccess } = handleColection();

  const sendCollect = async () => {
    if (!user?.email) {
      return;
    }

    const data = {
      anime_images,
      user_email: user.email,
      anime_title,
      anime_mal_id,
      anime_episodes,
      anime_rating,
      anime_status,
      anime_type,
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
      {user ? (
        <button
          onClick={sendCollect}
          className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white p-0.5 hover:bg-slate-300 hover:text-[#E50914]"
        >
          <Plus size={16} />
        </button>
      ) : (
        <Link
          href="/pages/Form/Sign-up"
          className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white p-0.5 hover:bg-slate-300 hover:text-[#E50914]"
        >
          <Plus size={16} />
        </Link>
      )}
    </>
  );
};

export default AddCollection;
