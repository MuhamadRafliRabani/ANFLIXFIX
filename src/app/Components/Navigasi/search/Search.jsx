"use client";
import { useRouter } from "next/navigation";
import { MagnifyingGlass, SignOut, User } from "@phosphor-icons/react/dist/ssr";
import { useRef } from "react";
import { userSessions } from "@/libs/auth-session";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";

const Search = () => {
  const { user } = userSessions();
  const router = useRouter();
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const keyword = inputRef.current?.value?.trim();

    if (!keyword) return;

    router.push(`/anime/catalog/${encodeURI(keyword)}`);
    inputRef.current.value = "";
  };

  return (
    <div className="flex items-center gap-3">
      <form
        className="flex h-[80vh] max-h-9 w-[55vw] max-w-sm font-extralight md:w-[100vw] md:max-w-xl"
        onSubmit={handleSubmit}
      >
        <div className="relative mt-[1px] flex h-full w-full items-center justify-between">
          <input
            ref={inputRef}
            type="search"
            className="h-full w-full rounded-bl-md rounded-tl-md bg-white bg-opacity-10 ps-2.5 text-white outline-none ring-[0.5px] ring-white placeholder:font-extralight placeholder:text-white"
            placeholder="Search"
            required
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit(e);
              }
            }}
          />
        </div>
        <button
          type="button"
          className="h-[38px] rounded-br-md rounded-tr-md bg-yellow-400 px-2 md:bg-white/30"
          onClick={handleSubmit}
        >
          <MagnifyingGlass size={16} className="z-50 size-6" />
        </button>
      </form>
      <div className="">
        {user ? (
          <button onClick={() => signIn()}>
            <User className="size-6 md:hidden" />
          </button>
        ) : (
          <button onClick={() => signOut()}>
            <SignOut className="size-6 md:hidden" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Search;

// min-w-60 text-base md:flex md:items-center md:justify-evenly md:gap-2
