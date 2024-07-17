import { handleColection } from "@/utility/func";
import { useCollecSucsess, useUser } from "@/utility/store/store";
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
  const { user } = useUser();
  const user_email = user?.email;
  const { setCollectSucsess } = useCollecSucsess();

  async function addCollect() {
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
      <Link href={`pages/detail-anime/${anime_mal_id}`}>
        <button className="bg-primary hidden md:flex md:px-4 md:py-2 md:mt-2 rounded-full text-base items-center gap-2 justify-center effect-btn ">
          <span>
            <Play size={14} />
          </span>{" "}
          Watch
        </button>
      </Link>
      {!user_email ? (
        <Link href={"/pages/Form/sign-in"}>
          <button className="border-white border btn hover:bg-transparent shadow-md btn1 ">
            <span>
              <Plus size={14} />
            </span>
            Add List
          </button>
        </Link>
      ) : (
        <button
          onClick={addCollect}
          className=" border-white border-2 btn active:shadow btn-"
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
