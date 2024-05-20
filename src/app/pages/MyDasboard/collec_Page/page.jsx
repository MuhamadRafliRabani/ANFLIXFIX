"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useUser } from "@/app/Collection_State";
import CardSkeleton from "@/app/global/cardSeleton";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Collection = () => {
  const [db, setdata] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const user_email = useUser((state) => state.user?.email);

  const HitDb = async () => {
    try {
      const response = await fetch(`/api/dataDb?email=${user_email}`);
      const db = await response?.json();
      setdata(db?.data);
      setIsLoading(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    HitDb();
  }, []);

  return (
    <section className="text-white font-semibold pt-14 bg-black">
      {isLoading && <CardSkeleton cards={8} />}
      <h1 className="py-2 font-bold text-lg ps-2 hover:text-[#E50914]">Your Collection :</h1>
      {db.length !== 0 ? (
        <div className="grid grid-cols-3 grid-rows-3 md:grid-cols-7 w-svw h-fit gap-2 ps-2 pe-2 md:pe-6">
          {db?.map((data) => (
            <div key={data.anime_mal_id} className="w-fit h-fit flex flex-col justify-center items-center">
              <Link href={`/detail-anime/${data.anime_mal_id}`} className="mx-auto">
                <Image src={data.anime_images || <Skeleton />} alt={data.anime_title} width={200} height={330} className="rounded-md" />
              </Link>
              <p className="hover:text-[#E50914]">{data.anime_title || <Skeleton />}</p>
            </div>
          ))}
        </div>
      ) : (
        <>
          <p className="block m-auto">
            Collection Tidak Ada <span className="block m-auto text-blue-700">click disini untuk menambahkan Collection</span>
          </p>
          <CardSkeleton cards={8} />
        </>
      )}
    </section>
  );
};

export default Collection;
