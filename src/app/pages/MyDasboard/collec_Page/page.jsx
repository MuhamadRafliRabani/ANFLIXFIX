"use client";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useUser } from "@/app/global/global_state/Collection_State";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import CardSkeleton from "@/app/global/cardSeleton";
import { Heart, Images, Play, Plus } from "@phosphor-icons/react";
import Button from "@/app/Components/compt/button";
import LinkBtn from "@/app/Components/compt/button";
import CardDetail from "@/app/Components/Card-Detail/CardDetail";

const Collection = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState();
  const user_email = useUser((state) => state.user?.email);
  const Router = useRouter();

  const HitDb = useCallback(async () => {
    try {
      const response = await axios.get(`/api/dataDb`, {
        params: { email: user_email },
      });
      console.log("API response data:", response.data);
      setData(response);
      localStorage.setItem(user_email, JSON.stringify(response));
    } catch (error) {
      console.log({ message: error.message });
    } finally {
      setIsLoading(false);
    }
  }, [user_email]);

  useEffect(() => {
    const local = localStorage.getItem(user_email);
    if (local) {
      console.log("Local storage data:", local);
      setData(JSON.parse(local));
      setIsLoading(false);
    } else {
      HitDb();
    }
  }, [user_email, HitDb]);

  const handleOpen = (anime_mal_id) => {
    setIsOpen(anime_mal_id);
  };

  console.log("Data state:", data);

  if (!user_email) {
    Router.back();
    return null;
  }

  return (
    <section className="text-white font-semibold pt-14 bg-black h-fit">
      <h1 className="py-2 font-bold text-lg ps-2 hover:text-[#E50914]">Your Collection :</h1>
      {isLoading ? (
        <CardSkeleton cards={14} />
      ) : data.data.length > 0 ? (
        <div className="grid grid-cols-3 grid-rows-3 md:grid-cols-7 w-svw h-fit gap-2 ps-2 pe-2 md:pe-6">
          {data.data.map((item) => (
            <div key={item.anime_mal_id} className="w-fit h-fit flex flex-col justify-center items-center relative z-10">
              <Link href={`/detail-anime/${item.anime_mal_id}`} className="mx-auto" onMouseEnter={() => handleOpen(item.anime_mal_id)} onMouseLeave={() => handleOpen(item.anime_mal_id)}>
                {item.anime_images ? <Image src={item.anime_images} alt={item.anime_title} width={200} height={330} className="rounded-md" /> : <Skeleton width={200} height={330} />}
              </Link>
              <p className="hover:text-[#E50914]">{item.anime_title}</p>
              <CardDetail
                anime_episodes={item.anime_episodes}
                anime_images={item.anime_images}
                anime_mal_id={item.anime_mal_id}
                anime_rating={item.anime_rating}
                anime_status={item.anime_status}
                anime_title={item.anime_title}
                anime_type={item.anime_type}
                isOpen={isOpen}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="block m-auto">
          Collection Tidak Ada <span className="block m-auto text-blue-700">click disini untuk menambahkan Collection</span>
        </p>
      )}
    </section>
  );
};

export default Collection;
