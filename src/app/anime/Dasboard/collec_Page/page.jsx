"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Smiley } from "@phosphor-icons/react";

import { HitDb } from "@/utility/getDataDb";
import { userSessions } from "@/libs/auth-session";

const Collection = () => {
  const [isOpen, setIsOpen] = useState(null);
  const { user } = userSessions();
  const router = useRouter();

  const { data, isLoading, isError } = HitDb(user.email);

  return (
    <section className="h-fit bg-black pt-14 font-semibold text-white">
      <h1 className="py-2 ps-2 text-lg font-bold hover:text-[#E50914]">
        Your Collection :
      </h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : data.data.length === 0 ? (
        <div className="-mt-20 flex h-svh w-svw flex-col items-center justify-center">
          <Smiley size={40} weight="thin" />
          <p>Collection Tidak Ada</p>
          <Link href="/" className="text-blue-700">
            Click disini untuk menambahkan Collection
          </Link>
        </div>
      ) : (
        <div className="grid h-fit w-svw grid-cols-3 grid-rows-3 gap-2 pe-2 ps-2 md:grid-cols-7 md:pe-6">
          {data.data.map((item) => (
            <div
              key={item.anime_mal_id}
              className="relative z-10 flex h-fit w-fit flex-col items-center justify-center"
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
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Collection;
