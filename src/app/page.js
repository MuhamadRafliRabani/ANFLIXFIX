"use server";
import Footer from "./Components/content/Footer";
import Home_Page from "./Components/content/page/Hero";
import Search from "./Components/Navigasi/search/Search";
import ContainerContent from "./Components/ui/containerContent";
import {
  BookOpen,
  ShootingStar,
  StarFour,
  TelevisionSimple,
} from "@phosphor-icons/react/dist/ssr";

const Home = () => {
  return (
    <div className="w-full">
      <Home_Page />

      <div className="w-screen space-y-4 overflow-x-hidden p-2 md:absolute md:inset-x-0 md:top-[53%] md:z-30">
        {/* airing anime */}
        <ContainerContent
          header="Airing Now"
          typeContent="crousell"
          endPoint="/seasons/now"
          icon={<TelevisionSimple weight="fill" size={20} />}
        />
        <ContainerContent
          typeContent="manga"
          endPoint="/top/manga"
          header="Manga For You"
          icon={<BookOpen weight="fill" size={20} />}
        />
        {/* special anime */}
        <ContainerContent
          typeContent="crousell"
          header="Special For You"
          icon={<ShootingStar weight="fill" size={20} />}
          endPoint="/seasons/2023/fall?limit=10"
        />
        {/* rekomendation anime */}
        <ContainerContent
          typeContent="listCard"
          header="Rekomendation Anime"
          icon={<StarFour weight="fill" size={20} />}
          endPoint="/recommendations/anime"
        />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
