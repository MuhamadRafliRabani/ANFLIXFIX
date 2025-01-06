"use client";
import { useRouter } from "next/navigation";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
const Search = () => {
  const router = useRouter();

  const handleSubmit = (e) => {
    console.log(e);

    const keyword = e.target.value;

    if (!keyword) return;
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      router.push(`/anime/catalog/${encodeURI(keyword)}`);
    }
  };

  return (
    <form class="flex h-1/5 w-full flex-1 items-center space-x-2 font-extralight">
      <div class="relative h-full w-full">
        <input
          type="search"
          class="h-full w-full rounded-md bg-white bg-opacity-10 px-10 py-2 text-white outline-none ring-[0.5px] ring-white placeholder:font-extralight placeholder:text-white"
          placeholder="Search"
          required
          onKeyDown={handleSubmit}
        />
        <button
          type="submit"
          class="absolute left-2 top-2 z-20"
          onClick={handleSubmit}
        >
          <MagnifyingGlass size={16} className="size-6" />
        </button>
      </div>
    </form>
  );
};
export default Search;
