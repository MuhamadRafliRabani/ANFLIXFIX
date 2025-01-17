"use client";
import { userSessions } from "@/libs/auth-session";
import { handleAddAnimeToLibrary } from "@/libs/handleAddAnimeToLibs";
import { useAddLibraryMutation } from "@/utility/Post";
import { BookmarkSimple } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const BtnAddAnimeHero = () => {
  const { user } = userSessions();
  const email = user?.email;
  const { mutate } = useAddLibraryMutation();

  const data = {
    mal_id: 44511,
    image: "https://cdn.myanimelist.net/images/anime/1806/126216.webp",
    title: "Chainsaw Man",
    year: 2022,
    score: 8.47,
    email,
  };

  return (
    <div class="mt-3 flex space-x-4 tracking-wide md:mt-5 md:tracking-normal">
      <Link
        href="/anime/detail/chainsaw man/44511"
        class="rounded-lg bg-yellow-400 px-3 py-2 text-[0.65rem] font-medium text-white shadow-md transition-all hover:bg-yellow-500 md:text-[0.81rem] md:text-black/80 md:hover:text-white"
      >
        <span className="pt-1">Learn More</span>
      </Link>
      <button
        onClick={(e) => handleAddAnimeToLibrary(e, "collections", data, mutate)}
        class="flex items-center justify-center gap-2 rounded-lg border border-white px-3 py-2 text-[0.65rem] font-medium transition-all md:text-[0.81rem]"
      >
        <span>
          <BookmarkSimple className="size-4 mix-blend-darken" />
        </span>
        <span>To Watch</span>
      </button>
    </div>
  );
};

export default BtnAddAnimeHero;
