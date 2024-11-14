"use client";

import { userSessions } from "@/libs/auth-session";
import Link from "next/link";
import { useRouter } from "next/navigation";
const page = () => {
  const { user } = userSessions();

  return (
    <section className="flex h-svh flex-col items-center justify-center bg-black pt-20">
      <>
        <h1 className="text-3xl font-bold text-white">
          Selamat datang : {user.email}
        </h1>
        <div className="flex items-center gap-4">
          <Link
            href={"/pages/Dasboard/collec_Page"}
            className="bg-blue-400 px-4 py-2"
          >
            ke koleksi
          </Link>
          <button className="bg-blue-400 px-4 py-2">ke mana</button>
        </div>
      </>
    </section>
  );
};

export default page;
