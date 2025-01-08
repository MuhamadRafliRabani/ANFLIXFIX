"use client";
import { useRouter } from "next/navigation";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { useRef } from "react";

const Search = () => {
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
    <form
      className="h-[80vh] max-h-9 w-[50vw] max-w-sm font-extralight"
      onSubmit={handleSubmit}
    >
      <div className="relative h-full w-full">
        <input
          ref={inputRef}
          type="search"
          className="h-full w-full rounded-md bg-white bg-opacity-10 ps-10 pt-1 text-white outline-none ring-[0.5px] ring-white placeholder:font-extralight placeholder:text-white"
          placeholder="Search"
          required
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit(e);
            }
          }}
        />
        <button
          type="button"
          className="absolute left-2 top-2 z-20"
          onClick={handleSubmit}
        >
          <MagnifyingGlass size={16} className="z-50 size-6" />
        </button>
      </div>
    </form>
  );
};

export default Search;
