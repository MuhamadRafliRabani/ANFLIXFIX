"use client";
import { useUser } from "@/app/Collection_State";
import Link from "next/link";
import { useRouter } from "next/navigation";
const page = () => {
  const Router = useRouter();
  const user = useUser((state) => state.user);

  return (
    <div className="mt-20 flex flex-col justify-center items-center">
      {user ? (
        <>
          <h1 className="text-white text-3xl font-bold ">Selamat datang : {user?.email}</h1>
          <div className="flex gap-4 items-center">
            <Link href={"/MyDasboard/collec_Page"} className="bg-blue-400 px-4 py-2">
              ke koleksi
            </Link>
            <button className="bg-blue-400 px-4 py-2">ke mana</button>
          </div>
        </>
      ) : (
        Router.back()
      )}
    </div>
  );
};

export default page;
