"use server";
import BtnAddAnimeHero from "./btnAddAnimeHero";

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

        <BtnAddAnimeHero />
      </div>
    </div>
  );
};

export default Home_Page;
