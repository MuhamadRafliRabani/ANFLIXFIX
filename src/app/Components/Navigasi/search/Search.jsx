"use client";
import { useRef } from "react";
import { useRouter } from "next/navigation";
const Search = ({ searchRef }) => {
  const path = useRouter();
  const handleSubmit = (e) => {
    const keyword = searchRef.current.value;
    if (!keyword) return;
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      path.push(`/pages/search/${keyword}`);
    }
  };
  return (
    <form class="mx-auto w-fit min-w-[500px] px-2">
      <div class="relative">
        <input
          type="search"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-sm text-gray-900"
          placeholder="Search"
          required
          ref={searchRef}
          onKeyDown={handleSubmit}
        />
        <button
          type="submit"
          class="absolute bottom-0 end-0 top-0 rounded-e-lg bg-[#E50914] px-4 py-2 text-sm font-medium text-white hover:bg-[#d6484f]"
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
    </form>
  );
};
export default Search;
