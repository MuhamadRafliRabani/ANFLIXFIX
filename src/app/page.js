import Footer from "./Components/content/Footer";
import List_anime from "./Components/content/page/List_anime";
import Home_Page from "./Components/content/page/Hero";
import Rekomend_anime from "./Components/content/page/Rekomend_anime";
import {
  ShootingStar,
  StarFour,
  TelevisionSimple,
} from "@phosphor-icons/react/dist/ssr";

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Home_Page />
      <div className="relative z-30 min-h-screen w-screen space-y-4 overflow-x-hidden p-3">
        <List_anime
          icon={<TelevisionSimple size={20} />}
          header="Airing Now"
          jikan="/seasons/now"
        />
        <div className="h-52 w-full bg-fuchsia-400"></div>
        <List_anime
          icon={<ShootingStar size={20} />}
          header="Special For You"
          jikan="seasons/2023/fall?limit=10"
        />
        <div className="w-full md:px-4">
          <Rekomend_anime
            header="Most Popular"
            icon={<StarFour size={20} />}
            jikan="/recommendations/anime"
          />
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Home;
