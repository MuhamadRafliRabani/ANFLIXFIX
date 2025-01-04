"use client";
import { useEffect, useMemo, useState } from "react";
import { FetchAnime } from "@/utility/Api";
import Carousel from "./Components/ui/crousell";
import Footer from "./Components/content/Footer";
import Home_Page from "./Components/content/page/Hero";
import {
  ShootingStar,
  StarFour,
  TelevisionSimple,
} from "@phosphor-icons/react/dist/ssr";
import ContainerAnimes from "./Components/ui/containerAnimes";

const Home = () => {
  const [animes, setAnime] = useState([]);
  const [lastVisibleAnime, setLastVisibleAnime] = useState(24);

  // Featch data anime
  const { data: data_airing_anime, isLoading: isLoading_airing_anime } =
    FetchAnime("/seasons/now");

  const { data: data_special_anime, isLoading: isLoading_special_anime } =
    FetchAnime("seasons/2023/fall?limit=10");

  const {
    data: data_rekomendasi_anime,
    isLoading: isLoading_rekomendasi_anime,
  } = FetchAnime("/recommendations/anime");
  // Featch data anime

  // handle data rekomendation anime
  const sliceRekomendAnime = useMemo(() => {
    if (data_rekomendasi_anime) {
      return data_rekomendasi_anime?.data
        ?.flatMap((animes) => animes.entry)
        .slice(0, lastVisibleAnime);
    }
    return [];
  }, [data_rekomendasi_anime, lastVisibleAnime]);

  useEffect(() => {
    setAnime(sliceRekomendAnime);
  }, [sliceRekomendAnime]);
  // handle data rekomendation anime

  return (
    <div className="w-full overflow-x-hidden">
      <Home_Page />

      <div className="relative z-30 min-h-screen w-screen space-y-4 overflow-x-hidden p-2">
        {/* airing anime */}
        <Carousel
          header="Airing Now"
          data={data_airing_anime?.data}
          isLoading={isLoading_airing_anime}
          icon={<TelevisionSimple size={20} />}
        />

        <div className="h-52 w-full bg-fuchsia-400"></div>

        {/* special anime */}
        <Carousel
          header="Special For You"
          data={data_special_anime?.data}
          icon={<ShootingStar size={20} />}
          isLoading={isLoading_special_anime}
        />

        {/* rekomendation anime */}
        <ContainerAnimes
          animes={animes}
          header="Rekomendation Anime"
          icon={<StarFour size={20} />}
          isLoading={isLoading_rekomendasi_anime}
          handlePage={() => setLastVisibleAnime((prev) => prev + 17)}
          LastPage={data_rekomendasi_anime?.pagination.last_visible_page}
        />
        <Footer />
      </div>
    </div>
  );
};
export default Home;
