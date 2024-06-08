import { handleColection } from "@/utility/func";
import {
  useCollecSucsess,
  useUser,
} from "@/utility/global_state/Collection_State";
import { Play, Plus } from "@phosphor-icons/react";
import Link from "next/link";

const AddCollection = async ({
  anime_mal_id,
  anime_images,
  anime_title,
  anime_rating,
  anime_type,
  anime_status,
  anime_episodes,
}) => {
  const user = useUser((state) => state.user);
  const user_email = user?.email;
  const setCollectSucsess = useCollecSucsess(
    (state) => state.setCollectSucsess
  );

  async function addCollect() {
    console.log(
      anime_mal_id,
      user_email,
      anime_images,
      anime_title,
      anime_rating,
      anime_type,
      anime_status,
      anime_episodes
    );
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
    try {
      const Response = await handleColection(data);
      const result = await Response.json();
      setCollectSucsess(result);
    } catch (error) {
      return console.log("error", error);
    }
  }

  return (
    <div className="flex justtify-center items-center gap-2">
      <Link href={`pages/Detail-anime/${anime_mal_id}`}>
        <button className="bg-[#E50914] hidden md:flex md:px-4 md:py-2 md:mt-2 rounded-full text-base hover:bg-[#FFFFFF] items-center gap-2 justify-center effect-btn ">
          <span>
            <Play size={14} />
          </span>{" "}
          Watch
        </button>
      </Link>
      {!user_email ? (
        <Link href={"/pages/Form/sign-in"}>
          <button className="bg-black bg-opacity-80 hidden md:flex md:px-4 md:py-2 md:mt-2 rounded-full text-base hover:bg-[#FFFFFF] items-center gap-2 justify-center effect-btn shadow-md ">
            <span>
              <Plus size={14} />
            </span>
            Add List
          </button>
        </Link>
      ) : (
        <button
          onClick={addCollect}
          className="bg-black bg-opacity-80 hidden md:flex md:px-4 md:py-2 md:mt-2 rounded-full text-base hover:bg-[#FFFFFF] items-center gap-2 justify-center effect-btn  active:shadow"
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
