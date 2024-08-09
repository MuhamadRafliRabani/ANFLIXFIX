"use client";
import { useRef } from "react";
import { useRouter } from "next/navigation";
const Search = () => {
  const SearchRef = useRef();
  const path = useRouter();
  const handleSubmit = (e) => {
    const keyword = SearchRef.current.value;
    if (!keyword) return;
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      path.push(`/pages/Search/${keyword}`);
    }
  };
  return (
    <form class="md:max-w-xl w-screen px-2 mx-auto ">
      <div class="relative">
        <input type="search" class="block w-full px-4 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Search" required ref={SearchRef} onKeyDown={handleSubmit} />
        <button type="submit" class="text-white absolute end-0 top-0 bottom-0 bg-[#E50914] hover:bg-[#d6484f] font-medium rounded-e-lg text-sm px-4 py-2" onClick={handleSubmit}>
          Search
        </button>
      </div>
    </form>
  );
};
export default Search;
