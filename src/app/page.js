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
    <div className="w-full overflow-x-hidden">
      <Home_Page />

      <div className="relative z-30 min-h-screen w-screen space-y-4 overflow-x-hidden p-2">
        {/* airing anime */}
        <ContainerContent
          header="Airing Now"
          typeContent="crousell"
          endPoint="/seasons/now"
          icon={<TelevisionSimple size={20} />}
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
          icon={<ShootingStar size={20} />}
          endPoint="/seasons/2023/fall?limit=10"
        />
        {/* rekomendation anime */}
        <ContainerContent
          typeContent="listCard"
          header="Rekomendation Anime"
          icon={<StarFour size={20} />}
          endPoint="/recommendations/anime"
        />
        <Search />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
