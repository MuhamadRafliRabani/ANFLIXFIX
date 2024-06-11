"use client";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useUser } from "@/utility/global_state/Collection_State";
import axios from "axios";
import { useRouter } from "next/navigation";
import CardSkeleton from "@/app/global/cardSeleton";
import CardDetail from "@/app/Components/Card-Detail/CardDetail";

const Collection = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState();
  const user_email = useUser((state) => state.user);
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

  console.log(data);
  if (!user_email) {
    Router.back();
    return null;
  }

  return (
    <section className="flex justify-center items-center w-svw min-h-screen bg-black">
      {data.data?.status !== 400 ? (
        <div className="text-white font-semibold pt-14 h-fit">
          <h1 className="py-2 font-bold text-lg ps-2 hover:text-[#E50914]">
            Your Collection :
          </h1>
          {isLoading && <CardSkeleton cards={14} />}
          <div className="grid grid-cols-3 grid-rows-3 md:grid-cols-7 w-svw h-fit gap-2 ps-2 pe-2 md:pe-6">
            {data.map((item) => (
              <div
                key={item.anime_mal_id}
                className="w-fit h-fit flex flex-col justify-center items-center relative z-10"
              >
                <Link
                  href={`/detail-anime/${item.anime_mal_id}`}
                  className="mx-auto"
                  onMouseEnter={() => handleOpen(item.anime_mal_id)}
                  onMouseLeave={() => handleOpen(item.anime_mal_id)}
                >
                  <Image
                    src={item.anime_images}
                    alt={item.anime_title}
                    width={200}
                    height={330}
                    className="rounded-md"
                  />
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
        </div>
      ) : (
        <div className="flex justify-center items-center flex-col">
          <h1 className="uppercase text-2xl text-white font-bold">
            server sedang mati
          </h1>
          <div className="relative" id="anya-backdrop">
            <Image src={"/anya.png"} width={300} height={300} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Collection;
