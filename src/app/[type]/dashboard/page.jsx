"use client";
import HeadContent from "@/app/Components/content/anime/headContent";
import ListAnimes from "@/app/Components/ui/listAnime";
import { userSessions } from "@/libs/auth-session";
import { useContent } from "@/store/store";
import { FetchAnime } from "@/utility/Get";
import { TelevisionSimple } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { useEffect, useCallback, useState } from "react";

export default function Library() {
  const Router = useRouter();
  const { user } = userSessions();
  const [anime, setAnime] = useState({});
  const { content, setContent } = useContent();

  useEffect(() => {
    setContent("Watching");
    if (!user) Router.push("/");
  }, [user, Router]);

  const { data: dataAnime, isLoading: isLoadingAnime } = FetchAnime(
    `http://localhost:3000/api/library-anime?q=${user?.email}&type=anime`,
  );

  const { data: dataManga, isLoading: isLoadingManga } = FetchAnime(
    `http://localhost:3000/api/library-anime?q=${user?.email}&type=manga`,
  );

  const { data: dataPeople, isLoading: isLoadingPeople } = FetchAnime(
    `http://localhost:3000/api/library-anime?q=${user?.email}&type=people`,
  );

  const handleFilterData = useCallback(
    (status) => {
      const filteredDataAnime = dataAnime?.data.filter(
        (item) => item.status === status,
      );
      const filteredDataManga = dataManga?.data.filter(
        (item) => item.status === status,
      );
      const filteredDataPeople = dataPeople?.data.filter(
        (item) => item.status === status,
      );

      return { filteredDataAnime, filteredDataManga, filteredDataPeople };
    },
    [dataAnime, dataManga, dataPeople],
  );

  useEffect(() => {
    const filtredData = handleFilterData(content.toLowerCase());
    setAnime(filtredData);
  }, [content, dataAnime, dataManga, dataPeople]);

  return (
    <div className="min-h-screen min-w-full text-white">
      <main className="space-y-4">
        <div className="relative flex min-h-48 w-full items-center gap-4 px-4 pt-4 md:min-h-60 md:px-6 md:pt-0">
          <div className="size-14 rounded-full bg-slate-300 md:size-24">
            <img src={user?.image} className="rounded-full brightness-90" />
          </div>
          <div>
            <h2 className="text-lg font-bold md:text-2xl">
              {user?.name || "user"}
            </h2>
            <p className="text-sm text-gray-400">
              {user?.email || "sinsenju537@gmail.com"}
            </p>
          </div>

          <img
            src="/chainsaw man.png"
            alt="Chainsaw Man"
            class="absolute inset-0 -z-20 inline-block h-full w-full object-cover brightness-75"
          />

          <div class="absolute inset-0 -z-10 bg-gradient-to-t from-primary_color via-black/60 to-transparent"></div>
        </div>

        <HeadContent type="Library" />

        <div className="mt-4 gap-4 md:px-6">
          <div className="min-h-40">
            <ListAnimes
              animes={anime?.filteredDataAnime}
              header="anime"
              icon={<TelevisionSimple size={16} />}
              isLoading={isLoadingAnime}
            />
          </div>
          <div className="min-h-40">
            <ListAnimes
              animes={anime?.filteredDataManga}
              header="manga"
              icon={<TelevisionSimple size={16} />}
              isLoading={isLoadingManga}
            />
          </div>
          <div className="min-h-40">
            <ListAnimes
              animes={anime.filteredDataPeople}
              header="people"
              icon={<TelevisionSimple size={16} />}
              isLoading={isLoadingPeople}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
