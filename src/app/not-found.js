"use client";

import { SmileyXEyes } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const HandleRefres = (e) => {
    e.preventDefault;
    router.push("/");
  };

  return (
    <div className="w-full text-white flex justify-center items-center flex-col h-svh">
      <SmileyXEyes size={80} />
      <h1 className="text-8xl font-extrabold">4 0 4</h1>
      <p>Halaman yang kamu cari tidak tersedia</p>
      <button onClick={HandleRefres} className="bg-slate-400 rounded-lg px-4 py-2">
        Home
      </button>
    </div>
  );
};
export default Page;
