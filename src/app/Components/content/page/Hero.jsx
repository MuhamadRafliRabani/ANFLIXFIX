import { BookmarkSimple } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const Home_Page = () => {
  return (
    <div class="relative flex h-[233px] items-center pt-5 text-white md:h-96 md:pt-0">
      <div class="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
      <div class="absolute inset-0 z-10 bg-gradient-to-b from-black/90 to-transparent"></div>

      <img
        src="/chainsaw man.png"
        alt="Chainsaw Man"
        class="absolute inset-0 h-full w-full object-cover"
      />

      <div class="relative z-20 ms-5 max-w-2xl md:ms-16">
        <h1 class="text-3xl font-bold tracking-wide md:text-4xl">
          Chainsaw Man
        </h1>

        <div class="mt-2 hidden space-x-2 md:flex">
          <span class="rounded-md bg-white/20 px-3 py-1 text-sm">
            Comic Adaptation
          </span>
          <span class="rounded-md bg-white/20 px-3 py-1 text-sm">Action</span>
          <span class="rounded-md bg-white/20 px-3 py-1 text-sm">
            Adventure
          </span>
        </div>

        <p class="mt-1 w-[75%] text-sm text-gray-300 md:mt-4 md:w-[60%]">
          Chainsaw Man tells the journey of Denji, a half-demon human who fights
          against supernatural forces to survive.
        </p>

        <div class="mt-3 flex space-x-4 tracking-wide md:mt-5 md:tracking-normal">
          <Link
            href="/anime/detail/chainsaw man/44511"
            class="rounded-lg bg-yellow-400 px-3 py-2 text-sm font-medium text-white shadow-md transition-all hover:bg-yellow-500 md:text-[0.91rem] md:text-black/80 md:hover:text-white"
          >
            <span>Learn More</span>
          </Link>
          <button class="flex items-center justify-center gap-2 rounded-lg border border-white px-3 py-2 text-[0.91rem] font-medium transition-all">
            <span>
              <BookmarkSimple size={16} className="mix-blend-darken" />
            </span>
            <span>Favorit Saya</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home_Page;
