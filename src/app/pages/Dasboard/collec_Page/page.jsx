"use client";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useUser } from "@/utility/store/store";
import { Smiley } from "@phosphor-icons/react";
import CardDetail from "@/app/Components/Card-Detail/CardDetail";
import { useQuery } from "@tanstack/react-query";
import { HitDb } from "@/utility/getDataDb";

const Collection = () => {
  const [isOpen, setIsOpen] = useState(null);
  const { user, setUser } = useUser();
  const router = useRouter();

  useEffect(() => {
    const storage = localStorage.getItem("user");
    if (storage) {
      setUser(JSON.parse(storage));
    }
  }, []);

  const { data, isLoading, isError } = HitDb(user.email);

  console.log(data);

  if (!user) {
    router.push("/auth");
    return null;
  }

  return (
    <section className="text-white font-semibold pt-14 bg-black h-fit">
      <h1 className="py-2 font-bold text-lg ps-2 hover:text-[#E50914]">
        Your Collection :
      </h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : data.data.length === 0 ? (
        <div className="flex w-svw h-svh -mt-20 items-center justify-center flex-col">
          <Smiley size={40} weight="thin" />
          <p>Collection Tidak Ada</p>
          <Link href="/" className="text-blue-700">
            Click disini untuk menambahkan Collection
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-3 grid-rows-3 md:grid-cols-7 w-svw h-fit gap-2 ps-2 pe-2 md:pe-6">
          {data.data.map((item) => (
            <div
              key={item.anime_mal_id}
              className="w-fit h-fit flex flex-col justify-center items-center relative z-10"
            >
              <Link
                href={`/detail-anime/${item.anime_mal_id}`}
                className="mx-auto"
                onMouseEnter={() => setIsOpen(item.anime_mal_id)}
                onMouseLeave={() => setIsOpen(null)}
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
                isOpen={isOpen === item.anime_mal_id}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Collection;
